const menu = document.getElementById("mainMenu");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });
    link.classList.add("active");
    bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  });
});

document.querySelectorAll('a[href="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
