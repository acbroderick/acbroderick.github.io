function initialize() {
  boardModel.setBoardState([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  var firstPlayer = true;
  playerModel.setPlayerState(firstPlayer);
  controller.addModel(boardModel);
  controller.addModel(playerModel);
  controller.setView(gameplayView);
  initializeView.buildBoard();
};