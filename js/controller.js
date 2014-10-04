/**
 * Created by Aditya on 02-10-2014.
 */
angular.module('myApp.controller',[]).
controller('homeCtrl',['$log','$scope',function($log, $scope){
//        $log.info("you are inside homeCtrl");
        $scope.fname="Aditya";
        $scope.lname="padhi";
        $scope.gender;
    }]);
