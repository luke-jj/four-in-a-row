# Four In A Row
Four in a row game that uses SVG generated graphical elements.

To start simply launch `index.html` located in the `src/` folder with your
favorite browser or serve the webpage over a local development server.

    php -S localhost:8080
    python -m SimpleHTTPServer 8080
    python3 -m http.server 8080


## JavaScript Class Structure

### Game
    board, players[], ready (bool)

    startGame()
    createPlayers()
    activePlayers()

### Player
    name, id, color, active (bool), tokens[]

    createTokens()
    activeTokens()
    unusedTokens()

### Token
    owner, id, dropped (bool)

    drawHTMLToken()

### Board
    rows, columns, spaces

    createSpaces()
    drawHTMLBoard()

### Space
    x, y, id, token, diameter, radius

    drawSVGSpace()

