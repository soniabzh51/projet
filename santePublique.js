// L'utilisateur confirme avoir 18 ans
document.getElementById("confirm").addEventListener("click", hideCookiebar);
// je cache ma barre
function hideCookiebar() {
    document.getElementById("health-bar").style.display = 'none';
}
