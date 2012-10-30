// Category View
// =============

// Inclure les dépendances de fichier
define([ "jquery", "backbone","models/CategoryModel" ], function( $, Backbone, CategoryModel ) {

    // Étendre Backbone.View
    var CategoryView = Backbone.View.extend( {

        // Le constructeur de View
        initialize: function() {

            // La méthode render est appelée quand les modèles de Category sont ajoutés à la Collection
            this.collection.on( "added", this.render, this );

        },

        // Rend tous les modèles de Category models à l'UI
        render: function() {

            // Définit les propriétés du template de la vue
            this.template = _.template( $( "script#categoryItems" ).html(), { "collection": this.collection } );

            // Rend le template de la vue dans l'élément de la liste courante
            this.$el.find("ul").html(this.template);

            // Maintient la chainabilité
            return this;

        }

    } );

    // Retourne la classe View
    return CategoryView;

} );