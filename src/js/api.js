const API_URL = "https://ecf-dwwm.cefim-formation.org";

const apiGetJobs = (onSuccess, offset = 0, limit = 12) => {
    const request = new XMLHttpRequest();
    request.open("GET", `${API_URL}/api/jobs`, true);
    request.addEventListener("readystatechange", function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const response = JSON.parse(request.responseText);
                if (response.total - offset < 12) {
                    limit = response.total - offset;
                    offset = 0;
                } else {
                    offset = response.total - 12 - offset;
                }
                const request2 = new XMLHttpRequest();
                request2.open("GET", `${API_URL}/api/jobs?offset=${encodeURIComponent(offset)}&limit=${encodeURIComponent(limit)}`, true);
                request2.addEventListener("readystatechange", function() {
                    if (request2.readyState === XMLHttpRequest.DONE) {
                        if (request2.status === 200) {
                            const response2 = JSON.parse(request2.responseText);
                            onSuccess(response2);
                        } else {
                            alert("Erreur : TODO, gérer les erreurs...");
                        }
                    }
                });
                request2.send();
            } else {
                alert("Erreur : TODO, gérer les erreurs...");
            }
        }
    });
    request.send();
};

const apiGetJobDetails = (id, onSuccess) => {
    const request = new XMLHttpRequest();
    request.open("GET", `${API_URL}/api/job/${encodeURIComponent(id)}`, true);
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
};