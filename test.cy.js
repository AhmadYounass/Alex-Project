describe('Google', () => {
  it('should open Google', () => {
    cy.visit('https://accounts.google.com/v3/signin/accountchooser?continue=https%3A%2F%2Fvoice.google.com%2Flanding&uj=gafb-voice-hero_5050_hero-en&flowName=GlifWebSignIn&flowEntry=AccountChooser&dsh=S1614616204%3A1783977905122327')
    cy.wait(2000)
    cy.get('input[name="identifier"]').type('max@themaxinemethod.org');
    cy.contains('button', 'Next').click();
    cy.get('input[name="Passwd"]', { timeout: 10000 })
        .should('be.visible')
         .type('AA112233@');
    cy.contains('span', 'Next').click();
    cy.url({ timeout: 30000 }).should('include', 'voice.google.com');
    cy.wait(3000);
    cy.visit('https://voice.google.com/u/0/calls');
    cy.wait(3000);
    
  });
});