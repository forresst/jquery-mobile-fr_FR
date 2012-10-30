// Mobile Router
// =============

// Inclure les dépendances de fichier
define([ "jquery","backbone", "../models/CategoryModel", "../collections/CategoriesCollection", "../views/CategoryView" ], function( $, Backbone, CategoryModel, CategoriesCollection, CategoryView ) {

    // Étendre Backbone.Router
    var CategoryRouter = Backbone.Router.extend( {

        // Le constructeur de Router
        initialize: function() {

            // Instancie une nouvelle Vue Category de Animal
            this.animalsView = new CategoryView( { el: "#animals", collection: new CategoriesCollection( [] , { type: "animals" } ) } );

            // Instancie une nouvelle Vue Category de Colors
            this.colorsView = new CategoryView( { el: "#colors", collection: new CategoriesCollection( [] , { type: "colors" } ) } );

            // Instancie une nouvelle Vue Category de Vehicles
            this.vehiclesView = new CategoryView( { el: "#vehicles", collection: new CategoriesCollection( [] , { type: "vehicles" } ) } );

            // Appelle Backbone pour commencer à regarder les événements hashchange
            Backbone.history.start();

        },

        // Backbone.js Routes
        routes: {

            // Quand il n'y a pas de hash sur l'url, la méthode home est appelée
            "": "home",

            // Quand #category? est sur l'url, la méthode category est appelée
            "category?:type": "category"

        },

        // Méthode home
        home: function() {

            // Change par programmation vers la page categories
            $.mobile.changePage( "#categories" , { reverse: false, changeHash: false } );

        },

        // La méthode Category dont le type est passé en paramètre ajoute le hash dans l'url
        category: function(type) {

            // Stocke la vue courante de Category dans la variable currentView
            var currentView = this[ type + "View" ];

            // S'il n'y a pas de collections dans la Vue courante de Category
            if(!currentView.collection.length) {

                // Affiche l'icône de chargement de jQuery Mobile
                $.mobile.loading( "show" );

                // Récupère la collection des modèles de  Category  pour la Vue  Category courante
                currentView.collection.fetch().done( function() {

                    // Change par programmation vers la page courante categories
                    $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );
    
                } );

            }

            // S'il y a déjà des collections dans la Vue courante de Category
            else {

                // Change par programmation vers la page courante categories
                $.mobile.changePage( "#" + type, { reverse: false, changeHash: false } );

            }

        }

    } );

    // Retourne la classe Router
    return CategoryRouter;

} );