import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      seedAndVisit(): void;
    }
  }
}
