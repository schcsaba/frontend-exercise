var API_URL="https://ecf-dwwm.cefim-formation.org",apiGetJobs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,o=new XMLHttpRequest;o.open("GET","".concat(API_URL,"/api/jobs?offset=").concat(encodeURIComponent(t),"&limit=").concat(encodeURIComponent(n)),!0),o.addEventListener("readystatechange",(function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status){var t=JSON.parse(o.responseText);e(t)}else alert("Erreur : TODO, gérer les erreurs...")})),o.send()};
//# sourceMappingURL=index.7875141d.js.map
