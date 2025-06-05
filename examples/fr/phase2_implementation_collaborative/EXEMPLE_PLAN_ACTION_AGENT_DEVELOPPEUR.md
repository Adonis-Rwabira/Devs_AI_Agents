# EXEMPLE : Plan d'Action pour l'Agent Développeur IA (Developer Agent Action Plan)

Ce document détaille les instructions et les tâches spécifiques pour l'Agent Développeur IA (Kilo Code en mode "Senior Collaborative Full-Stack Developer") afin de guider l'implémentation du projet.

## Contexte Général

*   **Projet :** Plateforme de Gestion de Tâches Augmentée par l'IA.
*   **Phase Actuelle :** Implémentation Collaborative (Phase 2).
*   **Documents de Référence :**
    *   `MASTER_REQUIREMENTS_SPECIFICATION.md`
    *   `SENIOR_ARCHITECTURE_DESIGN.md`
    *   `SENIOR_UIUX_SPECIFICATION.md`
    *   `SENIOR_DATABASE_SCHEMA.md`
*   **Objectif de l'Agent :** Assister le développeur humain dans la traduction des spécifications en code de haute qualité, testé et maintenable.

## Directives Générales pour l'Agent

1.  **Priorité à la Qualité du Code :** Produire un code propre, lisible, modulaire, et respectant les meilleures pratiques (SOLID, DRY, KISS).
2.  **Adhésion aux Spécifications :** Implémenter les fonctionnalités et les designs exactement comme spécifié dans les documents de planification. En cas d'ambiguïté, demander clarification.
3.  **Tests Intégrés :** Écrire des tests unitaires et d'intégration pour chaque composant ou fonctionnalité développée.
4.  **Documentation Interne :** Ajouter des commentaires pertinents dans le code et mettre à jour la documentation technique si nécessaire.
5.  **Gestion des Erreurs :** Implémenter une gestion robuste des erreurs, avec des messages clairs et des mécanismes de logging appropriés.
6.  **Sécurité :** Appliquer les principes de sécurité par conception à chaque étape du développement.
7.  **Communication :** Signaler tout problème, blocage ou divergence par rapport au plan.

## Tâches Détaillées par Service / Composant

### Tâche 1 : Implémentation du `OrderService` (Backend)

*   **Description :** Développer le microservice de gestion des commandes.
*   **Référence Spécification :** `MASTER_REQUIREMENTS_SPECIFICATION.md` (Section 5, F-ORDER-001 à F-ORDER-005), `SENIOR_ARCHITECTURE_DESIGN.md` (Section 4, OrderService).
*   **Sous-tâches :**
    1.  **Initialisation du projet Python :** Créer le répertoire `order_service/`, initialiser Poetry, ajouter les dépendances (FastAPI, SQLAlchemy, psycopg2, kafka-python).
    2.  **Modèles de données :** Créer les modèles SQLAlchemy pour `Order` et `OrderItem` en se basant sur `SENIOR_DATABASE_SCHEMA.md` (Tables `tbl_orders`, `tbl_order_items`).
    3.  **Endpoints REST :** Implémenter les endpoints suivants dans `main.py` :
        *   `POST /orders` : Création d'une commande. Valider les données d'entrée avec Pydantic.
        *   `GET /orders/{order_id}` : Récupération d'une commande par ID.
        *   `PUT /orders/{order_id}/status` : Mise à jour du statut de la commande.
    4.  **Logique métier :**
        *   Lors de la création d'une commande, vérifier la disponibilité des produits via `ProductService` (appel synchrone ou via événement si l'architecture le permet).
        *   Publier un `OrderCreatedEvent` vers le topic Kafka `orders.created` après la persistance en base.
    5.  **Tests unitaires :** Écrire des tests pour chaque endpoint et chaque fonction de logique métier.
    6.  **Gestion des erreurs :** Implémenter des gestionnaires d'erreurs pour les requêtes invalides, les ressources non trouvées, et les erreurs internes du serveur.

