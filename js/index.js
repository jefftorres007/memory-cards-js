const ROUTER = new Router(PATHS);
const gameData = new GameData();

const goGame = () => {
    let userElm = document.getElementById('username');

    if(!userElm.value){
        alert(`El nombre de usuario "${userElm.value}" no es válido, inténtelo nuevamente.`);
        return;
    }

    gameData.userName = userElm.value;
    gameData.gameOver = false;
    gameData.score = 0;

    
    ROUTER.load('game');
    const userText = document.getElementById('username-text');
    userText.innerHTML = gameData.userName;
}

const prepareTimer = () => {
    let i = 0;
    let valueInterval = 1000;
    const cntTimer = document.getElementById('cnt-timer');
    cntTimer.classList.remove('hidden');
    const timer = document.getElementById('timer-data');
    timer.innerHTML = parseInt(level.value) / valueInterval;

    const intervalTimer = setInterval(() => {
        i++;
        const level = document.getElementById('level');

        let restTime = (parseInt(level.value) - (i * valueInterval)) / valueInterval;
        if (restTime >= 0){
            timer.innerHTML = restTime;
        }else{
            clearInterval(intervalTimer);
        }
    }, valueInterval);
}

const initGame = () => {
    
    // validaciones
    if (gameData.gameOver){
        alert(`Gracias por jugar ${gameData.userName}, has obtenido una puntuación de ${gameData.score} puntos.`);
        ROUTER.load('home');
        return;
    }


    prepareTimer();
    prepareBoard();

    

    

}

const prepareBoard = ()=>{
    gameData.inGame = true;
    let numbers = Array.from({ length: 9 }, (_, i) => i + 1).sort(() => Math.random() -0.5);

    
    const cntNumbers = document.querySelectorAll('.cnt-numbers .number');

    
    cntNumbers.forEach((cntNumber,i) => {
        cntNumber.innerHTML = numbers[i];
        cntNumber.value = numbers[i];
    });

    const elmTitle = document.getElementById('title-1');
    elmTitle.innerHTML = 'Memorice las cartas';
    
    cntNumbers.forEach((cntNumber,i) => {
        cntNumber.innerHTML = numbers[i];
        cntNumber.value = numbers[i];
        cntNumber.classList.remove('no');
        cntNumber.classList.remove('yes');
    });


    const level = document.getElementById('level');
    setTimeout(() => {

        

        const elmTitle = document.getElementById('title-1');
        gameData.numberToFind = Math.floor(Math.random() * 9) + 1;
        elmTitle.innerHTML = `Seleccione el número ${gameData.numberToFind}`;
        
        //
        cntNumbers.forEach((cntNumber,i) => {
            cntNumber.innerHTML = '?';
            setEnableNumbers(false);

        });

    }, level.value);
}

const newScore =  ()=>{    
    const level = document.getElementById('level');
    return gameData.score + ((level.value === '10000') ? 10 : (level.value === '5000') ? 20 : 30)
}
const clickNumber =  (elm) =>{
    let numSelected = parseInt(elm.value);
    if(numSelected === gameData.numberToFind){
        elm.classList.add('yes');
        elm.innerHTML = elm.value;

        const scoreData = document.getElementById('score-data');
        gameData.score = newScore();
        scoreData.innerHTML = gameData.score;
    }else{
        gameData.gameOver = true;
        gameData.inGame = false;
        elm.classList.add('no');
        
    }
    setEnableNumbers(true);
    elm.innerHTML = elm.value;
}




const setEnableNumbers =  (enable) =>{
    const cntNumbers = document.querySelectorAll('.cnt-numbers .number');

    cntNumbers.forEach((cntNumber,i) => {
        cntNumber.disabled = enable;
    });
}
