import BaseModel from '../../core/services/base.model';

function Factory(WeatherHour) {

  class WeatherDay extends BaseModel {
    constructor(data) {
      super();
      this.city = data.city;
      this.list = data.list;
    }

    static build(data) {
      const list = angular.isDefined(data.list) ? WeatherHour.transform(data.list) : [];
      const {city} = data,
        dataMap = {
          city,
          list
        };

      return new this(dataMap);
    }

    getByDates() {
      let byDay = {};
      angular.forEach(this.list, (value) => {
        let d = new Date(value['dt']),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear(),
          date;
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        date = [year, month, day].join('-');

        byDay[date] = byDay[date] || [];
        byDay[date].push(value);
      });

      return byDay;
    }
  }

  return WeatherDay;
}

Factory.$inject = ['WeatherHour'];
export default Factory;
