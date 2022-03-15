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
const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const cardList = document.querySelector(".card_list");

moment.updateLocale('en', {
    relativeTime : {
        future: "in %s",
        past:   "%s ago",
        s  : 'a few seconds',
        ss : '%ds',
        m:  "a minute",
        mm: "%dm",
        h:  "an hour",
        hh: "%dh",
        d:  "a day",
        dd: "%dd",
        w:  "a week",
        ww: "%dw",
        M:  "a month",
        MM: "%dmo",
        y:  "a year",
        yy: "%dy"
    }
});

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

const addJob = data => {
    const {company, contract, id, location, logo, logoBackground, position, postedAt} = data;

    // The whole job card
    const jobElement = document.createElement("article");
    jobElement.className = "card";

    // Logo frame
    const jobLogoFrame = document.createElement("div");
    jobLogoFrame.className = "card__logo";
    jobLogoFrame.style.backgroundColor = logoBackground;

    // Logo image
    const jobLogoImage = document.createElement("img");
    jobLogoImage.setAttribute("src", `${API_URL}/${logo}`);
    jobLogoImage.setAttribute("alt", `${company} logo`);
    jobLogoImage.setAttribute("aria-hidden", "true");

    // Logo screen reader text
    const jobLogoSRT = document.createElement("span");
    jobLogoSRT.className = "screen-reader-text";
    jobLogoSRT.textContent = `${company} logo`;

    // Appand logo image and logo screen reader text to logo frame
    jobLogoFrame.append(jobLogoImage, jobLogoSRT);

    // Job card content
    const jobContent = document.createElement("div");
    jobContent.className = "card__content";

    // When what frame: frame for posted at and type of contract
    const jobWhenWhat = document.createElement("div");
    jobWhenWhat.className = "card__when_what";

    // Posted at
    const jobPostedAt = document.createElement("div");
    jobPostedAt.className = "card__posted-at";
    jobPostedAt.textContent = moment(postedAt).fromNow();

    // Dot
    const jobOval = document.createElement("div");
    jobOval.className = "card__oval";

    // Contract
    const jobContract = document.createElement("div");
    jobContract.className = "card__contract";
    jobContract.textContent = contract;

    // Append posted at, dot and contract to jobwhenwhat frame
    jobWhenWhat.append(jobPostedAt, jobOval, jobContract);

    // Job title: position
    const jobTitle = document.createElement("h3");
    jobTitle.className = "card__title";

    // Job link
    const jobLink = document.createElement("a");
    jobLink.className = "card__link";
    jobLink.setAttribute("href", `details.html?id=${id}`);
    jobLink.textContent = position;

    // Append job link to job title
    jobTitle.appendChild(jobLink);

    // Company
    const jobCompany = document.createElement("div");
    jobCompany.className = "card__company";
    jobCompany.textContent = company;

    // Location
    const jobLocation = document.createElement("h4");
    jobLocation.className = "card__location";
    jobLocation.textContent = location;

    // Append whenwhat, title, company, location to content
    jobContent.append(jobWhenWhat, jobTitle, jobCompany, jobLocation);

    // Append job logo frame and job content to job card
    jobElement.append(jobLogoFrame, jobContent);

    // Append job element to card list
    cardList.appendChild(jobElement);
};