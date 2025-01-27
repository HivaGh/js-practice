//DOM

let answer = prompt("enter your name: ");
if (typeof answer === "string") {
  var h1 = document.createElement("h1");
  h1.innerText = "Welcome";
  document.body.appendChild(h1);
  document.getElementById("paragraph").innerHTML = "Hello " + answer;
}

var h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change";

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "type here");

document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener("change", function () {
  h1.innerText = input.value;
});


//testing

function add(a, b) {
      return a + b;
  }

  expect(add(10, 5)).toBe(16);