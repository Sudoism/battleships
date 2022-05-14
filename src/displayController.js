const displayController = () => {
    const gameStatus = document.getElementById("game-status");

    const cleanBoard = (boardId) => {
        const board = document.getElementById(boardId);
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
    };

    const displayLabels = (playerObject1, playerObject2) => {
        const playerLabel1 = document.getElementById("player-label-1");
        const playerLabel2 = document.getElementById("player-label-2");
        playerLabel1.innerHTML = `${playerObject1.getName()}`;
        playerLabel2.innerHTML = `${playerObject2.getName()}`;
    };

    const updateShipStatus= (shipStatusId, status) => {
        const shipStatus = document.getElementById(shipStatusId);
        shipStatus.innerText = status
    }
    const updateGameStatus = (status) => {
        gameStatus.innerText = status;
    };

    const displayBoard = (playerObject,id,showPrivate) => {
        let board = [];
        if(showPrivate){
            board = playerObject.getPrivateBoard();
        } else {
            board = playerObject.getBoard();
        }
        
        const boardContainer = document.getElementById(id);

        for(let y=board.length-1; y>=0; y--){
            for(let x=0; x<board.length; x++){
                let cell = document.createElement("div");

                cell.classList.add(
                    "border",
                    "border-dashed",
                    "border-gray-200",
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
                } else if(board[x][y] === 0){
                    cell.classList.add("bg-blue-400");
                    cell.classList.add("hover:bg-blue-500");
                    cell.classList.add("unknown");
                } else {
                    cell.classList.add("bg-yellow-400")
                    
                }

                boardContainer.appendChild(cell);
            }
        };
    };

    return {
        displayBoard,
        cleanBoard,
        updateGameStatus,
        updateShipStatus,
        displayLabels
    };
}

export {displayController};