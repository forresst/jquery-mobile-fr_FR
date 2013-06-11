var _gaq = _gaq || [];
$(document).ready(function(e) {
   (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + 
               '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
   })();
});
// Désactiver AJAX pour la navigation des fichiers locaux
if ( location.protocol.substr(0,4)  === 'file' ||
     location.protocol.substr(0,11) === '*-extension' ||
     location.protocol.substr(0,6)  === 'widget' ) {

	// Commencez avec des liens avec seulement un slash final et qui ne sont pas des liens externes
	var fixLinks = function() {
		$( "a[href$='/'], a[href='.'], a[href='..']" ).not( "[rel='external']" ).each( function() {
			if( !$( this ).attr( "href" ).match("http") ){
				this.href = $( this ).attr( "href" ).replace( /\/$/, "" ) + "/index.html";
			}
		});
	};

	// corriger les liens de la page initiale
	$( fixLinks );

	// corriger les liens pour les chargements ultérieures de page AJAX
	$( document ).on( 'pagecreate', fixLinks );

	// Vérifie pour voir si AJAX peut être utilisé. Cette commande fait une demande rapide ajax et bloque la page jusqu'à ce que c'est fait
	$.ajax({
		url: '.',
		async: false,
		isLocal: true
	}).error(function() {
		// Ajax ne fonctionne pas, donc on le désactive
		$( document ).on( "mobileinit", function() {
			$.mobile.ajaxEnabled = false;
			
			var message = $( '<div>' , {
				'class': "jqm-content jqm-fullwidth ui-bar-f",
				style: "border:none; padding: 10px 15px; overflow: auto;",
				'data-ajax-warning': true
			});
			
			message
			.append( "<h3 style='margin:0 0 .3em; padding:0; font-size:1em; font-weight: bold; color:#fff;'>Remarque : Il est possible que la navigation ne fonctionne pas si la documentation est visualisée localement</h3>" )
			.append( "<p style='margin:0; font-size:.9em; color:#fff;'>La navigation axée AJAX qui est utilisée dans la documentation de jQuery Mobile peut avoir besoin d'être visualisée sur un serveur web pour fonctionner dans certains navigateurs. Si vous voyez un message d'erreur lorsque vous cliquez sur un lien, essayez un autre navigateur ou <a href='https://github.com/jquery/jquery-mobile/wiki/Downloadable-Docs-Help' style='color:white'>consultez l'aide</a>.</p>" );
			
			$( document ).on( "pagecreate", function( event ) {
				$( event.target ).append( message );
			});
		});
	});
}


// affiche la version de jQM
$( document ).on( "pageinit", function() {
	var version = $.mobile.version || "dev",
		words = version.split( "-" ),
		ver = words[0],
		str = words[1] || "",
		text = ver;

	if ( str.indexOf( "rc" ) == -1 ) {
		str = str.charAt( 0 ).toUpperCase() + str.slice( 1 );
	} else {
		str = str.toUpperCase().replace( ".", "" );
	}

	if ( $.mobile.version && str ) {
		text += " " + str;
	}

	$( ".jqm-version" ).html( "Version " + text );
	$( ".jqm-version-number" ).html( text );
});


