const displayController = () => {
    const body = document.querySelector("body");
    const board1 = document.getElementById("board1");

    const helloWorld = () => {
        body.appendChild(document.createElement("h1")).textContent = "Hello stuff";
    };

    const displayBoard = (board) => {
        const table = document.createElement("table");
        table.classList.add("board");
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);
        for (let i = 0; i < board.length; i++) {
            const tr = document.createElement("tr");
            tbody.appendChild(tr);
            for (let j = 0; j < board[i].length; j++) {
                const td = document.createElement("td");
                td.textContent = board[i][j];
                tr.appendChild(td);
            }
        }
        board1.appendChild(table);
    };

    return {
        helloWorld,
        displayBoard,
    };
}

export {displayController};