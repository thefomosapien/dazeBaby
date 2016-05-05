angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('homepage', {
            url: '/homepage',
            templateUrl: 'homepage/homepage.html',
            controller: 'homepageCtrl'
        })
        
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact/contact.html',
            controller: 'contactCtrl'
        })

    $urlRouterProvider.otherwise('/homepage');
})