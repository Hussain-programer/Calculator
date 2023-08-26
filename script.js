let displayValue = "";

function appendValue(val) {
  displayValue += val;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue.slice(-1).match(/[+\-*/]/)) {
    // Replace the last operator if another operator is clicked consecutively.
    displayValue = displayValue.slice(0, -1) + operator;
  } else {
    displayValue += operator;
  }
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = String(result);
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

// Handle keyboard input
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    deleteLast();
  } else if (event.key === "c") {
    clearDisplay();
  } else if (event.key.match(/[0-9+\-*/().]/)) {
    appendValue(event.key);
  }
});
