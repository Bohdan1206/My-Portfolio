const display = document.getElementById("display");
const buttonContainer = document.querySelector(".buttons");
let currentNumber = "0";
let prevNumber = null;
let operator = null;
let waitingForSecond = false;

buttonContainer.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  const { action, value } = button.dataset;
  // const action = button.dataset.action;
  // const value = button.dataset.value;

  switch (action) {
    case "digit":
      handleDigit(value);
      break;
    case "operator":
      handleOperator(value);
      break;
    case "equals":
      handleEquals();
      break;
    case "clear":
      handleClear();
      break;
    case "back":
      handleBack();
      break;
  }

  updateDisplay();
});

function handleDigit(value) {
  if (waitingForSecond) {
    currentNumber = value;
    waitingForSecond = false;
  } else {
    currentNumber = currentNumber === "0" ? value : currentNumber + value;
  }
}

function handleClear() {
  currentNumber = "0";
  prevNumber = null;
  operator = null;
  waitingForSecond = false;
}

function handleBack() {
  currentNumber = currentNumber.slice(0, -1);
  if (currentNumber === "") currentNumber = "0";
}

function handleOperator(value) {
  if (prevNumber !== null && !waitingForSecond) {
    const result = compute(prevNumber, currentNumber, operator);
    currentNumber = String(result);
  }
  prevNumber = currentNumber;
  operator = value;
  waitingForSecond = true;
}

function handleEquals() {
  if (prevNumber === null || operator === null) return;
  const result = compute(prevNumber, currentNumber, operator);
  currentNumber = String(result);
  prevNumber = null;
  operator = null;
  waitingForSecond = false;
}

function updateDisplay() {
  display.textContent = currentNumber;
}

function compute(a, b, operator) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "/") return num1 / num2;
  if (operator === "*") return num1 * num2;
  return num2;
}
