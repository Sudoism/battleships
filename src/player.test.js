import {player} from '../src/player.js';

const player1 = player('player1');

test ('player1 has correct name set', () => {
    expect(player1.getName()).toBe('player1');
});

test ('possible to add ship to player1 gameboard', () => {
    expect(player1.placeShip(0, 0, 2, 'horizontal')).toBe(true);
});

test ('adding ship with invalid coordinates will throw error', () => {
    expect(() => {
        testBoard.placeShip(-1, 1, 5, 'vertical');
    }).toThrow();
});

test ('An attack will return true when hiting a boat', () => {   
    expect(player1.recieveAttack(0, 0)).toBe(true);
});

test ('An attack will return false when hiting a water', () => {   
    expect(player1.recieveAttack(1, 1)).toBe(false);
});

test ('should not return game over when boats are still floating', () => {   
    expect(player1.isGameOver()).toBe(false);
});

test ('An attack will return true when hiting a boat', () => {   
    expect(player1.recieveAttack(1, 0)).toBe(true);
});

test ('should return game over when boats are sunk', () => {   
    expect(player1.isGameOver()).toBe(true);
});
