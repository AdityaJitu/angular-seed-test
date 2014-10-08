'use strict';
angular.module('myApp.services', []).

service('greeting', [
    function () {
        this.getgreeting = function () {
            return "Hello World Service";
        };
}]);
