
changeText= () => {
let text = document.getElementById("Demo").innerHTML;

if(text.includes("sample")){
      document.getElementById("Demo").innerHTML = text.replace ("sample" , "my text");
}
else
      document.getElementById("Demo").innerHTML = text.replace ("my text" , "sample");
}

//constructor

function Person(first, last, age, nationality){
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.from = nationality;
}

const mother = new Person ("Anna", "Aniston", 28, "German");
const father = new Person ("Mike", "Rally", 30, "English");

let text2 = mother.firstName.concat(father.lastName);
console.log(text2);

//set , get

const myObject = {fruit: "strawberry",
      color: "red",
      size: "small",
      get nameColor(){
            return this.color + " " + this.fruit;
      }
}

window.alert(myObject.nameColor);