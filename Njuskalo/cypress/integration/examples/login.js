describe("Login", function () {
  this.beforeEach(() => {
    cy.visit("https://www.njuskalo.hr");
    cy.contains("Prihvati i zatvori").click();
    cy.contains("Prijava").click();
    cy.wait(1000);
  });

  it("should log in with each user", function () {
    cy.fixture("login-data.json").then((loginData) => {
      loginData.users.forEach((user) => {
        cy.get("#login_username").type(user.username);
        cy.get("#login_password").type(user.password);
        cy.get("#login_login").click();
        cy.wait(1000);
        cy.get(".Header-userCaption").contains(user.username);
        cy.contains("Odjava").click();
        if (cy.contains("Prijava").click()) {
        }
      });
    });
  });
});
