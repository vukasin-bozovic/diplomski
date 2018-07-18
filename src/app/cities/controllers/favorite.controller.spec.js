import {fakeModal} from 'karma/mocks/fakeModal';

describe('CitiesFavoriteModalController ', () => {
  let scope, controller, $q, deferred, $uibModalInstance, CityService, favoriteCities;

  beforeEach(() => {
    angular.mock.module('wa');
    angular.mock.module('wa.cities');
  });

  beforeEach(inject((_$q_, _$controller_, _$rootScope_, _CityService_) => {
    scope = _$rootScope_.$new();
    $uibModalInstance = fakeModal;
    $q = _$q_;

    favoriteCities = {
      selected: [],
      ids: []
    };

    deferred = $q.defer();

    CityService = _CityService_;

    spyOn(CityService, 'get').and.returnValue(deferred.promise);
    spyOn($uibModalInstance, 'close').and.returnValue(deferred.promise);


    controller = _$controller_('CitiesFavoriteModalController', {
      $scope: scope,
      $uibModalInstance,
      favoriteCities
    });

  }));

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('isLoading property should be defined', () => {
    expect(controller.isLoading).toBe(false);
  });

  it('$uibModalInstance should be defined', () => {
    expect(controller.$uibModalInstance).toBeDefined();
  });

  it('cities should be defined', () => {
    expect(controller.cities).toEqual(jasmine.any(Array));
  });

  it('selectedCities should be defined', () => {
    expect(controller.selectedCities).toEqual(jasmine.any(Array));
  });

  it('citiesDDLSettings should be defined', () => {
    expect(controller.citiesDDLSettings).toEqual(jasmine.any(Object));
  });

  it('should have getCities method defined', () => {
    expect(controller.getCities).toBeDefined();
  });

  it('should have $onInit method', () => {
    expect(controller.$onInit).toBeDefined();
    controller.$onInit();
  });

  it('should call getCities method and resolve promise', () => {
    expect(controller.getCities).toBeDefined();
    controller.getCities();
    expect(controller.isLoading).toBe(true);
    deferred.resolve([{}, {}]);
    scope.$apply();

    expect(controller.cities.length).toBe(2);
    expect(controller.isLoading).toBe(false);
  });


  it('should call getCities method and reject promise', () => {
    expect(controller.getCities).toBeDefined();
    controller.getCities();
    expect(controller.isLoading).toBe(true);
    deferred.reject('fail');
    scope.$apply();

    expect(controller.cities.length).toBe(0);
    expect(controller.isLoading).toBe(false);
  });

  it('should call update method', () => {
    expect(controller.update).toBeDefined();
    controller.selectedCities = [{id: 1}, {id: 2}];
    controller.update();
    deferred.resolve();
    scope.$apply();

    expect($uibModalInstance.close).toHaveBeenCalledTimes(1)

  });


});