$( document ).on( "pageinit", ".jqm-demos", function() {
	var page = $( this );

	// Panneau du menu global
	$( ".jqm-navmenu-link" ).on( "click", function() {
		page.find( ".jqm-navmenu-panel" ).panel( "open" );
	});

	// Recherche globale
	$( this ).find( ".jqm-search ul.jqm-list" ).listview({
		globalNav: "demos",
		inset: true,
		theme: "d",
		dividerTheme: "d",
		icon: false,
		filter: true,
		filterReveal: true,
		filterPlaceholder: "Search...",
		autodividers: true,
		autodividersSelector: function ( li ) {
    		return "";
  		},
  		arrowKeyNav: true,
  		enterToNav: true,
  		highlight: true,
  		submitTo: "search-results.php"
	});
	
	$( this ).find( ".jqm-header .jqm-search-link" ).on( "click", function() {
		$( this ).parent( ".jqm-header" ).toggleClass( "jqm-search-toggle" );
		
		var type = $( this ).parent( ".jqm-header" ).hasClass( "jqm-search-toggle" ) ? "searchshow" : "searchhide";
		
		$( this ).parent( ".jqm-header" ).find( ".jqm-search" ).trigger( type );
	});
	
	$( this ).find( ".jqm-header .jqm-search" )
		.on( "searchshow searchhide", function( event ) {
			if ( event.type === "searchshow" ) {
				$( this ).find( ".ui-input-text" ).focus();
			} else {
				$( this )
					.find( ".ui-input-clear" ).trigger( "click" )
					.end()
					.find( ".ui-input-text" ).blur();
			}
		});
		
	$( this ).on( "pagehide", function() {
		$( this ).find( ".jqm-search .ui-input-clear" ).trigger( "click" );
	});

	$( this ).find( ".jqm-content ul.jqm-list " ).listview({
		globalNav: "demos",
		inset: true,
		theme: "d",
		dividerTheme: "d",
		icon: false,
		filter: true,
		filterReveal: true,
		filterPlaceholder: "Recherche...",
  		arrowKeyNav: true,
  		enterToNav: true,
  		highlight: true
	});

	$( this ).find( ".jqm-search-results-list li, .jqm-search li" ).each(function() {
		var text = $( this ).attr( "data-filtertext" );
		$( this ).find( "a" ).append( "<span class='jqm-search-results-keywords ui-li-desc'><span class='jqm-keyword-hash'>//</span> " + text + "</span>" );
	});
});

$( document ).on( "pageshow",  ".jqm-demos", function() {
	$( this ).find( ".jqm-search input" ).attr( "autocomplete", "off" ).attr( "autocorrect", "off" );
  try {
      _gaq.push(['_setAccount', 'UA-827525-9']);
      if ($.mobile.activePage.attr("data-url")) {
        _gaq.push(['_trackPageview', $.mobile.activePage.attr("data-url")]);
      } else {
        _gaq.push(['_trackPageview']);
      }
    } catch(err) {}
});

$( document ).on( "pageshow", ".jqm-demos-search-results", function() {
	var search = $.mobile.path.parseUrl( window.location.href ).search.split( "=" )[1], self = this;
	setTimeout(function() {
		e = $.Event( "keyup" );
		e.which = 65;
		$( self ).find( ".jqm-content .jqm-search-results-wrap input" ).val( search ).trigger(e).trigger( "change" );
	}, 0 );
});

jQuery.fn.highlight = function( pat ) {
	function innerHighlight( node, pat ) {
		var skip = 0;
		if ( node.nodeType == 3 ) {
			var pos = node.data.toUpperCase().indexOf( pat );
			if ( pos >= 0 ) {
				var spannode = document.createElement( "span" );
				spannode.className = "jqm-search-results-highlight";
				var middlebit = node.splitText( pos );
				var endbit = middlebit.splitText( pat.length );
				var middleclone = middlebit.cloneNode( true );
				spannode.appendChild( middleclone );
				middlebit.parentNode.replaceChild( spannode, middlebit );
				skip = 1;
			}
		} else if ( node.nodeType == 1 && node.childNodes && !/(script|style)/i.test( node.tagName ) ) {
			for ( var i = 0; i < node.childNodes.length; ++i ) {
				i += innerHighlight( node.childNodes[i], pat );
			}
		}
		return skip;
	}
	return this.length && pat && pat.length ? this.each(function() {
		innerHighlight( this, pat.toUpperCase() );
	}) : this;
};

jQuery.fn.removeHighlight = function() {
	return this.find( "span.jqm-search-results-highlight" ).each(function() {
		this.parentNode.firstChild.nodeName;
		with ( this.parentNode ) {
			replaceChild( this.firstChild, this );
			normalize();
		}
	}).end();
};

