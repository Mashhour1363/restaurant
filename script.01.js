document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("themeButton");
    const backgroundLayer = document.getElementById("background-layer");

    themeButton.addEventListener("click", () => {
        const isDarkTheme = document.body.classList.contains("dark-theme");
        const stop1Color = isDarkTheme ? "#282a36" : "#ffcc66";
        const stop2Color = isDarkTheme ? "#bd93f9" : "#ffa07a";

        backgroundLayer.style.background = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:${stop1Color};stop-opacity:1" /><stop offset="100%" style="stop-color:${stop2Color};stop-opacity:1" /></linearGradient><rect width="100%" height="100%" fill="url(%23grad1)" /></svg>')`;
    });
});