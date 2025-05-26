# Devs_AI_Agents : Maîtrisez l'IA pour Vos Projets Logiciels – Prompts et Méthodologie

Bienvenue sur le dépôt **Devs_AI_Agents** ! Ce projet est dédié à tous les développeurs qui souhaitent transformer leur manière de travailler avec l'Intelligence Artificielle, en passant d'une simple utilisation à une **collaboration stratégique et hautement productive**.

Nous proposons ici une méthodologie complète, accompagnée de "prompts systèmes" (instructions personnalisées) prêts à l'emploi, pour configurer des agents IA spécialisés. Ces agents sont conçus pour vous assister de manière experte et proactive durant les phases cruciales de **planification, de conception et d'implémentation** de vos projets logiciels.

L'objectif est de vous aider à "dompter l'IA", à dépasser les frustrations courantes liées à une IA mal comprise, et à exploiter son plein potentiel pour booster votre productivité et la qualité de vos réalisations.

**Auteur :** Adonis Rwabira
*Développeur Full stack et Ingénieur Logiciel*
*Goma, République Démocratique du Congo*
*adonisbitigaywa@gmail.com*

---

## À Propos de ce Dépôt

Ce dépôt est le compagnon pratique de notre série d'articles (disponible dans le dossier `/articles/fr/`) intitulée : **"Domptez l'IA et Boostez Votre Productivité : La Collaboration Intelligente pour Mieux Développer Vos Projets Logiciels"**.

Vous trouverez ici les ressources suivantes :

1.  **Prompts Systèmes Détaillés pour Agents IA (dans `/prompts/fr/`) :**
    *   `AGENT_SENIOR_SOLUTION_ARCHITECT_FR.md`: Le prompt système complet pour configurer votre agent IA "Senior Solution Architect & Adaptive Partner". Cet agent est votre co-concepteur stratégique pour la **Phase 1 : Planification Holistique** (définition des besoins, architecture, UI/UX, schéma de base de données).
    *   `AGENT_SENIOR_COLLABORATIVE_DEVELOPER_FR.md`: Le prompt système complet pour configurer votre agent IA "Senior Collaborative Full-Stack Developer". Cet agent est votre partenaire technique expert pour la **Phase 2 : Implémentation Collaborative** (codage, revue, tests, documentation technique).
