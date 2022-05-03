const displayController = () => {
    const body = document.querySelector("body");
    const container = document.getElementById("container");

    const helloWorld = () => {
        body.appendChild(document.createElement("h1")).textContent = "Hello stuff";
    };

    const cleanBoard = (boardId) => {
        const board = document.getElementById(boardId);
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
    };

    const freezeBoard = (boardId) => {
    };

    const displayBoard = (playerObject,id) => {
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
                    "hover:cursor-crosshair"
                    );
                if(board[y][x] === "hit"){
                    cell.classList.add("bg-red-400");
                } else if(board[y][x] === "miss"){
                    cell.classList.add("bg-blue-600");
                };

                cell.textContent= `${x}${y} `+board[x][y];
                if(board[y][x] !== "hit" && board[y][x] !== "miss"){
                    cell.addEventListener("click", () => {
                        playerObject.recieveAttack(x,y);
                        cleanBoard(id);
                        displayBoard(playerObject,id);
                    });
                }

 

                boardContainer.appendChild(cell);
            }
        };
    };

    return {
        helloWorld,
        displayBoard,
        cleanBoard,
    };
}

export {displayController};