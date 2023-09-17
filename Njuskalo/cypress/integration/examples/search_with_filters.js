describe("Filters", function () {
  it("Should log in", function () {
    cy.visit("https://www.njuskalo.hr");
    cy.contains("Prihvati i zatvori").click();
    cy.contains("Prijava").click();
    cy.wait(1000);

    cy.get("#login_username").type("Lovre2000");
    cy.get("#login_password").type("Stenko2912..");
    cy.get("#login_login").click();
    cy.wait(1000);
    cy.get(".Header-userCaption").contains("Lovre2000");
    cy.get('input[placeholder*="Upiši pojam ili šifru oglasa"]').type(
      "Audi A4 {enter}"
    );
    cy.wait(2000);
    cy.xpath("//*[@id='price[max]']").type("15000");
    cy.get("#submitButton").click();
    cy.xpath(
      "//h3[@class=' EntityList-groupTitle']/following-sibling::ul/li/article/h3/a"
    ).each(($element) => {
      cy.wrap($element).should("contain", "Audi A4 ");
    });
  });
});
