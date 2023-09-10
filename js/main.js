/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  meriem lounes
 * @version 0.1
 * @since   2023.09.05
 */
// Demande un interprétation stricte du code
'use strict';

/* etape 1 de l'exercice*/
// ecrire un programme qui demande a l'utilisateur de saisir un degrés celsus
let  degreCelcius = prompt(" Temperature en Celcius : ");

//transformer la valeur en float
degreCelcius = parseFloat(degreCelcius);

// tester si c’est bien un nombre, sinon message erreur
if ( isNaN (degreCelcius)){
    alert('Entrez un nombre!');
}else{
    // Calculer la température en °F
    let F = degreCelcius * 9/5+32;
    //affiche le resultat
    alert(` ${degreCelcius} °C = ${F} °F`);
}


/* etape 2 de l'exercice */

//récupère les champs de texte ,bouton, paragrphe
let saisirLaTemperature = document.getElementById('temperature');
let btConvertir = document.querySelector('.convertir');
let btReinitialiser = document.querySelector('.reinitialiser');
let monHistorique = document.querySelector('.historique');
console.log(saisirLaTemperature);

// Ecoute événement click du bouton
btConvertir.addEventListener('click', () => {
    monHistorique.innerHTML += '<li>' + saisirLaTemperature.value + '</li>';
    // Vide le champ Article
    btReinitialiser.value = '';
});

