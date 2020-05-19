angular.module('showAllReviewController',[])
.controller('showAllReviewCtrl',function($scope,$location,$timeout,$rootScope,User){
        $scope.successMsg = false;
        $scope.errorMsg = false;
        $scope.reviewsList = [];

        $scope.getAllReviews = function(){
            $scope.successMsg = false;
            $scope.errorMsg = false;
            var successcallbackadd = function(data){
                console.log(data);
                if (data.success) {
                    $scope.successMsg = data.msg;
                    $scope.reviewsList = data.data;
                }
                else {
                    $scope.errorMsg = data.msg;
                }
            };
            var errorcallback = function(data){
            };
            User.getReviews(successcallbackadd,errorcallback);
        }
        $scope.getAllReviews();
});