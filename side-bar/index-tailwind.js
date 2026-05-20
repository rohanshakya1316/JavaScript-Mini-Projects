const bars = document.querySelector("#bars");

const sidebar = document.querySelector("#sidebar");

const closingBtn = document.querySelector("#closeBtn");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

closingBtn.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});