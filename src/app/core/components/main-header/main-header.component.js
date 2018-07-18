import controller from './main-header.controller';
import template from './main-header.tpl.html';

const MainHeaderComponent = {
    template,
    controller,
    controllerAs: 'mainHeaderCtrl',
    transclude: true,
};

export default MainHeaderComponent;
