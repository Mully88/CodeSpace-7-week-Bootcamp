
describe('Rock Paper Scissors', () => {
  it('loads the game page', () => {
    cy.visit('RockPaperScissors.html'); 
    cy.contains('Rock').should('be.visible');
  });
});

it('shows all three choice buttons', () => {
  cy.visit('RockPaperScissors.html');
  cy.contains('Rock').should('be.visible');
  cy.contains('Paper').should('be.visible');
  cy.contains('Scissors').should('be.visible');
});

<h4 id="result-text" class="fw-bold"></h4>

it('shows a result after clicking Rock', () => {
  cy.visit('RockPaperScissors.html');
  cy.contains('Rock').click();
  cy.get('#result-text').should('not.be.empty');
});

<p id="score-text">Player: 0 | Computer: 0</p>

it('updates the score text after a round', () => {
  cy.visit('RockPaperScissors.html');
  cy.contains('Rock').click();
  cy.get('#score-text').should('not.contain', 'Player: 0 | Computer: 0');
});

<button id="reset-btn">Reset</button>

it('resets the game when Reset is clicked', () => {
  cy.visit('RockPaperScissors.html');

  // Play a round
  cy.contains('Rock').click();

  // Reset
  cy.get('#reset-btn').click();

  // Check everything is reset
  cy.get('#result-text').should('have.text', '');
  cy.get('#score-text').should('contain', 'Player: 0 | Computer: 0');
});


import React from 'react'
import { mount } from 'cypress/react'
import MyComponent from './MyComponent'

it('renders', () => {
  mount(<MyComponent />)
})



