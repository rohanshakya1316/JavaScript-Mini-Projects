const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const convertTemperature = (event) => {
  const curVal = +event.target.value; // additional + to change the returned string from html element input.

  switch (event.target.name) {
    case "celsius":
      kelvin.value = (curVal + 273.15).toFixed(2);
      fahrenheit.value = (curVal * 1.8 + 32).toFixed(2);
      break;

    case "fahrenheit":
      kelvin.value = ((curVal - 32) / 1.8 + 273.15).toFixed(2);
      celsius.value = ((curVal - 32) / 1.8).toFixed(2);
      break;

    case "kelvin":
      celsius.value = (curVal - 273.15).toFixed(2);
      fahrenheit.value = ((curVal - 273.15) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
};
