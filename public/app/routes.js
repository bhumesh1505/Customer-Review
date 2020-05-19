angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider,$locationProvider){
    $routeProvider

        .when('/home', {
            templateUrl:'app/views/pages/home.html'
        })
        .when('/review', {
            templateUrl:'app/views/pages/users/register.html',
            controller:'mainCtrl'
        })
        .otherwise({ redirectTo: '/home' });

    // to remove # from url of angular
    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    });

});