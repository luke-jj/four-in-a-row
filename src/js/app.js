const beginButton = document.getElementById('begin-game');

const game = new Game();

/*
 * listen for click on the start game button to start the game
 */

beginButton.addEventListener('click', e => {
  e.target.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
  game.startGame();
});

/*
 * listen for keyboard input; redirect keyboard input events to the
 * .handleKeydown() method
 */

document.addEventListener('keydown', e => {
  game.handleKeydown(e);
});

