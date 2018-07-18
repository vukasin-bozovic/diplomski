import angular from 'angular';

class MainNavigationController {

    constructor($scope, $element, $attrs) {
        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
    }

    $onInit() {}
}

MainNavigationController.$inject = ['$scope', '$element', '$attrs'];

export default MainNavigationController;
