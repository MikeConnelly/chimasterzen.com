// TODO: possible solution, just use a second repo.
// Remove images from this one and make it public
// Copy all code and images to a second repo and make it private. Use that for deployment.
import placeholder from './assets/placeholder/placeholder.png';

/**
 * Conditionally loads all images, if the image doesn't exist then it replaces it with a placeholder.
 * If any image load fails then all subsequent loads will fail,
 * but I'm only using this for all-or-nothing scenarios, so I'm fine with that.
 *
 * @returns list of objects containing the image assets and their associated data
 */
export default function () {
  let chi_football;
  let chi_prom;
  let chi_52;
  let chi_bench;
  let chi_bjj;
  let chi_boulder;
  let chi_chicken;
  let chi_drink;
  let chi_drink_2;
  let chi_fish;
  let chi_house;
  let chi_oriole;
  let chi_red;
  let chi_savage;
  let chi_snap;
  let chi_squat;
  let chi_swim;
  let chi_young;

  try {
    chi_football = require('./assets/img/chi_football.jpg');
    chi_prom = require('./assets/img/chi_prom.jpg');
    chi_52 = require('./assets/img/chi_52.jpg');
    chi_bench = require('./assets/img/chi_bench.jpg');
    chi_bjj = require('./assets/img/chi_bjj.jpg');
    chi_boulder = require('./assets/img/chi_boulder.png');
    chi_chicken = require('./assets/img/chi_chicken.JPG');
    chi_drink = require('./assets/img/chi_drink.png');
    chi_drink_2 = require('./assets/img/chi_drink_2.png');
    chi_fish = require('./assets/img/chi_fish.JPG');
    chi_house = require('./assets/img/chi_house.JPG');
    chi_oriole = require('./assets/img/chi_oriole.jpg');
    chi_red = require('./assets/img/chi_red.png');
    chi_savage = require('./assets/img/chi_savage.jpg');
    chi_snap = require('./assets/img/chi_snap.PNG');
    chi_squat = require('./assets/img/chi_squat.jpg');
    chi_swim = require('./assets/img/chi_swim.JPG');
    chi_young = require('./assets/img/chi_young.jpg');
  } catch (err) {
    // do nothing, images will be replaced with placeholders
  }

  return [
    {
      img: chi_football || placeholder,
      title: 'CHI-FOOTBALL',
      price: '$135.99',
      stock: '22',
      type: 'premium',
      header: true,
      index: 0,
    },
    {
      img: chi_prom || placeholder,
      title: 'CHI-PROM',
      price: '$209.98',
      stock: '12',
      type: 'premium',
      header: true,
      index: 1,
    },
    {
      img: chi_fish || placeholder,
      title: 'CHI-FISH',
      price: '$99.99',
      stock: '41',
      type: 'premium',
      header: false,
      index: 2,
    },
    {
      img: chi_boulder || placeholder,
      title: 'CHI-BOULDER',
      price: '$119.99',
      stock: '30',
      type: 'premium',
      header: false,
      index: 3,
    },
    {
      img: chi_drink || placeholder,
      title: 'CHI-DRINK',
      price: '$89.99',
      stock: '44',
      type: 'premium',
      header: false,
      index: 4,
    },
    {
      img: chi_drink_2 || placeholder,
      title: 'CHI-DRINK-2',
      price: '$89.99',
      stock: '56',
      type: 'premium',
      header: false,
      index: 5,
    },
    {
      img: chi_chicken || placeholder,
      title: 'CHI-CHICKEN',
      price: '$140.98',
      stock: '8',
      type: 'premium',
      header: false,
      index: 6,
    },
    {
      img: chi_swim || placeholder,
      title: 'CHI-SWIM',
      price: '$69.69',
      stock: '69',
      type: 'premium',
      header: false,
      index: 7,
    },
    {
      img: chi_young || placeholder,
      title: 'CHI-YOUNG',
      price: '$79.99',
      stock: '58',
      type: 'premium',
      header: false,
      index: 8,
    },
    {
      img: chi_snap || placeholder,
      title: 'CHI-SNAP',
      price: '$49.99',
      stock: '261',
      type: 'standard',
      header: true,
      index: 9,
    },
    {
      img: chi_oriole || placeholder,
      title: 'CHI-ORIOLE',
      price: '$39.99',
      stock: '409',
      type: 'standard',
      header: false,
      index: 10,
    },
    {
      img: chi_bjj || placeholder,
      title: 'CHI-BJJ',
      price: '$45.99',
      stock: '380',
      type: 'standard',
      header: false,
      index: 11,
    },
    {
      img: chi_52 || placeholder,
      title: 'CHI-52',
      price: '$52.99',
      stock: '520',
      type: 'standard',
      header: false,
      index: 12,
    },
    {
      img: chi_red || placeholder,
      title: 'CHI-RED',
      price: '$29.99',
      stock: '420',
      type: 'standard',
      header: false,
      index: 13,
    },
    {
      img: chi_squat || placeholder,
      title: 'CHI-SQUAT',
      price: '$59.99',
      stock: '310',
      type: 'standard',
      header: false,
      index: 14,
    },
    {
      img: chi_bench || placeholder,
      title: 'CHI-BENCH',
      price: '$69.98',
      stock: '288',
      type: 'standard',
      header: false,
      index: 15,
    },
    {
      img: chi_savage || placeholder,
      title: 'CHI-SAVAGE',
      price: '$48.99',
      stock: '377',
      type: 'standard',
      header: false,
      index: 16,
    },
    {
      img: chi_house || placeholder,
      title: 'CHI-HOUSE',
      price: '$29.99',
      stock: '532',
      type: 'standard',
      header: false,
      index: 17,
    },
  ];
}
