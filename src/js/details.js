const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
apiGetJobDetails(
    id,
    response => {
        displayJobDetails(response);
    },
    errorMessage => {
        alert(errorMessage);
    }
);