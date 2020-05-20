angular.module('mainController',[])
.controller('mainCtrl',function($scope,$location,$timeout,User){
        $scope.successMsg = false;
        $scope.errorMsg = false;
        $scope.maxratings = [1,2,3,4,5];
        $scope.selectedRating = 0;

        $scope.submitReview = function(userData){
            $scope.successMsg = false;
            $scope.errorMsg = false;
            if(userData){
                userData.rating = $scope.selectedRating;
            }
            console.log(userData);
            var successcallbackadd = function(data){
                console.log(data);
                if (data.success) {
                    $scope.successMsg = data.msg;
                    $timeout(function(){
                        $location.path('/showallreviews');
                    },1000);
                }
                else {
                    $scope.errorMsg = data.msg;
                }
            };
            var errorcallback = function(data){
            };
            User.addReview(userData,successcallbackadd,errorcallback);
        }
        $scope.setRating = function(x){
            $scope.selectedRating = x;
        }
});