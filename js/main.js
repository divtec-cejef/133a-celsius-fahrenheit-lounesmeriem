/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  meriem lounes
 * @version 0.1
 * @since   2023.09.05
 */
// Demande un interprétation stricte du code
'use strict';

// ecrire un programme qui demande a l'utilisateur de saisir un degrés celsus
let  degreCelcius = prompt(" Temperature en Celcius : ");

//transformer la valeur en float
degreCelcius = parseFloat(degreCelcius);

// tester si c’est bien un nombre, sinon message erreur
if ( isNaN (degreCelcius)){
    alert('Entre un nombre!');
}else{
    alert(` ${degreCelcius} °C =  ${F} °F`);
}

// Calculer la température en °F
let F = degreCelcius * 9/5+32;

//Afficher les resultats
alert(` ${degreCelcius} °C =  ${F} °F` );





// a chaque fois qu'on a un nombre il faut le tester avec Nan
if ( isNaN (degreCelcius)){
    alert('Entre un nombre!');
}else{
    alert(` ${degreCelcius} °C =  ${F} °F`);
}

