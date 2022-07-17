const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

const message = '';

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.restaurant-item');
  I.see(message, '.restaurant-item');
});

Scenario('liking one restaurant', async({ I }) => {
  I.see(message, '.restaurant-item');

  I.amOnPage('/');

  I.waitForElement('.restaurant__name a', 5);
  I.seeElement('.restaurant__name a');

  //I.click(locate('.restaurant__name a').first());
  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.post-item', 5);
  I.seeElement('.post-item');
  
  // const likedRestaurantName = await I.grabTextFrom('.post-item');
  const likedRestaurantName = await I.grabTextFrom('.post-item a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async({ I }) => {
  I.see(message, '.restaurant-item');

  I.amOnPage('/');

  /*
  Terkadang juga saat pengujian ada kelambatan 
  karena koneksi. 
  Solusinya kamu bisa gunakan I.waitForElement() 
  setiap akan melakukan I.see() atau I.seeElement()
  */
  I.waitForElement('.restaurant__name a', 5);
  I.seeElement('.restaurant__name a');
  
  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.post-item', 5);
  I.seeElement('.post-item');

  // const likedRestaurantName = await I.grabTextFrom('.post-item');
  const likedRestaurant = locate('.post-item a').first();
  const likedRestaurantName = await I.grabTextFrom(likedRestaurant);
  
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurant);
  
  // I.amOnPage('/#/like');
  // I.seeElement('.restaurant__name');
  // I.click('.restaurant__name a');

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see(message, '.restaurant-item');
});