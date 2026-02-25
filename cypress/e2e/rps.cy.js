// This main describe block groups tests related to the Rock Paper Scissors game.
// It helps keep the test suite organised and readable.
describe('Rock Paper Scissors Game', () => {

  // ---------------------------------------------------------
  // TEST 1 — Check that the game page loads correctly
  // ---------------------------------------------------------
  it('loads the game page', () => {
    // Visit the game running on Live Server
    cy.visit('http://127.0.0.1:5500/RockPaperScissors.html');

    // Make sure all three choice buttons exist on the page
    cy.contains('Rock').should('exist');
    cy.contains('Paper').should('exist');
    cy.contains('Scissors').should('exist');
  });
});


// ---------------------------------------------------------
// TEST 2 — Player clicks Rock and the game shows a result
// ---------------------------------------------------------
it('lets the player choose Rock and shows a result', () => {
  cy.visit('http://127.0.0.1:5500/RockPaperScissors.html');

  // Ensure the three choice buttons are present before clicking
  cy.get('.choice-btn').should('have.length', 3);

  // Simulate the player clicking Rock
  cy.contains('Rock').click();

  // The result text should now contain something (win/lose/draw)
  cy.get('#result-text')
    .should('not.be.empty');
});


// ---------------------------------------------------------
// TEST 3 — Score should update after a round is played
// ---------------------------------------------------------
it('updates the score after a round', () => {
  cy.visit('http://127.0.0.1:5500/RockPaperScissors.html');

  // Click Paper to trigger a round
  cy.contains('Paper').click();

  // Score should no longer be the initial "0 | 0"
  cy.get('#score-text')
    .should('not.contain', 'Player: 0 | Computer: 0');
});


// ---------------------------------------------------------
// TEST 4 — Reset button should clear the game state
// ---------------------------------------------------------
it('resets the game when Reset is clicked', () => {
  cy.visit('http://127.0.0.1:5500/RockPaperScissors.html');

  // Play one round to change the score/result
  cy.contains('Rock').click();

  // Click the Reset button
  cy.get('#reset-btn').click();

  // Result text should be empty again
  cy.get('#result-text').should('be.empty');

  // Score should return to the starting values
  cy.get('#score-text').should('contain', 'Player: 0 | Computer: 0');
});


// ---------------------------------------------------------
// TEST 5 — Force computer to choose Scissors → Rock should win
// ---------------------------------------------------------
it('Rock beats Scissors when computer is forced to choose Scissors', () => {
  cy.visit('http://127.0.0.1:5500/RockPaperScissors.html');

  // Stub Math.random() so it ALWAYS returns 0.9
  // 0.9 falls in the range that makes the computer choose "scissors"
  cy.window().then(win => {
    cy.stub(win.Math, 'random').returns(0.9);
  });

  // Player chooses Rock
  cy.contains('Rock').click();

  // Result should show a win
  cy.get('#result-text')
    .should('contain', 'You win');
});


// ---------------------------------------------------------
// TEST 6 — Force computer to choose Rock → Paper should win
// ---------------------------------------------------------
it('Paper beats Rock when computer is forced to choose Rock', () => {
  cy.visit('http://127.0.0.1:5500/RockPaperScissors.html');

  // 0.1 forces the computer to choose "rock"
  cy.window().then(win => {
    cy.stub(win.Math, 'random').returns(0.1);
  });

  // Player chooses Paper
  cy.contains('Paper').click();

  // Paper should win
  cy.get('#result-text')
    .should('contain', 'You win');
});


// ---------------------------------------------------------
// TEST 7 — Force computer to choose Paper → Scissors should win
// ---------------------------------------------------------
it('Scissors beats Paper when computer is forced to choose Paper', () => {
  cy.visit('http://127.0.0.1:5500/RockPaperScissors.html');

  // 0.5 forces the computer to choose "paper"
  cy.window().then(win => {
    cy.stub(win.Math, 'random').returns(0.5);
  });

  // Player chooses Scissors
  cy.contains('Scissors').click();

  // Scissors should win
  cy.get('#result-text')
    .should('contain', 'You win');
});


// ---------------------------------------------------------
// TEST 8 — Force a draw (Rock vs Rock)
// ---------------------------------------------------------
it('results in a Draw when both player and computer choose Rock', () => {
  cy.visit('http://127.0.0.1:5500/RockPaperScissors.html');

  // 0.1 forces the computer to choose "rock"
  cy.window().then(win => {
    cy.stub(win.Math, 'random').returns(0.1);
  });

  // Player chooses Rock
  cy.contains('Rock').click();

  // Should show a draw message
  cy.get('#result-text')
    .should('contain', 'Draw');
});


// ---------------------------------------------------------
// TEST 9 — Game should handle multiple rounds without breaking
// ---------------------------------------------------------
it('handles multiple rounds without errors', () => {
  cy.visit('http://127.0.0.1:5500/RockPaperScissors.html');

  // Play three rounds in a row
  cy.contains('Rock').click();
  cy.contains('Paper').click();
  cy.contains('Scissors').click();

  // Score should have changed from the initial state
  cy.get('#score-text')
    .should('not.contain', 'Player: 0 | Computer: 0');
});
