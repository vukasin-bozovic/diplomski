export const placeholderArea = () => {
  return {
    scope: {
      icon: '@',
      colorCode: '@',
      heading: '@'
    },
    controller: () => {
    },
    bindToController: true,
    transclude: true,
    controllerAs: 'vm',
    template: ' <div class="placeholder-area placeholder-area-{{vm.colorCode}}"> ' +
    '               <h1><i class="icon-{{vm.icon}}"></i> {{vm.heading}}</h1>' +
    '               <div class="divider-none" ng-transclude></div>' +
    '           </div>'
  };
};
