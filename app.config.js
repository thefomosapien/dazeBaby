angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('homepage', {
            url: '/homepage',
            templateUrl: 'homepage/homepage.html',
            controller: 'homepageCtrl'
        })

    $urlRouterProvider.otherwise('/homepage');
})