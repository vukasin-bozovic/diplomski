import WeatherLongForecastTemplate from '../weather/views/long-forecast.tpl.html';
import WeatherLongForecastController from '../weather/controllers/long-forecast.controller';

import WeatherShortForecastTemplate from '../weather/views/short-forecast.tpl.html';
import WeatherShortForecastController from '../weather/controllers/short-forecast.controller';


const config = ($stateProvider) => {

  $stateProvider
    .state('longForecast', {
      url: '/long-forecast?id',
      views: {
        'mainContent@': {
          template: WeatherLongForecastTemplate,
          controller: WeatherLongForecastController,
          controllerAs: 'vm'
        }
      },
      resolve: {
        id: ['$stateParams', ($stateParams) => {
          return $stateParams.id;
        }]
      },
      data: {
        pageTitle: 'Long Forecast'

      },
    })
    .state('shortForecast', {
      url: '/short-forecast?id',
      views: {
        'mainContent@': {
          template: WeatherShortForecastTemplate,
          controller: WeatherShortForecastController,
          controllerAs: 'vm'
        }
      },
      resolve: {
        id: ['$stateParams', ($stateParams) => {
          return $stateParams.id;
        }]
      },
      data: {
        pageTitle: 'Long Forecast'

      },
    })
};

config.$inject = ['$stateProvider'];

export default config;
