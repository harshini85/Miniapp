// Dark mode toggle for every page, by Sanjay D S
(function () {
  const button = document.querySelector("#themeToggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
      if (button) button.textContent = "☀️";
    } else {
      document.body.classList.remove("dark");
      if (button) button.textContent = "🌙";
    }
  }

  // Load the saved theme (if the browser allows storage)
  let savedTheme = "light";
  try {
    savedTheme = localStorage.getItem("hackfest-theme") || "light";
  } catch (error) {
    savedTheme = "light";
  }
  applyTheme(savedTheme);

  if (!button) return;

  button.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);

    try {
      localStorage.setItem("hackfest-theme", newTheme);
    } catch (error) {
      // Storage blocked: the theme still changes for this visit
    }
  });
})();
Student 05: Kandakuri Sirivani Swathi
File name: js/nav.js
// Mobile menu and active page link, by Kandakuri Sirivani Swathi
(function () {
  const menuButton = document.querySelector("#menuToggle");
  const navLinks = document.querySelector("#navLinks");

  // Open and close the menu on small screens
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
  }

  // Highlight the link of the page we are on
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") {
    currentPage = "index.html";
  }

  document.querySelectorAll("#navLinks a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
})();
