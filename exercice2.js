var async = require('async');
module.exports = {
        convertisseur: function (francs) {
            return francs / 6.55957
        },
        loop: function () {
            for (var i = 10; i < 1000; i += 50) {
                console.log(this.convertisseur(i));
            }
        },

        convertisseurAsync: function (sendResult) {
                var i = 10;
                var _that = this
                async.whilst(function () {
                            return i < 1000;
                        }, function (callback) {
                            _that.convertisseurAsync(i, function (resultat) {
                                sendResult(resultat);
                                i += 50
                                callback(null, i);
                            });
                        }, function (error) {
                    console.log(error);
        });
                },
    
}

        