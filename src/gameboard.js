import { Ship } from "./ship";

const gameBoard = () => {
    let grid = Array.from({length: 10}, e => Array(10).fill(0));; //create a 10x10 grid filled with 0s
    let ships = [];

    const placeShip = (xCoordinate, yCoordinate, length, direction) => {

        const ship = Ship(length);
        let boardShipId = ships.length+1;

        if (direction === 'horizontal') {
            if (xCoordinate + length > 10) {
                throw new Error('Ship is out of bounds');
            }
            for (let i = 0; i < length; i++) {
                if (grid[xCoordinate + i][yCoordinate] !== 0) {
                    throw new Error('Ship cannot be placed there');
                }
                grid[xCoordinate + i][yCoordinate] = `${boardShipId}${i}`;
            }
        } else if (direction === 'vertical') {   // if direction is vertical
            if (yCoordinate + length > 10) {
                throw new Error('Ship is out of bounds');
            }
            for (let i = 0; i < length; i++) {
                if (grid[xCoordinate][yCoordinate + i] !== 0) {
                    throw new Error('Ship cannot be placed there');
                }
                grid[xCoordinate][yCoordinate + i] = `${boardShipId}${i}`;
            }
        }
        else {
            throw new Error('Invalid direction');
        }

        ships.push(ship); //if no error, ship is placed on board and is added to ships array
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
            let shipInfo = grid[xCoordinate][yCoordinate].split('');
            let shipId = shipInfo[0];
            let shipIndex = shipInfo[1];
            ships[shipId - 1].hit(shipIndex);
            grid[xCoordinate][yCoordinate] = 'hit';
            return true;
        }
    }

    const isGameOver = () => {
        for (let i = 0; i < ships.length; i++) {
            if (!ships[i].isSunk()) {
                return false;
            }
        }
        return true;
    }

    const getGrid = () => {
        return grid;
    }
    

    return {
        placeShip,
        recieveAttack,
        isGameOver,
        getGrid
    }

};

export {gameBoard};