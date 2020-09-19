import React from 'react';
import Trie from '../utils/prefixtree';
// import './Autocomplete.css'

const words = ['love', 'rat', 'ratata', 'cat', 'loyal', 'aha'];
let tree = new Trie(words)

// <Autocomplete name = '' />
function Autocomplete ({name}) {
  console.log(tree.strings())
  console.log(tree.complete(name))
  return tree.complete(name)
  // return tree.complete(props.guessArtist.toLowerCase()).map((name) => {
  //     return <div className = 'artist' onClick = {() => {
  //         props.updateGuess(artistObject[name])
  //         console.log(artistObject[name])
  //     }}>{artistObject[name]}</div>
  //   })
}

export default Autocomplete;
