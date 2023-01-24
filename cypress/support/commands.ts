/// <reference types="cypress" />

import "cypress-localstorage-commands";

Cypress.Commands.add("seedAndVisit", () => {
  cy.intercept("GET", "https://norma.nomorepatries.space/api/ingredients", {
    fixture: "ingredients",
  });

  cy.visit("/");
});
