class Player {

  constructor(name, id, color, active=false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  /*
   * create all token objects for this player
   * @param   {integer}   tokenAmount - Number of token objects to be created
   * @return  {array}     tokens - array of tokens
   */
  createTokens(tokenAmount) {
    const tokens = new Array();
    for (let i = 0; i < tokenAmount; i++) {
      tokens.push(new Token(i, this));
    }
    return tokens;
  }

  /*
   * Get all tokens that have not been used yet
   * return {array}   array of unused tokens
   */
  get unusedTokens() {
    return this.tokens.filter(token => !token.dropped);
  }

  /*
   * get the active token by returning the first unused token in the
   * unusedTokens array
   */
  get activeToken() {
    return this.unusedTokens[0];
  }

  /*
   * Check if a player has any undropped tokens left
   * @return {Boolean}
   */
  checkTokens() {
    return this.unusedTokens.length == 0 ? false : true;
  }
}
