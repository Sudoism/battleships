import {gameBoard} from '../src/gameboard.js';

const testBoard = gameBoard();

test ('place a small ship horizontal on the board', () => {
    expect(testBoard.placeShip(0, 0, 2, 'horizontal')).toBe(true);
});

test ('place a small ship vertical on the board', () => {
    expect(testBoard.placeShip(1, 1, 2, 'vertical')).toBe(true);
});

test ('place a small ship vertical where already placed a ship on the board', () => {
    expect(() => {
        testBoard.placeShip(1, 1, 2, 'vertical');
    }).toThrow();
});

test ('place a small ship horizontal board', () => {
    expect(() => {
        testBoard.placeShip(11, 11, 2, 'horizontal');
    }).toThrow();
});

test ('place a small ship with invalid direction', () => {
    expect(() => {
        testBoard.placeShip(0, 0, 2, 'invalid');
    }).toThrow();
});

test ('place a large ship horizontal', () => {
    expect(testBoard.placeShip(5, 5, 5, 'horizontal')).toBe(true);
});
