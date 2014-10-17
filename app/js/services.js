'use strict';
var appServices=angular.module('myApp.services', []);

appServices.service('greeting', [
    function () {
        this.getgreeting = function () {
            return "Hello World Service";
        };
}]);


function myFunc($log){
    this.log=$log;

}

myFunc.prototype.sayHello=function(){
    this.log.info("Hello World from a service");
    
};

appServices.service('demoService',['$log',myFunc]);