### Tâche 2 : Implémentation du `ProductService` (Backend)

*   **Description :** Développer le microservice de gestion des produits.
*   **Référence Spécification :** `MASTER_REQUIREMENTS_SPECIFICATION.md` (Section 5, F-PRODUCT-001 à F-PRODUCT-003), `SENIOR_ARCHITECTURE_DESIGN.md` (Section 4, ProductService).
*   **Sous-tâches :**
    1.  **Initialisation du projet Python :** Créer le répertoire `product_service/`, initialiser Poetry, ajouter les dépendances.
    2.  **Modèles de données :** Créer le modèle SQLAlchemy pour `Product` en se basant sur `SENIOR_DATABASE_SCHEMA.md` (Table `tbl_products`).
    3.  **Endpoints REST :** Implémenter les endpoints suivants :
        *   `GET /products/{product_id}` : Récupération d'un produit par ID.
        *   `PUT /products/{product_id}/stock` : Mise à jour du stock d'un produit.
    4.  **Tests unitaires :** Écrire des tests pour les endpoints et la logique de stock.

### Tâche 3 : Développement du Frontend (Composants de base)

*   **Description :** Développer les composants React de base pour l'interface utilisateur.
*   **Référence Spécification :** `SENIOR_UIUX_SPECIFICATION.md` (Sections 3, 4, 6).
*   **Sous-tâches :**
    1.  **Initialisation du projet React :** Créer le répertoire `frontend/`, initialiser un projet React avec Vite/Create React App, installer TypeScript, Tailwind CSS.
    2.  **Design System :** Implémenter les styles globaux, la palette de couleurs, la typographie et les espacements définis dans la section 6 du `SENIOR_UIUX_SPECIFICATION.md`.
    3.  **Composants réutilisables :** Développer les composants suivants en respectant les spécifications détaillées (apparence, états, interactions) :
        *   `Button.tsx` (pour `BTN-PRIMARY-SUBMIT` et autres variantes).
        *   `AddressCard.tsx` (pour `COMPONENT-ADDRESS-CARD`).
        *   `Input.tsx` (pour les champs de formulaire).
    4.  **Tests unitaires (Jest/React Testing Library) :** Écrire des tests pour s'assurer que les composants se rendent correctement et répondent aux interactions.

### Tâche 4 : Intégration Frontend/Backend (Flux de Commande)

*   **Description :** Connecter le frontend aux services backend pour le flux de création de commande.
*   **Référence Spécification :** `MASTER_REQUIREMENTS_SPECIFICATION.md` (F-ORDER-001), `SENIOR_ARCHITECTURE_DESIGN.md` (Diagramme de Séquence), `SENIOR_UIUX_SPECIFICATION.md` (SCREEN-CHECKOUT-ADDRESS).
*   **Sous-tâches :**
    1.  **Page Panier :** Afficher les produits sélectionnés et permettre la modification des quantités.
    2.  **Page Adresse :**
        *   Récupérer les adresses enregistrées de l'utilisateur (si applicable) via une API.
        *   Permettre la sélection d'une adresse existante ou l'ajout d'une nouvelle.
        *   Afficher le récapitulatif de commande dynamique.
    3.  **Page Paiement :**
        *   Envoyer les détails de la commande et de l'adresse à l'`OrderService`.
        *   Gérer la réponse du `PaymentService` (succès/échec).
        *   Afficher les messages de confirmation ou d'erreur à l'utilisateur.
    4.  **Gestion des états :** Utiliser React Query ou Redux Toolkit pour gérer les états de l'application et les appels API.

## Historique des Révisions

| Version | Date       | Auteur | Description de la Révision                               |
| :------ | :--------- | :----- | :------------------------------------------------------- |
| 1.0     | 2025-06-10 | Kilo Code | Création initiale du plan d'action pour l'Agent Développeur |