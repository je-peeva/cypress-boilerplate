describe("Main Page", () => {
  it("Does blur the background after clicking 'Get the app' button", () => {
    cy.visit("https://mind-wend-913065.framer.app/");

    cy.get('.get-app-button')
      .should("be.visible")
      .click();

    cy.get('#overlay').children(':nth-child(2)')
      .then((siteBackground) => {
        const backgroundColor = siteBackground.css('backdrop-filter');
        expect(backgroundColor).to.equal('blur(20px)');
    });
  });
});
