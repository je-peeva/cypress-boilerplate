describe("Main Page", () => {
  it("Does display 'visit' button on each card in the 'Many types of components to customize' section", () => {
    cy.visit("https://mind-wend-913065.framer.app/");

    cy.get(".framer-5yei0g").scrollIntoView().should('be.visible');
    
    cy.get(".framer-5yei0g")
    .should("have.text","Many types of components to customize")
    
    cy.get("div[class*='visit-button']")
    .then((elements) => {
      expect(elements).to.have.length(5);
    });
  });
});
