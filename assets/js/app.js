function nav(item){
	$('nav a').removeClass('active');
	$(item).addClass('active');
}
setTimeout(function(){
	 /**
     * Graph
     */
    var gitGraph = new GitGraph({
        author: '',
        template: 'metro',
    });

    var master = gitGraph.branch('Vie');

    master.commit({
        message: "- Naissance",
        sha1: '23 Septembre 1996'
    });

    var develop = gitGraph.branch('Scolaire');

    develop.commit({
        message: "École primaire de Cortaillod",
        sha1: '2002 - 2006',
    }).commit({
        message: "École secondaire les Cerisiers",
        sha1: '2007 - 2011'
    }).commit({
    	message: "Stage de cuisinier au Cheval blanc à Colombier",
    	sha1: '2009 - 3 jours'
    }).commit({
    	message: "Stage d'informaticien au SCIEN à Neuchâtel",
    	sha1: '2010 - 4 jours'
    });

    develop.merge(master, {
        message: "Fin de la scolarité obligatoire",
        sha1: '2012'
    });

    develop.commit({
        message: "Début d'apprentissage dessinateur au CIFOM",
        sha1: '2012 - 2013'
    }).commit({
        message: "Arrêt de l'apprentissage au CIFOM",
        sha1: 'Sept 2013'
    }).commit({
        message: " - Jusqu'à présent : Apprentissage d'informaticien CPLN",
        sha1: 'Sept 2013'
    });

    master.commit({
    	message: "Obtension d'un certificat JS Gymnastique",
    	sha1: '2015'
    });


    var firstjob = gitGraph.branch({
        parentBranch: develop,
        name: 'Professionnel'
    });

    firstjob.commit({
        message: "Engagement chez NEXANS SA",
        sha1: 'Mars 2016',
    });


    firstjob.merge(develop, {
        message: "Divers projets personnels Web",
        sha1: 'Avril 2016',
        detailId: "Web Dev / Serveur web"
    });


    firstjob.commit({
        message: "Apprentissage de différents frameworks",
        sha1: 'Juin 2016',
        detailId: 'framework java / rails'
    });

    develop.commit({
        message: "Mise en place d'un seuveur multimedia (Plex)",
        sha1: 'Août 2016',
        detailId: 'Serveur plex'
    });

    master.commit({
        message: "Fetching next story...",
        sha1: "Coming soon - "
    });

    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 75
            }, 1000);
            return false;
          }
        }
      });
    });
},2000);