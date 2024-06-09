class GameData {
    /**
     * Constructor.
     *
     * @return {void}.
     */
    constructor() {
        this.userName = '';
        this.inGame = false;
        this.gameOver = false;
        this.score = 0;
        this.levels = [
            {level: 1, points: 10, duration: 10000, hits: 1},
            {level: 2, points: 20, duration: 5000, hits: 1},
            {level: 3, points: 30, duration: 2000, hits: 1},
        ]
    }

    /**
     * Metodo 1
     *
     * @return {void}.
     */
    addScore(points) {
        this.score += points;
    }

}