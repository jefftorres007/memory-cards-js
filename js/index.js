const ROUTER = new Router(PATHS);
const gameData = new GameData();

const goGame = () => {
    let userElm = document.getElementById("username");

    if(!userElm.value){
        alert(`El nombre de usuario "${userElm.value}" no es válido, inténtelo nuevamente.`);
        return;
    }

    gameData.userName = userElm.value;

    ROUTER.load('game');
}

const initGame = () => {
    // validaciones


    let numbers = Array.from({ length: 9 }, (_, i) => i + 1).sort(() => Math.random() -0.5);

    // Seleccionar todos los divs dentro de cnt-numbers
    const cntNumbers = document.querySelectorAll('.cnt-numbers .number');

    
    cntNumbers.forEach((cntNumber,i) => {
        cntNumber.innerHTML = numbers[i];
        cntNumber.value = numbers[i];
    });

    const level = document.getElementById("level")
    setTimeout(() => {
        
        //
        cntNumbers.forEach((cntNumber,i) => {
            cntNumber.innerHTML = '?';
            cntNumber.disabled = false;

        });

    }, level.value);

}


const clickNumber =  (elm) =>{
    let val = parseInt(elm.value);
}

const setEnableNumbers =  (enable) =>{
    const cntNumbers = document.querySelectorAll('.cnt-numbers .number');

    cntNumbers.forEach((cntNumber,i) => {
        cntNumber.disabled = enable;
    });
}