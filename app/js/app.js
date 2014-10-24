    /**
 * Created by Aditya on 02-10-2014.
 */
'use strict';
angular.module('myApp',['ngRoute','myApp.controller','myApp.directive','myApp.services']).
    config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/view1',{
            templateUrl:'partials/home.html',
            controller:'homeCtrl'
        }).otherwise({
            redirectTo:'/view1'
        })
    }])
