import {weatherHourModel} from 'karma/mocks/weatherHourModel';


describe('WeatherHour Model', () => {
  let WeatherHour, instance;

  beforeEach(angular.mock.module('wa'));
  beforeEach(angular.mock.module('wa.weather'));

  beforeEach(inject((_WeatherHour_,) => {
    WeatherHour = _WeatherHour_;
  }));

  it('should exist', () => {
    expect(WeatherHour).toBeDefined();
  });

  it('should have static build method', () => {
    expect(WeatherHour.build).toBeDefined();
  });

  it('build method should return new instance', () => {
    expect(WeatherHour.build(weatherHourModel) instanceof WeatherHour).toBeTruthy();
  });

  it('should have static transform method', () => {
    expect(WeatherHour.transform).toBeDefined();
  });

  describe('Instance', () => {
    beforeEach(() => {
      instance = WeatherHour.build(weatherHourModel);
    });

    it('should have property dt defined', () => {
      expect(instance.dt).toBeDefined();
    });

    it('should have property main defined', () => {
      expect(instance.main).toBeDefined();
    });

    it('should have property weather defined', () => {
      expect(instance.weather).toBeDefined();
    });

    it('should have property clouds defined', () => {
      expect(instance.clouds).toBeDefined();
    });

    it('should have property wind defined', () => {
      expect(instance.wind).toBeDefined();
    });

    it('should have property sys defined', () => {
      expect(instance.sys).toBeDefined();
    });

    it('should have property iconUrl defined', () => {
      expect(instance.iconUrl).toBeDefined();
    });

  });
});
