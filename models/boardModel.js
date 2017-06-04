var boardModel = {
  name: 'boardState',
  boardState: [],
  makeButton: function() {
    var btn = document.createElement("button");
    btn.innerHTML = 'Play Again';
    btn.addEventListener('click', function() {
    location.reload();
    });
    return btn;
  },
  setBoardState: function(newState) {
      this.boardState = newState;
    },
  getBoardState: function() {
      return this.boardState;
    },
  addMove: function(row, column, nextPlayer, cb) {
    var err;
    if(this.boardState[row][column] == null) {
      if(nextPlayer) {
        this.boardState[row][column] = 'X';
      } else {
        this.boardState[row][column] = 'O';
      };
      err = false;
    } else {
      err = true;
    };
    cb(err);
  },
  checkWinner: function() {
    var someoneWon = false;
    for (var i = 0; i < this.boardState.length; i++) {
      for (var j = 0; j < this.boardState[i].length; j++) {
        if (this.boardState[i][0] !== null && this.boardState[i][0] === this.boardState[i][1] && this.boardState [i][1] === this.boardState[i][2]) {
          document.getElementById('win').innerHTML = this.boardState[i][0] + ' is the Winner!';
          someoneWon = true;
        } else if (this.boardState[0][j]  !== null && this.boardState[0][j] === this.boardState[1][j] && this.boardState[1][j] === this.boardState[2][j]) {
          document.getElementById('win').innerHTML = this.boardState[0][j] + ' is the Winner!';
          someoneWon = true;
        } else if (this.boardState[0][0] !== null && this.boardState[0][0] === this.boardState[1][1] && this.boardState[1][1] === this.boardState[2][2]) {
          document.getElementById('win').innerHTML = this.boardState[0][0] + ' is the Winner!';
          someoneWon = true;
        } else if (this.boardState[0][2] !== null && this.boardState[0][2] === this.boardState[1][1] && this.boardState[1][1] === this.boardState[2][0]) {
          document.getElementById('win').innerHTML = this.boardState[0][2] + ' is the Winner!';
          someoneWon = true;
        }
      }
    }
    return someoneWon;
  },
  checkTie: function() {
    var noWinner;
    if(!this.checkWinner(this.boardState)) {
      noWinner = true;
        for (var i = 0; i < this.boardState.length; i++) {
          for (var j = 0; j < this.boardState[i].length; j++) {
            if (this.boardState[i][j] === null) {
              noWinner = false;
            }
          }
        }
    }
    if (noWinner) {
      document.getElementById('win').innerHTML = 'It is a Tie!';
      document.getElementById('reset').appendChild(this.makeButton());
    }
  }
}