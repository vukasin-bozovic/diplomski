import angular from 'angular';
import controller from './main-navigation.controller';
import template from './main-navigation.tpl.html';

const MainNavigationComponent = ($compile) => {
    return {
        template,
        controller,
        restrict: 'AE',
        controllerAs: 'mainNavigationCtrl',
        replace: true,
        transclude: true,
        link: (scope, element, attrs, ctrl, transclude) => {
            transclude(scope, (clone) => {

                angular.forEach(clone, (item) => {
                    if (item instanceof Element) {
                        if (item.attributes.position) {
                            if (item.attributes.position.value === 'right') {
                                angular.element(element[0].querySelectorAll('.navbar.pull-right .navbar-nav'))
                                    .prepend($compile(item.outerHTML)(scope));
                                return false;
                            }
                        }
                        angular.element(element[0].querySelectorAll('.navbar.pull-left .navbar-nav'))
                            .append($compile(item.outerHTML)(scope));
                    }
                });

            });
        }
    };
};

MainNavigationComponent.$inject = ['$compile'];

export default MainNavigationComponent;

