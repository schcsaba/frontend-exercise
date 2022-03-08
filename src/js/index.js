apiGetJobs(
    response => {
        response.jobs.forEach(job => addJob(job));
    }
);
