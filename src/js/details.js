const idInUrl = new URLSearchParams(window.location.search);
const id = idInUrl.get("id");
apiGetJobDetails(
    id,
    response => {
        displayJobDetails(response);
    }
);