const weightInput = document.getElementById("pounds");
const result = document.getElementById("result");
const error = document.getElementById("error");

let errorTimeout;
let resultTimeout;

function convertWeight() {
  const weight = Number(weightInput.value);

  // Clear previous messages/timers
  clearTimeout(errorTimeout);
  clearTimeout(resultTimeout);

  error.innerText = "";
  result.innerText = "";

  // Validation
  if (weightInput.value === "") {
    return;
  }

  if (weight <= 0 || isNaN(weight)) {
    error.innerText = "Please enter a valid weight.";

    errorTimeout = setTimeout(() => {
      error.innerText = "";
      weightInput.value = "";
    }, 2000);

    return;
  }

  // Conversion
  const kg = (weight / 2.2).toFixed(2);

  result.innerText = `${kg} kg`;

  resultTimeout = setTimeout(() => {
    result.innerText = "";
    weightInput.value = "";
  }, 2000);
}

// Event listener
weightInput.addEventListener("input", convertWeight);