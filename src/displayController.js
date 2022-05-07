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

    const displayStaticBoard = (playerObject, boardId) => {
        displayBoard(playerObject, boardId, false);
    };

    const displayLiveBoard = (playerObject, boardId) => {
        displayBoard(playerObject, boardId, true);

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
                    `x${x}`,
                    `y${y}`,
                    `${id}`
                    );
                if(board[x][y] === "hit"){
                    cell.classList.add("bg-red-400");
                } else if(board[x][y] === "miss"){
                    cell.classList.add("bg-blue-600");
                } else {
                   // if(live){
                   //     cell.addEventListener("click", () => {
                  //          playerObject.recieveAttack(x,y);
                   //         cleanBoard(id);
                 //           displayLiveBoard(playerObject,id);
                  //      });
                  //  }
                }
                cell.textContent= `${x}${y} `+board[x][y];
                boardContainer.appendChild(cell);
            }
        };
    };

    return {
        helloWorld,
        displayLiveBoard,
        displayStaticBoard,
        displayBoard,
        cleanBoard,
    };
}

export {displayController};