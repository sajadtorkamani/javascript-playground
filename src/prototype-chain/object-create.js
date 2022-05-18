const Human = {
  greet: function() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

const bob = Object.create(Human)
bob.name = 'Bob'
bob.greet()