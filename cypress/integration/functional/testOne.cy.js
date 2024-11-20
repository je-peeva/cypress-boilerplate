describe("Pricing Page", () => {
  it("Does display products currency symbol as '$' in the 'Pricing' page", () => {
    cy.visit("https://mind-wend-913065.framer.app/");
    cy.get('.framer-1g3amks-container > .framer-WalAV > .framer-1892sln')
      .should("be.visible")
      .click();

    cy.get(".framer-styles-preset-o3e5h0 > .framer-text")
      .should("be.visible")

    cy.get("h2.framer-text > span.framer-text")
    .then(($element) => {
      const text = $element.text();
      expect(text).to.include('$');
    });
  });
});
