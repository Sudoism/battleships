const displayController = () => {
    const gameStatus = document.getElementById("game-status");

    const cleanBoard = (boardId) => {
        const board = document.getElementById(boardId);
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
    };

    const updateShipStatus= (shipStatusId, status) => {
        const shipStatus = document.getElementById(shipStatusId);
        shipStatus.innerText = status
    }
    const updateGameStatus = (status) => {
        gameStatus.innerText = status;
    };

    const displayBoard = (playerObject,id, live) => {
        let board = playerObject.getBoard();
        let privateBoard = playerObject.getBoard();
        const boardContainer = document.getElementById(id);

        for(let y=board.length-1; y>=0; y--){
            for(let x=0; x<board.length; x++){
                let cell = document.createElement("div");

                cell.classList.add(
                    "border",
                    "border-dashed",
                    "border-gray-200",
                    "hover:bg-blue-400",
                    "hover:cursor-crosshair",
                    "h-max-full",
                    "w-max-full",
                    `x${x}`,
                    `y${y}`,
                    `${id}`
                    );
                if(board[x][y] === "hit"){
                    cell.classList.add("bg-red-400");
                    cell.classList.add("hit");
                } else if(board[x][y] === "miss"){
                    cell.classList.add("bg-blue-600");
                    cell.classList.add("miss");
                } else {
                    cell.classList.add("unknown");
                }

                boardContainer.appendChild(cell);
            }
        };
    };

    return {
        displayBoard,
        cleanBoard,
        updateGameStatus,
        updateShipStatus
    };
}

export {displayController};