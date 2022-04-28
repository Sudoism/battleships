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

    return {
        getName,
        placeShip,
        recieveAttack,
        isGameOver,
        getBoard,
    };
}

export {player};