describe("My First Test", () => {
  const user = `user${new Date().getTime()}`;
  const password = `pass${new Date().getTime()}`;

  it("Visits the initial project page", () => {
    cy.visit("http://localhost:4200/");
    cy.contains("conduit");
    cy.wait(3000);
  });

  it("sign up", () => {
    cy.visit("/register");
    cy.get("[formcontrolname=username").type(user);
    cy.get("[formcontrolname=email").type(`${user}@gmail.com`);
    cy.get("[formcontrolname=password").type(password);
    cy.get(".btn").click();
    cy.get(
      "body > app-root > app-layout-header > nav > div > ul > li:nth-child(4) > a.nav-link",
    ).click();
    cy.contains(user).should("be.visible");
  });

  it("sign up - email has already been taken", () => {
    cy.visit("/register");
    cy.get("[formcontrolname=username").type(user);
    cy.get("[formcontrolname=email").type(`${user}@gmail.com`);
    cy.get("[formcontrolname=password").type(password);
    cy.get(".btn").click();
    cy.get("app-list-errors > ul > li:nth-child(1)").should("not.be.empty");
  });
});
