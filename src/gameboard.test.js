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

test ('place a large ship overlapping right border', () => {
    expect(() => {
        testBoard.placeShip(10, 5, 5, 'horizontal');
    }).toThrow();
});

test ('place a large ship overlapping top border', () => {
    expect(() => {
        testBoard.placeShip(5, 10, 5, 'vertical');
    }).toThrow();
});

test ('place a large ship outside allowed coordinates x axis', () => {
    expect(() => {
        testBoard.placeShip(-1, 1, 5, 'vertical');
    }).toThrow();
});

test ('place a large ship outside allowed coordinates y axis', () => {
    expect(() => {
        testBoard.placeShip(1, -1, 5, 'horizontal');
    }).toThrow();
});

test ('shoot and hit a ship', () => {
    expect(testBoard.recieveAttack(0, 0)).toBe(true);
});

test ('shoot and miss a ship', () => {
    expect(testBoard.recieveAttack(9, 9)).toBe(false);
});

test ('shoot with unapproved coordinates', () => {
    expect(() => {
        testBoard.recieveAttack(-1, -1);
    }).toThrow();
});

test ('check if all ships sunken when its not', () => {
    expect(testBoard.isGameOver()).toBe(false);
});
