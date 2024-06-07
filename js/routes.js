const navBody = `
<link rel="stylesheet" href="./css/navbar.css">
<style>

</style>

<nav>
<!--<h1>🥷 ${'gameData.userName'}</h1>-->
<h1>🥷 ${'Usuario'}</h1>
<label>Nivel</label>
<select id="level" class="select">
    <option value="10000">Fácil</option>
    <option value="5000">Normal</option>
    <option value="2000">Dificil</option>
</select>
</nav>
`;

const PATHS = {
    home: {
        path: "/",
        template: `

            <div class="container">
            <h1>🎮</h1>
            <div>
                <input id="username" class="input-text" type="text" placeholder="Nombre jugador" value="JEFF" maxlength="8"/>
            </div>

            <div>
                <button class="button" onclick="goGame()">Empezar</button>
            </div>
            </div>
        `,
    },
    game: {
        path: "/game",
        template: `
            ${navBody}
            <h3 class="score">Puntuación: <span id="score-data">0</span></h3>
            
            <h2>Memorice: <span id="score-data">0</span></h2>

            
            <div class="cnt-numbers">
                <button value="" disabled="disabled" onclick="clickNumber(this)" class="number">?</button>
                <button value="" disabled="disabled" onclick="clickNumber(this)" class="number">?</button>
                <button value="" disabled="disabled" onclick="clickNumber(this)" class="number">?</button>

                <button value="" disabled="disabled" onclick="clickNumber(this)" class="number">?</button>
                <button value="" disabled="disabled" onclick="clickNumber(this)" class="number">?</button>
                <button value="" disabled="disabled" onclick="clickNumber(this)" class="number">?</button>

                <button value="" disabled="disabled" onclick="clickNumber(this)" class="number">?</button>
                <button value="" disabled="disabled" onclick="clickNumber(this)" class="number">?</button>
                <button value="" disabled="disabled" onclick="clickNumber(this)" class="number">?</button>
            </div>

            <div class="cnt-play-game">
                <button class="button" onclick="initGame()">Jugar</button>
            </div>

        `,
    },

}