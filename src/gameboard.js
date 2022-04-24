const gameBoard = (horisontalSize,verticalSize) => {
    const board = [];
    for (let i = 0; i < verticalSize; i++) {
        board[i] = [];
        for (let j = 0; j < horisontalSize; j++) {
        board[i][j] = 0;
        }
    }
    return board;

};

export {gameBoard};