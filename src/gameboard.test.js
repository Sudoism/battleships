import {gameBoard} from '../src/gameboard.js';

const testBoard = gameBoard();

test ('place a small ship on the board', () => {
    expect(testBoard.placeShip(0, 0, 2, 'horizontal')).toPass();
});