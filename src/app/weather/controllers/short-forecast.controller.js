class WeatherShortForecastController {
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
          this.getCurrent({
            ids: this.selectedCity.id
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
    this.getCurrent({
      ids: this.selectedCity.id
    });
  }


  getCurrent(params) {
    this.isLoading = true;
    this.WeatherService.getCurrent(params)
      .then((response) => {
        this.weather = response[0];
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
  }

}

WeatherShortForecastController.$inject = ['WeatherService', 'CityService', 'HelperService', 'id'];

export default WeatherShortForecastController;