$( document ).on( "mobileinit", function() {
	(function( $, undefined ) {

	$.widget( "mobile.listview", $.mobile.listview, {
		options: {
			theme: null,
			countTheme: "c",
			headerTheme: "b",
			dividerTheme: "b",
			icon: "arrow-r",
			splitIcon: "arrow-r",
			splitTheme: "b",
			corners: true,
			shadow: true,
			inset: false,
			initSelector: ":jqmData(role='listview')",
			arrowKeyNav: false,
			enterToNav: false,
			highlight: false,
			submitTo: false
		},
		_create: function() {
			this._super();
			
			if ( this.options.arrowKeyNav ) {
				this._on( document, { "pageshow": "arrowKeyNav" });
			}
			
			if ( this.options.enterToNav ) {
				this._on( document, { "pageshow": "enterToNav" });
			}
			
		},
		submitTo: function() {
			var form = this.element.parent().find( "form" );
			
			form.attr( "method", "get" )
				.attr( "action", this.options.submitTo );
				
			var base = $( "base" ).attr( "href" ).split( "demos" )[0];
				base = base.split( "index.html" )[0] + "demos" + "/";
				url = base + this.options.submitTo + "?search=" + this.element.parent().find( "input" ).val();
			
			$.mobile.changePage( url ); 
		},
		enterToNav: function() {
			var form = this.element.parent().find( "form" );
			
			form.append( "<button type='submit' data-icon='arrow-r' data-inline='true' class='ui-hidden-accessible' data-iconpos='notext'>Submit</button>" )
				.parent()
				.trigger( "create" );
			
			this.element.parent().find( "form" ).children( ".ui-btn" ).addClass( "ui-hidden-accessible" );
			
			this._on( form, {
				"submit": "submitHandler"
			});
		},
		enhanced: false,
		arrowKeyNav: function() {
			var input = this.element.parent().find( "input" );
			
			if ( !this.enhanced ) {
				this._on( input, {
					"keyup": "handleKeyUp"
				});
				
				this.enhanced = true;
			}
		},
		handleKeyUp: function( e ) {
			var input = this.element.parent().find( "input" );
			
			if ( e.which === $.mobile.keyCode.DOWN ) {
				if ( this.element.find( "li.ui-btn-active" ).length == 0 ) {
					this.element.find( "li:first" ).toggleClass( "ui-btn-active" );
				} else {
					this.element.find( "li.ui-btn-active" ).toggleClass( "ui-btn-active" ).next().toggleClass( "ui-btn-active" );
				}
				
				this.highlightDown();
			} else if ( e.which === $.mobile.keyCode.UP ) {
				if ( this.element.find( "li.ui-btn-active" ).length !== 0 ) {
					this.element.find( "li.ui-btn-active" ).toggleClass( "ui-btn-active" ).prev().toggleClass( "ui-btn-active" );
					
					this.highlightUp()
				} else {
					this.element.find( "li:last" ).toggleClass( "ui-btn-up-d" ).toggleClass( "ui-btn-active" );
				}
			} else if ( typeof e.which !== "undefined" ) {
				this.element.find( "li.ui-btn-active" ).removeClass( "ui-btn-active" );
				
				if ( this.options.highlight ) {
					var search = input.val();
					
					this.element.find( "li" ).each(function() {
						$( this ).removeHighlight();
						$( this ).highlight( search );
					});
				}
			}
		},
		submitHandler: function() {
			if ( this.element.find( "li.ui-btn-active" ).length !== 0 ) {
				var href = this.element.find( "li.ui-btn-active a" ).attr( "href" );
				
				$.mobile.changePage( href );
				return false;
			}
			
			if ( this.options.submitTo ) {
				this.submitTo();
			}
		},
		highlightDown: function() {
			if ( this.element.find( "li.ui-btn-active" ).hasClass( "ui-screen-hidden" ) ) {
				this.element.find( "li.ui-btn-active" ).toggleClass( "ui-btn-active" ).next().toggleClass( "ui-btn-active" );
				
				this.highlightDown();
			}
			return;
		},
		highlightUp: function() {
			if ( this.element.find( "li.ui-btn-active" ).hasClass( "ui-screen-hidden" ) ) {
				this.element.find( "li.ui-btn-active" ).toggleClass( "ui-btn-active" ).prev().toggleClass( "ui-btn-active" );
				
				this.highlightUp();
			}
			return;
		}
	});
})( jQuery );

});
