/* eslint-disable linebreak-style */
/* eslint-disable no-empty-function */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantFavoriteTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <style>
        .content-section {
            padding: 16px;
            align-content: center;
        }

        .latest {
            width: 100%;
            text-align: center;
        }
        
        .latest__label {
            font-size: 32px;
            font-weight: lighter;
            align-content: center;
            padding-top: 16px;
        }
        
        .latest__label::after {
            content: '';
            margin-top: 16px;
            display: block;
            border-bottom: 1px solid #eeeeee;
        }
        
        .posts {
            margin: 32px auto auto;
            text-align: left;
            display: grid;
            grid-row-gap: 16px;
        }
        
        .post-item {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 100%;
            border-radius: 5px;
            overflow: hidden;
            background-color: white;
        }
        
        .post-item__content {
            padding: 16px;
        }

        .post-item-rating-city {
            display: grid;
            grid-template-columns: 50% 50%;
        }
        
        .post-item__city {
            text-align: right;
        }

        .post-item__thumbnail {
            width: 100%;
            max-height: 300px;
            min-height: 250px;
        }
        
        .post-item__title {
            font-weight: 500;
            min-height: 35px;
            max-height: 100px;
            font-size: 23px;
            margin-top: 16px;
            transition: 0.3s opacity;
        }
        
        .post-item__title:hover {
            opacity: 0.5;
        }
        
        .post-item__title a {
            text-decoration: none;
            color: inherit;
            padding: 16px 0px;
        }

        .post-item__description {
            margin-top: 16px;
            font-size: 14px;
            line-height: 1.5em;
            text-align: justify;
        }

        @media screen and (max-width: 400px) {
            .posts {
                display: grid;
                grid-template-columns: 1fr;
                grid-column-gap: 16px;
                grid-row-gap: 16px;
                margin: 16px;
            }

            .post-item__thumbnail {
                max-height: 150px;
                min-height: 80px;
            }
        }

        @media screen and (min-width: 646px) {
            .posts {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 16px;
                grid-row-gap: 16px;
                margin: 16px;
            }

            .post-item__thumbnail {
                max-height: 200px;
                min-height: 200px;
            }
        }
        
        @media screen and (min-width: 951px) {
            .headline {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
            }
        
            .posts {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-column-gap: 16px;
                grid-row-gap: 16px;
                margin: 16px;
            }

            .post-item__thumbnail {
                max-height: 300px;
                min-height: 300px;
            }
        }
        
        @media screen and (min-width: 1200px) {
            main {
                max-width: 1200px;
            }

            .posts {
                display: grid;
                grid-template-columns: repeat(3, 34%);
                grid-column-gap: 16px;
                grid-row-gap: 16px;
            }

            .post-item__thumbnail {
                max-height: 200px;
            }

            .rate {
                text-align: center;
                margin: 0 auto;
                display: inline-block;
            }
        }            
      </style>
      <section class="content-section">
        <div class="latest">
            <h1 class="latest__label">Favorite Restaurants</h1>
            <div id="posts" class="posts restaurant-item"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      // eslint-disable-next-line no-undef
      restaurantsContainer.innerHTML += createRestaurantFavoriteTemplate(restaurant);
    });
  },
};

// eslint-disable-next-line linebreak-style
export default Like;
