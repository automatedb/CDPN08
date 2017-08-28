// Fonctions
const add = function(a, b) {
    return a + b;
}

const add = (a, b) => {
    return a + b;
};

const add = (a, b) => a + b;

const mul = function(a) {
    return a * 2;
}

const mul = a => a * 2;


const list = [];

// Ajout de données au tableau

const list2 = list.map(el => el * 2).filter(el => el > 6);