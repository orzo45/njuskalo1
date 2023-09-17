describe("search with filters ", function () {
  it("Should search by id", function () {
    cy.visit("https://www.njuskalo.hr");
    cy.contains("Prihvati i zatvori").click();
    cy.contains("Prijava").click();
    cy.wait(1000);

    cy.get("#login_username").type("Tester002");
    cy.get("#login_password").type("Lovre123..");
    cy.get("#login_login").click();
    cy.wait(1000);
    cy.get(".Header-userCaption").contains("Tester002");
    cy.get(".categoryTitle").contains("Auto Moto").click();
    cy.get(".categoryTitle").contains("Osobni automobili").click();
    cy.wait(1000);
    cy.get(".CategoryListing-topCategoryLink").contains("Audi").click();
    cy.get(".CategoryListing-topCategoryLink").contains("Audi A4").click();
    cy.wait(2000);
    cy.xpath("//*[@id='price[max]']").type("15000");
    cy.get("#submitButton").click();
    //Get "Vau Vau" Ad titles
    cy.xpath(
      "//h3[@class=' EntityList-groupTitle']/following-sibling::ul/li/article/h3/a"
    ).each(($element) => {
      cy.wrap($element).contains("Audi A4", { matchCase: false });
    });
    //Get "Njuškalo Oglasi" Ad titles
    cy.xpath(
      "//h3[@class=' EntityList-groupTitle' and text()='Njuškalo oglasi']/following-sibling::ul/li/article/h3/a"
    ).each(($element) => {
      cy.wrap($element).contains("Audi A4", { matchCase: false });
    });
  });
});
