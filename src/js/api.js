const API_URL = "https://ecf-dwwm.cefim-formation.org";

const apiGetJobs = (onSuccess, offset = 0, limit = 12) => {
    const request = new XMLHttpRequest();
    request.open("GET", `${API_URL}/api/jobs?offset=${encodeURIComponent(offset)}&limit=${encodeURIComponent(limit)}`, true);
    request.addEventListener("readystatechange", function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const response = JSON.parse(request.responseText);
                onSuccess(response);
            } else {
                alert("Erreur : TODO, gérer les erreurs...");
            }
        }
    });
    request.send();
}
