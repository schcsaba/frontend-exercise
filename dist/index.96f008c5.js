var API_URL="https://ecf-dwwm.cefim-formation.org",apiGetJobs=function(e,t){var n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:12,p=new XMLHttpRequest;a||s||1===c||0===c?(p.open("GET","".concat(API_URL,"/api/jobs/search?text=").concat(encodeURIComponent(a),"&location=").concat(encodeURIComponent(s),"&fulltime=").concat(encodeURIComponent(c)),!0),n="".concat(API_URL,"/api/jobs/search?text=").concat(encodeURIComponent(a),"&location=").concat(encodeURIComponent(s),"&fulltime=").concat(encodeURIComponent(c),"&offset=").concat(encodeURIComponent(o))):(p.open("GET","".concat(API_URL,"/api/jobs"),!0),n="".concat(API_URL,"/api/jobs?offset=").concat(encodeURIComponent(o))),p.addEventListener("readystatechange",(function(){if(p.readyState===XMLHttpRequest.DONE)if(200===p.status){var a=JSON.parse(p.responseText);a.total-o<12&&(r=a.total-o);var s=new XMLHttpRequest;s.open("GET",n+"&limit=".concat(encodeURIComponent(r)),!0),s.addEventListener("readystatechange",(function(){if(s.readyState===XMLHttpRequest.DONE)if(200===s.status){var n=JSON.parse(s.responseText);e(n)}else if(400===s.status){var o=JSON.parse(s.responseText);t(o.error)}else t("An unknown error has occurred!")})),s.send()}else if(400===p.status){var c=JSON.parse(p.responseText);t(c.error)}else t("An unknown error has occurred!")})),p.send()},apiGetJobDetails=function(e,t,n){var o=new XMLHttpRequest;o.open("GET","".concat(API_URL,"/api/job/").concat(encodeURIComponent(e)),!0),o.addEventListener("readystatechange",(function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status){var e=JSON.parse(o.responseText);t(e)}else if(404===o.status){var a=JSON.parse(o.responseText);n(a.error)}else n("An unknown error has occurred!")})),o.send()};
//# sourceMappingURL=index.96f008c5.js.map
