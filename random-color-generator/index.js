const container = document.querySelector(".container");

for (let i = 0; i < 50; i++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  container.appendChild(colorContainer);
}

const colorContainers = document.querySelectorAll(".color-container");

const randomColor = () => {
  const chars = "0123456789abcdef";
  const codeLengthOfColor = 6;

  let colorCode = "";

  for (let i = 0; i < codeLengthOfColor; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
};

const colorGenerator = () => {
  colorContainers.forEach((colorContainerElement) => {
    const newColor = randomColor();
    colorContainerElement.style.backgroundColor = "#" + newColor;
    colorContainerElement.innerText = "#" + newColor;
  });
};

colorGenerator();
