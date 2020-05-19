angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider,$locationProvider){
    $routeProvider

        .when('/review', {
            templateUrl:'app/views/pages/review.html',
            controller:'mainCtrl'
        })
        .when('/showallreviews', {
            templateUrl:'app/views/pages/showallreviews.html',
            controller:'mainCtrl'
        })
        .otherwise({ redirectTo: '/review' });

    // to remove # from url of angular
    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    });

});