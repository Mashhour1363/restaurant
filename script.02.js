const themeButton = document.getElementById("themeButton");
const body = document.body;

themeButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    const currentTheme = body.classList.contains("dark-theme") ? "Light Theme" : "Dark Theme";

    var rect = document.getElementById('header-gradient');
    switch (currentTheme){
        case "Light Theme":
            rect.setAttribute('fill', 'url(#grad2)');
            break;
        case "Dark Theme":
            rect.setAttribute('fill', 'url(#grad1)');
            break;
    }

    themeButton.textContent = currentTheme;
});