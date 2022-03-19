const cardList = document.querySelector(".card_list");
const loadMoreButton = document.querySelector(".load-more button");
const loadMore = document.querySelector(".load-more");
const noMoreJobsElement = document.querySelector(".load-more p");

noMoreJobsElement.style.display = "none";

const getJobs = () => {
    const text = document.querySelector("#title_input").value;
    let location;
    let fulltime;
    if (modal.classList.contains("modal__show")) {
        location = document.querySelector("#modal_location_input").value;
        fulltime = document.querySelector("#modal_full_time").checked ? 1 : 0;
        modal.classList.remove("modal__show");
    } else {
        location = document.querySelector("#location_input").value;
        fulltime = document.querySelector("#full_time").checked ? 1 : 0;
    }
    apiGetJobs(
        response => {
            response.jobs.sort((a, b) => b.postedAt - a.postedAt).forEach(job => addJob(job));
            if (response.total <= document.querySelectorAll("article").length) {
                loadMoreButton.style.display = "none";
                noMoreJobsElement.style.display = "block";
            }
        },
        document.querySelectorAll("article").length,
        text,
        location,
        fulltime
    );
};

loadMoreButton.addEventListener("click", getJobs);

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

    // Append logo image and logo screen reader text to logo frame
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