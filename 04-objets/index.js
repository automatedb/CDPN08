// Objets
class Person {
    constructor(age) {
        this.age = age;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

class Bibi extend Person {
    constructor(age) {
        super(age);

        // Ajouter mon code à la suite...
    }
}

// const bibi = new Person(1);
// bibi.setname('bibi');

// console.log(bibi.getName());