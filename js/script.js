function activate(el) {
  let container = document.getElementById("radiobuttons");
  let radiobuttons = container.querySelectorAll("*");
  radiobuttons.forEach((button) => {
    button.className = "";
  });
  el.className = "active";
}

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector("header").classList.toggle("open");
});
