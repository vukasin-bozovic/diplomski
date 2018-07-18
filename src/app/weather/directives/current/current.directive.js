import template from './current.tpl.html';

WeatherCurrentController.$inject = [];

function WeatherCurrentController() {
    const vm = this;

}

const weatherCurrent = () => {
    return {
        scope: {
            weather: '=ngModel',
        },
        replace: true,
        transclude: true,
        template,
        bindToController: true,
        controller: WeatherCurrentController,
        controllerAs: 'vm'
    };
};

export default weatherCurrent;
