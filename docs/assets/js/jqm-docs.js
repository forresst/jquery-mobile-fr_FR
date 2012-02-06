//set up the theme switcher on the homepage
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
define( function() {
//>>excludeEnd("jqmBuildExclude");

//Réduction de la page de navigation après utilisation
$(function(){
	$('body').delegate('.content-secondary .ui-collapsible-content', 'click',  function(){
		$(this).trigger("collapse");
	});
});


// Désactiver AJAX pour la navigation des fichiers locaux
if ( location.protocol.substr(0,4)  === 'file' ||
     location.protocol.substr(0,11) === '*-extension' ||
     location.protocol.substr(0,6)  === 'widget' ) {

  // Commencez avec des liens avec seulement un slash final et qui ne sont pas des liens externes
  var fixLinks = function() {
    $( "a[href$='/'], a[href='.'], a[href='..']" ).not( "[rel='external']" ).each( function() {
      this.href = $( this ).attr( "href" ).replace( /\/$/, "" ) + "/index.html";
    });
  };

  // corriger les liens de la page initiale
  $(fixLinks);

  // corriger les liens pour les chargements ultérieures de page AJAX
  $(document).bind( 'pagecreate', fixLinks );

  // Vérifie pour voir si AJAX peut être utilisé. Cela fait une requête rapide ajax et bloque la page jusqu'à ce soit fait
  $.ajax({
    url: '.',
    async: false,
    isLocal: true
  }).error(function() {
    // Ajax ne fonctionne pas donc on le désactive
    $( document ).bind( "mobileinit", function() {
      $.mobile.ajaxEnabled = false;

      var message = $( '<div>' , {
        'class': "ui-footer ui-bar-e",
        style: "overflow: auto; padding:10px 15px;",
        'data-ajax-warning': true
      });

      message
        .append( "<h3>Remarques : Il est possible que la navigation ne fonctionne pas si la documentation est visualisée localement</h3>" )
        .append( "<p>La navigation axée AJAX qui est utilisée dans la documentation de jQuery Mobile peut avoir besoin d'être visualisée sur un serveur web pour fonctionner dans certains navigateurs. Si vous voyez un message d'erreur lorsque vous cliquez sur un lien, essayez un autre navigateur ou <a href='https://github.com/jquery/jquery-mobile/wiki/Downloadable-Docs-Help'>consultez l'aide</a>.</p>" );

      $( document ).bind( "pagecreate", function( event ) {
        $( event.target ).append( message );
      });
    });
  });
} else {
  $( document ).bind( "mobileinit", function() {
    
    // Entête pour le site mobile.jquery-fr.com
    $( 'div.type-home' ).live( 'pagebeforecreate',function(event){
       var entete = $( '<div>' , {
          'class': "ui-bar ui-bar-a"
      });

      entete
        .append( "<h1>JQuery Mobile, documentation en français   </h1>" )
        .append( "<a href='http://www.jquery-fr.com'>Documentation française jQuery</a>" )
        .append( "<a href='http://www.jquery-fr.com/forum'>Forum français dédié à jQuery</a>" );

      $( "div.type-home" ).prepend( entete );
    });

    $( 'div.type-interior' ).live( 'pagebeforecreate',function(event){
       var entete = $( '<div>' , {
          'class': "ui-bar ui-bar-a"
      });

      entete
        .append( "<h1>JQuery Mobile, documentation en français   </h1>" )
        .append( "<a href='http://www.jquery-fr.com'>Documentation française jQuery</a>" )
        .append( "<a href='http://www.jquery-fr.com/forum'>Forum français dédié à jQuery</a>" );

      $( "div.type-interior" ).prepend( entete );
    });

    $( 'div.type-index' ).live( 'pagebeforecreate',function(event){
       var entete = $( '<div>' , {
          'class': "ui-bar ui-bar-a"
      });

      entete
        .append( "<h1>JQuery Mobile, documentation en français   </h1>" )
        .append( "<a href='http://www.jquery-fr.com'>Documentation française jQuery</a>" )
        .append( "<a href='http://www.jquery-fr.com/forum'>Forum français dédié à jQuery</a>" );

      $( "div.type-index" ).prepend( entete );
    });

    // Google analytics pour mobile.jquery-fr.com
    $( '[data-role=page]' ).live( 'pageshow', function (event, ui) {
        try 
        {
            if ( location.hash )
            {
            	url = location.hash;
            }
            else 
            {
               url = defaulturl;
            }
            _gaq.push( ['_trackPageview', url] );
        } 
        catch( error ) 
        {
	  // Oh no! Call the catch logger
 
        }
    });

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-28940436-1']);
    _gaq.push(['_setDomainName', 'jquery-fr.com']);

   (function() {
     var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
     ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
     var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
   })();
  });
}
//>>excludeStart("jqmBuildExclude", pragmas.jqmBuildExclude);
});
//>>excludeEnd("jqmBuildExclude");