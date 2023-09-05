/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  meriem lounes
 * @version 0.1
 * @since   2023.09.05
 */
// Demande un interprétation stricte du code
'use strict';

// ecrire un programme qui demande a l'utilisateur de saisir un degrés celsus
let  degreCelcius = prompt("Annonce de la page https://cdpn.io: Temperature en Celcius");
let  C =0;
let F = C * 9/5+32;

alert('Annonce de la page https://cdpn.io: '+ degreCelcius+'C°'+ F );

//transformer les degres en entier
degreCelcius = parseInt(degreCelcius);
C = parseInt(C);
F = parseInt(F);

// a chaque fois qu'on a un nombre il faut le tester avec Nan
if ( isNaN (degreCelcius)){
    alert('Entre un nombre!');
}else{
    alert(` ${degreCelcius}`);
}