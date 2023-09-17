describe("search by ID 1349039 ", function () {
  it("Should search by id", function () {
    cy.visit("https://www.njuskalo.hr");
    cy.contains("Prihvati i zatvori").click();
    cy.get(".categoryTitle").contains("Auto Moto").click();
    cy.get(".categoryTitle").contains("Osobni automobili").click();
    cy.wait(1000);
    cy.get(".CategoryListing-topCategoryLink").contains("Audi").click();
    cy.get(".CategoryListing-topCategoryLink").contains("Audi A4").click();
    cy.wait(2000);
    cy.xpath("//*[@id='price[max]']").type("15000");
    cy.get("#submitButton").click();
    cy.get(".price-item").should("be.lte", 15000);
    cy.get(".entity-title").each(($element) => {
      cy.wrap($element).contains("Audi A4", { matchCase: false });
    });
  });
});
