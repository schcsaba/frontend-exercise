const displayJobDetails = data => {
    const {apply, company, contract, description, location, logo, logoBackground, position, postedAt, requirements, role, website} = data;

    document.querySelector(".card__logo").style.backgroundColor = logoBackground;
    document.querySelector(".card__logo img").src = `${API_URL}/${logo}`;
    document.querySelector(".card__logo img").alt = `${company} logo`;
    document.querySelector(".card__logo .screen-reader-text").textContent = `${company} logo`;
    document.querySelector(".card__title_company .card__title").textContent = company;
    const urlObj = (new URL(website));
    document.querySelector(".card__title_company .card__company").textContent = urlObj.hostname;
    document.querySelector(".card__link").href = website;
    document.querySelector(".card__posted-at").textContent = moment(postedAt).fromNow();
    document.querySelector(".card__contract").textContent = contract;
    document.querySelector(".details__content .card__header .card__title").textContent = position;
    document.querySelector(".card__location").textContent = location;
    document.querySelector("#description").textContent = description;
    document.querySelector("#requirements-content").textContent = requirements["content"];
    let requirementsItemsHTML = "";
    requirements["items"].forEach(item => {
        requirementsItemsHTML += `<li>${item}</li>`;
    });
    document.querySelector("#requirements-items").innerHTML = requirementsItemsHTML;
    document.querySelector("#role-content").textContent = role["content"];
    let roleItemsHTML = "";
    role["items"].forEach(item => {
        roleItemsHTML += `<li>${item}</li>`;
    });
    document.querySelector("#role-items").innerHTML = roleItemsHTML;
    document.querySelector(".apply_zone__position").textContent = position;
    document.querySelector(".apply_zone__company").textContent = company;
    document.querySelectorAll(".apply_button").forEach(apply_button => apply_button.href = apply);
};