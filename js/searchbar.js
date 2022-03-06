

if (desktopMediaQuery.matches) {
    titleInput.placeholder = "Filter by title, companies, expertise...";
    labelFullTime.textContent = "Full Time Only";
}

desktopMediaQuery.addEventListener("change", ev => {
    if (ev.matches) {
        titleInput.placeholder = "Filter by title, companies, expertise...";
        labelFullTime.textContent = "Full Time Only";
    }
});

noDesktopMediaQuery.addEventListener("change", ev => {
    if (ev.matches) {
        titleInput.placeholder = "Filter by title...";
        labelFullTime.textContent = "Full Time";
    }
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