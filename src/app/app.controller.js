// import ENV from 'env/_selected';

class AppController {
  constructor($scope, $rootScope, $state, $q) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$q = $q;
    // this.env = ENV.name;

    this.currentCompany = {
      name: 'Visoka ICT'
    }
  }

  $onInit() {}

  // == State change success
  stateChangeSuccess(toState) {
    if (angular.isDefined(toState.data)) {
      if (angular.isDefined(toState.data.pageTitle)) {
        document.title = `Weather APP | ${toState.data.pageTitle}`;
      }
    }

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }


  notAuthorized() {
    this.$state.go('forbidden');
  }

  notAuthenticated() {
  }
}

AppController.$inject = ['$scope', '$rootScope', '$state', '$q'];

export default AppController;
