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

//while(true){

//}

const display = displayController();
//display.helloWorld();
//display.displayBoard(player1.getPrivateBoard(), "player1");
display.displayStaticBoard(player1, "player1");
display.displayLiveBoard(player2, "player2");
//display.displayBoard(player2.getBoard(), "player2");
//display.cleanBoard("player2");
//display.displayBoard(player2.getBoard(), "player2");
//display.displayBoard(player2.getBoard());

