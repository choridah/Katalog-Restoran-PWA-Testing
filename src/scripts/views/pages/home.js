/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
// eslint-disable-next-line import/no-unresolved
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import '../../components/jumbotron';

const Home = {
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
            padding-top: 35px;
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
            padding: 16px 32px 32px 32px;
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
            padding: 19px 0px;
        }

        .post-item__description {
            margin-top: 16px;
            font-size: 14px;
            line-height: 1.5em;
            text-align: justify;
        }

        @media screen and (max-width: 700px) {
            .posts {
                display: grid;
                grid-template-columns: 1fr;
                grid-column-gap: 16px;
                grid-row-gap: 16px;
            }

            .post-item__thumbnail {
                max-height: 300px;
                min-height: 250px;
            }
        }

        @media screen and (min-width: 500px) {
            .posts {
                display: grid;
                grid-template-columns: 1 fr;
                grid-column-gap: 16px;
                grid-row-gap: 16px;
            }

            .post-item__thumbnail {
                max-height: 400px;
                min-height: 250px;
            }
        }

        @media screen and (min-width: 660px) {
            .posts {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 16px;
                grid-row-gap: 16px;
            }

            .post-item__thumbnail {
                max-height: 300px;
                min-height: 250px;
            }
        }
        
        @media screen and (min-width: 701px) {
            .headline {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
            }
        
            .posts {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 16px;
                grid-row-gap: 16px;
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
      <hero-title id="main-content"></hero-title>
      <section class="content-section">
        <div class="latest">
            <h1 class="latest__label" id="exploreto">Explore Restaurant</h1>
            <div id="posts" class="posts"></div>
        </div>
      </section>
    `;
  },
 
  async afterRender() {
    const restaurants = await TheRestaurantDbSource.homeRestaurants();
    // console.log(restaurants);
 
    const restaurantsContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
 // eslint-disable-next-line no-trailing-spaces
 
export default Home;
