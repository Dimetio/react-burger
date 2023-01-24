describe("app work", function () {
  beforeEach(() => {
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

  it("should working dnd", () => {
    const dataTransfer = new DataTransfer();

    cy.get('[data-cy="Булки"]').find("ul li:first").first().as("bun");
    cy.get("@bun").trigger("dragstart", { dataTransfer });
    cy.get('[data-cy="drop"]').trigger("drop", { dataTransfer });
  });
});
