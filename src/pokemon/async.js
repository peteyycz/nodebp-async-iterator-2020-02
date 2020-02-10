'use strict';

const axios = require('axios')

class PokeIterator {
  constructor (limit = 5) {
    this.currentIndex = 1;
    this.limit = limit;
  }
  async next() {
    if (this.currentIndex >= this.limit) {
      return { done: true }
    }

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.currentIndex++}`)

    return {
      value: data,
      done: false,
    }
  }
}

class Pokemon {
  [Symbol.asyncIterator] () {
    return new PokeIterator()
  }
}

module.exports = {
  PokeIterator,
  Pokemon,
}
