const themeswitcherToggle = document.querySelector(".themeswitcher__toggle");
const themeswitcherCircle = document.querySelector(".themeswitcher__circle");
const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

themeswitcherToggle.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-color-mode");
    if (theme === "light") {
        document.documentElement.setAttribute("data-color-mode", "dark");
        localStorage.setItem("color-mode", "dark");
        themeswitcherToggle.classList.add("dark");
    } else {
        document.documentElement.setAttribute("data-color-mode", "light");
        localStorage.setItem("color-mode", "light");
        themeswitcherToggle.classList.remove("dark");
    }
});

darkThemeMediaQuery.addEventListener("change", ev => {
    if (ev.matches) {
        document.documentElement.setAttribute("data-color-mode", "dark");
        themeswitcherToggle.classList.add("dark");
    } else {
        document.documentElement.setAttribute("data-color-mode", "light");
        themeswitcherToggle.classList.remove("dark");
    }
});

themeswitcherToggle.addEventListener("mouseenter", () => {
     themeswitcherCircle.style.backgroundColor = "#939BF4";
});

themeswitcherToggle.addEventListener("mouseleave", () => {
    themeswitcherCircle.style.backgroundColor = "#5964E0";
});

themeswitcherToggle.addEventListener("focus", () => {
    themeswitcherCircle.style.backgroundColor = "#939BF4";
});

themeswitcherToggle.addEventListener("blur", () => {
    themeswitcherCircle.style.backgroundColor = "#5964e0";
});