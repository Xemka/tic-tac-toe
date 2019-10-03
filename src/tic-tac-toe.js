class TicTacToe {
    constructor() {
        
        this.field = new Array(3);

        for (var i = 0; i < 3; i++) {

            this.field[i] = new Array(3);

            for (var j = 0; j < 3; j++) {
                this.field[i][j] = null; 
            }           
        }         

        this.player = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] !== null) {
            return this.player;
        }

        this.field[rowIndex][columnIndex] = this.player;
        
        if (this.player === 'x') {
            this.player = 'o';
            return 'x';
        }
            
        this.player = 'x';
        return 'o';
    }

    isFinished() {
        if ((this.isDraw() === true) || (this.getWinner() !== null)) {
            return true;
        }
        else {
            return false;
        }
    }

    getWinner() {
        for(var i = 0; i<3; i++) {
            if ((this.field[i][0] === this.field[i][1]) && (this.field[i][1] === this.field[i][2]) && (this.field[i][2] !== null)) {
                return this.field[i][0];
            }
            if ((this.field[0][i] === this.field[1][i]) && (this.field[1][i] === this.field[2][i]) && (this.field[2][i] !== null)) {
                return this.field[0][i];
            }
        }

        if ((((this.field[0][0] === this.field[1][1]) && (this.field[1][1] === this.field[2][2])) || ((this.field[2][0] === this.field[1][1]) && (this.field[1][1] === this.field[0][2]))) && (this.field[1][1] !== null)) {
            return this.field[1][1];
        }

        return null;
    }

    noMoreTurns() {
        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                if (this.field[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if ((this.noMoreTurns() === false) || (this.getWinner() !== null) ) {
            return false;
        }
        else {
            return true;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
