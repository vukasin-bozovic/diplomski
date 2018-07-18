import angular from 'angular';
import 'ui-select';
import 'angular-sanitize';

import Core from '../core';

import weatherCurrent from './directives/current/current.directive';
import weatherLong from './directives/long/long.directive';
import weatherShort from './directives/short/short.directive';

import WeatherService from './services/weather.service';

import WeatherLongForecastController from './controllers/long-forecast.controller';
import WeatherShortForecastController from './controllers/short-forecast.controller';

import WeatherCurrentModel from './services/current.model';
import WeatherDayModel from './services/day.model';
import WeatherHourModel from './services/hour.model';

import WeatherConfig from './weather.config';

import './weather.less';

export default angular.module('wa.weather', [
  Core,
  'ui.select',
  'ngSanitize'
])
  .controller('WeatherLongForecastController', WeatherLongForecastController)
  .controller('WeatherShortForecastController', WeatherShortForecastController)
  .directive('weatherCurrent', weatherCurrent)
  .directive('weatherLong', weatherLong)
  .directive('weatherShort', weatherShort)
  .service('WeatherService', WeatherService)
  .factory('WeatherCurrent', WeatherCurrentModel)
  .factory('WeatherDay', WeatherDayModel)
  .factory('WeatherHour', WeatherHourModel)
  .config(WeatherConfig)
  .name;


