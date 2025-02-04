// DOM Events

function upperCase(){
      let x = document.getElementById("input1");
      x.value = x.value.toUpperCase();
}
function changeBack(obj){
      obj.style.background = "yellow";
}


function colorChange(){
       document.querySelector("div").style.color = "blue";
}
function textChange(){
      document.querySelector("div").childNodes[0].nodeValue = "Click here";
}
function changeAgain(){
      document.querySelector("div").firstChild.nodeValue = "Mouse over me";
      document.querySelector("div").style.color = "black";
}


function myMessage(){
      alert("This message was triggered from the onload event");
}

window.addEventListener("resize" , function(){
      document.getElementById("demo").innerHTML = Math.random();
})

// DOM Nodes

const para = document.createElement("p");
const paraVal = document.createTextNode("New text node");
para.appendChild(paraVal);
const element = document.getElementById("bodyId");
const child = document.getElementById("div1");
element.insertBefore(para, child);

const myCollection = document.getElementsByTagName("p");
myCollection[2].innerHTML = myCollection[2].innerHTML + " plus new words";
for (let i = 0; i < myCollection.length; i++) {
      myCollection[i].style.color = "#0525";
    }

// BOM

document.getElementById("p3").innerHTML =
    "Browser inner window width: " + window.innerWidth + "px<br>" +
    "Browser inner window height: " + window.innerHeight + "px";

function closeTab(){
      window.open("https://www.google.com");
}

document.getElementById("p4").innerHTML = "Page protocol is " + window.location.protocol;

console.log(navigator.cookieEnabled);
console.log(navigator.appName);
console.log(navigator.product);
console.log(navigator.onLine);

function myConfirm(){
      var txt;
      if (confirm("Press a button!")){
            txt = "You pressed ok"
      }
      else {
            txt = "You pressed cancel"
      }
      document.getElementById("p5").innerHTML = txt;
}