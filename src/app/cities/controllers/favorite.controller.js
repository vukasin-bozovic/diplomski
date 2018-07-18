class CitiesFavoriteModalController {
  constructor(CityService, $uibModalInstance, favoriteCities) {
    this.service = CityService;
    this.$uibModalInstance = $uibModalInstance;
    this.favoriteCities = favoriteCities;
    this.isLoading = false;
    this.cities = [];
    this.selectedCities = [];
    this.citiesDDLSettings = {
      scrollableHeight: '250px',
      scrollable: true,
      enableSearch: true,
      styleActive: true,
      idProp: 'id',
      displayProp: 'name',
      externalIdProp: 'id',
      selectionLimit: 4,
      showCheckAll: false
    };
  }

  $onInit() {
    this.getCities();
  }

  getCities() {
    this.isLoading = true;
    this.service.get()
      .then((response) => {
        this.cities = response;
        this.selectedCities = this.favoriteCities ? this.favoriteCities.selected : [];
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
  }

  update() {
    this.$uibModalInstance.close({
      selectedCities: this.selectedCities,
      ids: this.selectedCities.map((city) => {
        return city.id;
      })
    });
  }

}

CitiesFavoriteModalController.$inject = ['CityService', '$uibModalInstance', 'favoriteCities'];

export default CitiesFavoriteModalController;
