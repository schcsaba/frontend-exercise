var cardList=document.querySelector(".card_list"),loadMoreButton=document.querySelector(".load-more button"),loadMore=document.querySelector(".load-more"),noMoreJobsElement=document.querySelector(".load-more p");noMoreJobsElement.style.display="none";var getJobs=function(){var e,t,o=document.querySelector("#title_input").value;modal.classList.contains("modal__show")?(e=document.querySelector("#modal_location_input").value,t=document.querySelector("#modal_full_time").checked?1:0,modal.classList.remove("modal__show")):(e=document.querySelector("#location_input").value,t=document.querySelector("#full_time").checked?1:0),apiGetJobs((function(e){e.jobs.sort((function(e,t){return t.postedAt-e.postedAt})).forEach((function(e){return addJob(e)})),e.total<=document.querySelectorAll("article").length&&(loadMoreButton.style.display="none",noMoreJobsElement.style.display="block")}),document.querySelectorAll("article").length,o,e,t)};loadMoreButton.addEventListener("click",getJobs);var addJob=function(e){var t=e.company,o=e.contract,a=e.id,c=e.location,n=e.logo,r=e.logoBackground,l=e.position,d=e.postedAt,m=document.createElement("article");m.className="card";var s=document.createElement("div");s.className="card__logo",s.style.backgroundColor=r;var u=document.createElement("img");u.setAttribute("src","".concat(API_URL,"/").concat(n)),u.setAttribute("alt","".concat(t," logo")),u.setAttribute("aria-hidden","true");var i=document.createElement("span");i.className="screen-reader-text",i.textContent="".concat(t," logo"),s.append(u,i);var _=document.createElement("div");_.className="card__content";var v=document.createElement("div");v.className="card__when_what";var p=document.createElement("div");p.className="card__posted-at",p.textContent=moment(d).fromNow();var y=document.createElement("div");y.className="card__oval";var E=document.createElement("div");E.className="card__contract",E.textContent=o,v.append(p,y,E);var b=document.createElement("h3");b.className="card__title";var h=document.createElement("a");h.className="card__link",h.setAttribute("href","details.html?id=".concat(a)),h.textContent=l,b.appendChild(h);var N=document.createElement("div");N.className="card__company",N.textContent=t;var g=document.createElement("h4");g.className="card__location",g.textContent=c,_.append(v,b,N,g),m.append(s,_),cardList.appendChild(m)};
//# sourceMappingURL=index.a4c6a7dc.js.map
