let lastNameValid = document.getElementById("valider");
let nom = document.getElementById("nom");
let missNom = document.getElementById("missNom");
let nomValid = /^([a-zA-Zéèîï]|[a-zéèêàçîî]+[-'\s][a-zA-Zéèîï]|[a-zéèêàçîï]+?){3,25}$/;

lastNameValid.addEventListener("click", verifyLastName);

function verifyLastName(event) {
        //Si le champ est vide et validé
        if (nom.validity.valueMissing) {
                event.preventDefault();
                missNom.textContent = 'Nom manquant';
        } 
        else if (nomValid.test(nom.value) == false) {
                event.preventDefault();
                missNom.textContent = "Format incorrect";
        } 
        else {       
        }
}

let firstNameValid = document.getElementById('valider')
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


let eMailValid = document.getElementById("valider");
let mail = document.getElementById("email");
let missMail = document.getElementById("missMail");
let mailValid = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.com|^[a-z0-9._-]+@[a-z0-9._-]{2,}\.fr$/
eMailValid.addEventListener("click", verifyMail);

function verifyMail(event) {
        //Si le champ est vide et validé
        if (mail.validity.valueMissing) {
                event.preventDefault();
                missMail.textContent = 'Mail manquant';
        } 
        else if (mailValid.test(mail.value) == false) {
                event.preventDefault();
                missMail.textContent = "Format incorrect";
        } 
        else {
        }
}