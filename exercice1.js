module.exports = {
    calculVolume: function (longueur, largeur, hauteur) {

        return longueur * largeur * hauteur;

    },

    calculRadiateur: function (longueur, largeur, hauteur) {
        return Math.ceil(this.calculVolume(longueur, largeur, hauteur) / 8);
    },


    calculVolumeAsync: function (longueur, largeur, hauteur, callback) {

        return callback(longueur * largeur * hauteur);
    },



    calculRadiateurAsync: function (longueur, largeur, hauteur, callback) {
        this.calculVolumeAsync(longueur, largeur, hauteur, function (resultat) {
            return callback(Math.ceil(resultat / 8));

        });
    }

}          
                   
                   

