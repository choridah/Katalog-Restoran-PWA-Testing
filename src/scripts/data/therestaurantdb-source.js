/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
// eslint-disable-next-line import/no-unresolved
import API_ENDPOINT from '../globals/api-endpoint';
 
class TheRestaurantDbSource {
  static async homeRestaurants() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants; 
  }
 
  static async favoriteRestaurants() {
    const response = await fetch(API_ENDPOINT.FAVORITE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
 // eslint-disable-next-line no-trailing-spaces
 
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }
}
 // eslint-disable-next-line no-trailing-spaces
 
// eslint-disable-next-line eol-last
export default TheRestaurantDbSource;