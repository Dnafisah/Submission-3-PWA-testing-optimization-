Feature("Liking Restaurant");

Scenario("Menyukai salah satu restaurant dan membatalkannya", async ({ I }) => {
  I.amOnPage("/#/favorite");
  I.wait(2);
  I.seeElement(".restaurants__name");
  await I.grabTextFrom(locate(".restaurants__name").first());
  I.click(locate(".restaurants__name").first());
  I.wait(2);
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.click(locate(".restaurants__name").first());
  I.wait(2);

  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.dontSeeElement(".restaurants__name");
});
