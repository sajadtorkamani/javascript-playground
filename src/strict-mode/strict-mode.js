'use strict'

// This throws
// foo = 'bar'

function hello() {
  console.log(this) // will return undefined
}

hello()

console.log('Running in strict mode')
