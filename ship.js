const Ship = (length) => {
    let shipHitStatus = Array(length).fill(0);

    const hit = (index) => {
        if (index < 0 || index >= length) {
            throw new Error('Invalid index');
        }
        if (shipHitStatus[index] === 0) {
            shipHitStatus[index] = 1;
        }
    }

    const isSunk = () => { 
        return shipHitStatus.every(hit => hit === 1);
    }
    
    return {
        hit,
        isSunk
    };
};

export {Ship};