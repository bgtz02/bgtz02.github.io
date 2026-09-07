/*
  site.js
  -------
  Small site-wide JavaScript file.

  It currently handles:
  1. The mobile navigation menu.
  2. The current year in the footer.

  Keeping this file small means the portfolio stays fast and easy to maintain.
*/

document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------
  // Mobile navigation
  // -----------------------------
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after selecting a navigation item.
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // -----------------------------
  // Automatic copyright year
  // -----------------------------
  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
