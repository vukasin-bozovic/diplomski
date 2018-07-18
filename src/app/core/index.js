import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import CoreConfig from './core.config';
import BaseModel from './services/base.model';

import HelperService from './services/helper.service';

import MainHeaderComponent from './components/main-header/main-header.component';
import MainNavigationComponent from './components/main-navigation/main-navigation.component';
import MainFooterComponent from './components/main-footer/main-footer.component';
import {notFound} from './components/not-found/not-found.directive';
import {placeholderArea} from './components/placeholder-area/placeholder-area.directive';
import {spinnerCover} from './components/spinner-cover/spinner-cover.directive';



import './core.less';

export default angular.module('wa.core', [
  uiRouter
])
  .factory('BaseModel', BaseModel)
  .service('HelperService', HelperService)
  .directive('mainNavigation', MainNavigationComponent)
  .directive('notFound', notFound)
  .directive('placeholderArea', placeholderArea)
  .directive('spinnerCover', spinnerCover)
  .component('mainHeader', MainHeaderComponent)
  .component('mainFooter', MainFooterComponent)
  .config(CoreConfig)
  .name;


