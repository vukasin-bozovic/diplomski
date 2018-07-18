import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import uibModal from 'angular-ui-bootstrap/src/modal';
import 'angular-local-storage';

import CorerModule from '../core';
import WeatherModule from '../weather';
import CitiesModule from '../cities';

import HomeConfig from './home.config';

import HomeController from './controllers/home.controller';

import './home.less';

export default angular.module('wa.home', [
  CorerModule,
  uiRouter,
  WeatherModule,
  CitiesModule,
  uibModal
])
  .controller('HomeController', HomeController)
  .config(HomeConfig)
  .name;


