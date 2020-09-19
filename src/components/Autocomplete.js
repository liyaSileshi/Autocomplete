import React from 'react';
import Trie from '../utils/prefixtree';
/*
Autocomplete component that takes in an input and data to populate the prefix tree
for autocomplete feature.
*/

// <Autocomplete input = '' data=[]/>
function Autocomplete ({input, data}) {
  let tree = new Trie(data)
  console.log(tree.strings())
  console.log(tree.complete(input))
  const corpus = tree.complete(input) //save the autocomplete items inside corpus
  
  //map each item inside corpus into option for datalist
  const options = corpus.map((item) => {
    return <option value={item} />
  })

  return (
    <div>
      <input 
        list="browsers" 
        name="browser" 
        id="browser" 
      />
        <datalist id="browsers">
          {options}
        </datalist>
    </div>
  )
}

export default Autocomplete;
