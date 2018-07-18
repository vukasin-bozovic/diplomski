import angular from 'angular';
import uibModal from 'angular-ui-bootstrap/src/modal';
import 'angularjs-dropdown-multiselect';
import 'angular-local-storage';

import CitiesFavoriteModalController from './controllers/favorite.controller';

import CityService from './services/city.service';

import './cities.less';

export default angular.module('wa.cities', [
  uibModal,
  'angularjs-dropdown-multiselect',
  'LocalStorageModule'
])
  .controller('CitiesFavoriteModalController', CitiesFavoriteModalController)
  .service('CityService', CityService)
  .name;


