// OOP

var purchase1 = {
      shoes : 100 ,
      stateTax: 1.2 ,
      totalPrice: function () {
            var calculation = this.shoes * this.stateTax;
            console.log(calculation);
      }      
}

purchase1.totalPrice();

// inheritance

var bird = {
      hasWings : true , 
      canFly : true , 
      hasFeathers: true,
      canSee: true
}

var eagle1 = Object.create(bird);
console.log ("eagle can fly: " + eagle1.canFly);
eagle1.canSee = false;
console.log("eagle can see: " + eagle1.canSee);

var sparrow = Object.create(bird);
console.log("sparrow can see: " + sparrow.canSee);

//Data structures (Arrays)
// forEach

const fruits =['Kiwi' , 'Mango' , 'Apple' , 'Pear'];
function appendIndex(fruit , index){
      console.log( `${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

// Filter method

const nums = [0,10,20,30,40,50];
console.log(nums.filter( function(num) {
    return num > 20;
}))

// Map method

console.log(nums.map( function(num) {
      return num / 10
})
)

// Set

const repititiveFruits = ['Apple' , 'Pear' , 'Apple' , 'Mango' , 'Mango'];
const uniqueFruits = new Set(repititiveFruits);
console.log(uniqueFruits);

// Spread operator

function showFruits(...myFruits){
      console.log(myFruits);
}
showFruits(repititiveFruits);

// Rest operator

const Berries = ['Strawberry' , 'Blueberry']
const fruitsAndBerries = [...fruits , ...Berries];
console.log(fruitsAndBerries);

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);