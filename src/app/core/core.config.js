const config = ($stateProvider) => {

  $stateProvider
    .state('notFound', {
      url: '/not-found',
      views: {
        'mainContent@': {
          template: '<not-found></not-found>'
        }
      },
      data: {
        pageTitle: '404 Not Found'
      }
    })
};

config.$inject = ['$stateProvider'];

export default config;
