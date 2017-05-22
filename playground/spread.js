function add (a, b) {
  return a + b;
}

console.log(add(3,4));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Bob', 'Sue', 'Doo'];
var groupB = ['Zinc', 'Yu', 'Xerxes'];

var final = [3, ...groupA];
console.log(final);

final = [...groupB, 'Fuck', ...groupA];

var person = ['Bob', 25];
var personTwo = ['Jen', 99];

function greeting (name, age) {
  return name + ", you are " + age;
}

console.log(greeting(...person));
console.log(greeting(...personTwo));

var names = ['RoRo', 'Bobo'];
var final = ['Rusty'];

function sayHey (name) {
  console.log('Hey, '+ name);
}

finalFinal = [...final, ...names];

finalFinal.forEach(function(n) {
  sayHey(n);
});
