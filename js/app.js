/**
 * Created by Aditya on 02-10-2014.
 */
angular.module('myApp',['ngRoute','myApp.controller']).
    config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/view1',{
            templateUrl:'partials/home.html',
            controller:'homeCtrl'
        }).otherwise({
            redirectTo:'/view1'
        })
    }])