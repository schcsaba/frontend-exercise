const themeswitcherToggle = document.querySelector(".themeswitcher__toggle");
const themeswitcherCircle = document.querySelector(".themeswitcher__circle");
const titleInput = document.querySelector(".title_input");
const labelFullTime = document.querySelector("label.full_time");
const modalLabelFullTime = document.querySelector(".modal label.full_time");
const funnelIcon = document.querySelector(".funnel_icon");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal__background");
const searchbarForm = document.querySelector(".searchbar__form");
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

themeswitcherToggle.addEventListener("focus", () => {
    themeswitcherCircle.style.backgroundColor = "#939BF4";
});

themeswitcherToggle.addEventListener("blur", () => {
    themeswitcherCircle.style.backgroundColor = "#5964e0";
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

funnelIcon.addEventListener("click", () => {
    modal.classList.add("modal__show");
    /* Déclenche la prise de focus sur le premier lien du menu après la fin de la transition */
    modal.addEventListener('transitionend', ev => {
        if (ev.target != modal) return;
        modal.querySelector('input').focus();
    });
});

modalBackground.addEventListener("click", () => {
    modal.classList.remove("modal__show");
    funnelIcon.focus();
});

document.addEventListener("keydown", ev => {
    if (ev.key === "Escape" && modal.classList.contains("modal__show")) {
        modal.classList.remove("modal__show");
        funnelIcon.focus();
    }
});

searchbarForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (modal.classList.contains("modal__show")) {
        modal.classList.remove("modal__show");
    }
});