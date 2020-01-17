let formValid = document.getElementById("envoyer");
let nomAccount = document.getElementById("nomAccount");
let missNomAccount = document.getElementById("missNomAccount");
let nomAccountValid = /^([a-zA-Zéèîï]|[a-zéèêàçîî]+[-'\s][a-zA-Zéèîï]|[a-zéèêàçîï]+?){3,25}$/;

formValid.addEventListener("click", verifyLastNameAccount);

function verifyLastNameAccount(event) {
        //Si le champ est vide et validé
        if (nomAccount.validity.valueMissing) {
                event.preventDefault();
                missNomAccount.textContent = 'Nom manquant';
        } 
        else if (nomAccountValid.test(nomAccount.value) == false) {
                event.preventDefault();
                missNomAccount.textContent = "Format incorrect";
        } 
        else {       
        }
}

let firstNameValid = document.getElementById('envoyer')
let prenom = document.getElementById("prenom");
let missPrenom = document.getElementById("missPrenom");
let prenomValid = /^([a-zA-Zéèîï]|[a-zéèêàçîî]+[-'\s][a-zA-Zéèîï]|[a-zéèêàçîï]+?){3,25}$/;

firstNameValid.addEventListener("click", verifyFirstName);

function verifyFirstName(event) {
        //si le champ est vide et validé
        if (prenom.validity.valueMissing) {
                event.preventDefault();
                missPrenom.textContent = 'Prénom manquant';
        } 
        else if (prenomValid.test(prenom.value) == false) {
                event.preventDefault();
                missPrenom.textContent = "Format incorrect";
        } 
        else {
        }
}

let mdpValid = document.getElementById("envoyer");
let password = document.getElementById("password");
let missPassword = document.getElementById("missPassword");
let passwordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-+!*$@%_])(?=.*\W).{8,15}$/

mdpValid.addEventListener("click", verifyPassword);
    
function verifyPassword(event){
    //Si le champ est vide et validé
    if (password.validity.valueMissing){
        event.preventDefault();
        missPassword.textContent = 'Mot de passe manquant';
    }
    //si le format de données est incorrect
    else if
    (passwordValid.test(password.value) == false){
        event.preventDefault();
        missPassword.textContent = "Format incorrect";
        }
        else{
        }
}
