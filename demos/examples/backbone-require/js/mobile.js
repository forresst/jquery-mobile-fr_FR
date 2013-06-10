// Définit la configuration de require.js pour votre application.
require.config( {

      // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
      paths: {

            // Libraries principales
            "jquery": "libs/jquery",
            "jquerymobile": "libs/jquerymobile",
            "underscore": "libs/lodash",
            "backbone": "libs/backbone"

      },

      // Définit la configuration des scripts tiers pour vos scripts tiers qui ne sont pas compatible AMD
      shim: {

            "backbone": {
                  "deps": [ "underscore", "jquery" ],
                  "exports": "Backbone"  //attaches "Backbone" to the window object
            }

      } // end Shim Configuration

} );

// Inclure les dépendances de fichier
require([ "jquery", "backbone", "routers/mobileRouter" ], function( $, Backbone, Mobile ) {

	$( document ).on( "mobileinit",
		// Met en place le gestionnaire "mobileinit" avant d'exiger le module jQuery Mobile
		function() {
			// Empêche toute manipulation de clic des ancres, en incluant l'état ​​du bouton actif et le flou du lien.
			$.mobile.linkBindingEnabled = false;

			// La désactivation de ceci, empêchera jQuery Mobile de traiter des changements de hash
			$.mobile.hashListeningEnabled = false;
		}
	)

	require( [ "jquerymobile" ], function() {
		// Instancie un nouveau Routeur Mobile de Backbone.js
		this.router = new Mobile();
	});
} );