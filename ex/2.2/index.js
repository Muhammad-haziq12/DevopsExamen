let  afficher = document.querySelector(".message");
let msg2 = document.querySelector(".messagedelafin");

const body = document.querySelector("body");
let compteur = 0;

body.addEventListener("click", zbi2);
function zbi2(){
    compteur ++;
    afficher.innerHTML = compteur;
    if (compteur >= 5 && compteur <= 9){
        msg2.innerHTML = "Bravo, bel échauffement !";
    }

    if (compteur >= 10){
        msg2.innerHTML = "Vous êtes passé maître en l'art du clic !";
    }

    }


