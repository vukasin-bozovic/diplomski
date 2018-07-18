import CitiesFavoriteModalTemplate from '../../cities/views/favorite.tpl.html';
import CitiesFavoriteModalController from '../../cities/controllers/favorite.controller';

import {fakeModal} from 'karma/mocks/fakeModal';

describe('HomeController ', () => {
  let scope, controller, $q, deferred, $uibModal, WeatherService, localStorageService, store, actualOptions;

  beforeEach(() => {
    angular.mock.module('wa');
    angular.mock.module('wa.home');
  });

  beforeEach(inject((_$q_, _$controller_, _$rootScope_, _WeatherService_, _localStorageService_, _$uibModal_) => {
    scope = _$rootScope_.$new();
    $uibModal = _$uibModal_;
    localStorageService = _localStorageService_;
    $q = _$q_;
    WeatherService = _WeatherService_;
    deferred = $q.defer();
    store = [];

    spyOn(localStorageService, 'get').and.callThrough()((key) => {
      return store[key];
    });
    spyOn(localStorageService, 'set').and.callThrough()((key, value) => {
      return store[key] = value;
    });

    spyOn(WeatherService, 'getCurrent').and.returnValue(deferred.promise);

    controller = _$controller_('HomeController', {
      $scope: scope,
      $uibModal,
      localStorageService: localStorageService
    });

  }));

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('isLoading property should be defined', () => {
    expect(controller.isLoading).toBe(false);
  });

  it('$uibModal should be defined', () => {
    expect(controller.$uibModal).toBeDefined();
  });

  it('favoriteCities should be defined', () => {
    expect(controller.favoriteCities).toBeDefined();
  });


  it('should have getCurrent method defined', () => {
    expect(controller.getCurrent).toBeDefined();
  });

  it('should have $onInit method', () => {
    expect(controller.$onInit).toBeDefined();
    controller.favoriteCities = localStorageService.set([{}, {}]);
    controller.$onInit();
    scope.$apply();

    expect(localStorageService.get).toHaveBeenCalledWith('favoriteCities');
  });

  it('should call getCurrent method and resolve promise', () => {
    expect(controller.getCurrent).toBeDefined();
    expect(controller.isLoading).toBe(false);
    expect(controller.weathers).toBeUndefined();
    deferred.resolve([{}, {}]);
    controller.getCurrent();
    scope.$apply();

    expect(controller.weathers.length).toBe(2);
    expect(controller.isLoading).toBe(false);
    expect(WeatherService.getCurrent).toHaveBeenCalledTimes(1);

  });

  it('should call getCurrent method and reject promise', () => {
    expect(controller.isLoading).toBe(false);
    expect(controller.weathers).toBeUndefined();
    deferred.reject('fail');
    controller.getCurrent();
    scope.$apply();

    expect(controller.weathers).toBeUndefined();
    expect(controller.isLoading).toBe(false);
  });


  describe('open favorite modal method', () => {
    beforeEach(() => {
      spyOn($uibModal, 'open').and.callFake((options) => {
        actualOptions = options;
        return fakeModal;
      });

    });

    it('openFavoriteModal method should be defined', () => {
      expect(controller.openFavoriteModal).toBeDefined();

      controller.openFavoriteModal();

      expect($uibModal.open).toHaveBeenCalled();

      let modalInstance = {
        template: CitiesFavoriteModalTemplate,
        controller: CitiesFavoriteModalController,
        controllerAs: 'vm',
        size: 'md',
        backdrop: 'static',
        resolve: {
          favoriteCities: jasmine.any(Function)
        }
      };

      expect($uibModal.open).toHaveBeenCalledWith(modalInstance);

    });

  });

});
