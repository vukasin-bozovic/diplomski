class WeatherLongForecastController {
  constructor(WeatherService, CityService, HelperService, id) {
    this.WeatherService = WeatherService;
    this.CityService = CityService;
    this.HelperService = HelperService;
    this.id = id;
    this.isLoading = false;
    this.cities = [];
    this.selectedCity = undefined;
    this.weather = undefined;
  }

  $onInit() {
    this.isLoading = true;
    this.CityService.get()
      .then((response) => {
        this.cities = response;
        this.selectedCity = this.HelperService.getItemByProp(this.id, this.cities, 'id');

        if (this.selectedCity) {
          this.getLongForecast({
            id: this.selectedCity.id
          });
        }
        else {
          this.isLoading = false;
        }
      }, () => {
        this.isLoading = false;
      });
  }

  onSelect() {
    this.getLongForecast({
      id: this.selectedCity.id
    });
  }


  getLongForecast(params) {
    this.isLoading = true;
    this.WeatherService.getLongForecast(params)
      .then((response) => {
        this.weather = response;
        this.weatherByDates = this.weather.getByDates();
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
  }

}

WeatherLongForecastController.$inject = ['WeatherService', 'CityService', 'HelperService', 'id'];

export default WeatherLongForecastController;
