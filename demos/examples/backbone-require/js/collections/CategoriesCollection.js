// Category Collection
// ===================

// Inclure les dépendances de fichier
define([ "jquery","backbone","models/CategoryModel" ], function( $, Backbone, CategoryModel ) {

    // Étendre Backbone.Router
    var Collection = Backbone.Collection.extend( {

        // Le constructeur de Collection
        initialize: function( models, options ) {

            // Définit la propriété instance de type (par exemple animals)
            this.type = options.type;

        },

        // Définit la propriété modèle de la collection en Category Model
        model: CategoryModel,

        // Exemples de données JSON qui dans une application réelle viendra très probablement à partir d'un service Web REST
        jsonArray: [

            { "category": "animals", "type": "Pets" },

            { "category": "animals", "type": "Farm Animals" },

            { "category": "animals", "type": "Wild Animals" },

            { "category": "colors", "type": "Blue" },

            { "category": "colors", "type": "Green" },

            { "category": "colors", "type": "Orange" },

            { "category": "colors", "type": "Purple" },

            { "category": "colors", "type": "Red" },

            { "category": "colors", "type": "Yellow" },

            { "category": "colors", "type": "Violet" },

            { "category": "vehicles", "type": "Cars" },

            { "category": "vehicles", "type": "Planes" },

            { "category": "vehicles", "type": "Construction" }

        ],

        // Redéfinition de la méthode Backbone.sync (la méthode Backbone.fetch appelle la méthode sync lorsque vous essayez de récupérer les données)
        sync: function( method, model, options ) {

            // Variables Locales
            // ===============

            // Instancie  un tableau vide
            var categories = [],

                // Stocke le context de this dans la variable self
                self = this,

                // Créé un objet  jQuery Deferred
                deferred = $.Deferred();

            // Utilise un setTimeout pour imiter une application du monde réel qui récupère des données de manière asynchrone
            setTimeout( function() {

                // Filtre les échantillons ci-dessus des données JSON pour retourner un tableau correct de type category
                categories = _.filter( self.jsonArray, function( row ) {

                    return row.category === self.type;

                } );

                // Appelle la méthode options.success et passe un tableau d'objets (En interne cela sauve ces objets comme des modèles à la collection actuelle)
                options.success( categories );

                // Déclenche la méthode personnalisé `added` (qui écoute la Vue Category)
                self.trigger( "added" );

                // Resolve l'objetdeferred (ce qui déclenche la méthode changePage à l'intérieur du routeur Category)
                deferred.resolve();

            }, 1000);

            // Retourne l'objet deferred
            return deferred;

        }

    } );

    // Retourne la classe Model
    return Collection;

} );