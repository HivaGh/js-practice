const cardHolder = localStorage.getItem("cardHolder") || "JANE APPLESEED";
const cardNumber = localStorage.getItem("cardNumber") || "0000 0000 0000 0000";
const expMonth = localStorage.getItem("expMonth") || "00";
const expYear = localStorage.getItem("expYear") || "00";
const cardCvc = localStorage.getItem("cardCvc") || "000";

document.getElementById("card-holder-display").innerHTML = cardHolder;
document.getElementById("card-number-display").innerHTML = cardNumber;
document.getElementById("exp-month-display").innerHTML = expMonth;
document.getElementById("exp-year-display").innerHTML = expYear;
document.getElementById("card-cvc-display").innerHTML = cardCvc;
