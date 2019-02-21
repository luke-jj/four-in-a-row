# Four In A Row
Four in a row game that uses SVG generated graphical elements. For educational
purposes.

## TODO:
    - [x] implement unused tokens array


## Class Structure

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

