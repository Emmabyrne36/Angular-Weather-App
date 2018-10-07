import { Weather, Coord } from './weather';

export const WeatherForecast: Weather = {
    weather: [{
        id: 310,
        main: 'Drizzle',
        description: 'light intensity drizzle rain',
        icon: '09d'
    }],
    base: 'stations',
    main: {
        temp: 15.49,
        pressure: 1020,
        humidity: 93,
        temp_min: 15,
        temp_max: 16
    },
    visibility: 4000,
    wind: {
        speed: 1.5
    },
    clouds: {
        all: 75
    },
    dt: 1535785200,
    sys: {
        type: 1,
        id: 5237,
        message: 0.0024,
        country: 'IE',
        sunrise: 1535780085,
        sunset: 1535829239
    },
    id: 2964574,
    name: 'Dublin',
    cod: 200
};

export const Coords: Coord = {
    lon: -6.26,
    lat: 53.35
};
