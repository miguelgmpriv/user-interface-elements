const dropDownButtons = document.querySelectorAll("[data-item-link]");
const menuDiv = document.querySelector(".menu-div");

dropDownButtons.forEach((dropDown) =>
  dropDown.addEventListener("mouseover", (e) => {
    const dropdown = e.target.nextElementSibling;
    dropdown.classList.toggle("active");
  })
);
