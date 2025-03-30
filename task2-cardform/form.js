function handleSubmit(event){
    event.preventDefault();

    const cardHolder = document.getElementById("holder-name");
    const cardNumber = document.getElementById("card-number");
    const expMonth = document.getElementById("exp-month");
    const expYear = document.getElementById("exp-year");
    const cardCvc = document.getElementById("cvc");

    let isValid = true;

    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        input.classList.add("error-border");
        if (errorSpan) {
          errorSpan.innerText = message;
          errorSpan.style.display = "block";
        }
      }

      function clearError(input) {
        const errorSpan = input.nextElementSibling;
        input.classList.remove("error-border");
        if (errorSpan) {
          errorSpan.style.display = "none";
        }
      }

      if (cardHolder.value.trim() === "") {
        showError(cardHolder, "Can't be blank");
        isValid = false;
      } else {
        clearError(cardHolder);
      }

      const cardNumberRegex = /^\d{16}$/;
      if (!cardNumberRegex.test(cardNumber.value.replace(/\s/g, ""))) {
        showError(cardNumber, "Wrong format");
        isValid = false;
      } else {
        clearError(cardNumber);
      }

      if (expMonth.value.trim() === "" || isNaN(expMonth.value) || expMonth.value < 1 || expMonth.value > 12) {
        showError(expMonth, "Invalid month");
        isValid = false;
      } else {
        clearError(expMonth);
      }

      if (expYear.value.trim() === "" || isNaN(expYear.value) || expYear.value.length !== 2) {
        showError(expYear, "Invalid year");
        isValid = false;
      }

      else {
        clearError(expYear);
      }

      if (!/^\d{3}$/.test(cardCvc.value)) {
        showError(cardCvc, "Can't be blank");
        isValid = false;
      } else {
        clearError(cardCvc);
      }

      if (isValid) {
        localStorage.setItem("cardHolder", cardHolder.value);
        localStorage.setItem("cardNumber", formatCardNumber(cardNumber.value));
        localStorage.setItem("expMonth", expMonth.value);
        localStorage.setItem("expYear", expYear.value);
        localStorage.setItem("cardCvc", cardCvc.value);

        document.getElementById("card-holder-display").innerHTML = cardHolder.value;
        document.getElementById("card-number-display").innerHTML = formatCardNumber(cardNumber.value);
        document.getElementById("exp-month-display").innerHTML = expMonth.value;
        document.getElementById("exp-year-display").innerHTML = expYear.value;
        document.getElementById("card-cvc-display").innerHTML = cardCvc.value;

        window.location.href = "complete.html";
      }
    
      function formatCardNumber(number){
        return number.replace(/(\d{4})(?=\d)/g, '$1 ');
    }
}