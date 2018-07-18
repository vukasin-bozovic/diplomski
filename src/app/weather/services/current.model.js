import BaseModel from '../../core/services/base.model';

function Factory() {

  class WeatherCurrent extends BaseModel{
    constructor(data) {
      super();
      this.id = data.id;
      this.coord = data.coord;
      this.weather = data.weather;
      this.main = data.main;
      this.visibility = data.visibility;
      this.wind = data.wind;
      this.clouds = data.clouds;
      this.name = data.name;
      this.sys = data.sys;
      this.iconUrl = data.iconUrl;
      this.date = data.dt;
    }

    static build(data) {

      data.main.temp = Math.round(data.main.temp);
      data.dt = new Date(data.dt * 1000);
      data.sys.sunrise = new Date(data.sys.sunrise * 1000);
      data.sys.sunset = new Date(data.sys.sunset * 1000);

      const {coord, weather, main, visibility, wind, clouds, sys, name, id, dt} = data,
        iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`,
        dataMap = {
          coord,
          weather,
          main,
          visibility,
          wind,
          clouds,
          name,
          sys,
          iconUrl,
          id,
          dt
        };

      return new this(dataMap);
    }

  }

  return WeatherCurrent;
}

export default Factory;
