import { Ship } from "./ship";

const gameBoard = () => {
    let privateBoard = Array.from({length: 10}, e => Array(10).fill(0));; //create a 10x10 grid filled with 0s
    let ships = [];
    let publicBoard = Array.from({length: 10}, e => Array(10).fill(0));;

    const placeShip = (xCoordinate, yCoordinate, length, direction) => {

        const ship = Ship(length);
        let boardShipId = ships.length+1;

        if (direction === 'horizontal') {
            if (xCoordinate + length > 10) {
                throw new Error('Ship is out of bounds');
            }
            for (let i = 0; i < length; i++) {
                if (privateBoard[xCoordinate + i][yCoordinate] !== 0) {
                    throw new Error('Ship cannot be placed there');
                }
                privateBoard[xCoordinate + i][yCoordinate] = `${boardShipId}${i}`;
            }
        } else if (direction === 'vertical') {   // if direction is vertical
            if (yCoordinate + length > 10) {
                throw new Error('Ship is out of bounds');
            }
            for (let i = 0; i < length; i++) {
                if (privateBoard[xCoordinate][yCoordinate + i] !== 0) {
                    throw new Error('Ship cannot be placed there');
                }
                privateBoard[xCoordinate][yCoordinate + i] = `${boardShipId}${i}`;
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
        if (privateBoard[xCoordinate][yCoordinate] === 0) {
            privateBoard[xCoordinate][yCoordinate] = 'miss';
            publicBoard[xCoordinate][yCoordinate] = 'miss';
            return false;
        } else {
            let shipInfo = privateBoard[xCoordinate][yCoordinate].split('');
            let shipId = shipInfo[0];
            let shipIndex = shipInfo[1];
            ships[shipId - 1].hit(shipIndex);
            privateBoard[xCoordinate][yCoordinate] = 'hit';
            publicBoard[xCoordinate][yCoordinate] = 'hit';
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
    };

    const getBoard = () => {
        return publicBoard;
    };

    const getPrivateBoard = () => {
        return privateBoard;
    };

    const getFloatingShips = () => {
        let floatingShips = 0;
        for (let i = 0; i < ships.length; i++) {
            if (!ships[i].isSunk()) {
                floatingShips +=1;
            }
        }
        return floatingShips;
    };

    return {
        placeShip,
        recieveAttack,
        isGameOver,
        getBoard,
        getPrivateBoard,
        getFloatingShips
    };

};

export {gameBoard};