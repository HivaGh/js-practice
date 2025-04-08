let openIndex = "0";
let lastAddedItem = null;

const updateItems = () => {
  const items = document.querySelectorAll(".item");
  items.forEach(function (item) {
    let answer = item.querySelector(".answer");
    if (item.getAttribute("data-index") === openIndex) {
      if (!answer.classList.contains("show-answer")) {
        answer.classList.add("show-answer");
      }
    } else if (answer.classList.contains("show-answer")) {
      answer.classList.remove("show-answer");
    }
  });
};
updateItems();
const items = document.querySelectorAll(".item");
items.forEach(function (item) {
  let btn = item.querySelector(".btn");
  btn.addEventListener("click", function () {
    if (openIndex === item.getAttribute("data-index")) openIndex = null;
    else openIndex = item.getAttribute("data-index");
    updateItems();
  });
});

const faqContainer = document.querySelector(".faq-container");
const addQuestion = document.querySelector(".add-q");
const addAnswer = document.querySelector(".add-a");

addQuestion.addEventListener("click", function () {
  const inputValue = document.getElementById("inputId").value.trim();
  if (!inputValue) return;

  const newItem = document.createElement("div");
  newItem.classList.add("item");

  let newIndex = faqContainer.querySelectorAll(".item").length + 1;
  newItem.setAttribute("data-index", newIndex);

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  const newBtn = document.createElement("button");
  newBtn.classList.add("btn");

  const qp = document.createElement("p");
  qp.textContent = inputValue;

  const span = document.createElement("span");
  span.classList.add("add-icon");
  span.innerHTML = `<i class="material-symbols-outlined"> add_circle </i>`;

  newItem.appendChild(questionDiv);
  questionDiv.appendChild(newBtn);

  newBtn.appendChild(qp);
  newBtn.appendChild(span);

  const answerDiv = document.createElement("div");
  answerDiv.classList.add("answer");

  const ap = document.createElement("p");

  answerDiv.appendChild(ap);
  newItem.appendChild(answerDiv);

  faqContainer.appendChild(newItem);

  document.getElementById("inputId").value = "";
  
  newBtn.addEventListener("click", function () {
    if (openIndex === newItem.getAttribute("data-index")) openIndex = null;
    else openIndex = newItem.getAttribute("data-index");
    updateItems();
  });

  lastAddedItem = newItem;
});

addAnswer.addEventListener("click", function () {
  const inputValue = document.getElementById("inputId").value.trim();
  if (!inputValue || !lastAddedItem) return;
  const answerDiv = lastAddedItem.querySelector(".answer");
  const ap = document.createElement("p");
  ap.textContent = inputValue;
  answerDiv.appendChild(ap);

  document.getElementById("inputId").value = "";
});
