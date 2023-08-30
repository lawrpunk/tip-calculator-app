const billInput = document.getElementById("bill");
const errorBill = document.querySelector(".error-bill");
const personInput = document.getElementById("person");
const errorPerson = document.querySelector(".error-person");
const customInput = document.getElementById("custom");
const tipAmountHeading = document.getElementById("tip-amount");
const personAmountHeading = document.getElementById("person-amount");

// Variable to keep track if the values of the input are valid
let status = false;

// Function to split the bill
function splitBill(tip) {
  // Get all the tip buttons
  const buttons = document.querySelectorAll(".tip-button");

  // Add click event listeners to each tip button
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove the "active" style class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Toggle the "active" style class on the clicked button
      this.classList.toggle("active");
    });
  });

  // Get the bill and person input values
  const billValue = billInput.value;
  const personValue = personInput.value;

  // Check if the input is empty
  emptyValue(billValue, errorBill, billInput);
  emptyValue(personValue, errorPerson, personInput);

  // If both inputs are valid (not empty), calculate and display the tip and total amounts
  if (status) {
    const tipAmount = (billValue * (tip / 100)) / personValue;
    const roundedTipAmount = Math.floor(tipAmount * 100) / 100;

    const personAmount = billValue / personValue;
    const roundedPersonAmount = (Math.floor(personAmount * 100) / 100).toFixed(
      2
    );

    tipAmountHeading.textContent = `${roundedTipAmount.toFixed(2)}`;
    personAmountHeading.textContent = `${(
      parseFloat(roundedPersonAmount) + roundedTipAmount
    ).toFixed(2)}`;
  }
}

// Event listener for the custom tip input
customInput.addEventListener("input", (e) => {
  const inputValue = Number(e.target.value);
  s;
  if (inputValue > 100) {
    return;
  }

  splitBill(inputValue);
});

// Function to handle empty input values and display errors
function emptyValue(value, error, input) {
  if (value === "") {
    error.textContent = "Can't be empty";
    input.classList.add("input-error");
    status = false;
  } else {
    error.textContent = "";
    input.classList.remove("input-error");
    status = true;
  }
}

// Function to reset the page
function reset() {
  location.reload();
}
