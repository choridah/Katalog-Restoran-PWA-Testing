/* eslint-disable linebreak-style */
/* eslint-disable template-tag-spacing */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="post-content-general">
    <div id="post-content">
      <div id="post-label-poster">
        <img class="post__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      </div>
      <section id="post-info">
        <div>
          <h2 class="latest__label restaurant__name">${restaurant.name}</h2><hr>
          <h4 class="address-label">${restaurant.address}</h4>
        </div>
        <hr>
        <div class="post__info">
            <h3>Information</h3>
            <h4>Rating</h4>
            <p>${restaurant.rating}</p>
            <h4>City</h4>
            <p>${restaurant.city}</p>
        </div>
        <div class="post__overview">
            <h3>Description</h3>
            <p>${restaurant.description}</p>
        </div>
      </section>
    </div>
  </div>
  <div class="menu">
    <div class="menu-food-drink-category">
      <section class="menu-category">
        <h3>Category</h3>
        ${restaurant.categories.map((category) => `<ul class="list-menu-drink"><li>${category.name}</li></ul>`).join('')}
      </section>
      <section class="menu-food">
        <h3>Food</h3>
        ${restaurant.menus.foods.map((food) => `<ul class="list-menu-food"><li>${food.name}</li></ul>`).join('')}
      </section>
      <section class="menu-drink">
        <h3>Drink</h3>
        ${restaurant.menus.drinks.map((drink) => `<ul class="list-menu-drink"><li>${drink.name}</li></ul>`).join('')}
      </section>
    </div>
  </div> 
  <div class="customer-review">
  <hr><h2 class="review-label">Customer Reviews</h2><hr>
    ${restaurant.customerReviews.map((customerReview) => `
    <section class="card-review">
      <div class="customer-review-info">
        <h3>${customerReview.name}</h3>
        <h5 class="review-info-date">${customerReview.date}</h5>
      </div>
      <p class="customer-review-detail">${customerReview.review}</p>
    </section>
      `).join('')}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-item">
        <img class="post-item__thumbnail lazyload"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="${restaurant.name}">
        <div class="post-item__content">
          <p class="post-item-rating-city">⭐️&nbsp${restaurant.rating}  
            &nbsp&nbsp<em class="post-item__city">${restaurant.city}</em>
          </p>
          <h1 class="post-item__title restaurant__name"><b><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></b></h1><br>
          <hr>
          <p class="post-item__description">${restaurant.description}}</p><br>
        </div>
    </article>
  `;

const createRestaurantFavoriteTemplate = (restaurant) => `
  <article class="post-item">
      <img class="post-item__thumbnail lazyload"
      data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
      alt="${restaurant.name}">
      <div class="post-item__content">
        <p class="post-item-rating-city">⭐️&nbsp${restaurant.rating}</p>
        <h1 class="post-item__title"><b><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></b></h1><br>
      </div>
  </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
  `;

// eslint-disable-next-line no-unused-vars
const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

// eslint-disable-next-line linebreak-style
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  // eslint-disable-next-line comma-dangle
  createRestaurantFavoriteTemplate
};