2.  **Exemple de Fichier de Configuration (dans `/settings/`) :**
    *   `roo-code-settings.json` : Un fichier d'exemple illustrant comment vous *pourriez* structurer certaines configurations globales pour l'extension VS Code [Roo-Code](https://docs.roocode.com/). *Note : Ce fichier est un exemple et ne contient aucune clé API. Vous devrez adapter et intégrer vos propres paramètres conformément à la documentation de Roo-Code.*
3.  **Articles Complets (dans `/articles/`) :**
    *   `/articles/fr/`: Contient les 9 parties de l'article détaillé en français, expliquant la philosophie, la méthodologie, la configuration et l'utilisation de ces agents.
    *   `/articles/en/`: (À venir) Version anglaise de l'article.
4.  **Licences (à la racine) :**
    *   `LICENSE_MIT_FR.txt` / `LICENSE_MIT_EN.txt`: Précisent les conditions d'utilisation des prompts et du fichier de configuration.

## La Philosophie : Une Synergie Homme-IA Exigeante mais Puissante

L'approche proposée ici repose sur une conviction forte : l'IA, pour être véritablement utile dans des projets complexes, ne doit pas être laissée en autonomie totale. Elle excelle lorsqu'elle est **guidée par un contexte riche et des instructions précises**.

Notre méthodologie vise à :
*   **Combattre la "divagation" de l'IA** en la focalisant sur des tâches spécifiques, dans un cadre bien défini.
*   **Utiliser l'IA pour la Planification Approfondie :** L'agent "Senior Solution Architect" vous aide à explorer toutes les facettes de votre projet, à poser les bonnes questions, à identifier les risques, et à co-construire une documentation exhaustive *avant* de coder.
*   **Fluidifier l'Implémentation :** L'agent "Senior Collaborative Developer" s'appuie ensuite sur cette documentation solide pour vous assister dans le codage de manière plus pertinente et efficace.
*   **Maintenir le Développeur comme Pilote Stratégique :** L'IA est un copilote surpuissant, mais vous restez le décideur final, validant chaque étape et apportant votre expertise métier irremplaçable.

Nous vous invitons à lire l'intégralité de la série d'articles pour une compréhension approfondie des concepts et des avantages de cette collaboration structurée.

## Guide de Démarrage Rapide (avec Roo-Code)

Bien que l'article complet (notamment la Partie 3) détaille chaque étape, voici un aperçu rapide pour utiliser ces prompts avec l'extension VS Code [Roo-Code](https://docs.roocode.com/) :

1.  **Prérequis :**
    *   VS Code installé.
    *   Extension Roo-Code installée depuis le marketplace VS Code.
    *   Une clé API pour un modèle de langage puissant (ex: Google Gemini 2.5 Pro ou Flash), configurée dans Roo-Code (voir [leur documentation pour connecter un fournisseur d'API](https://docs.roocode.com/getting-started/connecting-api-provider)).
2.  **Cloner ce Dépôt :**
    ```bash
    git clone https://github.com/Adonis-Rwabira/Devs_AI_Agents.git
    cd Devs_AI_Agents
    ```
3.  **Créer les "Custom Modes" dans Roo-Code :**
    *   Ouvrez Roo-Code dans VS Code.
    *   Utilisez l'interface de Roo-Code pour créer un nouveau "custom mode" (voir [leur documentation sur les custom modes](https://docs.roocode.com/features/custom-modes)).
    *   **Pour l'Agent Architecte :**
        *   Nommez le mode (ex: `Mon Architecte IA Senior`).
        *   Copiez l'intégralité du contenu de `prompts/fr/AGENT_SENIOR_SOLUTION_ARCHITECT_FR.md` et collez-le dans le champ "System Prompt" du mode.
        *   Sélectionnez le modèle IA désiré (ex: `gemini-2.5-pro-preview-0605`).
        *   Activez les "Tools" (capacités) nécessaires (ex: `File System (Read/Write)`).
        *   Sauvegardez.
    *   **Pour l'Agent Développeur :**
        *   Créez un autre mode (ex: `Mon Co-Développeur IA Senior`).
        *   Copiez le contenu de `prompts/fr/AGENT_SENIOR_COLLABORATIVE_DEVELOPER_FR.md` dans le "System Prompt".
        *   Sélectionnez le modèle IA (ex: `gemini-2.5-flash-latest` ou Pro).
        *   Activez les "Tools" (ex: `File System (Read/Write)`, `Terminal Access`).
        *   Sauvegardez.
4.  **Commencez à Collaborer !**
    *   Sélectionnez le mode "Mon Architecte IA Senior" dans Roo-Code pour démarrer la Phase 1 de planification de votre projet.
    *   Utilisez les "Context Mentions" (`@file`, `@folder`) pour fournir des informations spécifiques à l'agent (voir [la documentation Roo-Code sur les mentions](https://docs.roocode.com/basic-usage/context-mentions)).
    *   N'oubliez pas de configurer l'approbation des actions (manuelle recommandée) pour les opérations sensibles ([voir documentation Roo-Code sur l'approbation](https://docs.roocode.com/features/auto-approving-actions)).

## Contribuer et Échanger

Ce projet est une initiative ouverte à l'amélioration continue. Votre expérience, vos retours, et vos contributions sont essentiels.

*   **Discussions et Suggestions :** Veuillez utiliser la section **"Issues"** de ce dépôt pour poser des questions, partager vos réflexions sur la méthodologie, suggérer des améliorations pour les prompts, ou signaler des points à clarifier.
*   **Contributions aux Prompts :** Si vous avez des modifications ou des ajouts concrets et testés à proposer pour les fichiers de prompts, n'hésitez pas à soumettre une **"Pull Request"**.

Ensemble, nous pouvons affiner cette approche pour rendre la collaboration homme-IA encore plus puissante et accessible à tous les développeurs.

---

Merci de votre intérêt et bonne lecture de l'article complet !

**Adonis Rwabira**
