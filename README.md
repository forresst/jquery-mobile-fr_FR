# jQuery Mobile

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

# jQuery Mobile

Ceci est le dépôt principal pour le projet jQuery Mobile. Depuis le [site officiel](http://jquerymobile.com):

> Un système d'interface utilisateur unifié basé sur HTML5 qui fonctionne parfaitement sur toutes les plateformes des appareils mobiles les plus populaires et qui est construit sur les fondations solides de jQuery et jQuery UI. Axée sur un code léger, construit sur l'amélioration progressive avec une conception flexible et facilement personnalisable.

jQuery Mobile 1.2 RC2 (1.2.0-rc.2) fonctionne avec les versions jQuery de la 1.6.4 à la 1.8.2. Vous pouvez trouver plus d'informations sur la façon dont la bibliothèque fonctionne et ce qu'elle est capable de faire par la lecture de la [documentation](http://mobile.jquery-fr.com/).

## Contribuez

Vous pouvez contribuer au projet en signalant les problèmes, en suggérant de nouvelles fonctionnalités ou en soumettant des pull requests.
Veuillez lire notre [Guide de contribution](https://github.com/jquery/jquery-mobile/blob/master/CONTRIBUTING.md) avant de soumettre.


## Construction/Personnalisation

Actuellement, la bibliothèque est livrée sur le CDN jQuery en un fichier JavaScript monolithique unique qui dépend de jQuery (non inclus) et d'un fichier CSS. Pour les utilisateurs, nous supportons les objectifs suivants de construction :

* `js` - résoudre les dépendances, construire, compacter et minifier les JavaScript utilisés pour jQuery Mobile
* `css` - résoudre les dépendances, construire, compacter et minifier tous les css, seulement le css de structure, et seulement le css de theme
* `docs` - construire les js et css, et faire les docs prêtes à une utilisation statique
* `zip` - packager tous les JavaScript et tous les css dans un zip

### Download Builder

The easiest way to obtain a custom build is to use the [download builder](http://jquerymobile.com/download-builder/). With it, you can select the parts of the library you need and both the CSS and JavaScript dependencies will be resolved for you as a packaged/minified whole.

### Requis

Les `js` et `css` construits, requièrent [node.js](http://nodejs.org/) et le package NPM. Pour les autres constructions, `docs` et `zip`, bash est aussi requis. Pour plus d'informations sur l'installation de node, veuillez regarder la [documentation](http://nodejs.org/#download). Car bash est généralement installé par défaut sur le shell dans de nombreux environnements compatibles POSIX (OSX, Linux, BSD, etc).

### Commandes

Avec node installé, vous pouvez lancer les `js` et `css` en éxécutant simplement ce qui suit à partir de la racine du projet :

    npm install
    node node_modules/.bin/grunt js # ou css

Notez que si vous avez la version appropriée de [grunt](https://github.com/cowboy/grunt) installé globalement, dans notre outil de construction, vous pouvez substituer `grunt` chaque fois que vous voyez `node node_modules/.bin/grunt`. Pour le reste de la construction de la documentation, nous préférons `grunt`.

Si vous voulez utiliser `docs` et `zip`, vous aurez besoin de bash et ils peuvent être exécutés par le texte suivant

   `grunt docs #` ou `grunt zip`

### JavaScript

Depuis la version 1.1, la librairie utilise la gestion des dépendances dans la construction de JavaScript en fournissant des [modules AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) qui peuvent être ajoutés ou supprimés à partir du module du méta noyau mobile `js/jquery.mobile.js`.

Par exemple, si un utilisateur a voulu exclure des widgets de formulaire pour réduire le poids de leur jQuery Mobile, ils faudra d'abord les supprimer à partir du module meta :

```diff
diff --git a/js/jquery.mobile.js b/js/jquery.mobile.js
index 6200fe6..3a4625c 100644
--- a/js/jquery.mobile.js
+++ b/js/jquery.mobile.js
@@ -19,12 +19,6 @@ define([
        './jquery.mobile.listview.filter',
        './jquery.mobile.listview.autodividers',
        './jquery.mobile.nojs',
-       './jquery.mobile.forms.checkboxradio',
-       './jquery.mobile.forms.button',
-       './jquery.mobile.forms.slider',
-       './jquery.mobile.forms.textinput',
-       './jquery.mobile.forms.select.custom',
-       './jquery.mobile.forms.select',
        './jquery.mobile.buttonMarkup',
        './jquery.mobile.controlGroup',
        './jquery.mobile.links',
```

Et puis exécutez la compilation :

    grunt js

### CSS

Pour créer un nouveau thème :

1. Copiez le répertoire `default` depuis CSS/Themes par un nouveau répertoire nommé avec votre nouveau thème (par exemple, `my-theme`).
2. Ajoutez les personnalisations au fichier `jquery.mobile.theme.css`.
3. Depuis la racine du projet, exécutez la commande `grunt` suivante :

        THEME=my-theme grunt css

4. Le résultat sera disponible dans `$PROJECT_ROOT/compiled`

Encore une fois, cela suppose que les fichiers css du thème soient disponibles dans le répertoire `css/themes/$THEME/` relatif à la racine du projet, `css/themes/my-theme/` dans l'exemple.

## Développement

La racine du dépôt est aussi la racine de la documentation qui contient une suite de tests. La documentation sert aussi de banc d'essai pour des corrections de bugs et de fonctionnalités. Vous aurez besoin de configurer un serveur et pour obtenir la suite des tests avant que vous puissiez contribuer pour des patches.

### Serveur

La plupart de la documentation et des pages de test reposent sur PHP 5+, donc Apache et PHP sont nécessaires pour le développement. Vous pouvez les installer en utilisant les méthodes suivantes :

* En un clic - [MAMP](http://www.mamp.info/en/downloads/index.html) pour OSX, [XAMP](http://www.apachefriends.org/en/xampp.html) pour OSX/Windows
* Serveur web existant - par exemple, le répertoire `~/Sites` sur OSX.
* Machine virtuel - Si [Vagrant](http://vagrantup.com) est installé vous pouvez ajouter [cette remote/branch](https://github.com/johnbender/jquery-mobile/tree/vagrant) et `vagrant up`

En ajoutant Apache, les modules suivants sont requis :

* Rewrite (mod\_rewrite.so)
* Expire (mod\_expires.so)
* Header (mod\_headers.so)

Une fois que vous avez la configuration de votre serveur web, vous pouvez le faire pointer vers le répertoire du projet.

### Tests

L'automatisation des tests constitue l'épine dorsale des activités de l'assurance qualité du projet jQuery Mobile. En tant que contributeur d'un patch, vous serez appelé à exécuter la suite de tests pour le code qui affecte votre patch. Notre serveur d'intégration continue portera sur le reste de la suite de test.

Il y a deux manières principales pour exécuter la suite de tests. Les deux nécessitent, avant tout, un serveur configuré comme décrit précédemment. Dont l'emplacement sera après mentionné comme `$WEB_SERVER` et devrait inclure le protocole. Tout d'abord, vous pouvez exécuter les tests individuellement en dirigeant votre navigateur vers les différentes pages de test associées à l'endroit dans lequel vous travaillez. Par exemple, pour exécuter les tests de `js/jquery.mobile.forms.slider.js` naviguer vers `$WEB_SERVER/tests/unit/slider/`. Pour savoir quelles pages de test sont disponibles, vous pouvez les lister avec :

    grunt config:test:pages

_NOTE_ Consultez les [exigences de construction](#requirements) pour les  informations d'installation de node/grunt.

Deuxièmement, vous pouvez exécuter les tests en utilisant [PhantomJS](http://phantomjs.org/) navigateur Webkit sans tête qui doit être [installé](http://code.google.com/p/phantomjs/wiki/Installation). Une fois que `phantomjs` est dans votre `PATH`  ce qui suit va exécuter la série de tests :

    JUNIT_OUTPUT=build/test-results/ ROOT_DOMAIN=$WEB_SERVER grunt test

Vous pouvez limiter l'exécution à une page de test ou à un ensemble de pages de test en utilisant la variable d'environnement `TEST_PATH`. Par exemple :

    TEST_PATH=slider JUNIT_OUTPUT=build/test-results/ ROOT_DOMAIN=$WEB_SERVER grunt test

exécutera seulement les tests où les chemins contiennent `slider`, par exemple `tests/unit/slider/`. *NOTEZ* Que les tests de phantom exigent actuellement que le serveur Web soit en cours d'exécution pour accéder et exécuter les tests correctement en raison de la dépendance de PHP pour beaucoup d'entre eux. En plus, la suite de test est exécutée sur de nombreuses versions de jQuery en utilisant la variable d'environnement `JQUERY`. Par exemple, si vous voulez lancer la suite de tests à la fois sur les versions 1.7.2 et 1.8.2 actuellement prises en charge, la commande prendrait la forme suivante :

    JQUERY=1.7.2,1.8.2 JUNIT_OUTPUT=build/test-results/ ROOT_DOMAIN=$WEB_SERVER grunt test

### Rebasing

Souvent, lorsque l'on travaille sur une fonctionnalité ou la correction d'un bug d'une d'une branch, il est utile de faire un pull dans la dernière branche mère. Si vous faites cela _avant_ de soumettre un pull request, il est préférable d'utiliser rebase de git pour appliquer vos commits sur la dernière branche mère. Par exemple, en travaillant sur la branche `new-feature` où `upstream` est distant de `git://github.com/jquery/jquery-mobile.git`:

    git checkout new-feature
    git fetch upstream
    git rebase upstream/master
    ## ... ici vous pouvez avoir à résoudre certains conflits ... ##

Vous pouvez maintenant pousser vers votre fork et soumettre le pull request. Gardez à l'esprit que c'est seulement une bonne idée de faire cela si vous _n'avez_ jamais sousmis un pull request, sauf si vous voulez en créer un nouveau parce que votre origine (votre fork) signale une divergence. Encore une fois, veuillez vous référer vers le [chapitre](http://git-scm.com/book/ch3-6.html) dans Pro Git sur le rebasing si vous débuter avec cette fonction.
