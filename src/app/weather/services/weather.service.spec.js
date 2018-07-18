describe('Weather Service', () => {
  let $httpBackend, $q, deferred, WeatherService;

  beforeEach(() => {
    angular.mock.module('wa');
    angular.mock.module('wa.weather');
  });

  beforeEach(inject((_$httpBackend_, _$q_, _WeatherService_) => {

    $httpBackend = _$httpBackend_;
    $q = _$q_;
    deferred = $q.defer();

    WeatherService = _WeatherService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation(false);
    $httpBackend.verifyNoOutstandingRequest(false);
  });

  describe('getCurrent method', () => {
    it('hits getCurrent /api/data/2.5/group?id=${params.ids}`', () => {
      $httpBackend
        .when('GET', `/api/data/2.5/group?id=2&APPID=b262502a3c76497dd6e2e6ad64582b21&units=metric`)
        .respond(200);

      WeatherService.getCurrent({
        APPID: 'b262502a3c76497dd6e2e6ad64582b21',
        units: 'metric',
        ids: [2]
      });
      $httpBackend.flush();
    });
  });

  describe('getLongForecast method', () => {
    it('hits getCurrent /api/data/2.5/forecast?id=${params.id}&APPID=b262502a3c76497dd6e2e6ad64582b21`', () => {
      $httpBackend
        .when('GET', `/api/data/2.5/forecast?id=undefined&APPID=b262502a3c76497dd6e2e6ad64582b21`)
        .respond(200);

      WeatherService.getLongForecast({
        APPID: 'b262502a3c76497dd6e2e6ad64582b21',
        ids: [2]
      });
      $httpBackend.flush();
    });
  });

});
