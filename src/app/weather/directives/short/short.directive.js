import template from './short.tpl.html';

WeatherShortController.$inject = [];

function WeatherShortController() {
    const vm = this;


}

const weatherShort = () => {
    return {
        scope: {
            weather: '=ngModel',
            title: '@'
        },
        replace: true,
        transclude: true,
        template,
        controller: WeatherShortController,
        controllerAs: 'vm',
        bindToController: true
    };
};

export default weatherShort;
