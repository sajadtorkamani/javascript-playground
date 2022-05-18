function Animal() {}

function Mammal() {}
Mammal.prototype = Object.create(Animal.prototype)

function Lion() {}
Lion.prototype = Object.create(Mammal.prototype)

function Bird() {}
Bird.prototype = Object.create(Animal.prototype)

let simba = new Lion()

console.group('simba');
console.log('instanceof Animal', simba instanceof Animal) // true
console.log('instanceof Mammal', simba instanceof Mammal) // true
console.log('instanceof Lion', simba instanceof Lion) // true
console.groupEnd();

let zazu = new Bird()
console.group('zazu');
console.log('instanceof Animal', zazu instanceof Animal) // true
console.log('instanceof Bird', zazu instanceof Bird) // true
console.log('instanceof Mammal', zazu instanceof Mammal) // false
console.groupEnd();