'use strict';
angular.module('myApp.services',[]).

service('greeting',[function(){
    this.getgreeting=function(){
        alert("Hello First Service");
    };
}]);
