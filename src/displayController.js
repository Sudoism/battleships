const displayController = () => {
    const body = document.querySelector("body");
    const container = document.getElementById("container");

    const helloWorld = () => {
        body.appendChild(document.createElement("h1")).textContent = "Hello stuff";
    };

    const displayBoard = (board,id) => {
        const boardContainer = document.getElementById(id);
        let numberOfCells = board.length*board.length;

        for(let i=0; i<numberOfCells; i++){
            let cell = document.createElement("div");
            cell.classList.add(
                "border",
                "border-dashed",
                "border-gray-200",
                "hover:bg-blue-400",
                "hover:cursor-crosshair"
                );
            boardContainer.appendChild(cell);
        };
    };

    return {
        helloWorld,
        displayBoard,
    };
}

export {displayController};