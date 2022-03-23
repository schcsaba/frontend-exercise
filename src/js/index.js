apiGetJobs(
    response => {
        document.querySelector("#loading-list").style.display = "none";
        response.jobs.sort((a, b) => b.postedAt - a.postedAt).forEach(job => addJob(job));
        if (response.total <= document.querySelectorAll("article").length) {
            loadMoreButton.style.display = "none";
            noMoreJobsElement.style.display = "block";
        }
    }
);