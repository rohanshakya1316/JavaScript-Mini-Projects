const tabs = document.querySelector(".tabs");

const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    // buttons
    btns.forEach((btn) => {
      btn.classList.remove("bg-rose-100");
      btn.classList.add("bg-blue-200");
    });

    e.target.classList.remove("bg-blue-200");
    e.target.classList.add("bg-rose-100");

    // contents
    articles.forEach((article) => {
      article.classList.add("hidden");
      article.classList.remove("block");
    });

    const element = document.getElementById(id);
    element.classList.remove("hidden");
    element.classList.add("block");
  }
});