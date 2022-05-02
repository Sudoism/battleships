const displayController = () => {
    const body = document.querySelector("body");
    const container = document.getElementById("container");

    const helloWorld = () => {
        body.appendChild(document.createElement("h1")).textContent = "Hello stuff";
    };

    const displayBoard = (board,id) => {
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
                cell.textContent= `${x}${y}`;
                cell.addEventListener("click", (e) => {
                    console.log(`${x}${y}`);
                    e.target.classList.add("bg-red-400");
                });
                boardContainer.appendChild(cell);
            }
        };
    };

    return {
        helloWorld,
        displayBoard,
    };
}

export {displayController};