// This doesn't throw
foo = 'bar'

function hello() {
  console.log(this) // will return global Window object
}

hello()

console.log('Running in sloppy mode')
