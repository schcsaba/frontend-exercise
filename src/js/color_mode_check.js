if (
    localStorage.getItem("color-mode") === "dark" ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("color-mode"))
) {
    document.documentElement.setAttribute("data-color-mode", "dark");
}