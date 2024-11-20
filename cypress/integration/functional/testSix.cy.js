describe("Main Page", () => {
  it("Does display the 'Updates' page after clicking the 'Update' button", () => {
    cy.visit("https://mind-wend-913065.framer.app/");

    cy.get('.framer-7hrpx3-container > .framer-WalAV > .framer-1892sln > .framer-1gmmtpa > .framer-styles-preset-kqguaa > span')
      .should("be.visible")
      .click();

    cy.get('.framer-styles-preset-o3e5h0 > span')
      .should("be.visible")
      .then(($element) => {
       expect($element).to.contain("Updates");
    });
  });
});
