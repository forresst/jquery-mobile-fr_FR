## Problèmes

Si vous rencontrez un bug dans le framework, vous pouvez le signaler sur le gestionnaire d'incidents sur Github. Les questions sur la façon d'utiliser le framework ou les problèmes avec votre propre code peuvent être postés sur le [forum](https://forum.jquery.com/jquery-mobile).
Le [ThemeRoller](https://github.com/jquery/web-jquery-mobile-theme-roller) de jQuery Mobile et le [téléchargement du constructeur](https://github.com/jquery/jquery-mobile-builder) ont leur propre dépôt où vous pouvez reporter les problèmes.

Avant d'ouvrir un nouveau ticket, veuillez vérifier qu'un problème similaire n'est pas déjà était signalé. Astuce : En plus de l'outil de recherche des issues, vous pouvez filtrer les problèmes par le label.

Lorsqu'un [problème est soumis](https://github.com/jquery/jquery-mobile/issues/new) merci d'inclure ce qui suit :

1. Description du problème
2. La page de test (voir ci-dessous)
3. Les étapes pour le reproduire
4. Le résultat attendu
5. Le résultat actuel
6. Plateformes/navigateurs (incluant la version) et les appareils testés
7. Les versions de jQuery Mobile et jQuery utilisées
8. Autres informations pertinentes, par exemple l'utilisation de PhoneGap

Dans l'intérêt de créer des problèmes plus lisibles, merci d'inclure des extraits de code à l'intérieur d'une triple boîte backtick appropriée pour l'extrait de code JavaScript/HTML/CSS sur lequel vous souhaitez discuter. Plus d'informations sont disponibles sur la [page d'introduction](http://github.github.com/github-flavored-markdown/) pour "github flavored markdown" (regardez Syntax Highlighting).

### Page de test

Il est IMPORTANT de toujours fournir une page de test lorsque vous soumettez un problème!

* Pourquoi ? - Cela nous garantit de chercher exactement la même chose lors des tests sur nos appareils et de connaitre toutes les balises et le code qui est utilisé.

* Quoi ? - Proposer une page de test aussi simple que possible. Incluez seulement le balisage/code qui est nécessaire pour reproduire le problème.

* Comment ? - Utiliser notre [modèle JS Bin](http://jsbin.com/amozef/1/edit) qui utilise le code le plus récent sur la branche "master". Lorsque vous commencez à éditer le JS Bin, l'url se mettra à jour et contiendra un nouveau numéro de version. Tant que vous maintenez le JS Bin ouvert dans votre navigateur, l'url ne change pas. Copiez l'URL dans votre rapport de problème lorsque vous avez terminé l'édition. Si votre test nécessite plusieurs pages "simples" de jQuery Mobile, ouvrez le JS BIN sur plusieurs onglets de votre navigateur et chacun d'eux recevra une url unique. Liez cette url sans "/edit" à la fin de vos autre page(s).  
  * Vous remarquerez, si le problème a déjà été corrigé
  * Elle nous permet de modifier votre code si nécessaire
  * La page de test ne va pas disparaître ou changer pendant que nous étudions la question
  * Nous pouvons à nouveau tester après avoir committer un correctif pour le problème

## Demandes de fonctionnalité

Si vous avez une idée pour une nouvelle fonctionnalité ou une suggestion pour améliorer une fonctionnalité existante, dites le nous !

1. Ouvrez un [nouveau problème](https://github.com/jquery/jquery-mobile/issues/new) pour décrire votre demande
2. Ajouter un lien au problème vers la [page du wiki](https://github.com/jquery/jquery-mobile/wiki/Feature-Requests) "Feature Requests"

Veuillez noter que nous marquons le problème comme une demande de fonctionnalité et nous le fermons. Nous vérifions les demandes régulièrement et lorsque nous décidons de mettre en œuvre une fonctionnalité, nous posons un jalon et ouvrons à nouveau le ticket.

## Pull Requests

Lorsque vous soumettez un  pull request de révision, il y a quelques étapes importantes que vous pouvez prendre en compte afin de s'assurer qu'il soit examiné rapidement et d'augmenter les chances qu'il soit "merged" (dans l'ordre d'importance décroissant) :

1. Incluez les tests (voir [Test](https://github.com/jquery/jquery-mobile/blob/master/README.md#testing))
2. Suivez le [guide jQuery Core style](http://docs.jquery.com/JQuery_Core_Style_Guidelines)
3. Limitez la portée à un(e) problème/fonctionnalité
4. Les commits doivent ciblés moins de 10 à 20 lignes
5. Évitez de fusionner des commits (Voir le chapitre de Pro Git's [sur le rebasing](http://git-scm.com/book/ch3-6.html), section [Rebasing](#rebasing) ci-dessous) Ajouter le message commit approprié (voir ci-dessous)

Pris dans leur ensemble, cela simplifie l'examen du contributeur de votre pull request.

### Messages de Commit

Les messages de commit doivent inclure quatre éléments :

* Le WHERE - un seul mot qui catégorise et fournit un contexte pour le commit et son message, suivi par deux-points (:). C'est typiquement le nom du plugin en cours d'élaboration, mais parfois peut-être quelque chose comme Build: ou Docs:
* Le WHAT - un résumé suffisant de la solution ou d'une modification (par exemple: modified the foo to no longer bar), suivie d'un point (.)
* Le WHY #Num - le numéro de ticket avec le signe # pour créer un lien (exemple: #1234), suivi par le tiret (-)
* Le WHY Name - le nom du ticket. Notez que cette synthèse est différente de celle de la correction. Il s'agit d'une brève description du problème (par exemple: boîte de dialogue:IE6 s'est planté si foo est défini à bar)

Combinés en un seul, voici un exemple complet :

        "Dialog: modified the foo to no longer bar. Fixed #1234 - dialog: IE6 crashed when foo is set to bar"
        \WHERE/:\------------- WHAT -------------/.\  WHY #Num /-\---------------- WHY Name ----------------/


------------------------------------------------------------

*Nous vous remercions de contribuer au projet jQuery Mobile !*
