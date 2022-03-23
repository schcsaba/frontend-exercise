const API_URL = "https://ecf-dwwm.cefim-formation.org";

const apiGetJobs = (onSuccess, onError, offset = 0, text = '', location = '', fulltime = 2, limit = 12) => {
    let url;
    const request = new XMLHttpRequest();
    if (text || location || (fulltime === 1 || fulltime === 0)) {
        request.open("GET", `${API_URL}/api/jobs/search?text=${encodeURIComponent(text)}&location=${encodeURIComponent(location)}&fulltime=${encodeURIComponent(fulltime)}`, true);
        url = `${API_URL}/api/jobs/search?text=${encodeURIComponent(text)}&location=${encodeURIComponent(location)}&fulltime=${encodeURIComponent(fulltime)}&offset=${encodeURIComponent(offset)}`;
    } else {
        request.open("GET", `${API_URL}/api/jobs`, true);
        url = `${API_URL}/api/jobs?offset=${encodeURIComponent(offset)}`;
    }
    request.addEventListener("readystatechange", function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const response = JSON.parse(request.responseText);
                if (response.total - offset < 12) {
                    limit = response.total - offset;
                }
                const request2 = new XMLHttpRequest();
                request2.open("GET", url + `&limit=${encodeURIComponent(limit)}`, true);
                request2.addEventListener("readystatechange", function() {
                    if (request2.readyState === XMLHttpRequest.DONE) {
                        if (request2.status === 200) {
                            const response2 = JSON.parse(request2.responseText);
                            onSuccess(response2);
                        } else if (request2.status === 400) {
                            const response2 = JSON.parse(request2.responseText);
                            onError(response2.error);
                        } else {
                            onError("An unknown error has occurred!");
                        }
                    }
                });
                request2.send();
            } else if (request.status === 400) {
                const response = JSON.parse(request.responseText);
                onError(response.error);
            } else {
                onError("An unknown error has occurred!");
            }
        }
    });
    request.send();
};

const apiGetJobDetails = (id, onSuccess, onError) => {
    const request = new XMLHttpRequest();
    request.open("GET", `${API_URL}/api/job/${encodeURIComponent(id)}`, true);
    request.addEventListener("readystatechange", function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const response = JSON.parse(request.responseText);
                onSuccess(response);
            } else if (request.status === 404) {
                const response = JSON.parse(request.responseText);
                onError(response.error);
            } else {
                onError("An unknown error has occurred!");
            }
        }
    });
    request.send();
};