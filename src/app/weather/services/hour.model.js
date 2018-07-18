import BaseModel from '../../core/services/base.model';

function Factory() {

  class WeatherHour extends BaseModel {
    constructor(data) {
      super();
      this.dt = data.dt;
      this.main = data.main;
      this.weather = data.weather;
      this.clouds = data.clouds;
      this.wind = data.wind;
      this.snow = data.snow;
      this.sys = data.sys;
      this.iconUrl = data.iconUrl;
    }

    static build(data) {

      data.dt = new Date(data.dt * 1000);

      const {dt, main, weather, clouds, wind, snow, sys} = data,
        iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`,
        dataMap = {
          dt,
          main,
          weather,
          clouds,
          wind,
          snow,
          sys,
          iconUrl
        };

      return new this(dataMap);
    }

  }

  return WeatherHour;
}

export default Factory;
