let btn = document.getElementById("burger");
let menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
