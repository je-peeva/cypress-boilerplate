describe("Main Page", () => {
  it("Does display 'Sign up' button's color as 'rgb(255,82,79)", () => {
    cy.visit("https://mind-wend-913065.framer.app/");

    cy.scrollTo('bottom');

    cy.get('input[type="submit"]')
      .should("be.visible")
      .then((signUpBackground) => {
        const backgroundColor = signUpBackground.css('background-color');
        expect(backgroundColor).to.equal('rgb(255, 82, 79)');
    });
  });
});
