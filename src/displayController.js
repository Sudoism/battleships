const displayController = () => {
    const body = document.querySelector("body");
    const container = document.getElementById("container");

    const helloWorld = () => {
        body.appendChild(document.createElement("h1")).textContent = "Hello stuff";
    };

    const displayBoard = (board) => {
        const displayBoard = document.createElement("div");
        displayBoard.classList.add(
            "grid",
            `grid-cols-${board.length}`,
            "hover:cursor-crosshair",
            );
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                const boardCell = document.createElement("div");
                boardCell.classList.add(
                    "border",
                    "border-gray-200",
                    "text-center",
                    "hover:bg-sky-300",
                    );
                boardCell.textContent = board[i][j];
                displayBoard.appendChild(boardCell);
            }
        }
        container.appendChild(displayBoard);
    };

    return {
        helloWorld,
        displayBoard,
    };
}

export {displayController};