class Person {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = new Date(birthDate);
    }

    getAge() {
        let today = new Date();
        let birthYear = this.birthDate.getFullYear();
        let thisYear = today.getFullYear();
        return thisYear - birthYear;
    }

    greet() {
        return "سلام من " + this.name + " هستم و " + this.getAge() + " سالمه";
    }
}

let p1 = new Person("علی", "2000-05-15");
console.log(p1.greet());
