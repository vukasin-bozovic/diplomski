import {weatherDayModel} from 'karma/mocks/weatherDayModel';


describe('WeatherDay Model', () => {
  let WeatherDay, WeatherHour, instance;

  beforeEach(angular.mock.module('wa'));
  beforeEach(angular.mock.module('wa.weather'));

  beforeEach(inject((_WeatherDay_, _WeatherHour_) => {
    WeatherDay = _WeatherDay_;
    WeatherHour = _WeatherHour_;
  }));

  it('should exist', () => {
    expect(WeatherDay).toBeDefined();
  });

  it('should have static build method', () => {
    expect(WeatherDay.build).toBeDefined();
  });

  it('build method should return new instance', () => {
    expect(WeatherDay.build(weatherDayModel) instanceof WeatherDay).toBeTruthy();
  });

  it('should have static transform method', () => {
    expect(WeatherDay.transform).toBeDefined();
  });

  describe('Instance', () => {
    beforeEach(() => {
      instance = WeatherDay.build(weatherDayModel);
    });

    it('should have property city defined', () => {
      expect(instance.city).toBeDefined();
    });

    it('should have property list defined', () => {
      expect(instance.list).toBeDefined();
    });

    it('first object in array list property should be instance of WeatherHour model', () => {
      expect(instance.list[0] instanceof WeatherHour).toBeTruthy();
    });

    it('should have getByDates method', () => {
      expect(instance.getByDates).toBeDefined();
      let orderedDates = instance.getByDates();
      expect(orderedDates).toEqual(jasmine.any(Object));
    });

  });
});
