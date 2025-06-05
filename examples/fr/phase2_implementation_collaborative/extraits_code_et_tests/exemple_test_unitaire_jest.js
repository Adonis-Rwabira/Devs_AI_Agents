// examples/fr/phase2_implementation_collaborative/extraits_code_et_tests/exemple_test_unitaire_jest.js

// Pour cet exemple, nous allons simuler un composant React simple
// et un test Jest pour celui-ci.
// Assurez-vous d'avoir `react`, `react-dom`, `@testing-library/react`, et `jest` installés.

// --- Début du composant React simulé (Button.jsx) ---
// Normalement, ce serait dans un fichier séparé comme Button.jsx
import React from 'react';

function Button({ onClick, children, disabled = false, variant = 'primary' }) {
  const baseStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
  };

  const variants = {
    primary: {
      backgroundColor: '#007BFF',
      color: '#FFFFFF',
    },
    secondary: {
      backgroundColor: '#6C757D',
      color: '#FFFFFF',
    },
  };

  const style = { ...baseStyle, ...variants[variant] };

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
// --- Fin du composant React simulé ---


// --- Début du test Jest (Button.test.js) ---
// Normalement, ce serait dans un fichier séparé comme Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Pour les matchers Jest DOM

describe('Button Component', () => {
  test('renders with primary variant and correct text', () => {
    render(<Button variant="primary">Cliquer ici</Button>);
    const buttonElement = screen.getByText(/Cliquer ici/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle('background-color: #007BFF');
    expect(buttonElement).toHaveStyle('color: #FFFFFF');
  });

  test('renders with secondary variant', () => {
    render(<Button variant="secondary">Annuler</Button>);
    const buttonElement = screen.getByText(/Annuler/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle('background-color: #6C757D');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn(); // Crée une fonction mock Jest
    render(<Button onClick={handleClick}>Soumettre</Button>);
    const buttonElement = screen.getByText(/Soumettre/i);
    fireEvent.click(buttonElement); // Simule un clic
    expect(handleClick).toHaveBeenCalledTimes(1); // Vérifie que la fonction a été appelée une fois
  });

  test('is disabled when disabled prop is true', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Désactivé</Button>);
    const buttonElement = screen.getByText(/Désactivé/i);
    expect(buttonElement).toBeDisabled(); // Vérifie que le bouton est désactivé
    fireEvent.click(buttonElement); // Tente de cliquer sur le bouton désactivé
    expect(handleClick).not.toHaveBeenCalled(); // Vérifie que le gestionnaire n'a pas été appelé
  });
});

/*
Pour exécuter ce test :
1. Assurez-vous d'avoir Node.js installé.
2. Créez un nouveau dossier pour votre projet.
3. Initialisez un projet npm : `npm init -y`
4. Installez les dépendances :
   `npm install --save-dev react react-dom jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom babel-jest`
5. Créez un fichier `babel.config.js` à la racine de votre projet avec le contenu suivant :
   ```javascript
   module.exports = {
     presets: [
       ['@babel/preset-env', { targets: { node: 'current' } }],
       ['@babel/preset-react', { runtime: 'automatic' }],
     ],
   };
   ```
6. Ajoutez la ligne suivante à la section "scripts" de votre `package.json` :
   `"test": "jest"`
7. Copiez le code ci-dessus dans un fichier nommé `Button.test.js` (ou tout autre nom se terminant par `.test.js` ou `.spec.js`).
8. Exécutez les tests : `npm test`
*/