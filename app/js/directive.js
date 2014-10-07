/**
 * Created by Aditya on 02-10-2014.
 */
'use strict';
angular.module('myApp.directive', []).

directive('dynamicTemplate', [
    function () {
        return {
            templateUrl: function (telem, tattr) {
                return 'partials/hometemplate.html';
            },
            restrict: 'AEC',
            link: function (scope, elem, attr) {


            }
        };
}]).directive('dirinsidemodel', [
    function () {
        return {
            restrict: 'AEC',
            transclude: true,
            scope: {},
            template: function (telem, tattr) {
                return '<div><input type="text" ng-model="foo" placeholder="Enter foo here"/><span ng-transclude></span></div>';
            },
            link: function (scope, elem, attr) {
                var input = elem.find('input');

                console.log(input.eq(1));
                scope.$watch('foo', function () {
                    console.log("foo is being watched");
                });

                scope.$watch(function () {
                    return input.eq(1).val();

                }, function (newVal, oldVal) {
                    console.log("the new Val is " + newVal);
                    console.log("the old val is " + oldVal);
                    console.log("bar is being watched !!!");
                });

            }


        };

}]).directive('timeDuration',[function(){
    return{
        restrict:'AEC',
      template:'<div>Enter Time Here:-<input type="text" ng-model="num" size="50" width="30"/></div>'

    };

}]);
