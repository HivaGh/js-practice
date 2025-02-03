// callback
// 1:

function myCalculation(num1, num2, myCallback){
      let sum = num1 + num2;
      myCallback(sum);
}

function myDisplayer(resault){
      document.getElementById("text1").innerHTML = resault;
}

myCalculation( 4, 10, myDisplayer);

// 2:

const myNumbers = [4, 1, -20, -7, 5, 9, -6];
function myFunc(number, callback){
      if(callback(number)){
            myNumbers.push(number);
      }
      return myNumbers;
}

function myCondition(x){
      return x >= 0;
}

console.log(myFunc(1, myCondition));

// 3:

function greet(){
      document.getElementById("text2").innerHTML = "Welcome here ;)";
}
setTimeout(greet , 3000);

// 4:

let i = 0;
function secondCounter(){
      document.getElementById("text3").innerHTML = i;
      i++;
      if(i === 60){
            i = 0;
      }
}

setInterval(secondCounter , 1000);

// promise
// 1:

let myPromise = new Promise ((resolve , reject) => {
      let a= 2;
      if(a == 0){
         resolve("ok");   
      }
      else {
            reject("error");              
      }
})

myPromise.then(
      function(resolve){console.log(resolve);},
      function(reject){console.log(reject);}
);

// 2:

let myPromise2 = new Promise ((resolve , reject) => {
      setTimeout(function() {resolve("Hello");}, 2000);
});
myPromise2.then(
      function(resolve){console.log(resolve);}
);

// 3:

async function myFunction() {
      return "Hi";
}

myFunction().then(
      function(value){
            document.getElementById("text4").innerHTML = value;
            document.getElementById("text4").style.color = "blue";
      }
);

// Dom , Validation

function validCheck() {
      let b = document.getElementById("numb").value;
      b = Number(b); 
  
      if (isNaN(b) || b < 1 || b > 10) { 
          document.getElementById("text5").innerHTML = "not valid";
      } else {
          document.getElementById("text5").innerHTML = "valid";
      }
  }
  document.querySelector("button").addEventListener("click", validCheck);

