import { MainEnum, Description } from './fiveDay';
import { FiveDayOld } from './fiveDayOld';

export const FiveDayForecast: FiveDayOld = {
    list: [{
        dt: 1539626400,
        main: {
            temp: 9.52,
            temp_min: 9.52,
            temp_max: 9.52,
            pressure: 11.22,
            sea_level: 1023.78,
            grnd_level: 1028.5,
            humidity: 100,
            temp_kf: -1.7
        },
        weather: [{
            id: 802,
            main: MainEnum.Clouds,
            description: Description.ScatteredClouds,
            icon: '03n'
        }],
        wind: {
            speed: 3.74,
            deg: 95.5061
        },
        dt_txt: '2018-10-15 18:00:00'
    }],
    city: {
        id: 2964574,
        name: 'Dublin',
        coord: {
            lat: 53.3498,
            lon: -6.2603
        },
        country: 'IE',
        population: 15000
    }
};
