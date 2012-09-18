## Problèmes

Lorsqu'un problème est soumis, merci d'inclure ce qui suit :

1. Description du problème
2. Page de test utilisant notre [modèle jsbin](http://jsbin.com/owipah/edit) qui utilisent la dernière version
3. Les étapes pour le reproduire
4. Le résultat attendu
5. Le résultat actuel
6. Les versions de jQuery Mobile et jQuery utilisées
7. Appareils/plateformes/navigateurs testés
8. Autres informations pertinentes, par exemple l'utilisation de PhoneGap

Avant d'ouvrir un nouveau ticket, veuillez vérifier qu'un problème similaire n'est pas déjà était signalé. Astuce : En plus de l'outil de recherche des issues, vous pouvez filtrer les problèmes par le label.

En outre, dans l'intérêt de créer des problèmes plus lisibles, merci d'inclure des extraits de code à l'intérieur d'une triple boîte backtick appropriée pour l'extrait de code JavaScript/HTML/CSS sur lequel vous souhaitez discuter. Plus d'informations sont disponibles sur la [page d'introduction](http://github.github.com/github-flavored-markdown/) pour "github flavored markdown" (regardez Syntax Highlighting).

Le [ThemeRoller](https://github.com/jquery/web-jquery-mobile-theme-roller) de jQuery Mobile et le [téléchargement du constructeur](https://github.com/jquery/jquery-mobile-builder) ont leur propre dépôt où vous pouvez reporter les problèmes.

## Pull Requests

Lorsque vous soumettez un  pull request de révision, il y a quelques étapes importantes que vous pouvez prendre en compte afin de s'assurer qu'il soit examiné rapidement et d'augmenter les chances qu'il soit "merged" (dans l'ordre d'importance décroissant) :

1. Incluez les tests (Voir [Test](#tests))
2. Suivez le [guide jQuery Core style](http://docs.jquery.com/JQuery_Core_Style_Guidelines)
3. Limitez la portée à un(e) problème/fonctionnalité
4. Les commits doivent ciblés moins de 10 à 20 lignes
5. Évitez de fusionner des commits (Voir le chapitre de Pro Git's [sur le rebasing](http://git-scm.com/book/ch3-6.html), section [Rebasing](#rebasing) ci-dessous) Ajouter le message commit approprié (voir ci-dessous)

Pris dans leur ensemble, cela simplifie l'examen du contributeur de votre pull request.

### Messages de Commit

Les messages de Commit doivent inclure 4 composants :
* Le WHERE - un seul mot qui catégorise et fournit un contexte pour le commit et son message, suivi par deux-points (:). C'est typiquement le nom du plugin en cours d'élaboration, mais parfois peut-être quelque chose comme Build: ou Docs:
* Le WHAT - un résumé suffisant de la solution ou d'une modification (par exemple: modified the foo to no longer bar), suivie d'un point (.)
* Le WHY #Num - le numéro de ticket avec le signe # pour créer un lien (exemple: #1234), suivi par le tiret (-)
* Le WHY Name - le nom du ticket. Notez que cette synthèse est différente de celle de la correction. Il s'agit d'une brève description du problème (par exemple: boîte de dialogue:IE6 s'est planté si foo est défini à bar)

Combinés en un seul, voici un exemple complet :

        "Dialog: modified the foo to no longer bar. Fixed #1234 - dialog: IE6 crashed when foo is set to bar"
        \WHERE/:\------------- WHAT -------------/.\  WHY #Num /-\---------------- WHY Name ----------------/
