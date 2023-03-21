// Constants for the size of the city
const CITY_WIDTH = 10;
const CITY_HEIGHT = 4;
const CELL_SIZE = '30px';

// Lists of emojis for each type of city component
const WEATHER_TYPES = [
  'clear',
  'raining',
  'cloudy',
  'snowing',
  'storming',
  'night',
];
const BUILDINGS = [];
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
  storming: [0x2601, 0x1f326, 0x26c8, 0x1f329],
};

// Select the city grid
const cityGrid = document.querySelector('#city-grid');

// Set CSS custom properties for the city grid
cityGrid.style.cssText += `--city-width: ${CITY_WIDTH}; --city-height: ${CITY_HEIGHT}; --cell-size: ${CELL_SIZE}`;

// Randomy select a weather type
const todaysWeather =
  WEATHER_TYPES[Math.floor(Math.random() * WEATHER_TYPES.length)];
console.log(`Today's weather is ${todaysWeather}`);

// Add top row to city grid
for (let i = 0; i < CITY_WIDTH; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  if (i === 0) {
    const weatherList = SUN_MOON[todaysWeather];
    const weather = weatherList[Math.floor(Math.random() * weatherList.length)];
    console.log(String.fromCodePoint(weather));
    cell.innerText = String.fromCodePoint(weather);
  }
  cityGrid.appendChild(cell);
}

// Add cells to the city grid
for (let i = 1; i < (CITY_WIDTH - 1) * CITY_HEIGHT; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');

  cityGrid.appendChild(cell);
}

// Add buildings to city grid
for (let i = 0; i < CITY_WIDTH; i++) {
  let cell = document.createElement('div');
  cell.classList.add('cell');

  cityGrid.appendChild(cell);
}
