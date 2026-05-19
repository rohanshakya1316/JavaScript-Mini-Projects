const menu = document.querySelector(".menu");

const menuDescription = document.querySelector(".menu p");

const socialLists = document.querySelector(".social-lists");

const lists = document.querySelectorAll(".social-lists li");

menu.addEventListener("click", () => {
  socialLists.classList.toggle("hide");
  menu.classList.toggle("rotate");
});

lists.forEach((list) => {
  list.addEventListener("click", () => {
    menuDescription.innerHTML = list.innerHTML;
    socialLists.classList.add("hide");
    menu.classList.toggle("rotate");
  });
});
