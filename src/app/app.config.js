AppConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$animateProvider', '$compileProvider', '$qProvider', 'localStorageServiceProvider'];

export default function AppConfig($stateProvider, $urlRouterProvider, $httpProvider, $animateProvider, $compileProvider, $qProvider, localStorageServiceProvider) {

  //== disable rejection errors in console
  $qProvider.errorOnUnhandledRejections(false);

  //== Re-enabling auto bindings
  $compileProvider.preAssignBindingsEnabled(true);

  // == If page doesn't exist redirect to
  $urlRouterProvider.otherwise('/home');
  //Fix problem with ngAnimate and ngShow/ngHide
  $animateProvider.classNameFilter(/animate-/);

  localStorageServiceProvider
    .setPrefix('wa')
    .setStorageType('localStorage')
    .setStorageCookie(5, '/');
}
