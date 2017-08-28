// var i = 0;

// Notion de contexte
let i = 0;

if(1 == 1) {
    console.log(i); // 0

    let a = 2;
}

console.log(a); // undefined


// Notion contantes
const NAME = 'bibi';

console.log(NAME);

// NAME = 'BOBO'; /// Error on ne peut pas redefinir la constant

const functionName = function() { /* code */ };

const list = [];

list.push(1);
list.push(2);