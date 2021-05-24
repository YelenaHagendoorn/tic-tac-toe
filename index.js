const cells = document.querySelectorAll('.cell');
let active = 'O';
const model = {
    topLeft: undefined,
    top: undefined,
    topRight: undefined,
    left: undefined,
    middle: undefined,
    right: undefined,
    bottomLeft: undefined,
    bottom: undefined,
    bottomRight: undefined
};

const onCellClick = (event) => {
    const cell = event.target.getAttribute('id');
    if (model[cell]){
        return;
    }
    if (active === 'X'){
        active = 'O';
    } else {
        active = 'X';
    }
    event.target.innerHTML = active;
    
    model[cell] = active;
    setTimeout(checkWin);  
}

const checkIfSame = (a,b,c) => {
        return a && a === b && b === c;
 }

const checkIfTie = () => {
    if (Object.values(model).every(a => a)) {
        alert("It's a tie!");
    }

}

const checkWin = () => {
    if ( 
        checkIfSame(model.topLeft, model.top, model.topRight) ||
        checkIfSame(model.left, model.middle, model.right) ||
        checkIfSame(model.bottomLeft, model.bottom, model.bottomRight) ||
        checkIfSame(model.topLeft, model.Left, model.bottomLeft) ||
        checkIfSame(model.top, model.middle, model.bottom) ||
        checkIfSame(model.topRight, model.right, model.bottomRight) ||
        checkIfSame(model.topLeft, model.middle, model.bottomRight) ||
        checkIfSame(model.topRight, model.middle, model.bottomLeft)
        ){        
        alert('Game won by' + active);
    } else {
        checkIfTie();
    }
 }

cells.forEach(cell => {
    cell.addEventListener('click', onCellClick);
});
