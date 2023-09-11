/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  meriem lounes
 * @version 0.1
 * @since   2023.09.05
 */
// Demande un interprétation stricte du code
'use strict';

/* etape 1 de l'exercice
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
*/

/* etape 2 de l'exercice */

//récupère les champs de texte ,bouton, paragrphe
let champTemperatureC = document.getElementById("temperatureC");
let boutonConvertir = document.getElementById("convertir");
let paragrapheResultat = document.getElementById("resultat");
let historiqueListe = document.getElementById("historique");



// Ecoute événement click du bouton
boutonConvertir.addEventListener('click', () => {
    //récupérer la valeur saisie par l'utilisateur
    let temperatureC = parseFloat(champTemperatureC.value);
    //vérifier si la saisie est un nombre valide
    if (isNaN(temperatureC)) {
        alert("Veuillez entrer un nombre valide en °C.");
    }else {
        //convertir en °F
        let temperatureF = (temperatureC*9/5)+32;
        paragrapheResultat.textContent = temperatureC + temperatureF.toFixed(2)+"°F";

        //ajouter l'entree a l'historique
        let nouvelleConversion = document.createElement("li");
        nouvelleConversion.textContent =temperatureC +"°C = "+ temperatureF.toFixed(2)+"°F";
        historiqueListe.appendChild(nouvelleConversion);

        //effacer le champs de saisie
        champTemperatureC.value =" ";
    }
});









