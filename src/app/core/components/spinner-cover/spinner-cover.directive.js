export const spinnerCover = () => {
  return {
    restrict: 'E',
    template: '<div ng-show="vm.isLoading" class="spinner-cover">' +
    '<div class="la-ball-grid-beat spinner-cover-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
    scope: {
      isLoading: '='
    },
    controller: () => {
    },
    controllerAs: 'vm',
    bindToController: true
  };
};

