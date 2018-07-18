class MainHeaderController {

    constructor($scope, $element, $attrs) {
        this.$scope = $scope;
        this.$element = $element;
        this.$attrs = $attrs;
    }

    $onInit() {
        this.logoSrc = this.$attrs.logoSrc !== undefined ? this.$attrs.logoSrc : '';
        this.title = this.$attrs.title !== undefined ? this.$attrs.title : '';
    }
}

MainHeaderController.$inject = ['$scope', '$element', '$attrs'];

export default MainHeaderController;
