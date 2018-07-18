import template from './long.tpl.html';

WeatherLongController.$inject = [];

function WeatherLongController() {
    const vm = this;


}

const weatherLong = () => {
    return {
        scope: {
            weather: '=ngModel',
            title: '@'
        },
        replace: true,
        transclude: true,
        template,
        controller: WeatherLongController,
        controllerAs: 'vm',
        bindToController: true
    };
};

export default weatherLong;
