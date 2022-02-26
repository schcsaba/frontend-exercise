const themeswitcherToggle = document.querySelector(".themeswitcher__toggle");
const themeswitcherCircle = document.querySelector(".themeswitcher__circle");

let lightTheme = true;
themeswitcherToggle.addEventListener("click", () => {
    if (lightTheme === true) {
        themeswitcherToggle.classList.add("dark");
        lightTheme = false;
    } else {
        themeswitcherToggle.classList.remove("dark");
        lightTheme = true;
    }
});

themeswitcherToggle.addEventListener("mouseenter", () => {
     themeswitcherCircle.style.backgroundColor = "#939BF4";
});

themeswitcherToggle.addEventListener("mouseleave", () => {
    themeswitcherCircle.style.backgroundColor = "#5964E0";
});