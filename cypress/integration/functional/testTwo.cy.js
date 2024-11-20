describe("Pricing Page", () => {
  it("Does contain 4 questions in the FAQ section from 'Pricing' page", () => {
    cy.visit("https://mind-wend-913065.framer.app/");
    cy.get('.framer-1g3amks-container > .framer-WalAV > .framer-1892sln')
      .should("be.visible")
      .click();

    cy.get(".framer-styles-preset-o3e5h0 > .framer-text")
      .should("be.visible")

    const FAQSection = '.framer-cx0lih';
    cy.get(FAQSection)
      .scrollIntoView()
      .should("be.visible");

    cy.get('.framer-eabl6y')
      .then((faqContainer) => {
      const numberOfQuestions = faqContainer[0].childElementCount;
      expect(numberOfQuestions).to.eq(4);

    });
  });
});
