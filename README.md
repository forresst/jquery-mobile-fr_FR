ATTENTION : NOTE DU TRADUCTEUR !!!
==================================
ATTENTION : Ce dépôt est une copie du dépôt officiel sur github du
[Framework jQuery Mobile : https://github.com/jquery/jquery-mobile](https://github.com/jquery/jquery-mobile)

Le but de ce dépôt est de permettre une traduction complète de la documentation de jQuery Mobile en français.

Vous pouvez visualiser [en ligne la documentation traduite](http://mobile.jquery-fr.com)

Cette documentation est en cours de traduction. Cela signifie qu'elle est traduite de manière
soit incomplète, soit inexacte. En attendant que cette traduction soit terminée, vous pouvez consulter la
[version en anglais](https://github.com/jquery/jquery-mobile) pour des informations plus fiables.

Si vous pensez que vous avez trouvé une erreur de syntaxe ou de traduction, s'il vous plaît reportez la en suivant ces instructions :  

1. Visitez le [Issue tracker : https://github.com/forresst/jquery-mobile-fr_FR/issues](https://github.com/forresst/jquery-mobile-fr_FR/issues)
2. Créez un ticket expliquant le problème et le résultat attendu
3. Soumettez le problème.

Tout ce qui se trouve ci-dessous est une traduction en français du README du dépôt original.

Framework jQuery Mobile
=======================
[Site Officiel: http://jquerymobile.com](http://jquerymobile.com)

[Demos et Documentation](http://jquerymobile.com/test/)

Comment construire vos propres fichiers JS et CSS pour jQuery Mobile CSS and JS files
=====================================================================================
Clonez ce dépôt et contruisez les fichiers js et css (vous aurez besoin que Git et Make soient installés) :

    git clone git://github.com/jquery/jquery-mobile.git
    cd jquery-mobile
    make

Une version complète et une version minifiée du JavaScript de jQuery Mobile et des fichiers CSS seront créés dans un dossier nommé
"compiled". Il y a aussi maintenant une structure seulement pour les fichiers css ainsi vous pouvez ajouter vos propres thèmes.

Alternativement, si vous avez installé node.js vous pouvez exécuter

    npm install
    node node_modules/.bin/grunt <js|css|docs|zip|clean|init>

Comment construire une version autonome de Docs/Demos
=====================================================
Une fois que vous avez votre propre dépôt cloné sur votre ordinateur :

    make docs

Les docs seront construits et disponibles dans le dossier compiled/demos. Vous pouvez déplacer ce dossier sur votre serveur web ou
un autre emplacement. Il n'a pas de dépendances avec autre chose à part un serveur web HTML de base.



Soumettre des bugs
==================
Si vous pensez que vous avez trouvé un bug, s'il vous plaît reportez le en suivant ces instructions :

1. Visitez le [Issue tracker : https://github.com/jquery/jquery-mobile/issues](https://github.com/jquery/jquery-mobile/issues)
2. Créez un ticket expliquant le problème et le résultat attendu (Note du traducteur : La communauté jQuery Mobile parle en anglais, donc évitez le français)
    - N'oubliez pas d'inclure toute information pertinente pour reproduire le problème
    - Inclure des informations telles que :
        * Navigateur/appareil (avec le numéro de version)
        * La version du code jQuery Mobile que vous exécutez
        * Si vous utilisez une version de git, incluez la date et/ou le numéro de hash
    - Assurez-vous que le bug existe toujours sur http://jquerymobile.com/test/ car il est peut être déjà corrigé
    - Vous pouvez utiliser les fichiers JS et CSS hébergés sur CDN pour les tester dans votre propre code en utilisant :
        * [JS](http://code.jquery.com/mobile/latest/jquery.mobile.min.js)
        * [CSS](http://code.jquery.com/mobile/latest/jquery.mobile.min.css)
    - Inclure un lien vers le code du bug en action. Vous pouvez utiliser un de ces services pour héberger votre code
        * [jsbin](http://jsbin.com)
        * [jsfiddle](http://jsfiddle.net)
3. Soumettez le problème.

Recommandé: [modèle de ticket JS Bin avec les instructions](http://jsbin.com/omacox/edit)

Les problèmes concernant le Theme Roller de jQuery Mobile peuvent être sousmis au [dépôt Theme Roller : https://github.com/jquery/web-jquery-mobile-theme-roller](https://github.com/jquery/web-jquery-mobile-theme-roller)

Soumettre des correctifs
========================
Pour contribuer au code et corriger des bugs de jQuery Mobile : faites un fork de ce projet sur Github, apporter les modifications au code dans votre fork,
puis envoyer un "pull request" pour aviser l'équipe de la mise à jour qui est prête à être examinée pour l'intégrer au code.

Des instructions détaillées peuvent être trouvées dans [jQuery Mobile Patching](https://gist.github.com/1294035)

Exécuter localement les démos & les docs jQuery Mobile
======================================================
Pour prévisualiser localement, vous aurez besoin de cloner localement ce dépôt et de faire pointer votre serveur web Apache & PHP à
la racine du répertoire (un serveur web est requis, car PHP et .htaccess sont utilisés pour combiner des fichiers de développement).

Si vous n'avez pas actuellement de serveur web fonctionnant localement, il y a quelques options.

Si vous êtes sur un Mac, vous pouvez essayer en mettant jQuery Mobile dans votre dossier des sites et activer le partage Internet via "Préférences 
Système". De là, vous trouverez une URL où vous pourrez parcourir les dossiers dans votre répertoire de sites à partir d'un navigateur.

Un autre moyen rapide est de télécharger et installer MAMP pour Mac OSX. Une fois installé, ouvrez juste MAMP,
cliquez sur Préférences, allez dans l'onglet Apache et sélectionnez votre dossier local jQuery Mobile comme racine. Ensuite, vous pouvez
ouvrir un navigateur à l'adresse http://localhost:8888 pour prévisualiser le code.

Une autre alternative est XAMPP (Mac, Windows). Vous devez effectivement modifier le fichier httpd.conf d'Apache pour pointer vers votre caisse :
[Instructions](http://www.apachefriends.org/en/xampp.html)

Vous avez besoin que les modules Apache suivants soient chargés :

* Rewrite (mod\_rewrite.so)
* Expire (mod\_expires.so)
* Header (mod\_headers.so)

Sinon, avec l'ajout du chargement asynchrone, vous pouvez utiliser le simple serveur HTTP Python à partir de la racine du projet :

    $ python -m SimpleHTTPServer 8000

Et dans votre navigateur visitez [localhost:8000](http://localhost:8000/tests/unit/core/). REMARQUE : Les docs ne se chargeront pas car ils sont tributaires de l'include "/js/" qui exige php. Pour d'autres travaux de développement tels que les tests unitaires et les tests des pages personnalisées en utilisant

    <script data-main="js/jquery.mobile.docs" src="external/requirejs/require.js"></script>

cela vous permettra de charger des modules de manière asynchrone, sans php. S'il vous plaît noter que l'exemple ci-dessus suppose qu'il est inclus dans une page à la racine du répertoire où le serveur HTTP a été exécuté.

AMD Support in Development
==========================

Veuillez garder à l'esprit que le chargement asynchrone n'est pas supporté pour la production et est principalement utilisé pour le processus de construction du projet. Par conséquent les développeurs doivent s'attendre à un flash initial du contenu non stylisé, qui ne se produira pas si la bibliothèque est compilée.

Si vous trouvez des bugs de dépendance lorsque vous utilisez le support de chargement asynchrone pour le développement veuillez le préciser dans le suivi des problèmes github.

Construction avec un thème personnalisé
=======================================
Pour utiliser un thème personnalisé dans votre propre construction, vous aurez besoin d'avoir Make installé. Vous pouvez trouver des thèmes dans le dossier CSS/Themes.
Pour créer un nouveau thème :

1. Copiez le répertoire `Default` depuis CSS/Themes vers un nouveau dossier au même endroit. Le nom du dossier sera le nom
 du thème. Pour les tests faits localement, assurez-vous que le fichier index.php est également copié.
2. Modifiez le fichier `jquery.mobile.theme.css` de sorte qu'il contienne vos polices et couleurs personnalisées.
3. Une fois que vous avez fini d'éditer et enregistrer vos fichiers, ouvrez un terminal.
4. Accédez à la racine du dossier jQuery-Mobile.
5. Exécutez la commande suivante pour construire jQuery Mobile. (THEME est le nom du répertoire pour votre thème de l'étape 1.) :

    make THEME=VotreNomDeTheme

6. Les fichiers compilés seront situés dans le dossier "compiled" à la racine de jQuery-Mobile.
