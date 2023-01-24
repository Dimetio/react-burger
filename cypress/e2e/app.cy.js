describe("app work", function () {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should open and close ingredient modal", () => {
    cy.get('[data-cy="Булки"]').find("ul li:first").first().as("bun");

    cy.get("@bun").click();
    cy.get('[data-cy="ingredient-name"]').contains("Краторная булка N-200i");
    cy.url().should("include", "/ingredients");

    cy.get('[data-cy="close-modal"]').click();
    cy.url().should("not.include", "/ingredients");
  });
});
