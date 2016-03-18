angular.module('example.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        // controller: 'linksController'
  })

  .state('bookmarks', {
        url: '/bookmarks',
        templateUrl: 'bookmarks.html',
        // controller: 'linksController'
  })

  .state('settings', {
        url: '/settings',
        templateUrl: 'settings.html',
        // controller: 'linksController'
  })

  //Страница, открываемая при запуске приложения
  $urlRouterProvider.otherwise('/home');
});

