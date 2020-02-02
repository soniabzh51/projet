let lastNameSend = document.getElementById("send");
let nomSend = document.getElementById("nom");
let missNomSend = document.getElementById("missNom");
let nomValidSend = /^([a-zA-Zéèîï]|[a-zéèêàçîî]+[-'\s][a-zA-Zéèîï]|[a-zéèêàçîï]+?){3,25}$/;

lastNameSend.addEventListener("click", verifyLastName);

function verifyLastName(event) {
        //Si le champ est vide et validé
        if (nomSend.validity.valueMissing) {
                event.preventDefault();
                missNomSend.textContent = 'Nom manquant';
        } 
        else if (nomValidSend.test(nomSend.value) == false) {
                event.preventDefault();
                missNomSend.textContent = "Format incorrect";
        } 
        else {       
        }
}

let firstNameValidSend = document.getElementById('send')
let prenomSend = document.getElementById("prenom");
let missPrenomSend = document.getElementById("missPrenom");
let prenomValidSend = /^([a-zA-Zéèîï]|[a-zéèêàçîî]+[-'\s][a-zA-Zéèîï]|[a-zéèêàçîï]+?){3,25}$/;

firstNameValidSend.addEventListener("click", verifyFirstName);

function verifyFirstName(event) {
        //si le champ est vide et validé
        if (prenomSend.validity.valueMissing) {
                event.preventDefault();
                missPrenomSend.textContent = 'Prénom manquant';
        } 
        else if (prenomValidSend.test(prenomSend.value) == false) {
                event.preventDefault();
                missPrenomSend.textContent = "Format incorrect";
        } 
        else {
        }
}


let eMailValid = document.getElementById("send");
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
// -------------------- API SLACK------------------------
function test() {

        let apiUrl = "https://slack.com/api/chat.postMessage";
        let channel =  "bot";
        let text = document.getElementById("message").value;
        let mail = document.getElementById("mail").value;
        let token = creds.token;
    $.ajax({
        data: {
            "token": token,
            "channel": channel,  
            "text": mail + " vous a envoyé un message. Contenu du mail :" + " " +text,
           
        },
        dataType: "text",
        type: "POST",
        url: apiUrl, 
        fail: function(xhr,status,error) {
            console.log("erreur" + error);
        },
        done: function(data) {
            console.log("response: " + data);
        }   
    });
    }

