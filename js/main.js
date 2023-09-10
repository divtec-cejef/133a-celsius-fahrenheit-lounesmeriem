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
//récupère le h2

let h2 = document.querySelector('h2');

