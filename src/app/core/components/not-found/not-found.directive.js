import template from './not-found.tpl.html';

NotFoundController.$inject = ['$window'];

function NotFoundController($window) {
    const vm = this;

    vm.back = back;

    function back() {
        $window.history.back();
    }
}


export function notFound() {

    return {
        restrict: 'AE',
        template,
        replace: true,
        controllerAs: 'notFoundCtrl',
        controller: NotFoundController
    };
}
