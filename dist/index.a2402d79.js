var API_URL="https://ecf-dwwm.cefim-formation.org",apiGetJobs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,a=new XMLHttpRequest;a.open("GET","".concat(API_URL,"/api/jobs"),!0),a.addEventListener("readystatechange",(function(){if(a.readyState===XMLHttpRequest.DONE)if(200===a.status){var n=JSON.parse(a.responseText);n.total-t<12?(r=n.total-t,t=0):t=n.total-12-t;var s=new XMLHttpRequest;s.open("GET","".concat(API_URL,"/api/jobs?offset=").concat(encodeURIComponent(t),"&limit=").concat(encodeURIComponent(r)),!0),s.addEventListener("readystatechange",(function(){if(s.readyState===XMLHttpRequest.DONE)if(200===s.status){var t=JSON.parse(s.responseText);e(t)}else alert("Erreur : TODO, gérer les erreurs...")})),s.send()}else alert("Erreur : TODO, gérer les erreurs...")})),a.send()};
//# sourceMappingURL=index.a2402d79.js.map