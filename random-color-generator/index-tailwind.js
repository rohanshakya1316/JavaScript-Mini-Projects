const container = document.querySelector(".container");

for (let i = 0; i < 50; i++) {
  const colorContainer = document.createElement("div");

  colorContainer.className =
    "w-[300px] h-[150px] m-[5px] flex justify-center items-center text-[25px] text-white border-2 border-black rounded-[10px] [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]";

  container.appendChild(colorContainer);
}

const colorContainers = document.querySelectorAll(".container > div");

const randomColor = () => {
  const chars = "0123456789abcdef";
  let colorCode = "";

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars[randomNumber];
  }

  return colorCode;
};

const colorGenerator = () => {
  colorContainers.forEach((colorContainer) => {
    const newColor = randomColor();

    colorContainer.style.backgroundColor = `#${newColor}`;
    colorContainer.textContent = `#${newColor}`;
  });
};

colorGenerator();