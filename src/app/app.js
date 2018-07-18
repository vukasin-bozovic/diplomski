import angular from 'angular';

import CoreModule from './core';
import HomeModule from './home';
import WeatherModule from './weather';
import CitiesModule from './cities';

import AppConfig from './app.config';
import AppController from './app.controller';
import AppTemplate from './app.html';

import '../style/app.less';

const app = () => {
  return {
    template: AppTemplate,
    controller: AppController,
    controllerAs: 'appCtrl'
  };
};

export default angular
  .module('wa', [
    CoreModule,
    HomeModule,
    WeatherModule,
    CitiesModule
  ])
  .directive('app', app)
  .controller('AppController', AppController)
  .config(AppConfig)
  .name;
