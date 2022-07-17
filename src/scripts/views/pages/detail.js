/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
import UrlParser from '../../routes/url-parser';
// eslint-disable-next-line import/extensions
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
// eslint-disable-next-line import/extensions
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <style>
    @media screen and (max-width: 699px) {
      .post{
        width: 100%;
        padding: 16px;
      }
      .post-content-general {
        display: grid;
        grid-template-rows: 30% 70%;
      }
      .post-content-general .post__poster {
          width: 100%;
          max-width: 600px;
          border-radius: 15px;
      }
      .post-content-general .post__info h4 {
          margin: 8px 0;
      }
      .latest__label {
        padding: 24px 0px;
        text-align: center;
      }
      .address-label {
        padding: 16px 0px;
      }
      .post__info {
        padding-top: 13px;
      }
      .list-menu-food, .list-menu-drink {
        margin-left: 16px;
        list-style-type:circle;
      }
      .menu-food-drink-category {
        padding: 16px 0px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        row-gap: 16px;
      }
      .menu-food h3, .menu-drink h3, .menu-category h3 {
        padding: 16px;
        text-align: center;
        width: 100%;
        background-color: white;
        border-radius: 7px;
        margin-bottom: 16px;
      }
      .review-label {
        padding: 16px;
        text-align: center;
      }
      .card-review {
        padding: 16px 0px;
        margin: 16px 0px;
        width: 100%;
        background-color: white;
        border-radius: 9px;
      }
      .customer-review-info {
        display: grid;
        grid-template-columns: 60% 40%;
      }
      .customer-review-detail, .customer-review-info {
        padding: 0px 24px;
        max-width: 690px; 
      }
      .review-info-date {
        text-align: right;
        color: gray;
      }
      .icon-favorite {
        background-image: '../../public/icon/heart.png';
      }
      .like {
        font-size: 23px;
        top: 83px;
        right: 25px;
        position: fixed;
        background-color: white;
        color: #db0000;
        border: 0;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    @media screen and (min-width: 700px) and (max-width: 1000px) {
      #post-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 16px;
        margin: 16px;
      }
      .post__poster {
        max-width: 420px;
        border-radius: 16px;
        min-height: 630px;
        max-height: 670px;
      }
      .latest__label, .address-label {
        padding: 16px 0px;
      } 
      .post__info {
        padding: 16px 0px;
      }
      .post__info h3, .post__info h4 {
        padding: 4px 0px;
      }
      .menu {
        padding: 0px 16px;
      }
      .menu-food-drink-category {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 8px;
      }
      ul li {
        list-style-type: none;
        padding: 0px 5px;
      }
      .menu-category h3, .menu-food h3, .menu-drink h3 {
        padding: 16px;
        text-align: center;
        width: 100%;
        background-color: white;
        border-radius: 7px;
        margin-bottom: 16px;
      }
      .customer-review, .review-label {
        padding: 16px;
      }
      .customer-review h2 {
        text-align: center;
      }
      .card-review {
        padding: 16px 0px;
        margin: 16px 0px;
        width: 100%;
        background-color: white;
        border-radius: 9px;
      }
      .customer-review-info {
        display: grid;
        grid-template-columns: 80% 20%;
      }
      .customer-review-detail, .customer-review-info {
        padding: 0px 16px;
        width: 100%; 
      }
      .review-info-date {
        text-align: right;
        color: gray;
      }
      .like {
        font-size: 23px;
        top: 75px;
        right: 25px;
        position: fixed;
        background-color: white;
        color: #db0000;
        border: 0;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    @media screen and (min-width: 1001px) {
      #post-content {
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 16px;
        margin: 16px;
      }
      .post__poster {
        width: 100%;
        border-radius: 16px;
        min-height: 600px;
      }
      .latest__label, .address-label {
        padding: 16px 0px;
      } 
      .post__info {
        padding: 16px 0px;
      }
      .post__info h3, .post__info h4 {
        padding: 4px 0px;
      }
      .post__overview {
        padding-right: 16px;
      }
      .menu {
        padding: 0px 16px;
      }
      .menu-food-drink-category {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 8px;
      }
      ul li {
        list-style-type: none;
        padding: 0px 5px;
      }
      .menu-category h3, .menu-food h3, .menu-drink h3 {
        padding: 16px;
        text-align: center;
        width: 100%;
        background-color: white;
        border-radius: 7px;
        margin-bottom: 16px;
      }
      .customer-review, .review-label {
        padding: 16px;
      }
      .customer-review h2 {
        text-align: center;
      }
      .card-review {
        padding: 16px 0px;
        margin: 16px 0px;
        width: 100%;
        background-color: white;
        border-radius: 9px;
      }
      .customer-review-info {
        display: grid;
        grid-template-columns: 80% 20%;
      }
      .customer-review-detail, .customer-review-info {
        padding: 0px 16px;
        width: 100%; 
      }
      .review-info-date {
        text-align: right;
        color: gray;
      }
      .like {
        font-size: 23px;
        top: 75px;
        right: 25px;
        position: fixed;
        background-color: white;
        color: #db0000;
        border: 0;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    </style>
    <div>
      <div id="post" class="post"></div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestaurantDbSource.detailRestaurant(url.id);
    const { restaurant } = resto;
 
    const RestaurantContainer = document.querySelector('#post');
    RestaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    // eslint-disable-next-line no-undef
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};
 // eslint-disable-next-line indent
 // eslint-disable-next-line no-trailing-spaces
 
export default Detail;
