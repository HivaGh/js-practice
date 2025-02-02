// call method

const person = {
      fullName: function(){
            return this.firstName + " " + this.lastName;
      }
}

const person1 = {
      firstName : "John" ,
      lastName : "Smith"
}
const person2 = {
      firstName : "Anna" , 
      lastName : "Smith"
}

let x = person.fullName.call(person2);
console.log(x);

const y = person.fullName.apply(person1) + [" from" , " Norway"]

console.log(y);

console.log(Math.max.apply(null, [1, 2, 3]));