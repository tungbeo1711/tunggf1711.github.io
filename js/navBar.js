const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("#mergedNav .navbar-nav .nav-link");
navLinks.forEach((links) => {
  if (links.href.includes(`${activePage}`)) {
    links.classList.add("active");
  }
});
