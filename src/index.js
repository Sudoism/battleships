import "./styles.css";
import { displayController } from "./displayController";
import {player} from './player';

//start game
let player1 = player("player1");
let player2 = player("player2");

//populate with some ships for player 1
player1.placeShip(0, 0, 2, 'horizontal');
player1.placeShip(3, 3, 2, 'vertical');

//populate with some ships for player 2
player2.placeShip(5, 5, 2, 'horizontal');
player2.placeShip(6, 6, 2, 'vertical');

//while(true){

//}

const display = displayController();
//display.helloWorld();
display.displayBoard(player1.getPrivateBoard(), "player1");
display.displayBoard(player2.getBoard(), "player2");
//display.displayBoard(player2.getBoard());

