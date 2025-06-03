// === script.js ===

const content = document.getElementById("content");
const themeToggle = document.getElementById("theme-toggle");

const sections = {
    biographie: `
    <section>
        <h2>À propos de moi</h2>
        <div>
            <p class="pl10px justifier">
                Moi, Alexandre Deschanel, mage apprenti de deuxième cercle à l’IUT Montpellier-Sète, 
                ai franchi le Premier Sceau de Connaissance Général mention bien en 2023, 
                me formant aux arcanes de l’Incantation Algorithmique et aux Sciences Numériques & Géométriques — 
                les fondations du savoir ancien et logique.
            </p>
            <p class="pl10px justifier">
                Je vous présente mon grimoire, il retrace mes différents accomplissements passés ainsi que les quêtes et objectifs que je poursuis aujourd’hui.            
            </p>
        </div>
    </section>
 
    <section>
        <h2>Expériences Professionnels</h2>
        <div class="">
            <h3 class="">Stage de 3 mois - CFPO - 13 janvier au 4 avril</h3>
            <p class="pl10px">
                Expérience de 3 mois en stage au CFPO,<br>
                centrée sur le développement logiciel et <br>
                la mise en œuvre de projets informatiques.
            </p>
        </div>
    </section>
    <section>
        <h2>Parcours de formation</h2>
        <div class="cote centrer cent">
            <div class="cinquante">
                <h3 class="centrer">IUT Informatique IUT de Montpellier-Sète</h3>
                <p class="centrer">MONTPELLIER 2023 - 2026</p>
            </div>
            <div class="cinquante">
                <h3 class="centrer">BACCALAUREAT GENERAL</h3>
                <p class="centrer">Obtenu en 2023 avec mention assez bien 
                <br>au Lycée Marc Bloch, Sérignan</p>
            </div>
        </div>
    </section>
    <section>
        <h2>Projet professionnel</h2>
        <div class="pl10px justifier">
            <p>Objectif : devenir Lead Game Designer au sein d’une escouade créative indépendante.
            <br>Actuellement en phase de level-up, je projette d’intégrer une école spécialisée en création de jeux vidéo, pour booster mes stats en gameplay, narration interactive et design UX.</p>
            <p>Mon rêve ? Lancer des projets coopératifs avec mon équipe IRL — des jeux originaux, immersifs, et codés avec passion.
            <br>Le boss final ? Fonder notre propre studio, et déployer nos univers aux quatre coins du multivers numérique.</p>
        </div>
    </section>
    `,



    projets: `
    <h2>Projets</h2>
    <p class="pl10px justifier">Voici quelques projets : </p>
    <section id="projets" class="carousel-section">
        <div class="carousel">
            <div class="carousel-item" data-target="train">
            <p>TRAIN</p>
            <img src="img/train.png" alt="TRAIN">
          <button class="project-btn" onclick="navigate('train')">Voir le projet</button>
        </div>
        <div class="carousel-item" data-target="ctfz">
            <p>CTF + Z</p>
            <img src="img/ctfz.png" alt="CTF+Z">
            <button class="project-btn" onclick="navigate('ctfz')">Voir le projet</button>
        </div>
        <div class="carousel-item" data-target="ndi">
            <p>NUIT DE L'INFO 2024</p>
            <img src="img/ndi.png" alt="nuit de l'info">
            <button class="project-btn" onclick="navigate('ndi')">Voir le projet</button>
        </div>
        <div class="carousel-item" data-target="stage">
            <p>STAGE</p>
            <img src="img/stage.png" alt="stage">
            <button class="project-btn" onclick="navigate('stage')">Voir le projet</button>
        </div>
        <div class="carousel-item" data-target="stage">
            <p>NO GAME NO LIFE</p>
            <img src="img/ngnl.png" alt="ngnl">
            <button class="project-btn" onclick="navigate('ngnl')">Voir le projet</button>
        </div>
        <div class="carousel-item" data-target="dame">
            <p>Dame</p>
            <img src="img/dame.png" alt="dame">
            <button class="project-btn" onclick="navigate('dame')">Voir le projet</button>
        </div>
    </section>
    `,



    train : ` 
    <h2>TRAIN</h2>
    <div class="cote">
        <div class="septente">
            <p>Trains est un projet de première année de BUT, ayant pour objectif la digitalisation du jeu éponyme</p><br>
            <p>Dans cette adaptation, il est possible de jouer de deux à quatre personnes, sur les cartes de Tokyo et Osaka</p>
            <p>Pour cela, nous étions en groupe de deux. Et avions comme contrainte de réaliser ce code en Java et JaveFX.</p>
            <p>Sur ce projet, la repartition des tâches est compliqué, car le travail fut régulièrement éfféctuer de façons conjointes.</p>
            <p>Mais il y a des choses dont je me suis occupé seul, notamment le découpage de l'interface et le style du tout, mon coéquipier, c'est quant à lui, occuper seul de l'interface de selection.</p>
        </div>
        <div class="trente">
            <img class="cent pl10px" src="img/trainmenu.png" alt="menu">
        </div>
    </div>
    <br>
    <div class="cote">
        <div class="trente">
            <img class="cent" src="img/train.png" alt="menu">
        </div>
        <div class="septente pl10px">
            <p>Le jeu trains est un jeu de plateau, ou l'objectif est de finir la partie avec le plus de points représentés par des étoiles.</p>  
            <p>Pour réaliser cet objectif, il aura access à différentes cartes au divers effets.</p>            
            <p>Mais attention, car les cartes sont limité, la limite diffère en fonction de la carte.</p>              
            <p>La partie s'arrête soit quand l'un des joueurs n'a plus de rails soit quand toutes les gares ont été posé.</p>  
        </div>
    </div>
    <div>
        <img class="cent" src="img/trainplan.png" alt="plan">
        <p>L'interface ci-dessus est divisé en cinq parties :</p>
        <ul>
            <li><p>Tout en haut de la page une bande noire, indique le joueur courant et se qu'il peut faire.</p></li>
            <li><p>À gauche, il y a le "turn order", celui-ci indique l'ordre de jeu et quelques informations sur les autres joueurs.</p></li>
            <li><p>Au centre, il y a le plateau, qui permet aux joueurs le placement des rails, des gares ou encore obtenir des étoiles.</p></li>
            <li>
                <p>À droite, il y a la reserve et les cartes en jeu :</p>
                <ul>
                    <li><p>La reserve est composé de cartes aléatoirement choisies toutes achetables, à l'exception de la carte ferraille qui est toujours présente, mais pas achetable.</p></li>
                    <li><p>En dessous, il y a les cartes en jeu, qui represent les cartes jouer ce tour.</p></li>
                </ul>    
            </li>
            <li>
                <p>En bas l'interface est elle-même divisé en cinq parties :</p>
                <ul>
                    <li><p>À gauche, le deck avec au-dessus le nombre de cartes restent.</p></li>
                    <li><p>À droite, le tas qui correspond à la défausse. Une fois le deck vide les cartes de la défausse forme un nouveau deck</p></li>
                    <li><p>À côté du deck est visible la main, qui contient les cartes utilisables ce tours-ci.</p></li>
                    <li><p>À droite de la main, se trouve l'endroit où sont stockées les cartes en attente d'être ajouté dans le deck.</p></li>
                    <li><p>Au-dessus, se trouve les informations du joueur avec respectivement son nom, son nombre de rails, son nombre de rails restent et son nombre de points.</p></li>
                </ul>    
            </li>
        </ul>
    </div>
    <div class="cote centrer">
        <div class="cinquante">
            <img class="cent" src="img/trainfin.png" alt="ecran fin">
        </div>
        <div class="cinquante pl10px ">
            <p>Une fois votre partie terminée, chaque joueur ce voi décerné un grade allant de Gagnant à SNCF.</p>
            <p>Il est alors proposé aux joueurs de recommencer une partie ou de retourné à l'écran titre.</p>
        </div>
    </div>
    `,



    ctfz : ` 
    <h2>CTF+Z</h2>
    <p>CTF+Z est un projet pour association Yggame, dont l'objectif est la réalisation d'un ctf de type jeopardy.</p>
    <br>
    <div class="cote">
        <div class="septente ">
            <p>Les demandes du Client étaient :</p>
            <ul>
               <li><p>Divertir les participants tout en leur enseignant de nouvelles choses sur la cybersécurité.</p></li>
               <li><p>Une gestion des équipes, de compte, de scores inter-joueur et inter-équipe disponible pour tout.</p></li>
               <li><p>Des défis de tout genres et niveaux, trié par domaine et difficulté, avec la possibilité de mettre des indices.</p></li>
               <li><p>Un tout ludique et pédagogique tout en restant dans le sérieux.</p></li>
               <li><p>Un site capable de géré entre 50 et 300 participants.</p></li>
               <li><p>Une documentation administrateur pour la résolution des différents défis.</p></li>
               <li><p>La gestion des visiteurs de façons à ce qu'ils ne peuvent accéder uniquement au scoreboard des équipes.</p></li>
            </ul>
            <br>
            <p>Pour ce faire, nous avons commencé par une analyse de l'existant.</p>
            <p>Une fois celle-ci faite, conjointement au client, nous avons choisi la plateforme ctfd.</p>
        </div>
        <div class="trente pl10px">
            <img class="cent" src="img/ctfz.png" alt="ctfz">
            <img class="cent" src="img/ctfzregle.png" alt="regle">
            <img class="cent" src="img/ctfzequipe.png" alt="equipe">
        </div>
    </div>
    <p>La première étape fut l'analyse de ctfd, ce qui nous a permis de répondre assez rapidement à une partie des demandes du client.</p>
    <p>Ci-dessus se trouve la page de règle aisément implémentable et la gestion des équipes près gérée par ctfd.</p>
    <br>
    <p>La gestion des comptes, des équipes, des scores et des défis fait aussi partie des éléments intégrés nativement dans ctfd</p>
    <br>
    <div class="cote spaceb">
        <img class="trente" src="img/ctfzstat.png" alt="stat">
        <img class="trente" src="img/ctfzscore.png" alt="score">
        <img class="trente" src="img/ctfzuser.png" alt="user">
    </div>
    <br>
    <div class="cote">
        <div class="trente">
            <img class="cent" src="img/ctfzdefis.png" alt="user">
        </div>
        <div class="septente pl10px">
            <p>Sur ce projet, je me suis principalement occupé de la gestion des défis.</p>
            <p>Que ce soit dans leur réalisation, leurs nommages ou leurs concepts.</p>
            <p>Sur le total des quinze défis, j'ai imaginé et nommé onze défis, et réalisé dix d'entre eux.</p>
            <p>Je vais vous présenter l'un d'entre eu si dessous</p>
        </div>
    </div>
    <br>
    <div class="cote">
        <div class="septente">
            <p>Mission Inzipssible fait référence à la célébre series de film Mission Impossible et a ce que le participent devra faire entre-autre réussir à dézipper un fichier donné</p>
            <p>Ce défi fut compliqué dans sa réalisation, principalement du fait de sa notice divisé en deux parties</p>
            <p>D'une part il y a un guide installation de VM kali linux et d'autre part le guide sur l'utilisation de "John the Ripper".</p>
        </div>
        <div class="trente pl10px">
            <img class="cent" src="img/ctfzzip.png" alt="zip">
        </div>
    </div>
    `,



    stage : ` 
    <h2>STAGE</h2>
    <p>Mon stage de deuxième année s’est déroulé du 13 janvier au 4 avril au CFPO (Centre de Formation Professionnelle Occitan), un organisme de gestion de formations professionnelles. Intégré à une petite équipe, j’ai eu l’occasion de travailler sur le logiciel Dolibarr, un ERP/CRM libre, en développant et améliorant des modules adaptés aux besoins internes de la structure.</p>
    <p>J’ai d’abord été chargé de concevoir un module de transfert de données entre deux systèmes, avec pour objectif de faciliter certaines synchronisations.</p>
    <div class="cote spaceb">
        <div class="trente container" >
            <img class="cent" src="img/stageagefoddxacceuil.png" alt="acceuil agefoddx">
        </div>
        <div class="trente container">
            <img class="cent" src="img/stageagefoddxajout.png" alt="page ajout agefoddx">
        </div>
        <div class="trente container" >
            <img class="cent" src="img/stageagefoddxbd.png" alt="modele EA agefoddx">
        </div>
    </div>
    <p>Une fois le module initial terminé, nous avons constaté que l’entreprise externe concernée ne permettait pas ce type d’intégration, ce qui m’a conduit à redévelopper entièrement le module en utilisant une API REST conforme à leurs contraintes. Ce changement m’a permis d’approfondir ma compréhension des échanges entre systèmes, tout en adaptant mon code aux exigences d’un environnement réel.</p>
    <div class="container">
        <img class="septente" src="img/stageapi.png" alt="partie de code de l'api">
    </div>

    <p>En parallèle, j’ai contribué à l’amélioration de l’interface de gestion des congés RH, en retravaillant l’ergonomie et certains aspects visuels du module. J’ai utilisé pour cela HTML, CSS, et un peu de JavaScript, en prenant en compte l’existant et les besoins des utilisateurs.</p>
     <img class="cent" src="img/stageacm.png" alt="comparaison de l'ancienne et la nouvelle interface de visualisation de congé">
    <p>J’ai travaillé avec IntelliJ IDEA, WampServer pour l’environnement local, et Nextcloud pour la gestion collaborative des documents. Ce stage a renforcé mon autonomie : j’ai souvent dû identifier les problèmes, proposer des solutions concrètes, et aller jusqu’à leur mise en œuvre.</p>
    <p>J’ai particulièrement apprécié l’ambiance de travail, ainsi que la liberté d’initiative laissée sur les projets. Si je devais améliorer un aspect de mon travail, ce serait la gestion de la communication externe, notamment avec les RH et les partenaires techniques.</p>
    `,



    ngnl : ` 
    <h2>NO GAME NO LIFE</h2>
    <div class="cote spaceb">
        <div class="cinquante"><img class="cent" src="img/ngnl.png" alt="ecran titre"></div>
        <div class="cinquante"><img class="cent" src="img/ngnlhub.png" alt="hub"></div>
    </div>
    
    <div class="cote">
        <div class="septente">
            <p>NO GAME NO LIFE est un projet réalisé en Python au cours de mon année de Terminale. Il s’agissait d’un projet de groupe dont l’objectif était de créer une compilation de mini-jeux. Chaque membre de l’équipe développait un jeu en autonomie, puis nous les avons rassemblés dans une application commune via une interface de sélection.</p>
            <p>Pour ma part, j’ai choisi de retravailler un ancien projet personnel : un jeu de dames que j’avais réalisé en première. J’ai entièrement refactoré le code, initialement en terminal, pour le rendre plus lisible, mieux structuré et accompagné d’une interface graphique en Tkinter. Ce travail m’a permis de mesurer ma progression, en passant d’un code brut et peu optimisé à une version bien organisée, avec des classes, des fonctions claires, et une gestion d’interface adaptée.</p>
        </div>
        <div class="trente container pl10px">
            <img class="cent" src="img/dame.png" alt="dame">
        </div>
    </div>
    <p>En parallèle, j’ai conçu et développé l’interface principale du projet, qui permet de :</p>
    <ul>
        <li><p>Sélectionner un jeu parmi ceux proposés</p></li>
        <li><p>Gestion des scores et des points marqués par chaque joueur</p></li>
        <li><p>Lancer dynamiquement du jeu correspondant</p></li>
    </ul>
    <div class="cote spaceb">
        <img class="trente" src="img/ngnlscore.png" alt="page de score">
        <img class="trente" src="img/ngnldio.png" alt="jeu de dame">
        <img class="trente" src="img/ngnljotaro.png" alt="flappy bird">
    </div>
    <p>Une description plus détaillée de mon travail sur le jeu de dames est disponible ici : <a href="#" onclick="navigate('dame')">Voir le projet Dame</a></p>
    <p>Ce projet m’a permis de consolider mes compétences en programmation orientée objet, en interface utilisateur avec Tkinter, en refonte de code existant et en collaboration autour d’un projet commun.</p>
    `,



    dame : ` 
    <h2>Dame</h2>
    <p>Ce projet a débuté lors de mon année de Première dans le cadre d’un travail libre, où nous pouvions choisir un jeu à développer. Mon binôme et moi avons décidé de relever un défi ambitieux en créant un jeu de dames en Python, avec une interface graphique réalisée grâce à Tkinter, que nous découvrions pour la première fois.</p>
    <p>Nous avons avancé étape par étape, en construisant un jeu jouable de manière incrémentale. Afin de suivre l’évolution du projet, nous avons mis en place un système de versionnage maison au format x.y : x pour les évolutions majeures (ajout des règles, gestion des captures, etc.), et y pour les améliorations mineures (optimisation, corrections de bugs, esthétique...).</p>
    <p>Le plateau et les pions étaient dessinés de façon responsive, s’adaptant dynamiquement à la taille de la fenêtre. À la fin du projet en binôme, nous avions une version fonctionnelle, bien que non optimisée. Cependant, avec l’évolution de Python et de Tkinter, certaines parties de ce code ne sont aujourd’hui plus compatibles.</p>
    <br>
    <div class="container">
        <video controls class="cinquante">
            <source src="https://drive.google.com/file/d/1z5b1SLEHLHIAM103Uab2vvuEJUsmBfPE/view?usp=sharing" type="video/mp4">
            Votre navigateur ne prend pas en charge la lecture de vidéo.
        </video>
    </div>
    <br>
    <p>En Terminale, dans le cadre d’un projet encadré et évalué, j’ai choisi de reprendre ce jeu en solo pour en proposer une refonte complète. J’ai retravaillé toute la structure du code, amélioré la logique du jeu et soigné l’ergonomie, toujours avec Tkinter. Ce projet m’a permis de renforcer ma maîtrise de la programmation orientée objet, de la gestion d’interfaces graphiques, ainsi que des principes de modularité et maintenabilité du code.</p>
    <p>Ce projet m’a accompagné pendant deux années et reflète bien mon évolution progressive en développement logiciel, depuis mes premières découvertes jusqu’à une version plus structurée et aboutie.</p>
    `,



    eliga: ` 
    <h2>ELIGA</h2>
    <p>En cours de construction ... </p>
       
    `,



    ndi : ` 
    <h2>NUIT DE L'INFO 2024</h2>
    <p>À l’occasion de la Nuit de l’Info 2024, un hackathon national de 12 heures, j’ai participé à un projet collaboratif autour d’un enjeu environnemental majeur : la pollution des mers et des océans. Notre objectif était de concevoir, en un temps très court, un site web interactif capable de sensibiliser les internautes à la protection du milieu marin à travers des contenus pédagogiques, ludiques et visuellement attrayants.</p>
    <p>Le site est consultable à l’adresse suivante : <a href="https://ndi2024.jumperboost.fr">ndi2024.jumperboost.fr</a></p>
    <br>
    <p>Durant toute la durée du hackathon, j’ai assuré un rôle transversal, mêlant soutien technique, artistique et humain.</p> 
    <ul>
        <li><p>En tant que soutien technique, j’ai contribué à la réflexion sur les choix fonctionnels, aidé à résoudre certains blocages, et facilité la communication entre les membres.</p></li>
        <li><p>En tant que soutien artistique, j’ai participé à la création et à l’amélioration de l’univers visuel du site pour le rendre cohérent, attractif et engageant.</p></li>
        <li><p>En tant que soutien moral, j’ai joué un rôle moteur dans la cohésion d’équipe, en maintenant une ambiance positive, en motivant les membres dans les moments de fatigue et en assurant une bonne circulation des idées.</p></li>
    </ul>
    <br>
    <p>Même sans coder directement, j’ai été impliqué dans presque tous les aspects du projet, apportant un regard critique, des idées concrètes et des solutions pour que chaque défi soit relevé efficacement. Cette expérience m’a permis de mesurer l’impact que peut avoir le numérique dans la sensibilisation à des causes environnementales, et de prendre conscience de l’importance des rôles non-techniques dans la réussite d’un projet informatique.</p>
    `,



    portfolio: `
    <h2>Compétence 1 : Réaliser un développement d’application</h2>
    <ul>
        <li><h3>Niveau 2 : Partir des exigences et aller jusqu’à une application complète</h3></li>
        <ul>
            <li><h4>AC 1: Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences</h4></li>
                <p class="pl10px">
                    Projet : <a href="#" onclick="navigate('ctfz')">CTF+Z</a><br>
                    Dans ce projet, j’ai participé à la mise en place d’un CTF (Capture The Flag) de type jeopardy pour l’association Yggame. En partant des besoins du client, nous avons effectué une analyse de l’existant pour identifier les solutions disponibles. C’est ainsi que nous avons sélectionné la plateforme CTFd, qui répondait aux exigences fonctionnelles de gestion des comptes, des scores et des défis. J’ai ensuite élaboré et réalisé une grande partie des défis (11 conçus, 10 réalisés), en tenant compte de leur difficulté, du domaine visé, et de leur cohérence pédagogique.
                </p>
            <br><li><h4>AC 2: Appliquer des principes d’accessibilité et d’ergonomie</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('train')">Trains</a><br>
                    Durant ce projet en Java/JavaFX, j’ai conçu et implémenté l’interface utilisateur du jeu (hors interface de sélection). J’ai veillé à l’ergonomie générale en organisant l’interface en cinq zones clairement identifiables, permettant une bonne lisibilité des informations (joueurs, deck, main, plateau, cartes, etc.). La structuration de l’information et le contraste des éléments visuels ont été pensés pour guider l'utilisateur tout au long de la partie.
                </p>
            <br><li><h4>AC 3: Adopter de bonnes pratiques de conception et de programmation</h4>
                <p>
                    Projet : <a href="#" onclick="navigate('train')">Trains</a><br>
                    Dans le projet Trains, nous avons appliqué une séparation claire des responsabilités entre les composants JavaFX, respectant les principes MVC pour organiser le code.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('ctfz')">CTF+Z</a><br>
                    Dans le projet CTF+Z, chaque défi a été conçu de manière modulaire, avec une attention portée à la clarté des consignes, à la documentation pour les administrateurs et à la maintenabilité des fichiers de défi.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('ngnl')">NO GAME NO LIFE</a><br>
                    Lors de la refonte de mon ancien jeu en Python, j’ai repensé l’architecture pour séparer la logique du jeu de l’interface graphique.
                </p>
            <br><li><h4>AC 4: Vérifier et valider la qualité de l’application par les tests</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('train')">Trains</a><br>
                    Tests fonctionnels manuels réalisés à chaque nouvelle fonctionnalité. La détection de bugs dépendait d’un scénario de jeu régulièrement reproduit.                
                </p>
        </ul>
    </ul>
    <br><br>
    
    
    <h2>Compétence 2 : Optimiser des applications</h2>
    <ul>
        <li><h3>Niveau 2 : Sélectionner les algorithmes adéquats pour répondre à un problème donné</h3></li>
        <ul>
            <li><h4>AC 1: Choisir des structures de données complexes adaptées au problème</h4>
                <p>
                    Projet : <a href="#" onclick="navigate('train')">Trains</a><br>
                    Dans la gestion du jeu, nous avons utilisé des collections Java pour représenter les différents éléments du jeu : cartes, joueurs, gares, etc. Le choix de la structure dépendait du type d’accès et de manipulation requis (ex : accès rapide aux cartes en main, stockage ordonné des cartes jouées).
                </p>
                <p>
                     Projet : <a href="#" onclick="navigate('dame')">Dame</a><br>
                     Implémentation de matrices pour représenter le plateau de jeu et gestion des mouvements des pions, nécessitant une organisation rigoureuse des données.
                </p>
                
            <br><li><h4>AC 2: Utiliser des techniques algorithmiques adaptées pour des problèmes complexes</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('train')">Train</a><br>
                    Application d'algorithmes de parcours de graphe pour vérifier les chemins empruntés.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('dame')">Dame</a><br>
                    Conception d'algorithmes pour la détection des mouvements valides et des prises multiples, ainsi que pour la gestion des promotions de pions.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('ctfz')">CTF+Z</a><br>
                    Pour certains défis, j’ai mis en place des scripts exploitant des méthodes de déchiffrement ou de brute-force (comme l’utilisation de John the Ripper).
                </p>
                
            <br><li><h4>AC 3: Comprendre les enjeux et moyens de sécurisation des données et du code</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('ctfz')">CTF+Z</a><br>
                    Sensibilisation aux failles courantes en cybersécurité à travers des défis pratiques, mettant en évidence l'importance de la sécurisation des données.
                    J’ai donc été amené à créer des failles contrôlées pour des scénarios de défis.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    Mise en œuvre de requêtes SQL sécurisées, validation des données entrantes et protection des endpoints API pour assurer la sécurité des modules développés.
                </p>
                
            <br><li><h4>AC 4: Évaluer l’impact environnemental et sociétal des solutions proposées</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('ndi')">Nuit de l'info</a><br>
                    Le site web que nous avons développé visait à sensibiliser aux problématiques environnementales (pollution des mers). 
                    J’ai participé à l’aspect visuel et organisationnel pour rendre le message clair et engageant.
                </p>
        </ul>
    </ul>
    <br><br>
    
    
    <h2>Compétence 3 : Administrer des systèmes informatiques communicants complexes</h2>
    <ul>
        <li><h3>Niveau 2 : Déployer des services dans une architecture réseau</h3></li>
        <ul>
            <li><h4>AC 1: Concevoir et développer des applications communicantes</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    Développement de module permettant le transfert de données via API REST, avec authentification et gestion des erreurs.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('ctfz')">CTF+Z</a><br>
                    Utilisation de la plateforme CTFd pour gérer les interactions entre les participants et le système, incluant la soumission de réponses et la consultation des scores.
                </p>
                
            <br><li><h4>AC 2: Utiliser des serveurs et des services réseaux virtualisés</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('ctfz')">CTF+Z</a><br>
                    Déploiement de la plateforme CTFd sur un serveur dédié et utilisation de machines virtuelles (Kali Linux) pour certains défis.<br>
                    Travail sur un environnement de développement virtualisé, utilisant des conteneurs Docker et des environnements préconfigurés.
                </p>    
            <br><li><h4>AC 3: Sécuriser les services et données d’un système</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    Gestion des droits d’accès et sécurisation des opérations de transfert (filtrage, vérification des données).
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('ctfz')">CTF+Z</a><br>
                    Mise en place de restrictions pour l’accès visiteur (scoreboard uniquement) et conception de failles maitrisées.             
                </p>
        </ul>
    </ul>
    <br><br>
    
    
    <h2>Compétence 4 : Gérer des données de l’information</h2>
    <ul>
        <li><h3>Niveau 2 : Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité</h3></li>
        <ul>
            <li><h4>AC 1: Optimiser les modèles de données de l’entreprise</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    Optimisation des structures de données pour améliorer les performances des modules développés, incluant l'indexation des colonnes et l'optimisation des requêtes SQL complexes.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('eliga')">Eliga</a><br>
                    Participation a la restructuration du système de gestion de données. Passage d’un suivi papier et informatique chaotique à un modèle numérique mieux organisé.
                </p>
            <br><li><h4>AC 2: Assurer la confidentialité des données </h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    Précautions lors des transferts entre bases. Mise en place de validations côté serveur et de restrictions sur les modules Dolibarr.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('ctfz')">CTF+Z</a><br>
                    Protection des données des participants et des défis, avec des restrictions d'accès appropriées.
                </p>
            <br><li><h4>AC 3: Organiser la restitution de données à travers la programmation et la visualisation</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('train')">Trains</a><br>
                    Affichage dynamique des informations de jeu (score, réserve, deck) via l’interface graphique.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('ctfz')">CTF+Z</a><br>
                    Affichage personnalisé des scores par équipe et joueur sur le scoreboard.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('dame')">dame</a><br>
                    Affichage dynamique des informations de jeu (score, nom, pion) via l’interface graphique.
                </p>
            <br><li><h4>AC 4: Manipuler des données hétérogènes</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    Traitement de données issues de bases variées (différentes structures, formats JSON ou SQL).
                </p>
        </ul>
    </ul>
    <br><br>
    
    
    <h2>Compétence 5 : Conduire un projet</h2>
    <ul>
        <li><h3>Niveau 2 : Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs</h3></li>
        <ul>
            <li><h4>AC 1: Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('eliga')">Eliga</a><br>
                    En participant à la refonte du système de gestion de données d’une organisation, j’ai identifié les limites du fonctionnement papier (BD, registres) et contribué à leur numérisation pour améliorer l’efficacité
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    J’ai analysé les processus RH liés aux congés et les opérations de transfert de données, pour ensuite proposer des modules qui les automatisent.
                </p>
            <br><li><h4>AC 2: Formaliser les besoins du client et de l’utilisateur</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('ctfz')">CTF+Z</a><br>
                    Nous avons co-construit les exigences du projet avec le client (l’association Yggame), en organisant des réunions pour définir les fonctionnalités essentielles : gestion d’équipes, scoreboard, défis classés, etc.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    J’ai discuté avec le personnel encadrant pour recueillir leurs besoins spécifiques, notamment sur l’automatisation des transferts et l’ergonomie de l’interface RH.
                </p>
            <br><li><h4>AC 3: Identifier les critères de faisabilité d’un projet informatique</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('train')">Train</a><br>
                    Le projet avait une forte contrainte technique (JavaFX imposé) et un délai serré. Nous avons dû ajuster nos ambitions graphiques et fonctionnelles en fonction de nos compétences et du temps imparti.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    Les limites des modules Dolibarr existants ont été étudiées pour décider s’il fallait étendre ou recréer certaines fonctionnalités, en fonction des délais et contraintes techniques.
                </p>
            <br><li><h4>AC 4: Définir et mettre en œuvre une démarche de suivi de projet</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('ctfz')">CTF+Z </a><br>
                    Répartition claire des tâches (ex. : conception/création des défis avec leurs notices de resolution pour moi), suivi des avancées via Trello et gitlab, points réguliers d’équipe. Documentation administrateur également prévue dès le départ.
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    Planification des phases de développement, tests et déploiement sur un calendrier restreint, avec retour régulier vers le tuteur de stage pour validation progressive.
                </p>
        </ul>
    </ul>
    <br><br>
    
    
    <h2>Compétence 6 : Collaborer au sein d’une équipe informatique</h2>
    <ul>
        <li><h3>Niveau 2 : Situer son rôle et ses missions au sein d’une équipe informatique</h3></li>
        <ul>
            <li><h4>AC 1: Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    Le stage m’a permis de comprendre l’intégration des modules développés dans un logiciel de gestion plus large (RH, congés, comptabilité). J’ai saisi l’impact d’un développement sur l’ensemble d’un SI.
                </p>
                
            <br><li><h4>AC 2: Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    J’ai suivi les pratiques internes (tests, normes de code), et communiqué régulièrement avec le maître de stage.
                </p>
                
            <br><li><h4>AC 3: Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('ndi')">Nuit de l'info</a><br>
                    Lors de cet événement en équipe, j’ai été un soutien technique, moral et artistique. J’ai aidé sur presque chaque défi, sans être développeur principal, et favorisé la cohésion.
                </p>
                
            <br><li><h4>AC 4: Rendre compte de son activité professionnelle</h4></li>
                <p>
                    Projet : <a href="#" onclick="navigate('CTF+Z')">CTF+Z</a><br>
                    Rédaction de documentation utilisateur, et présentations orales. 
                </p>
                <p>
                    Projet : <a href="#" onclick="navigate('stage')">Stage</a><br>
                    Rédaction de documentation utilisateur, rapports de stage, et présentations orales. 
                </p>
        </ul>
    </ul>
    `,



    contact: `
    <h2>Contact</h2>
    <p>Envoyez-moi un message via mon corbeau numérique : <a href="mailto:alexandre.deschanel.666@gmail.com">alexandre.deschanel.666@gmail.com</a></p>
    <p>Grimoire public de mes quêtes professionnelles : <a href="https://www.linkedin.com/in/alexandre-deschanel-8a24512ab/" target="_blank">Linkedin</a></p>
    <p>Forge de projets magiques et sortilèges numériques : <a href="https://github.com/Desal-Soul" target="_blank">GitHub </a></p>
    <p>Laboratoire secret de mes prototypes enchantés : <a href="https://gitlabinfo.iutmontp.univ-montp2.fr/deschanela" target="_blank">GitLab</a></p>
    <p>Mon cristal de communication : <a href="tel:+33602467158">06 02 46 71 58</a></p>
    <p>Contactez-moi via le cercle de mages vocaux : <a href="https://discord.com/users/484845929447292980">Discord</a></p>
    `
};

function navigate(section) {
    content.innerHTML = sections[section] || "<p>Page introuvable.</p>";
}

function toggleTheme() {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    const button = document.getElementById("theme-toggle");
    if (button) {
        button.textContent = isLight ? "🌞 Mode Jour" : "🌙 Mode Nuit";
    }
}

document.getElementById('burger-toggle').addEventListener('click', () => {
    const nav = document.querySelector('.nav-grid'); // avant : nav ul
    nav.classList.toggle('show');
});

// Afficher la première section par défaut
navigate("biographie");