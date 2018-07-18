class WeatherService {
  constructor($http, WeatherCurrent, WeatherDay) {
    this.$http = $http;
    this.WeatherCurrent = WeatherCurrent;
    this.WeatherDay = WeatherDay;
  }

  getCurrent(params) {
  //TODO: pull APPID as constant
    return this.$http
      .get(`/api/data/2.5/group?id=${params.ids}`, {
        params: {
          APPID: 'b262502a3c76497dd6e2e6ad64582b21',
          units: 'metric',
        }
      })
      .then((response) => {
        return this.WeatherCurrent.transform(response.data.list);
      })
      .catch('fail');
  }

  getLongForecast(params) {
    return this.$http
      .get(`/api/data/2.5/forecast?id=${params.id}&APPID=b262502a3c76497dd6e2e6ad64582b21`)
      .then((response) => {
        return this.WeatherDay.transform(response.data);
      })
      .catch('fail');
  }

}

WeatherService.$inject = ['$http', 'WeatherCurrent', 'WeatherDay'];

export default WeatherService;
