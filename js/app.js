const beginButton = document.getElementById('begin-game');

const game = new Game();

/*
 * listen for click on the start game button to start the game
 */

beginButton.addEventListener('click', e => {
  e.target.parentElement.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';

  const playerOneName = document.getElementById('playerone').value;
  const playerTwoName = document.getElementById('playertwo').value;
  game.startGame(playerOneName, playerTwoName);
});

/*
 * listen for keyboard input; redirect keyboard input events to the
 * .handleKeydown() method
 */

document.addEventListener('keydown', e => {
  game.handleKeydown(e);
});

