'use strict';

const { Pokemon: SyncPokemon } = require('./src/pokemon/sync')
const { Pokemon: AsyncPokemon } = require('./src/pokemon/async')

async function main () {
  // First time
  console.log('// POKEMON for the first time')
  const syncPokemon = new SyncPokemon();
  for (const poke of syncPokemon) {
    console.log({ poke })
  }

  console.log('// NEXT reset iteration')
  const syncPokemon2 = new SyncPokemon();
  for (const poke of syncPokemon2) {
    console.log({ poke })
  }

  console.log('// FROM pokeapi.co')
  const asyncPokemon = new AsyncPokemon();
  for await (const poke of asyncPokemon) {
    console.log({ poke: poke.name })
  }
}

main().catch(ex => { console.error(ex); process.exit(1); })
