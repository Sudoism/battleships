import { Ship } from "./ship";

const gameBoard = () => {
    let grid = Array(10).fill(Array(10).fill(0)); //create a 10x10 grid filled with 0s
    let ships = [];

    const placeShip = (xCoordinate, yCoordinate, length, direction) => {

        // Error handling of size and direction 
        if (direction === 'horizontal') {
            if (xCoordinate + length > 10) {
                throw new Error('Ship is out of bounds');
            }
            for (let i = 0; i < length; i++) {
                if (grid[xCoordinate + i][yCoordinate] !== 0) {
                    throw new Error('Ship cannot be placed there');
                }
            }
            for (let i = 0; i < length; i++) {
                grid[xCoordinate + i][yCoordinate] = 1;
            }
        } else if (direction === 'vertical') {
            if (yCoordinate + length > 10) {
                throw new Error('Ship is out of bounds');
            }
            for (let i = 0; i < length; i++) {
                if (grid[xCoordinate][yCoordinate + i] !== 0) {
                    throw new Error('Ship cannot be placed there');
                }
            }
            for (let i = 0; i < length; i++) {
                grid[xCoordinate][yCoordinate + i] = 1;
            }
        } else {
            throw new Error('Invalid direction');
        }

        // Create a ship object and add it to the ships array
        const ship = Ship(length);
        ships.push(ship);
        let boardShipId = ships.length;
        grid[xCoordinate][yCoordinate] = boardShipId;
        if (direction === 'horizontal') {
            for (let i = 0; i < length; i++) {
                grid[xCoordinate + i][yCoordinate] = boardShipId;
            }
        } else if (direction === 'vertical') {   // if direction is vertical
            for (let i = 0; i < length; i++) {
                grid[xCoordinate][yCoordinate + i] = boardShipId;
            }
        }
        return true;
    }

    const recieveAttack = (xCoordinate, yCoordinate) => {
        if (xCoordinate < 0 || xCoordinate > 9 || yCoordinate < 0 || yCoordinate > 9) {
            throw new Error('Invalid coordinates');
        }
        if (grid[xCoordinate][yCoordinate] === 0) {
            grid[xCoordinate][yCoordinate] = 'miss';
            return false;
        } else {
            let shipId = grid[xCoordinate][yCoordinate];
            ships[shipId - 1].hit(xCoordinate, yCoordinate);
            grid[xCoordinate][yCoordinate] = 'hit';
            return true;
        }
    }

    return {
        placeShip,
        recieveAttack,
    }

};

export {gameBoard};