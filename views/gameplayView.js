var gameplayView = {
  repopulateBoard: function (boardState) {
    var board = document.getElementById('ticTacBoard').children[0].children;
    var row;
    var column;
    for(var i = 0; i < 3; i++) {
      row = board[i].children;
      for(var j = 0; j < 3; j++) {
        column = row[j];
        column.innerHTML = boardState[i][j];
      };
    };
  }
}
