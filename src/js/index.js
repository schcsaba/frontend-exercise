apiGetJobs(
    response => {
        response.jobs.sort((a, b) => b.postedAt - a.postedAt).forEach(job => addJob(job));
        if (response.total <= document.querySelectorAll("article").length) {
            loadMoreButton.remove();
            const noMoreJobsElement = document.createElement("p");
            noMoreJobsElement.textContent = "There are no more job offers.";
            loadMore.appendChild(noMoreJobsElement);
        }
    }
);
