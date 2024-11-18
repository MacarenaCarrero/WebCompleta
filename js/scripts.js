const hamburgerElement = document.getElementById("hamburger");
const menuElement = document.getElementById("menu");

const toggleMenu = () => {
  menuElement.classList.toggle("menu-show");
  document.body.classList.toggle("showing-menu");

  if (menuElement.classList.contains("menu-show")) {
    hamburgerElement.src = "./assets/icons/close.svg";
  } else {
    hamburgerElement.src = "./assets/icons/hamburger.svg";
  }
};

hamburgerElement.addEventListener("click", toggleMenu);
