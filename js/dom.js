const themeswitcherToggle = document.querySelector(".themeswitcher__toggle");
const themeswitcherCircle = document.querySelector(".themeswitcher__circle");
const titleInput = document.querySelector(".title_input");
const labelFullTime = document.querySelector("label.full_time");
const desktopMediaQuery = window.matchMedia("(min-width: 90em)");
const noDesktopMediaQuery = window.matchMedia("(max-width: 89em)");

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

if (desktopMediaQuery.matches) {
    titleInput.placeholder = "Filter by title, companies, expertise...";
    labelFullTime.textContent = "Full Time Only";
}

desktopMediaQuery.addEventListener("change", () => {
    titleInput.placeholder = "Filter by title, companies, expertise...";
    labelFullTime.textContent = "Full Time Only";
});

noDesktopMediaQuery.addEventListener("change", () => {
    titleInput.placeholder = "Filter by title...";
    labelFullTime.textContent = "Full Time";
});