var API_URL="https://ecf-dwwm.cefim-formation.org",apiGetJobs=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:12,s=new XMLHttpRequest;o||a||1===c||0===c?(s.open("GET","".concat(API_URL,"/api/jobs/search?text=").concat(encodeURIComponent(o),"&location=").concat(encodeURIComponent(a),"&fulltime=").concat(encodeURIComponent(c)),!0),t="".concat(API_URL,"/api/jobs/search?text=").concat(encodeURIComponent(o),"&location=").concat(encodeURIComponent(a),"&fulltime=").concat(encodeURIComponent(c),"&offset=").concat(encodeURIComponent(n))):(s.open("GET","".concat(API_URL,"/api/jobs"),!0),t="".concat(API_URL,"/api/jobs?offset=").concat(encodeURIComponent(n))),s.addEventListener("readystatechange",(function(){if(s.readyState===XMLHttpRequest.DONE)if(200===s.status){var o=JSON.parse(s.responseText);o.total-n<12&&(r=o.total-n);var a=new XMLHttpRequest;a.open("GET",t+"&limit=".concat(encodeURIComponent(r)),!0),a.addEventListener("readystatechange",(function(){if(a.readyState===XMLHttpRequest.DONE)if(200===a.status){var t=JSON.parse(a.responseText);e(t)}else alert("Erreur : TODO, gérer les erreurs...")})),a.send()}else alert("Erreur : TODO, gérer les erreurs...")})),s.send()},apiGetJobDetails=function(e,t){var n=new XMLHttpRequest;n.open("GET","".concat(API_URL,"/api/job/").concat(encodeURIComponent(e)),!0),n.addEventListener("readystatechange",(function(){if(n.readyState===XMLHttpRequest.DONE)if(200===n.status){var e=JSON.parse(n.responseText);t(e)}else alert("Erreur : TODO, gérer les erreurs...")})),n.send()};
//# sourceMappingURL=index.cc4e1833.js.map
