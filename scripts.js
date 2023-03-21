// Constants for the size of the city
const CITY_WIDTH = 10;
const CITY_HEIGHT = 5;
const CELL_SIZE = '30px';

// Constants for probability of weather
const PROB_MIN = 0.3;
const PROB_MAX = 0.7;

// Lists of emojis for each type of city component
const WEATHER_TYPES = [
  'clear',
  'raining',
  'cloudy',
  'snowing',
  'stormy',
  'night',
];
const BUILDINGS = [
  0x1f3df, 0x1f3db, 0x1f3d7, 0x1f3d8, 0x1f3e0, 0x1f3e1, 0x1f3e2, 0x1f3e3,
  0x1f3e4, 0x1f3e5, 0x1f3e6, 0x1f3e8, 0x1f3e8, 0x1f3ea, 0x1f3eb, 0x1f3ec,
  0x1f3ed, 0x26ea, 0x1f54c, 0x1f3d9,
];
const WEATHER = {
  clear: [0x2601],
  night: [0x1fa90, 0x2b50, 0x1f31f, 0x1f320, 0x1f30c, 0x2604],
  raining: [0x2601, 0x1f327, 0x1f4a7],
  cloudy: [0x2601],
  snowing: [0x1f328, 0x2744, 0x2601],
  stormy: [0x1f327, 0x1f329, 0x26c8, 0x26a1, 0x1f4a7],
};
const SUN_MOON = {
  clear: [0x2600, 0x1f31e, 0x1f324],
  night: [
    0x1f311, 0x1f312, 0x1f313, 0x1f314, 0x1f315, 0x1f316, 0x1f317, 0x1f318,
    0x1f319, 0x1f31a, 0x1f31b, 0x1f31c, 0x1f31d,
  ],
  raining: [0x1f326, 0x2601, 0x26c5, 0x1f325, 0x1f327],
  cloudy: [0x1f324, 0x1f325, 0x26c5, 0x2601],
  snowing: [0x2601, 0x26c5, 0x1f328, 0x1f325],
  stormy: [0x2601, 0x1f326, 0x26c8, 0x1f329],
};

// Select dynamic components
const cityGrid = document.querySelector('#city-grid');
const todaysWeather = document.querySelector('#todays-weather');

// Set CSS custom properties for the city grid
cityGrid.style.cssText += `--city-width: ${CITY_WIDTH}; --city-height: ${CITY_HEIGHT}; --cell-size: ${CELL_SIZE}`;

// Function to generate a random decimal number
const randomDecimal = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Function to select a random element from a list
const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Randomy select a weather type
const whatWeather =
  WEATHER_TYPES[Math.floor(Math.random() * WEATHER_TYPES.length)];
todaysWeather.innerText = `It is ${whatWeather} right now.`;

// Determine the probability of a cell having weather
const weatherProb =
  todaysWeather === 'clear'
    ? randomDecimal(PROB_MIN, PROB_MAX) / 3
    : randomDecimal(PROB_MIN, PROB_MAX);

// Add top row to city grid
for (let i = 0; i < CITY_WIDTH; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  if (i === 0) {
    const weather = randomElement(SUN_MOON[whatWeather]);
    console.log(weather);
    cell.innerText = String.fromCodePoint(weather);
  }
  cityGrid.appendChild(cell);
}

// Add cells to the sky
for (let i = 0; i < (CITY_HEIGHT - 2) * CITY_WIDTH; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  console.log(`Making cell ${i}`);

  // Randomly add weather
  let prob = randomDecimal(0, 1);
  if (prob < weatherProb) {
    cell.innerText = String.fromCodePoint(randomElement(WEATHER[whatWeather]));
  }

  cityGrid.appendChild(cell);
}

// Add buildings to city grid
for (let i = 0; i < CITY_WIDTH; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  cell.innerText = String.fromCodePoint(randomElement(BUILDINGS));

  cityGrid.appendChild(cell);
}
