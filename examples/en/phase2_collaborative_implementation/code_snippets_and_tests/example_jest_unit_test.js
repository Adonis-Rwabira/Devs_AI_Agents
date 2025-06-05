// examples/en/phase2_collaborative_implementation/code_snippets_and_tests/example_jest_unit_test.js

// For this example, we will simulate a simple React component
// and a Jest test for it.
// Make sure you have `react`, `react-dom`, `@testing-library/react`, and `jest` installed.

// --- Start of simulated React component (Button.jsx) ---
// Normally, this would be in a separate file like Button.jsx
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
// --- End of simulated React component ---


// --- Start of Jest test (Button.test.js) ---
// Normally, this would be in a separate file like Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For Jest DOM matchers

describe('Button Component', () => {
  test('renders with primary variant and correct text', () => {
    render(<Button variant="primary">Click Here</Button>);
    const buttonElement = screen.getByText(/Click Here/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle('background-color: #007BFF');
    expect(buttonElement).toHaveStyle('color: #FFFFFF');
  });

  test('renders with secondary variant', () => {
    render(<Button variant="secondary">Cancel</Button>);
    const buttonElement = screen.getByText(/Cancel/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle('background-color: #6C757D');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn(); // Creates a Jest mock function
    render(<Button onClick={handleClick}>Submit</Button>);
    const buttonElement = screen.getByText(/Submit/i);
    fireEvent.click(buttonElement); // Simulates a click
    expect(handleClick).toHaveBeenCalledTimes(1); // Verifies the function was called once
  });

  test('is disabled when disabled prop is true', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Disabled</Button>);
    const buttonElement = screen.getByText(/Disabled/i);
    expect(buttonElement).toBeDisabled(); // Verifies the button is disabled
    fireEvent.click(buttonElement); // Attempts to click the disabled button
    expect(handleClick).not.toHaveBeenCalled(); // Verifies the handler was not called
  });
});

/*
To run this test:
1. Make sure you have Node.js installed.
2. Create a new folder for your project.
3. Initialize an npm project: `npm init -y`
4. Install dependencies:
   `npm install --save-dev react react-dom jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom babel-jest`
5. Create a `babel.config.js` file in your project root with the following content:
   ```javascript
   module.exports = {
     presets: [
       ['@babel/preset-env', { targets: { node: 'current' } }],
       ['@babel/preset-react', { runtime: 'automatic' }],
     ],
   };
   ```
6. Add the following line to the "scripts" section of your `package.json`:
   `"test": "jest"`
7. Copy the code above into a file named `Button.test.js` (or any other name ending with `.test.js` or `.spec.js`).
8. Run the tests: `npm test`
*/