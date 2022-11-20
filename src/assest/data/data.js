import touringv5 from '../../assest/touring-v5.webp';
import dreamTouring from '../../assest/dream-edition-v5.webp';
import grandTouring from '../../assest/grand-touring-v5.webp';
import W21 from '../../assest/Lucid-picture/ZL_W21X.606737b4.png';
import W19 from '../../assest/Lucid-picture/ZL_W19B.137ed9f2.png';
import air_white_21 from '../../assest/Lucid-picture/air-dream-e-white-aero-21.png';
import air_white_19 from '../../assest/Lucid-picture/air-dream-e-white-aero-19.png';
import air_black_19 from '../../assest/Lucid-picture/air-dream-e-black-aero-19.png';
import air_black_21 from '../../assest/Lucid-picture/air-dream-e-black-aero-21.png';
import air_gold_21 from '../../assest/Lucid-picture/air-dream-e-gold-aero-21.png';
import air_gold_19 from '../../assest/Lucid-picture/air-dream-e-gold-aero-19.png';

import air_red_19 from '../../assest/Lucid-picture/air-dream-e-red-aero-19.png';
import air_red_21 from '../../assest/Lucid-picture/air-dream-e-red-aero-21.png';
import ZL_P0_black from '../../assest/Lucid-picture/ZL_P003_black.680b73bc.png';
import ZL_P0_red from '../../assest/Lucid-picture/ZL_P007_red.072ac8b9.png';
import ZL_P0_gold from '../../assest/Lucid-picture/ZL_P001_goold.a211bfd4.png';
import ZL_P0_white from '../../assest/Lucid-picture/ZL_P002_white.fde6e598.png';
import air_sapphire from '../Lucid-picture/lucid-air-sappghire.png';
import sapphire_W from '../Lucid-picture/WH10.79150b6b.png';
import sapphire_C from '../Lucid-picture/L822.71e6fa13.png';

export const carsData = [
  { image: touringv5 },
  { image: dreamTouring },
  { image: grandTouring },
];

export const carWheels = [
  {
    name: '19” Aero Range',
    model: 'AIR DREAM EDITION',

    image: W19,
  },
  {
    name: '21” Aero Dream',
    model: 'AIR DREAM EDITION',

    image: W21,
  },
  {
    name: 'Staggered 20” and 21” Aero Sapphire',
    model: 'AIR SAPPHIRE',

    image: sapphire_W,
  },
];
export const carColors = [
  {
    name: 'Infinite black',
    model: 'AIR DREAM EDITION',

    image: ZL_P0_black,
  },
  {
    name: 'Eureka gold',
    model: 'AIR DREAM EDITION',

    image: ZL_P0_gold,
  },
  {
    name: 'Zenith red',
    model: 'AIR DREAM EDITION',

    image: ZL_P0_red,
  },
  {
    name: 'Stellar white',
    model: 'AIR DREAM EDITION',

    image: ZL_P0_white,
  },

  {
    name: 'Sapphire Blue',
    model: 'AIR SAPPHIRE',

    image: sapphire_C,
  },
];
export const carimages = [
  {
    name: 'AIR DREAM EDITION',
    color: 'Stellar white',
    wheel: '21” Aero Dream',
    image: air_white_21,
  },
  {
    name: 'AIR DREAM EDITION',
    color: 'Stellar white',
    wheel: '19” Aero Range',
    image: air_white_19,
  },
  {
    name: 'AIR DREAM EDITION',
    color: 'Infinite black',
    wheel: '19” Aero Range',
    image: air_black_19,
  },
  {
    name: 'AIR DREAM EDITION',
    color: 'Infinite black',
    wheel: '21” Aero Dream',
    image: air_black_21,
  },
  {
    name: 'AIR DREAM EDITION',
    color: 'Eureka gold',
    wheel: '19” Aero Range',
    image: air_gold_19,
  },
  {
    name: 'AIR DREAM EDITION',
    color: 'Eureka gold',
    wheel: '21” Aero Dream',
    image: air_gold_21,
  },
  {
    name: 'AIR DREAM EDITION',
    color: 'Zenith red',
    wheel: '19” Aero Range',
    image: air_red_19,
  },
  {
    name: 'AIR DREAM EDITION',
    color: 'Zenith red',
    wheel: '21” Aero Dream',
    image: air_red_21,
  },
  {
    name: 'AIR SAPPHIRE',
    color: 'Sapphire Blue',
    wheel: 'Staggered 20” and 21” Aero Sapphire',
    image: air_sapphire,
  },
];
export const cars = [
  { name: 'AIR DREAM EDITION' },
  { name: 'AIR SAPPHIRE' },

  { name: 'Air Touring (doesnt work)' },
  { name: 'Air Pure (doesnt work)' },
];
