angular.module('userServices',[])
.factory('User',function($http){
    var userFactory = {};
    userFactory.addReview = function(userData,successcallback,errorcallback){
        return $http({
            url: '/api/review',
            method: "POST",
            data:userData
        }).success(function(data){
            successcallback(data);
        }).error(function(data) {
            errorcallback(data);
        });
    };
    userFactory.getReviews = function(successcallback,errorcallback){
        return $http({
            url: '/api/review',
            method: "GET"
        }).success(function(data){
            successcallback(data);
        }).error(function(data) {
            errorcallback(data);
        });   
    };
    return userFactory;
});