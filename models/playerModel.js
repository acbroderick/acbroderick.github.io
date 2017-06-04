var playerModel = {
  name: 'playerState',
  playerState: null,

  setPlayerState: function(whoGoesFirst) {
    this.playerState = whoGoesFirst;
  },
  togglePlayer: function() {
    this.playerState = !this.playerState;
      if(this.playerState) {
        document.getElementById('who').innerHTML = "X's Turn: ";
      } else {
        document.getElementById('who').innerHTML = "O's Turn: ";
      }
  },
  getNextPlayer: function() {
    return this.playerState;
  }
};