/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class restaurantSource {
  static async listRestaurans() {
    const response = await fetch(API_ENDPOINT.DAFTAR);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default restaurantSource;
