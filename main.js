var exerciceUn = require('./exercice1.js');
var exerciceDeux = require('./exercice2.js');
var exerciceTrois = require('./exercice3.js');

/*console.log('Exercice 1');
console.log('Sync');
console.log(exerciceUn.calculRadiateur(2, 2 , 2));

exerciceUn.calculRadiateurAsync(2, 2, 2, function (resultat) {
    console.log('Async')
    console.log(resultat);
});

console.log('Exercice 2');
console.log('Sync');
exerciceDeux.loop();*/

console.log('Async');
exerciceDeux.convertisseurAsync();

exerciceDeux.boucleAsync; 