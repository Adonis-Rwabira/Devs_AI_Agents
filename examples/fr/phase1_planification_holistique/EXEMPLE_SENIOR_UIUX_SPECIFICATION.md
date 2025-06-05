# EXEMPLE : Spécification UI/UX Senior (Senior UI/UX Specification)

Ce document est un exemple de spécification UI/UX, co-créé avec l'Agent Architecte IA. Il sert de guide détaillé pour la conception et l'implémentation de l'interface utilisateur et de l'expérience utilisateur.

## 1. Principes Généraux de Design et d'Expérience Utilisateur

*   **Simplicité et Clarté Avant Tout :** L'interface doit être intuitive, facile à comprendre et à utiliser, même pour les nouveaux utilisateurs.
*   **Feedback Utilisateur Immédiat et Omniprésent :** Chaque interaction doit être accompagnée d'un retour visuel ou textuel clair.
*   **Cohérence Inflexible :** Les éléments d'interface, les comportements et les styles doivent être uniformes à travers toute l'application.
*   **Accessibilité Universelle :** Conception pour être utilisable par tous, y compris les personnes ayant des handicaps (conformité WCAG AA minimum).

## 2. Personas et Parcours Utilisateurs Clés

### Persona : Développeur Solo (Marc, 35 ans)

*   **Objectif :** Planifier et suivre ses projets de développement de manière efficace.
*   **Frustrations :** Manque de clarté dans les spécifications, difficulté à anticiper les risques.
*   **Parcours Utilisateur (Exemple : Création d'une nouvelle spécification) :**
    1.  Marc se connecte à la plateforme.
    2.  Il navigue vers la section "Mes Projets".
    3.  Il clique sur "Créer Nouvelle Spécification".
    4.  Il interagit avec l'Agent Architecte IA pour définir les exigences.
    5.  Il valide et enregistre la spécification.

## 3. Wireframes Descriptifs ou Annotés

### Écran : Récapitulatif de Commande et Sélection Adresse (SCREEN-CHECKOUT-ADDRESS)

*   **Description :** Cet écran permet à l'utilisateur de revoir son panier, de sélectionner ou d'ajouter une adresse de livraison, et de visualiser le montant total avant de procéder au paiement.
*   **Structure :**
    1.  **Header :** Titre "Étape 2/3 : Livraison et Récapitulatif". Fil d'Ariane cliquable pour revenir au panier.
    2.  **Section "Vos Adresses" :**
        *   Affichage des adresses enregistrées sous forme de cartes sélectionnables.
        *   Bouton "Ajouter une nouvelle adresse".
        *   Formulaire d'ajout/modification d'adresse (si activé).
    3.  **Section "Récapitulatif de Commande" :**
        *   Liste des articles du panier.
        *   Détail des coûts (sous-total, frais de livraison, TVA, total).
    4.  **Zone d'Actions :** Bouton "Continuer vers le Paiement", Lien "Retour au Panier".

## 4. Spécifications Détaillées de Chaque Interface et Composant Réutilisable

### Composant : Bouton d'Action Primaire (BTN-PRIMARY-SUBMIT)

*   **Type :** Bouton
*   **Contenu/Libellé :** "Continuer vers le Paiement"
*   **Apparence (États) :**
    *   **Normal :**
        *   Couleur de Fond : `#007BFF` (Bleu primaire)
        *   Couleur du Texte : `#FFFFFF` (Blanc)
        *   Bordure : `none`
        *   Ombre Portée : `0px 2px 5px rgba(0, 123, 255, 0.2)`
        *   Typographie : `Arial, sans-serif`, Taille `16px`, Graisse `600`
        *   Padding : `12px 24px`
        *   Border-radius : `4px`
    *   **Hover :**
        *   Couleur de Fond : `#0056B3` (Bleu plus foncé)
        *   Ombre Portée : `0px 4px 8px rgba(0, 123, 255, 0.3)`
        *   Transition : `background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out`
    *   **Focus :**
        *   Bordure : `2px solid #80BDFF` (Bleu clair pour l'outline)
        *   Ombre Portée : `0px 0px 0px 0.2rem rgba(0, 123, 255, 0.25)`
    *   **Active :**
        *   Couleur de Fond : `#004085` (Bleu encore plus foncé)
        *   Ombre Portée : `inset 0px 1px 3px rgba(0, 0, 0, 0.2)`
    *   **Disabled :**
        *   Couleur de Fond : `#CCCCCC` (Gris clair)
        *   Couleur du Texte : `#666666` (Gris foncé)
        *   Curseur : `not-allowed`

### Composant : Carte d'Adresse (COMPONENT-ADDRESS-CARD)

*   **Description :** Affiche une adresse de livraison enregistrée.
*   **Apparence (États) :**
    *   **Normal :**
        *   Fond : `#F8F9FA` (Gris très clair)
        *   Bordure : `1px solid #E9ECEF` (Gris clair)
        *   Padding : `16px`
        *   Border-radius : `8px`
    *   **Selected :**
        *   Fond : `#E0F7FA` (Bleu très clair)
        *   Bordure : `2px solid #00BCD4` (Bleu turquoise)
        *   Ombre Portée : `0px 0px 8px rgba(0, 188, 212, 0.2)`

## 5. Directives d'Accessibilité (a11y)

*   **Niveau WCAG Cible :** AA minimum.
*   **Navigation Clavier :** Tous les éléments interactifs doivent être accessibles et utilisables via la navigation au clavier (Tab, Enter, Space). L'ordre de tabulation doit être logique.
*   **Alternatives Textuelles :** Toutes les images non décoratives doivent avoir un attribut `alt` descriptif.
*   **Attributs ARIA :** Utilisation correcte des rôles, états et propriétés ARIA pour améliorer la sémantique pour les technologies d'assistance (ex: `aria-label`, `aria-describedby`, `role="alert"`).
*   **Contrastes de Couleurs :** Assurer un contraste suffisant entre le texte et son arrière-plan (ratio minimum de 4.5:1 pour le texte normal, 3:1 pour les grands textes).

## 6. Design System / Charte Graphique et Interactive Détaillée

### Palette de Couleurs

*   **Primaire :** `#007BFF` (Bleu)
*   **Secondaire :** `#6C757D` (Gris)
*   **Succès :** `#28A745` (Vert)
*   **Erreur :** `#DC3545` (Rouge)
*   **Alerte :** `#FFC107` (Jaune)
*   **Neutres :** `#FFFFFF` (Blanc), `#F8F9FA` (Gris très clair), `#E9ECEF` (Gris clair), `#343A40` (Gris foncé), `#000000` (Noir)

### Grille Typographique

*   **Famille de Polices :** `Arial, sans-serif` (pour le corps de texte), `Roboto, sans-serif` (pour les titres)
*   **Échelle Typographique (Exemples) :**
    *   `H1` : `48px`, `font-weight: 700`, `line-height: 1.2`
    *   `H2` : `36px`, `font-weight: 600`, `line-height: 1.3`
    *   `P` (Paragraphe) : `16px`, `font-weight: 400`, `line-height: 1.5`
    *   `Small Text` : `12px`, `font-weight: 400`, `line-height: 1.4`

### Principes d'Espacement et de Grille de Mise en Page

*   **Unité de Base :** `8px` (tous les espacements (padding, margin) seront des multiples de 8px).
*   **Gouttières :** `24px` entre les colonnes.
*   **Grille Responsive :** Utilisation d'une grille à 12 colonnes avec des points de rupture pour mobile, tablette et desktop.

## 7. Historique des Révisions

| Version | Date       | Auteur | Description de la Révision                               |
| :------ | :--------- | :----- | :------------------------------------------------------- |
| 1.0     | 2025-06-10 | Kilo Code | Création initiale du document basé sur les discussions IA |