const displayController = () => {
    const body = document.querySelector("body");

    const helloWorld = () => {
        body.appendChild(document.createElement("h1")).textContent = "Hello World again";
    };

    return {
        helloWorld
    };
}

export {displayController};