const titleInput = document.querySelector(".title_input");
const labelFullTime = document.querySelector("label.full_time");
const funnelIcon = document.querySelector(".funnel_icon");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal__background");
const searchbarForm = document.querySelector(".searchbar__form");
const desktopMediaQuery = window.matchMedia("(min-width: 90em)");
const noDesktopMediaQuery = window.matchMedia("(max-width: 89em)");

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

searchbarForm.addEventListener("submit", ev => {
    ev.preventDefault();
    document.querySelectorAll("article").forEach(article => article.remove());
    loadMoreButton.style.display = "inline-block";
    noMoreJobsElement.style.display = "none";
    getJobs();
});