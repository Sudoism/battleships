import "./styles.css";
import { displayController } from "./displayController";
import {player} from './player';

//start game
let player1 = player("player1");
let player2 = player("player2");
const display = displayController();

//populate with some ships for player 1
//player1.placeShip(0, 0, 2, 'horizontal');
//player1.placeShip(3, 3, 2, 'vertical');

//populate with some ships for player 2
//player2.placeShip(5, 5, 2, 'horizontal');
//player2.placeShipsAuto(2);
//player2.placeShipsAuto(2);





const placeShipOnBoard = (playerObject, boardId, length, direction, last) => {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            let cell = document.getElementsByClassName(`${boardId} x${x} y${y}`);
            cell[0].classList.add("hover:bg-yellow-400");
            if(cell[0].classList.contains("unknown")){   
                cell[0].addEventListener("click", () => {
                    playerObject.placeShip(x,y,length,direction);
                    display.cleanBoard(boardId);
                    display.displayBoard(playerObject, boardId);
                    if (last) {
                        nextTurn(boardId);
                    } else {
                        placeShipOnBoard(playerObject, boardId, length, direction);
                    }
                    console.log(player1.getPrivateBoard());
                });
            }
        }
    } 
}

const makeBoardLive = (playerObject, boardId) => {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            let cell = document.getElementsByClassName(`${boardId} x${x} y${y}`);
            if(cell[0].classList.contains("unknown")){   
                cell[0].addEventListener("click", () => {
                    playerObject.recieveAttack(x,y);
                    display.cleanBoard(boardId);
                    display.displayBoard(playerObject, boardId);
                    nextTurn(boardId);
                });
            }
        }
    }
};

const nextTurn = (nextPlayerTurn) => {
    display.updateShipStatus("ship-status-1", `Ships Left: ${player1.getFloatingShips()}`);
    display.updateShipStatus("ship-status-2", `Ships Left: ${player2.getFloatingShips()}`);

    if (player1.isGameOver()) {
        display.updateGameStatus("Player 2 won");
        return
    } else if (player2.isGameOver()) {
        display.updateGameStatus("Player 1 won");
        return
    } 

    if (nextPlayerTurn === "player1") {
        display.updateGameStatus("Player1s turn...");
        makeBoardLive(player2, "player2");
    } else {
        display.updateGameStatus("Player2s turn...");
        let coordinates = player2.performAttack( player1.getBoard() );
        player1.recieveAttack(coordinates[0], coordinates[1]);
        display.cleanBoard("player1");
        display.displayBoard(player1, "player1");
        nextTurn("player1");
    }
};

const initializeGame = (numberOfShips) => {
    display.displayBoard(player1, "player1", true);
    display.displayBoard(player2, "player2", false);
    for(let i=0; i<numberOfShips; i++){
        player2.placeShipsAuto(1+i);
    }
}

        
display.displayBoard(player1, "player1", true);
display.displayBoard(player2, "player2", false);
display.updateGameStatus(`Place ship of length 1...`);
placeShipOnBoard(player1, "player1", 1, "horizontal",false);
console.log(player1.getPrivateBoard());

//first paint the board
//display.displayBoard(player1, "player1", true);
//console.log(player1.getPrivateBoard())
//display.displayBoard(player2, "player2", false);
//placeShipOnBoard(player1, "player1", 2, "horizontal");

//makeBoardLive(player2, "player2");

//need to get promises and async code in event listener. otherwise to messy.. 

