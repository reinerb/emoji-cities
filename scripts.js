// Constants for the size of the city
const CITY_WIDTH = 10;
const SKY_HEIGHT = 4;
const CELL_SIZE = '20px';

// Lists of emojis for each type of city component
const BUILDINGS = []
const WEATHER = {
    sunny: [],
    rainy: [],
    cloudy: [],
    windy: [],
    snowy: [],
    stormy: []
}
const SUN_MOON = {
    sunny: [],
    rainy: [],
    cloudy: [],
    windy: [],
    snowy: [],
    stormy: []
}

// Select the city grid
const cityGrid = document.querySelector('#city-grid');

cityGrid.style.cssText += `--city-width: ${CITY_WIDTH}; --city-height: ${SKY_HEIGHT}; --cell-size: ${CELL_SIZE}`

for (let i = 0; i < CITY_WIDTH * SKY_HEIGHT; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');

    cityGrid.appendChild(cell);
}