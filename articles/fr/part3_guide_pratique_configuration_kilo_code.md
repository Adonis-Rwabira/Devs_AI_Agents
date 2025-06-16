# Partie 3 : Guide Pratique de Configuration de Kilo Code et Agents IA

## Table des Matières

*   [Partie 1 : L'IA en Développement – De la Frustration à la Synergie](part1_introduction_ia_developpement.md)
*   [Partie 2 : Philosophie de Collaboration](part2_philosophie_collaboration.md)
*   **Partie 3 : Configuration de Kilo Code et Agents IA**
*   [Partie 4 : Phase 1 – Planification Holistique](part4_phase1_planification_architecte_ia.md)
*   [Partie 5 : Phase 2 – Implémentation Collaborative](part5_phase2_implementation_developpeur_ia.md)
*   [Partie 6 : Bonnes Pratiques de Synergie](part6_bonnes_pratiques_synergie.md)
*   [Partie 7 : Analyse Critique de la Méthodologie](part7_analyse_critique_methodologie.md)
*   [Partie 8 : Conclusion – Développement Augmenté](part8_conclusion_developpement_augmente.md)
*   [Partie 9 : Ressources et Communauté](part9_ressources_communaute.md)

---

- **Partie 3 : Configuration de Kilo Code et Agents IA**
    - [Équiper Votre Poste de Travail](#équiper-votre-poste-de-travail)
    - [Les Fondations Logicielles Incontournables](#les-fondations-logicielles-incontournables)
    - [Accéder aux LLM](#accéder-aux-llm)
      - [L'API Google Gemini](#lapi-google-gemini)
      - [Gemini Code Assist & GitHub Copilot](#gemini-code-assist--github-copilot)
      - [Sécurité des Clés API](#sécurité-des-clés-api)
    - [Kilo Code](#kilo-code)
      - [Installation de l'Extension Kilo Code](#installation-de-lextension-kilo-code)
      - [Connecter Kilo Code aux API](#connecter-kilo-code-aux-api)
      - [Utilisation du Fichier kilo-code-settings.json](#utilisation-du-fichier-kilo-code-settingsjson)
    - [Intégration des Prompts Personnalisés](#intégration-des-prompts-personnalisés)
      - [Récupération des Fichiers de Prompts](#récupération-des-fichiers-de-prompts)
      - [Explorer le Dépôt Devs_AI_Agents](#explorer-le-dépôt-devs_ai_agents)
      - [Créer et Paramétrer Vos Custom Modes](#créer-et-paramétrer-vos-custom-modes)
      - [Le Pouvoir des Context Mentions](#le-pouvoir-des-context-mentions)
    - [Un Environnement Prêt](#un-environnement-prêt)

---

### Équiper Votre Poste de Travail

La vision d'une collaboration homme-IA synergique, où l'intelligence artificielle devient une extension de nos propres capacités de conception et de développement, est inspirante. Mais pour qu'elle se concrétise dans votre quotidien, un environnement technique adapté est indispensable.  
Cette section est votre guide pas à pas pour sélectionner, installer et configurer les outils logiciels, les accès aux API des Grands Modèles de Langage (**LLM**), et l'extension VS Code **Kilo Code** qui servira de centre de commandement pour nos agents IA personnalisés.

L'objectif ici est simple : vous rendre pleinement opérationnel pour que vous puissiez, dès la fin de cette partie, commencer à dialoguer efficacement avec le **Senior Solution Architect & Adaptive Partner** et le **Senior Collaborative Full-Stack Developer** que nous avons conçus pour vous.

### Les Fondations Logicielles Incontournables

Avant de nous immerger dans les spécificités de l'IA, assurons-nous que votre poste de développement dispose des bases logicielles suivantes, universellement reconnues et utilisées :

1.  **Visual Studio Code (VS Code) : Votre Compagnon de Développement Principal**
    *   Si ce n'est pas déjà le cas, VS Code est l'éditeur de code que nous recommandons pour cette méthodologie. Sa popularité massive au sein de la communauté des développeurs n'est pas un hasard : il est léger, extraordinairement puissant, hautement personnalisable grâce à un vaste écosystème d'extensions, et offre une intégration native avec de nombreux outils, dont [Kilo Code](https://kilocode.ai/).
    *   Vous pouvez le télécharger gratuitement et pour toutes les plateformes depuis le [site officiel de Visual Studio Code](https://code.visualstudio.com/).
  
2.  **Git : Le Gardien de Votre Code et de Nos Configurations**
    *   Le contrôle de version avec Git est une pratique non négociable dans le développement logiciel moderne. Il sera essentiel non seulement pour gérer votre propre code source, mais aussi pour récupérer et potentiellement suivre les mises à jour des fichiers de prompts de nos agents, hébergés sur un dépôt GitHub.
    *   Si Git n'est pas encore installé sur votre machine, rendez-vous sur [le site officiel de Git](https://git-scm.com/downloads) pour le télécharger et suivre les instructions d'installation pour votre système d'exploitation. Une familiarité avec les commandes de base (`clone`, `pull`, `commit`, `push`) sera utile.
3.  **Kilo Code (Extension VS Code) : Votre Interface avec les Agents IA**
    *   C'est l'extension VS Code qui va nous permettre de donner vie à nos agents IA personnalisés. **Kilo Code** est un projet open-source (issu de Roo Code et Cline) qui se distingue par sa flexibilité pour définir des **custom modes** (que nous utiliserons pour instancier nos agents), sa capacité à se connecter à divers fournisseurs d'API de **LLM**, et son intégration avec l'environnement de développement (accès au système de fichiers, au terminal, etc.), toujours sous votre contrôle.
    *   L'installation se fait directement depuis le marketplace de VS Code (nous y reviendrons en détail à la [section 3.3](#33-kilo-code)).
4.  **Node.js et npm (Optionnel, mais une Bonne Pratique) :**
    *   Bien que notre configuration de base avec Kilo Code et les API Gemini ne l'exige pas strictement pour toutes les fonctionnalités, disposer d'une version LTS (Long-Term Support) récente de Node.js (qui inclut npm, le gestionnaire de paquets Node) est une bonne pratique générale pour tout développeur. De nombreuses extensions VS Code et outils de l'écosystème de développement moderne (surtout si vous travaillez avec JavaScript/TypeScript) en dépendent.
    *   Vous pouvez le télécharger depuis [le site officiel de Node.js](https://nodejs.org/).

### Accéder aux LLM

Nos agents IA **pensent** et **communiquent** grâce à la puissance des Grands Modèles de Langage (**LLM**) hébergés par des fournisseurs comme Google. Pour interagir avec ces modèles via **Kilo Code**, vous aurez besoin de clés API personnelles.  
Parallèlement, nous explorerons des extensions VS Code qui offrent un accès direct et souvent gratuit à des capacités d'IA pour une assistance au codage plus immédiate.

#### L'API Google Gemini

Pour alimenter nos agents spécialisés (**Senior Solution Architect** et **Senior Collaborative Developer**) que nous configurerons dans **Kilo Code**, nous recommandons l'utilisation des modèles **Gemini** de Google, reconnus pour leur performance, leur large fenêtre de contexte, et leurs offres d'accès.

1.  **Obtention de votre Clé API Google Gemini :**
    *   La première étape est de vous rendre sur la plateforme [Google AI Studio](https://aistudio.google.com/).
    *   Connectez-vous avec votre compte Google. Acceptez les conditions d'utilisation si c'est votre première visite.
    *   Sur le tableau de bord, cherchez une option clairement visible comme **Get API key** (généralement dans un menu latéral ou une section dédiée aux API).
    *   Vous serez probablement invité à créer un nouveau projet Google Cloud (ou à en sélectionner un existant si vous avez déjà utilisé les services GCP). La création d'une clé API est souvent liée à un projet.
    *   Cliquez sur **Create API key** (ou une dénomination similaire). Une nouvelle clé alphanumérique unique sera générée.
    *   **Action Impérative :** Copiez cette clé API immédiatement et conservez-la dans un endroit absolument sûr et privé.
2.  **Comprendre les Modèles Gemini et Leurs Plans d'Accès (Informations de Mai 2025 – Sujettes à Évolution) :**
    *   **Gemini 2.5 Pro (Preview) :** C'est le modèle le plus avancé de Google, actuellement en preview (le nom exact du modèle à utiliser dans l'API peut être du type `gemini-2.5-pro-preview-MMJJ` ou `gemini-2.5-pro-latest` pour la version preview la plus récente – référez-vous toujours à la [documentation officielle des modèles Gemini API](https://ai.google.dev/gemini-api/docs/models?hl=fr)). Il se distingue par ses capacités de raisonnement supérieures et une fenêtre de contexte extrêmement large (jusqu'à 1 million de tokens en entrée, avec des limites de sortie également très généreuses, par exemple 65 536 tokens).
        *   **Accès en Preview et Plan Gratuit via API :** L'accès en preview peut être soumis à des conditions spécifiques (ex: inscription). Le plan gratuit associé,comporte des limites de débit (**RPM** – requêtes par minute / **RPD** – requêtes par jour) plus restrictives (potentiellement autour de 2 RPM / 50 RPD, similaires aux versions Pro précédentes en gratuit). *Il est crucial de vérifier les conditions d'accès et les quotas exacts du **free tier** pour les modèles Preview sur la documentation officielle au moment où vous configurez votre accès.* Ce modèle est idéal pour les tâches de planification complexes et d'analyse profonde de notre **Senior Solution Architect**, à condition que le débit de l'offre gratuite soit suffisant pour votre rythme de travail.
    *   **Gemini 2.5 Flash :** Ce modèle est optimisé pour offrir un excellent équilibre entre une haute performance, un coût potentiellement plus bas (si vous passez à des plans payants), et une vitesse de réponse accrue. Il dispose également d'une fenêtre de contexte très large.
        *   **Plan Gratuit via API :** Les limites de débit pour **Gemini 2.5 Flash** en mode gratuit sont généralement beaucoup plus confortables pour un usage interactif soutenu (par exemple, de l'ordre de 15 RPM / 1500 RPD). C'est un excellent choix par défaut pour la majorité des interactions avec nos agents dans **Kilo Code**, notamment pour le **Senior Collaborative Full-Stack Developer**.
    *   **Options Payantes (Google AI Platform / Vertex AI) :** Pour un usage intensif, professionnel, pour bénéficier de garanties de service, de limites de débit plus élevées, ou pour accéder à des fonctionnalités d'entreprise, l'utilisation des modèles **Gemini** via un projet Google Cloud facturable (sur la plateforme **Vertex AI**) est la voie à privilégier. (À noter : Le **GitHub Student Developer Pack**, si vous y êtes éligible, peut occasionnellement inclure des crédits Google Cloud Platform utilisables sur Vertex AI, ce qui pourrait vous donner accès à ces options payantes sans coût direct initial pour une période donnée).
    *   **Votre Source de Vérité Absolue :** Consultez systématiquement la [documentation officielle de l'API Gemini](https://ai.google.dev/gemini-api/docs/models?hl=fr) et la [page de tarification de Vertex AI pour les modèles génératifs](https://cloud.google.com/vertex-ai/generative-ai/pricing) pour obtenir les informations les plus récentes et les plus précises sur les modèles disponibles, leurs capacités exactes, leurs noms d'API, et leurs conditions d'accès et de tarification. Le paysage de l'IA évolue très rapidement !

#### Gemini Code Assist & GitHub Copilot

En parallèle de l'utilisation de **Kilo Code** pour nos agents spécialisés, qui excellent dans la gestion de tâches complexes et de dialogues longs grâce à leurs prompts systèmes détaillés, il est extrêmement bénéfique d'intégrer des assistants de codage plus légers directement dans VS Code pour une aide **au fil de l'eau**.

*   **Gemini Code Assist (Extension VS Code officielle de Google) :**
    *   **Ce qu'il offre :** Propulsé par les modèles **Gemini**, cet assistant fournit des complétions de code intelligentes et contextuelles, de la génération de fonctions et de blocs de code, des explications de portions de code, et une interface de chat pour des questions de programmation. Un de ses atouts est sa capacité à prendre en compte une large fenêtre de contexte (jusqu'à 128 000 tokens pour le chat) basée sur le code actuellement ouvert dans votre IDE.
    *   **Plan Individuel Gratuit (Informations de Mai 2025) :**
        *   **Requêtes liées au code (génération, complétion) :** Limites journalières typiquement élevées (ex: jusqu'à 6 000 par jour, soit environ 180 000 par mois).
        *   **Requêtes de chat :** Limites journalières également confortables (ex: jusqu'à 240 par jour).
        *   **Accessibilité :** S'installe facilement comme une extension VS Code (recherchez **Gemini Code Assist**), se connecte à votre compte Google, et est généralement prête à l'emploi sans nécessiter la gestion manuelle d'une clé API pour cet usage spécifique.
        *   **Limitations Notables du Plan Gratuit :** N'inclut généralement pas la personnalisation fine basée sur l'analyse de vos dépôts de code source privés (souvent réservée aux plans Entreprise) ni certaines fonctionnalités avancées d'intégration avec d'autres services Google ou des garanties de niveau entreprise.

*   **GitHub Copilot (Extension VS Code de GitHub/Microsoft) :**
    *   **Ce qu'il offre :** Très réputé pour la pertinence et la qualité de ses suggestions de code inline (**auto-complétion**), son chat contextuel puissant (**Copilot Chat**), et ses capacités d'analyse du code de votre projet. Il s'appuie sur des modèles de pointe comme **GPT-4o** et **Claude 3.5 Sonnet**.
    *   **Plans (Informations de Mai 2025s) :**
        *   **Plan Gratuit Limité (pour certains utilisateurs) :** GitHub propose parfois un accès gratuit avec des quotas mensuels (ex: jusqu'à 2 000 complétions de code et 50 requêtes de chat par mois). Ce plan est surtout conçu pour donner un aperçu des capacités et pour un usage personnel très limité, et n'est pas destiné aux utilisateurs gérés par une organisation. Des indicateurs clairs signalent l'atteinte de ces limites.
        *   **GitHub Student Developer Pack : Un Avantage Majeur !** Si vous êtes étudiant et éligible au **GitHub Student Developer Pack**, celui-ci inclut très souvent un **accès gratuit et complet à GitHub Copilot Individual** pendant la durée de vos études. Cela lève les limitations du plan gratuit de base et en fait un outil extraordinairement puissant sans coût direct. Vérifiez votre éligibilité sur le [site de GitHub Education](https://education.github.com/pack).
        *   **Plans Payants (Individual, Business, Enterprise) :** Nécessaires pour un usage illimité et des fonctionnalités avancées (gestion des politiques, indemnisation IP, etc.) si vous n'êtes pas éligible au Student Pack ou pour un usage professionnel intensif.
    *   **Installation :** Recherchez **GitHub Copilot** et **GitHub Copilot Chat** dans le marketplace VS Code et installez-les. La connexion se fait via votre compte GitHub.

**Notre Recommandation pour l'Articulation Stratégique de ces Outils :**
*   **Kilo Code + API Gemini (Pro/Flash) pour les Agents Spécialisés (Phase 1 & 2) :** C'est le **cœur de notre méthodologie** pour la planification holistique et l'assistance au développement stratégique.  
   La flexibilité de **Kilo Code** pour créer des agents avec des **prompts systèmes longs, complexes et riches en instructions** (ceux que nous fournissons dans le dépôt) est ici irremplaçable. La très grande fenêtre de contexte des modèles **Gemini 2.5** est un atout décisif pour permettre à nos agents **Senior Solution Architect** et **Senior Collaborative Developer** de maintenir une compréhension profonde du projet sur la durée.
*   **Gemini Code Assist et/ou GitHub Copilot comme Assistants Tactiques au Quotidien :** Ces outils sont des **compléments parfaits** pour l'assistance au codage **au fil de l'eau** : auto-complétion rapide et pertinente, génération de petites fonctions utilitaires, réponse à des questions de programmation ponctuelles, explications de portions de code, etc., directement dans votre flux de travail sans avoir à **switcher** de mode dans **Kilo Code**.
    *   Si vous avez un accès complet et gratuit à **GitHub Copilot via le GitHub Student Developer Pack**, exploitez sa puissance sans retenue pour ces tâches quotidiennes. C'est un avantage considérable.
    *   **Gemini Code Assist** constitue une excellente alternative, offrant un plan gratuit avec des limites journalières très généreuses qui conviendront à de nombreux développeurs pour une assistance quotidienne.
    *   Il n'y a aucune contre-indication à utiliser les deux en parallèle, en sollicitant celui qui vous semble le plus pertinent ou le plus performant pour une tâche donnée.

#### Sécurité des Clés API

Il est crucial, et nous ne le répéterons jamais assez, de traiter vos clés API (notamment votre clé API Google Gemini que vous utiliserez avec **Kilo Code**) avec le plus grand soin, comme s'il s'agissait des **clés de votre maison numérique** :
*   **Ne les écrivez JAMAIS directement dans votre code source.**
*   **Ne les partagez avec personne.**
*   **Ne les committez JAMAIS dans un dépôt Git, même privé.** Une clé API qui fuite peut entraîner des coûts importants si elle est utilisée abusivement par des tiers.
*   **Utilisez les mécanismes sécurisés :** **Kilo Code** (et VS Code en général) est conçu pour stocker les clés API et autres secrets de manière sécurisée, souvent en utilisant le trousseau de clés de votre système d'exploitation ou un stockage chiffré lié à votre profil utilisateur. Lorsque vous configurez un fournisseur d'API dans **Kilo Code**, c'est ce mécanisme qui est utilisé. Faites confiance à ces systèmes et ne cherchez pas à contourner leur sécurité.

### Kilo Code

Pour orchestrer nos agents IA spécialisés et mettre en œuvre notre méthodologie de collaboration, l'extension VS Code [**Kilo Code**](https://kilocode.ai/) (ou un outil open-source similaire comme son prédécesseur Roo-Code, si **Kilo Code** n'est pas accessible pour vous) sera notre plateforme de choix.  
**Kilo Code** se distingue par sa flexibilité dans la création d'agents personnalisés (**Custom Modes**), sa capacité à interagir avec divers fournisseurs de **LLM**, et son intégration poussée avec l'environnement de développement.

> Bien que cet article se concentre sur **Kilo Code** en raison de ses fonctionnalités avancées et de son évolution, les principes et les prompts fournis peuvent souvent être adaptés à d'autres outils similaires supportant des instructions systèmes personnalisées et l'accès aux capacités de l'IDE.

#### Installation de l'Extension Kilo Code

1.  **Ouvrez Visual Studio Code.**
2.  Accédez à la vue des **Extensions** en cliquant sur l'icône des carrés empilés dans la barre d'activité latérale (ou via le raccourci `Ctrl+Shift+X` ou `Cmd+Shift+X` sur Mac).
3.  Dans la barre de recherche du marketplace des extensions, tapez **Kilo Code**.
4.  Localisez l'extension officielle (vérifiez l'éditeur, le nombre de téléchargements et les avis pour vous assurer de l'authenticité).
5.  Cliquez sur le bouton **Installer**. Une fois l'installation terminée, un rechargement de VS Code (ou un redémarrage) peut être suggéré ou nécessaire.

![Capture d'écran du marketplace VS Code montrant l'extension Kilo Code prête à être installée](https://kilocode.ai/docs/img/installing/installing.png)

#### Connecter Kilo Code aux API

Après avoir installé **Kilo Code**, la première et la plus cruciale des étapes est de le connecter aux Grands Modèles de Langage que vos agents utiliseront.

1.  **Accéder à la Gestion des Fournisseurs d'API dans Kilo Code :**
    *   Kilo Code dispose d'une interface dédiée pour gérer les connexions aux différents fournisseurs d'API (Google Gemini, OpenAI, Anthropic, OpenRouter, modèles locaux via Ollama, etc.).
    *   Pour des instructions précises, consultez la section **Connecting to an API Provider** de la [documentation officielle de Kilo Code](https://kilocode.ai/docs/getting-started/connecting-api-provider).

2.  **Ajouter Google Generative AI (pour les modèles Gemini) comme Fournisseur :**
    *   Dans l'interface de gestion des fournisseurs d'API de Kilo Code, choisissez l'option pour ajouter un nouveau fournisseur ou configurer un fournisseur existant. Sélectionnez **Google Generative AI** (ou **Google Vertex AI** si vous utilisez cette plateforme, en fonction des options proposées par Kilo Code).
    *   Kilo Code vous demandera alors votre **Clé API Google Gemini** (celle que vous avez obtenue depuis Google AI Studio à l'[étape 3.2.1](#321-lapi-google-gemini)).
    *   Collez votre clé API dans le champ prévu à cet effet. Kilo Code est conçu pour stocker cette clé de manière sécurisée, généralement en utilisant les mécanismes de stockage de secrets de VS Code, et non en clair dans un fichier de configuration versionnable.
    *   Vous pourrez potentiellement sélectionner un modèle par défaut pour ce fournisseur (ex: `gemini-2.5-flash-latest`).

3.  **(Optionnel) Configuration d'Autres Fournisseurs :**
    *   Si vous disposez de clés API pour d'autres modèles (ChatGPT d'OpenAI, Claude d'Anthropic) ou si vous utilisez un service d'agrégation comme OpenRouter, vous pouvez les configurer de la même manière en suivant les options proposées par Kilo Code et sa documentation.

#### Utilisation du Fichier `kilo-code-settings.json`

Notre dépôt dans le dossier `/settings/` contient un fichier nommé `kilo_code_settings.json`.  
Ce fichier est un **exemple** de la manière dont certains paramètres globaux de **Kilo Code** pourraient être structurés si vous souhaitez les gérer ou les partager via un fichier JSON.

*   **Contenu du Fichier d'Exemple :** Il peut illustrer comment définir des alias de modèles, des comportements par défaut pour certaines actions (comme l'approbation des actions), ou des préférences d'interface. **Important : Ce fichier d'exemple dans notre dépôt ne contient et ne doit jamais contenir de VRAIES clés API.**
*   **Comment l'Utiliser :** **Kilo Code**, comme indiqué dans sa [documentation sur la gestion des paramètres](https://kilocode.ai/docs/features/settings-management), permet généralement d'importer et d'exporter sa configuration.
    1.  Explorez d'abord les paramètres directement via l'interface de **Kilo Code** dans VS Code (souvent accessible via `Ctrl+,` et en cherchant **Kilo Code**, ou via une commande dédiée de **Kilo Code**).
    2.  Si vous souhaitez utiliser notre fichier d'exemple comme base, vous devrez l'importer via la fonctionnalité **Import Settings** de Kilo Code, ou en copiant-collant des sections pertinentes dans vos paramètres utilisateur JSON de VS Code (`settings.json`) sous la clé de configuration principale de Kilo Code.
    3.  **La prudence est de mise :** Assurez-vous de bien comprendre chaque paramètre avant de l'appliquer. En cas de doute, fiez-vous d'abord à la configuration via l'interface graphique de **Kilo Code**.

### Intégration des Prompts Personnalisés

Le cœur de notre méthodologie réside dans les **instructions systèmes** (prompts) extrêmement détaillées qui définissent la personnalité, l'expertise et le mode opératoire de nos agents IA. Ces prompts sont fournis sous forme de fichiers Markdown dans notre dépôt GitHub.

#### Récupération des Fichiers de Prompts

1.  Si ce n'est pas déjà fait, ouvrez votre terminal (ou Git Bash).
2.  Naviguez vers un répertoire de votre choix sur votre ordinateur où vous souhaitez stocker ces configurations (ex: `MesDocuments/ProjetsIA/`).
3.  Clonez le dépôt GitHub `Devs_AI_Agents` avec la commande suivante :
    ```bash
    git clone https://github.com/Adonis-Rwabira/Devs_AI_Agents.git
    ```
    Cela créera un dossier local nommé `Devs_AI_Agents` contenant tous les fichiers nécessaires, y compris les prompts dans les sous-dossiers `/prompts/fr/` et `/prompts/en/`.

#### Explorer le Dépôt Devs_AI_Agents

Une fois le dépôt cloné, familiarisez-vous avec sa structure (décrite en détail dans le `README.md` ou `README_FR.md`). Les fichiers de prompts qui nous intéressent ici sont :

*   Dans `/prompts/fr/` :
    *   `AGENT_SENIOR_SOLUTION_ARCHITECT_FR.md`
    *   `AGENT_SENIOR_COLLABORATIVE_DEVELOPER_FR.md`
    *   `AGENT_PROMPT_REFINEMENT_ANALYST_FR.md` (pour votre usage ultérieur d'amélioration des prompts)
*   Des versions anglaises équivalentes se trouvent dans `/prompts/en/`.

#### Créer et Paramétrer Vos Custom Modes

**Kilo Code** excelle dans sa capacité à vous laisser définir des **Custom Modes**. Chaque mode est, en substance, un agent IA distinct avec sa propre mission, ses propres instructions, son modèle **LLM** attitré, et ses outils spécifiques.  
Pour des instructions détaillées et toujours à jour, référez-vous à la [documentation de Kilo Code sur les Custom Modes](https://kilocode.ai/docs/features/custom-modes). Voici le processus général pour configurer nos deux agents principaux :

1.  **Accéder à l'Interface de Gestion des Modes de Kilo Code :**
    *   Dans VS Code, ouvrez le panneau de chat de Kilo Code.
    *   Localisez le sélecteur de mode (un menu déroulant affichant le mode actif). Cliquez dessus.
    *   Vous devriez voir une option comme **+ Create new mode...**, **Manage Custom Modes**, ou un bouton similaire. Cliquez dessus pour ouvrir l'interface de création/édition des modes.

2.  **Configurer le Mode pour l'Agent Senior Solution Architect & Adaptive Partner :**
    *   Dans l'interface de création/édition de mode de Kilo Code :
        *   **Mode Name (Nom du Mode) :** Entrez un nom clair et descriptif qui vous permettra de l'identifier facilement. Par exemple : **Architecte IA Stratégique** ou **Senior Solution Architect**.
        *   **Mode Slug (Identifiant unique - optionnel mais utile) :** Kilo Code peut le générer automatiquement (ex: `architecte-ia-strategique`), ou vous pouvez en spécifier un en minuscules avec des tirets.
        *   **System Prompt (Instructions Système) :** C'est ici que la magie opère.
            *   Ouvrez le fichier `prompts/fr/AGENT_SENIOR_SOLUTION_ARCHITECT_FR.md` (que vous avez cloné) dans VS Code ou un autre éditeur de texte.
            *   Sélectionnez **l'intégralité** du contenu de ce fichier (`Ctrl+A` ou `Cmd+A`).
            *   Copiez-le (`Ctrl+C` ou `Cmd+C`).
            *   Collez-le (`Ctrl+V` ou `Cmd+V`) dans le grand champ de texte intitulé **System Prompt** (ou **Instructions**, **Persona**, **Directives**, selon la terminologie exacte de l'interface Kilo Code pour cette section).
        *   **Model (Modèle IA) :**
            *   Sélectionnez le modèle Gemini que vous souhaitez que cet agent utilise, en tenant compte de la complexité de ses tâches. Nous recommandons :
                *   `gemini-2.5-pro-preview-0605` (ou le nom exact du dernier modèle Gemini 2.5 Pro Preview disponible via votre configuration API dans Kilo Code) pour sa puissance d'analyse, sa grande fenêtre de contexte, et sa capacité à gérer des instructions longues et complexes. Soyez conscient des limites de débit du plan gratuit si vous l'utilisez.
                *   Comme alternative plus souple en termes de débit gratuit, `gemini-2.5-flash-latest` peut aussi être envisagé, bien qu'il puisse être légèrement moins performant sur des raisonnements très complexes.
        *   **Tools / Capabilities (Outils / Capacités) :** Activez les outils (souvent gérés via des serveurs MCP dans Kilo Code) dont cet agent aura besoin pour interagir avec votre environnement. Pour le **Senior Solution Architect** :
            *   **File System (Read)** : Absolument essentiel pour qu'il puisse lire les fichiers de contexte que vous lui fournirez (ex: via **@file:chemin/relatif/vers/votre/fichier.md**).
            *   **File System (Write)** : Très utile si vous souhaitez qu'il vous aide à générer ou à mettre à jour des ébauches de vos documents `.md` directement. **Rappel :** Assurez-vous que l'approbation des actions d'écriture est réglée sur **manuelle** dans les paramètres globaux de **Kilo Code** for control, as per [Kilo Code's documentation on action approval](https://kilocode.ai/docs/features/auto-approving-actions).
            *   **Web Search** : Peut être utile pour rechercher des informations contextuelles ou des exemples.
        *   **Sauvegardez** la configuration de ce nouveau mode personnalisé.

3.  **Configurer le Mode pour l'Agent Senior Collaborative Full-Stack Developer :**
    *   Répétez le processus de création d'un nouveau mode personnalisé.
    *   **Mode Name :** **Co-Développeur IA Senior** ou **Senior Collaborative Developer**.
    *   **System Prompt :** Copiez et collez le contenu intégral du fichier `prompts/fr/AGENT_SENIOR_COLLABORATIVE_DEVELOPER_FR.md`.
    *   **Model :** Choisissez un modèle Gemini. `gemini-2.5-flash-latest` est souvent un excellent choix pour une assistance au codage réactive et pour rester dans les limites du plan gratuit. `gemini-2.5-pro-preview-0605` peut être utilisé si des tâches de raisonnement de code très complexes sont prévues.
    *   **Tools / Capabilities :** Pour le **Senior Collaborative Developer**, activez impérativement :
        *   **File System (Read/Write)** : Pour lire les spécifications, analyser le code existant, et proposer des modifications ou des nouveaux fichiers de code (toujours avec votre approbation pour l'écriture).
        *   **Terminal Access** : Extrêmement utile pour que l'agent puisse suggérer des commandes (ex: `npm install nouvelle-lib`, `git status`, `python -m pytest mon_module_test.py`) ou, avec votre permission explicite à chaque fois, les exécuter. Soyez particulièrement vigilant et configurez une liste de **allowedCommands** dans les settings globaux de **Kilo Code** si possible.
        *   **Browser Control** : Pourrait être utilisé pour des tâches avancées comme l'assistance aux tests End-to-End ou la vérification du rendu d'une page.
        *   **Git Tools** (via un outil **MCP** si activé) : Pourrait permettre à l'agent de vous aider avec des opérations Git plus complexes.
    *   **Sauvegardez** la configuration de ce mode.

![Capture d'écran de l'interface de création/édition d'un Custom Mode dans Kilo Code, montrant les champs pour le nom, le slug (identifiant), le prompt système volumineux, la sélection du modèle IA (ex: Gemini 2.5 Pro), et une liste de "Tools" activables avec des cases à cocher.](https://kilocode.ai/docs/img/custom-modes/custom-modes.png)

#### Le Pouvoir des Context Mentions

Une fois vos modes (agents) configurés et prêts à l'emploi, n'oubliez jamais d'utiliser la puissance des **Context Mentions** de **Kilo Code** lors de vos discussions. Comme détaillé dans la [documentation de Kilo Code sur les mentions de contexte](https://kilocode.ai/docs/basic-usage/context-mentions) (ou une page similaire), vous pouvez injecter dynamiquement et de manière ciblée du contenu dans la conversation en utilisant des préfixes comme :

*   **@file:chemin/relatif/vers/votre/fichier.md** (ou `.py`, `.js`, `.java`, etc.) pour que l'agent lise et prenne en compte le contenu de ce fichier spécifique dans sa réponse. C'est ainsi que vous lui donnerez accès à vos documents de spécification, à des portions de code existant, etc.
*   **@folder:chemin/vers/votre/dossier/** pour fournir le contexte d'un dossier entier (Kilo Code peut alors lister les fichiers, ou si le modèle est assez puissant, en extraire des informations structurelles).
*   **@url:https://une-documentation-en-ligne-pertinente.com** pour que l'agent puisse consulter une page web pour obtenir des informations à jour ou des détails techniques.
*   D'autres mentions spécifiques à **Kilo Code** (ex: **@issue**, **@terminal**) peuvent exister pour référencer des éléments spécifiques de votre environnement de travail.

L'utilisation judicieuse de ces mentions de contexte est absolument essentielle pour que vos agents disposent des informations les plus pertinentes et les plus à jour pour vous assister efficacement, conformément à notre philosophie de **contexte explicite**.

### Un Environnement Prêt

Félicitations ! Si vous avez suivi ces étapes, votre environnement de développement est maintenant véritablement **augmenté**.  

Vous disposez :
*   Des outils de base (VS Code, Git).
*   D'un accès configuré aux puissants modèles IA de **Google Gemini** via leurs API.
*   D'assistants de codage complémentaires (Gemini Code Assist, GitHub Copilot) pour une productivité quotidienne.
*   Et surtout, de **Kilo Code configuré avec deux agents IA hautement spécialisés et personnalisés**, prêts à devenir vos partenaires stratégiques pour la planification et l'implémentation de vos projets.

---
Vous avez assemblé votre arsenal.  
La prochaine partie nous plongera dans la mise en pratique concrète de la Phase 1 avec notre **Senior Solution Architect & Adaptive Partner**.

Vous avez assemblé votre arsenal.
La [prochaine partie](part4_phase1_planification_architecte_ia.md) nous montrera comment engager le dialogue avec votre premier agent spécialisé, **Senior Solution Architect & Adaptive Partner**, pour définir la vision, éliciter les exigences, concevoir l'architecture, spécifier l'UI/UX et modéliser la base de données de votre projet, et ainsi construire des fondations d'une solidité exceptionnelle.

**Partie Précédente :** [Partie 2 : Philosophie de Collaboration](part2_philosophie_collaboration.md)
