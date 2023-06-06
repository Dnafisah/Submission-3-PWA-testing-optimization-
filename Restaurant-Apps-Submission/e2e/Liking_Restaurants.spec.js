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

Feature("Favorite Restaurant");

Scenario("check home", ({ I }) => {
  I.amOnPage("/");
  I.wait(2);
  I.seeElement("#");
  I.seeElement(".card");
});
Scenario("check detail", ({ I }) => {
  I.amOnPage("/#/detail/rqdv5juczeskfw1e867");
  I.wait(2);
  I.seeElement(".content");
  I.seeElement('[aria-label="favorite this restaurant"]');
  I.dontSeeElement('[aria-label="unfavorite this restaurant"]');
});

Scenario("check favorite", ({ I }) => {
  I.amOnPage("/#/favorite");
  I.wait(2);
  I.dontSeeElement(".card");
});

Scenario("check favorite one restaurant", ({ I }) => {
  I.amOnPage("/#/favorite");
  I.wait(2);
  I.dontSeeElement(".card");
  I.amOnPage("/#/detail/rqdv5juczeskfw1e867");
  I.wait(2);
  I.seeElement('[aria-label="favorite this restaurant"]');
  I.dontSeeElement('[aria-label="unfavorite this restaurant"]');
  I.click("#favoriteButton");
  I.wait(2);
  I.amOnPage("/#/favorite");
  I.wait(2);
  I.seeElement(".card");
});

Scenario("check unfavorite one restaurant", ({ I }) => {
  I.amOnPage("/#/favorite");
  I.wait(2);
  I.dontSeeElement(".card");
  I.amOnPage("/#/detail/rqdv5juczeskfw1e867");
  I.wait(2);
  I.seeElement('[aria-label="favorite this restaurant"]');
  I.dontSeeElement('[aria-label="unfavorite this restaurant"]');
  I.click("#favoriteButton");
  I.amOnPage("/#/favorite");
  I.wait(2);
  I.seeElement(".card");
  I.amOnPage("/#/restoran/rqdv5juczeskfw1e867");
  I.wait(2);
  I.seeElement('[aria-label="unfavorite this restaurant"]');
  I.dontSeeElement('[aria-label="favorite this restaurant"]');
  I.click("#favoriteButton");
  I.amOnPage("/#/favorite");
  I.wait(2);
  I.dontSeeElement(".card");
});
