/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (Restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(Restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});