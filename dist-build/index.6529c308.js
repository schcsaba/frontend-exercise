apiGetJobs((function(t){document.querySelector("#loading-list").style.display="none",t.jobs.sort((function(t,o){return o.postedAt-t.postedAt})).forEach((function(t){return addJob(t)})),t.total<=document.querySelectorAll("article").length&&(loadMoreButton.style.display="none",noMoreJobsElement.style.display="block")}));
//# sourceMappingURL=index.6529c308.js.map
