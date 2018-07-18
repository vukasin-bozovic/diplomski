describe('Weather Configuration', () => {

  beforeEach(() => {
    angular.mock.module('wa');
    angular.mock.module('wa.weather');
  });

  let $rootScope, $state, $injector, thisState, state;

  beforeEach(() => {
    inject((_$rootScope_, _$state_, _$injector_) => {
      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
    });
  });


  describe('profile.details.trainingHistory', () => {
    beforeEach(() => {
      state = {
        name: 'longForecast',
        url: '/long-forecast?id'
      };
      thisState = $state.get(state.name);
    });

    it('should resolve state', () => {
      $state.go(state.name, {
        id: 1234,
      });
      $rootScope.$digest();

      expect($state.current.name).toBe(state.name);
      expect($state.current.url).toBe(state.url);
      expect($injector.invoke(thisState.resolve.id)).toBe('1234');

    });
  });
});

