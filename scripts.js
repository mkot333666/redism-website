
"use strict";

// REDISM WEBSITE

// MOBILE NAVIGATION

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

    const menuIsOpen = navigation.classList.contains("open");

    menuButton.textContent = menuIsOpen ? "✕" : "☰";

    menuButton.setAttribute(
        "aria-expanded",
        String(menuIsOpen)
    );

});


// CLOSE NAVIGATION AFTER SELECTING A LINK

const navigationLinks = document.querySelectorAll(
    "#navigation a"
);

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

        menuButton.textContent = "☰";

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// WEBSITE CONSOLE INFORMATION

console.log("Welcome to REDISM.");

console.log("Realms ov Eternal Darkness.");

console.log("Founder: M-KOT");

console.log("Founded: 13 July 2026");

console.log("Affirmation: Magick through Darkness.");
