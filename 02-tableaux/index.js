// Tableaux
const list = [];

list.push(1);
list.push(2);
list.push(3);
list.push(4);

list[list.length] = 5;

// const list2 = [];

// list.forEach(function(i, el) {
//	list2[i] = el * 2;
// });

// console.log(list2) // [2, 4, 6...]

const list2 list.map(function(el) {
    return el * 2;
});

console.log(list2) // [2, 4, 6...]

const filteredList = list2.filter(function(el) {
    return el > 6;
});

console.log(filteredList) // [6, 8, 10...]


const list3 = list.map(function(el) { return el * 2 }).filter(function(el) { return el > 6 });