import "./styles.css";
import { displayController } from "./displayController";
import {player} from './player';

//start game
let player1 = player("player1");
let player2 = player("player2");

//populate with some ships for player 1
player1.placeShip(0, 0, 2, 'horizontal');
player1.placeShip(3, 3, 2, 'vertical');
console.log(player1.getPrivateBoard());
player1.recieveAttack(0, 0);
player1.recieveAttack(7, 7);
player2.recieveAttack(0, 1);
player2.recieveAttack(2, 7);

//populate with some ships for player 2
player2.placeShip(5, 5, 2, 'horizontal');
player2.placeShip(6, 6, 2, 'vertical');


const display = displayController();

//first paint the board
display.displayBoard(player1, "player1");
display.displayBoard(player2, "player2");

const makeBoardLive = (playerObject, boardId) => {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            console.log(`${boardId} x${x} y${y}`);
            let cell = document.getElementsByClassName(`${boardId} x${x} y${y}`);
            cell[0].addEventListener("click", () => {
                playerObject.recieveAttack(x,y);
                display.cleanBoard(boardId);
                display.displayBoard(playerObject, boardId);
                nextTurn(boardId);
            });
        }
    }
};

const nextTurn = (nextTurn) => {
    if (nextTurn === "player1") {
        makeBoardLive(player2, "player2");
    } else {
        makeBoardLive(player1, "player1");
    }
};

makeBoardLive(player2, "player2");


