import {Ship} from './ship';

const testShipSmall = Ship(2)

test ('add a hit to the ship', () => {
    testShipSmall.hit(0);
});

test ('hit same spot again', () => {
    testShipSmall.hit(0);
});

test ('shoud not be sunken', () => {
    expect(testShipSmall.isSunk()).toBe(false);
});

test ('hit another spot', () => {
    testShipSmall.hit(1);
});

test('should be sunken', () => {
    expect(testShipSmall.isSunk()).toBe(true);
});

test ('hit outside length', () => {     // should throw error
    expect(() => {
        testShipSmall.hit(2);
    }).toThrow();
});