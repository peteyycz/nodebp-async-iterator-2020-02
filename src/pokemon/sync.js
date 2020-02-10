'use strict';

const pokemon = ['bulbasaur', 'pikachu'];

class PokeIterator {
  constructor () {
    this.currentIndex = 0;
  }
  next() {
    if (this.currentIndex >= pokemon.length) {
      return { done: true }
    }

    return { done: false, value: pokemon[this.currentIndex++] }
  }
}

class Pokemon {
  [Symbol.iterator] () {
   return new PokeIterator()
  }
}

module.exports = {
  PokeIterator,
  Pokemon,
}
