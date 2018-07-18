import CitiesFavoriteModalTemplate from '../../cities/views/favorite.tpl.html';
import CitiesFavoriteModalController from '../../cities/controllers/favorite.controller';

class HomeController {
  constructor(WeatherService, $uibModal, localStorageService) {
    this.service = WeatherService;
    this.localStorageService = localStorageService;
    this.$uibModal = $uibModal;
    this.isLoading = false;
    this.weathers = undefined;
    this.favoriteCities = this.localStorageService.get('favoriteCities');
  }

  $onInit() {
    if (this.favoriteCities) {
      this.getCurrent({
        ids: this.favoriteCities.ids
      });
    }

  }

  getCurrent(params) {
    this.isLoading = true;
    this.service.getCurrent(params)
      .then((response) => {
        this.weathers = response;
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
  }

  openFavoriteModal() {
    const modalInstance = this.$uibModal.open({
      template: CitiesFavoriteModalTemplate,
      controller: CitiesFavoriteModalController,
      controllerAs: 'vm',
      resolve: {
        favoriteCities: () => {
          return this.favoriteCities;
        }
      },
      size: 'md',
      backdrop: 'static'
    });

    modalInstance.result.then((response) => {
      this.localStorageService.set('favoriteCities', {
        selected: response.selectedCities,
        ids: response.ids
      });

      this.getCurrent({
        ids: response.ids
      })
    });
  }

}

HomeController.$inject = ['WeatherService', '$uibModal', 'localStorageService'];

export default HomeController;
