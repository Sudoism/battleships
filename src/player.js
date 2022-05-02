import { gameBoard } from "./gameboard";

const player = (name) => {
    const playerBoard = gameBoard();

    const getName = () => name;

    const placeShip = (xCoordinate, yCoordinate, length, direction) => {
        return playerBoard.placeShip(xCoordinate, yCoordinate, length, direction);
    };

    const recieveAttack = (xCoordinate, yCoordinate) => {
        return playerBoard.recieveAttack(xCoordinate, yCoordinate);
    };
    
    const isGameOver = () => {
        return playerBoard.isGameOver();
    };

    const getBoard = () => {
        return playerBoard.getBoard();
    };

    const getPrivateBoard = () => {
        return playerBoard.getPrivateBoard();
    };

    const performAttack = (grid) => {
        let validAttackCoordinates = [];
        // find valid attackspots
        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 0) {
                    validAttackCoordinates.push([i, j]);
                }
            }
        };
        // pick random valid attackspot
        let randomAttackCoordinate = validAttackCoordinates[Math.floor(Math.random() * validAttackCoordinates.length)];

        // perform attack
        return randomAttackCoordinate;
    };

    return {
        getName,
        placeShip,
        recieveAttack,
        isGameOver,
        getBoard,
        getPrivateBoard,
        performAttack,
    };
}

export {player};