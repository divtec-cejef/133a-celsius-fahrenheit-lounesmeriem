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
let F = degreCelcius * 9/5+32;

alert(` ${degreCelcius} °C =  ${F} °F` );


//transformer les degres en entier
degreCelcius = parseFloat(degreCelcius);


// a chaque fois qu'on a un nombre il faut le tester avec Nan
if ( isNaN (degreCelcius)){
    alert('Entre un nombre!');
}else{
    alert(` ${degreCelcius} °C =  ${F} °F`);
}

