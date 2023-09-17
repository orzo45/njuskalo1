describe("search by ID 1349039 ", function () {
  it("Should search by id", function () {
    cy.visit("https://www.njuskalo.hr");
    cy.contains("Prihvati i zatvori").click();
    cy.contains("Prijava").click();
    cy.wait(1000);

    cy.get("#login_username").type("Tester001");
    cy.get("#login_password").type("Lovre123..");
    cy.get("#login_login").click();
    cy.wait(1000);
    cy.get(".Header-userCaption").contains("Tester001");
    cy.get('input[placeholder*="Upiši pojam ili šifru oglasa"]').type(
      "1349039 {enter}"
    );
    cy.get(".ClassifiedDetailSummary-adCode").should("be.visible", "1349039");
  });
});
