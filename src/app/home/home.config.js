import HomeTemplate from '../home/view/home.tpl.html';
import HomeController from '../home/controllers/home.controller';

const config = ($stateProvider) => {

  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        'mainContent@': {
          template: HomeTemplate,
          controller: HomeController,
          controllerAs: 'vm'
        }
      },
      data: {
        pageTitle: 'Home'

      }
    })
};

config.$inject = ['$stateProvider'];

export default config;
