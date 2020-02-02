                        // ----------Fenêtre modale Login (JavaScript)-------------

                        let mdpLoginValid = document.getElementById("connexion");
                        let passwordLogin = document.getElementById("password");
                        let missPasswordLogin = document.getElementById("missPassword");
                        let passwordLoginValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-+!*$@%_])(?=.*\W).{8,15}$/

                        mdpLoginValid.addEventListener("click", verifyPasswordLogin);

                        function verifyPasswordLogin(event) {
                            //Si le champ est vide et validé
                            if (passwordLogin.validity.valueMissing) {
                                event.preventDefault();
                                missPasswordLogin.textContent = 'Mot de passe manquant';
                            }
                            //si le format de données est incorrect
                            else if (passwordLoginValid.test(passwordLogin.value) == false) {
                                event.preventDefault();
                                missPasswordLogin.textContent = "Format incorrect";
                            } else {}
                        }

                        // ---------Fenêtre modale Compte (Bootstrap)----------

                        let lastNameValid = document.getElementById("envoyer");
                        let nom = document.getElementById("nom");
                        let missNom = document.getElementById("missNom");
                        let nomValid = /^([a-zA-Zéèîï]|[a-zéèêàçîî]+[-'\s][a-zA-Zéèîï]|[a-zéèêàçîï]+?){3,25}$/;

                        if (document.getElementById("envoyer")) {
                            let lastNameValid = document.getElementById("envoyer");
                            lastNameValid.addEventListener("click", verifyLastName);                                
                        }

                        function verifyLastName(event) {
                            //Si le champ est vide et validé
                            if (nom.validity.valueMissing) {
                                event.preventDefault();
                                missNom.textContent = 'Nom manquant';
                            } else if (nomValid.test(nom.value) == false) {
                                event.preventDefault();
                                missNom.textContent = "Format incorrect";
                            } else {}
                        }

                        let firstNameValid = document.getElementById("envoyer");
                        let prenom = document.getElementById("prenom");
                        let missPrenom = document.getElementById("missPrenom");
                        let prenomValid = /^([a-zA-Zéèîï]|[a-zéèêàçîî]+[-'\s][a-zA-Zéèîï]|[a-zéèêàçîï]+?){3,25}$/;

                        firstNameValid.addEventListener("click", verifyFirstName);

                        function verifyFirstName(event) {
                            //si le champ est vide et validé
                            if (prenom.validity.valueMissing) {
                                event.preventDefault();
                                missPrenom.textContent = 'Prénom manquant';
                            } else if (prenomValid.test(prenom.value) == false) {
                                event.preventDefault();
                                missPrenom.textContent = "Format incorrect";
                            } else {}
                        }

                        let mdpAccountValid = document.getElementById("envoyer");
                        let passwordAccount = document.getElementById("passwordAccount");
                        let missPasswordAccount = document.getElementById("missPasswordAccount");
                        let passwordAccountValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-+!*$@%_])(?=.*\W).{8,15}$/;
                        
                        mdpAccountValid.addEventListener("click", verifyPasswordAccount);
                            
                        function verifyPasswordAccount(event){
                            //Si le champ est vide et validé
                            if (passwordAccount.validity.valueMissing){
                                event.preventDefault();
                                missPasswordAccount.textContent = 'Mot de passe manquant';
                            }
                            //si le format de données est incorrect
                            else if
                            (passwordAccountValid.test(passwordAccount.value) == false){
                                event.preventDefault();
                                missPasswordAccount.textContent = "Format incorrect";
                                }
                                else{
                                }
                        }
                        
                        let confirmPasswordValid = document.getElementById("envoyer");
                        let confirmPasswordAccount = document.getElementById("confirmPasswordAccount");
                        let missConfirmPasswordAccount = document.getElementById("missConfirmPasswordAccount");
                        let confirmPasswordAccountValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-+!*$@%_])(?=.*\W).{8,15}$/;
                        
                        confirmPasswordValid.addEventListener("click", verifyConfirmPasswordAccount);
                            
                        function verifyConfirmPasswordAccount(event){
                            //Si le champ est vide et validé
                            if (confirmPasswordAccount.validity.valueMissing){
                                event.preventDefault();
                                missConfirmPasswordAccount.textContent = 'Mot de passe manquant';
                            }
                            //si le format de données est incorrect
                            else if
                                ((confirmPasswordAccount.value) !== (passwordAccount.value)){
                                event.preventDefault();
                                missConfirmPasswordAccount.textContent = "Vos mots de passe sont différents";
                                }
                                else{
                                }
                        }
 // ------------------- API GEO GOUV-----------------------

function reload() {
    document.getElementById("wrapper").innerHTML = "";
    let message = document.getElementById("lieu").value;
    let listAdress = document.getElementById("listAdress").value;
    fetch("https://api-adresse.data.gouv.fr/search/?q=" + message).then((response) => {
            return response.json();
        })
        .then((myJson) => {

            myJson.features.forEach(element => {
                let li = document.createElement("li");
                li.innerText = element.properties.label;
                document.getElementById("wrapper").appendChild(li)
                console.log(myJson);
            });
        });
};

