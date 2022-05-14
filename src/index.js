import "./styles.css";
import { displayController } from "./displayController";
import {player} from './player';


const placeShipOnBoard = (playerObject, boardId, length, direction, ships) => {
    const button = document.getElementById("direction-button");
    if(playerObject.getPlacedShips() === ships){
        button.remove()
        nextTurn(boardId)
    }
    else{
        display.updateShipStatus("ship-status-1", `Ships to place: ${ships - player1.getPlacedShips()}`);
        display.updateShipStatus("ship-status-2", `Ships: ${player2.getFloatingShips()}`);
        display.updateGameStatus(`Place ship of length ${length} ${direction}...`);
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                let cell = document.getElementsByClassName(`${boardId} x${x} y${y}`);
                cell[0].classList.add("hover:bg-yellow-400");
                if(cell[0].classList.contains("unknown")){   
                    cell[0].addEventListener("click", () => {
                        try {
                            console.log(direction)
                            playerObject.placeShip(x,y,length,direction);
                            display.cleanBoard(boardId);
                            display.displayBoard(playerObject, boardId, true);
                            placeShipOnBoard(playerObject, boardId, length+1, direction, ships);
                        }
                        catch(error){
                            display.updateShipStatus("ship-status-1", `${error.message}`);
                        }
                    });
                }
            }
        }
        
        button.addEventListener("click", () => {
            if(direction === 'horizontal'){
                display.cleanBoard(boardId);
                display.displayBoard(playerObject, boardId, true);
                placeShipOnBoard(playerObject, boardId, length, 'vertical', ships);
                
            }
            else{
                display.cleanBoard(boardId);
                display.displayBoard(playerObject, boardId, true);
                placeShipOnBoard(playerObject, boardId, length, 'horizontal', ships);
            }
        });

    }
}

const makeBoardLive = (playerObject, boardId) => {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            let cell = document.getElementsByClassName(`${boardId} x${x} y${y}`);
            if(cell[0].classList.contains("unknown")){   
                cell[0].addEventListener("click", () => {
                    console.log(playerObject.getName())
                    console.log(boardId)
                    playerObject.recieveAttack(x,y);
                    display.cleanBoard(boardId);
                    display.displayBoard(playerObject, boardId);
                    nextTurn(boardId);
                });
            }
        }
    }
};

const nextTurn = async (nextPlayerTurn) => {
    display.updateShipStatus("ship-status-1", `Ships: ${player1.getFloatingShips()}`);
    display.updateShipStatus("ship-status-2", `Ships: ${player2.getFloatingShips()}`);

    if (player1.isGameOver()) {
        display.updateGameStatus(`${player2.getName()} won`);
        display.cleanBoard("player1");
        display.displayBoard(player1, "player1", true);
        return
    } else if (player2.isGameOver()) {
        display.updateGameStatus(`${player1.getName()} won`);
        display.cleanBoard("player2");
        display.displayBoard(player2, "player2", false);
        return
    } 

    if (nextPlayerTurn === "player1") {
        display.updateGameStatus(`${player1.getName()} turn...`);
        makeBoardLive(player2, "player2");
    } else {
        display.updateGameStatus(`${player2.getName()} turn...`);
        await new Promise(resolve => setTimeout(resolve, 500));
        let coordinates = player2.performAttack( player1.getBoard() );
        player1.recieveAttack(coordinates[0], coordinates[1]);
        display.cleanBoard("player1");
        display.displayBoard(player1, "player1", true);
        nextTurn("player1");
    }
};

const initializeGame = (numberOfShips) => {
    display.displayLabels(player1, player2);
    display.displayBoard(player1, "player1", true);
    display.displayBoard(player2, "player2", false);
    for(let i=0; i<numberOfShips; i++){
        player2.placeShipsAuto(2+i);
    }
    placeShipOnBoard(player1, "player1", 2, 'horizontal', numberOfShips);
}


//start game
let player1 = player("Player");
let player2 = player("Computer");
const display = displayController();

const NUMBER_OF_SHIPS = 3;

initializeGame(NUMBER_OF_SHIPS);


