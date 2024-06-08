const ROUTER = new Router(PATHS);
const gameData = new GameData();



const goGame = () => {
    const userElm = document.getElementById('username');

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
    // playBackgroundSound(true);

    

    

}

const prepareBoard = ()=>{
    gameData.inGame = true;
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1).sort(() => Math.random() -0.5);

    
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


    // setDisabledNumbers(true);
    setDisabledControlsGame(true);
    setTimeout(() => {

        

        
        const elmTitle = document.getElementById('title-1');
        gameData.numberToFind = Math.floor(Math.random() * 9) + 1;
        elmTitle.innerHTML = `Seleccione el número ${gameData.numberToFind}`;
        
        
        cntNumbers.forEach((cntNumber) => {
            cntNumber.innerHTML = '?';
        });
        setDisabledNumbers(false);

    }, level.value);
}

const newScore =  ()=>{    
    const level = document.getElementById('level');
    return gameData.score + ((level.value === '10000') ? 10 : (level.value === '5000') ? 20 : 30)
}
const clickNumber =  (elm) =>{
    // playBackgroundSound(false);
    let numSelected = parseInt(elm.value);
    if(numSelected === gameData.numberToFind){
        const level = document.getElementById('level');
        level.disabled = false;
        elm.classList.add('yes');
        elm.innerHTML = elm.value;

        const scoreData = document.getElementById('score-data');
        gameData.score = newScore();
        scoreData.innerHTML = gameData.score;
    }else{
        window.navigator.vibrate([2000]);
        gameData.gameOver = true;
        gameData.inGame = false;
        elm.classList.add('no');
        
    }
    setDisabledNumbers(true);
    setDisabledControlsGame(false);
    elm.innerHTML = elm.value;
}



const playBackgroundSound =  (play) =>{
    const audioElement = new Audio('./sounds/intro.mp3');
    
    // Configurar el audio para que se reproduzca en bucle
    audioElement.loop = true;

    // Ajustar el volumen si es necesario
    audioElement.volume = 0.5; // Rango de 0.0 a 1.0

    if (play){

        audioElement.play().catch(error => {
            console.error('Error al reproducir el audio:', error);
        });
    }else{
        audioElement.pause();
        audioElement.currentTime = 0; 
    }
}
playBackgroundSound(true);


const setDisabledControlsGame =  (disabled) =>{
    const level = document.getElementById('level');
    level.disabled = disabled;
    const btnInitGame = document.getElementById('btn-init-game');
    btnInitGame.disabled = disabled;
}

const setDisabledNumbers =  (disabled) =>{
    const cntNumbers = document.querySelectorAll('.cnt-numbers .number');

    cntNumbers.forEach((cntNumber,i) => {
        cntNumber.disabled = disabled;
    });


}
