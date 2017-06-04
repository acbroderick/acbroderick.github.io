var controller = {
  view: {},
  models: {},
  endGame: false,
  setView: function(newView) {
      this.view = newView;
    },
  addModel: function(newModel) {
      this.models[newModel.name] = newModel;
    },
  play: function(box) {
      var row = box.parentElement.getAttribute('row');
      var column = box.getAttribute('column');
      var nextPlayer = this.models.playerState.getNextPlayer();
      if(this.endGame) {
        return;
      } else {
        this.models.boardState.addMove(row, column, nextPlayer, (err) => {
          if(err) {
            alert('Only one player per square!');
          } else {
            var newBoard = this.models.boardState.getBoardState();
            this.view.repopulateBoard(newBoard);
            this.models.playerState.togglePlayer();
            this.models.boardState.checkWinner();
              if (this.models.boardState.checkWinner() && this.endGame === false) {
                document.getElementById('reset').appendChild(this.models.boardState.makeButton());
                this.endGame = true;
              }
            this.models.boardState.checkTie();
              if (this.models.boardState.checkTie()) {
                document.getElementById('reset').appendChild(this.models.boardState.makeButton());
                this.endGame = true;
              }
          }
        });
      }
  }
};