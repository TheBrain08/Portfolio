let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('themeSwitch');
const themeSwitchSM = document.getElementById('themeSwitchSM');

function enableLightmode() {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode', 'active');
    document.getElementById('logo').src = "../img/logo-lightmode.png";
}

function disableLightmode() {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode', null);
    document.getElementById('logo').src = "../img/logo.png";
}

if (lightmode === "active") enableLightmode()

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightmode() : disableLightmode()
});

themeSwitchSM.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode');
    lightmode !== "active" ? enableLightmode() : disableLightmode();
});