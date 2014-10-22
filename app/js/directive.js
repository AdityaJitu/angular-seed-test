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

}]).directive('timeDuration', [

function () { //directive to test for ngmodelcontroller
  return {
    restrict: 'AEC',
    template: '<div>Enter Time Here:-<input type="text" ng-model="num" size="50" width="30"/></div>'

  };

}]).directive('clickColorChange', ['$log',
function ($log) {
  return {
    replace: true,
    restrict: 'AEC',

    template: '<div><div><button ng-click="changeColor()">{{buttontext}}</button></div></div>',
    //            template:'<div><div>{{buttontext}}</div></div>',
    link: function (scope, element, attr) {
      scope.buttontext = "Click Here";
      $log.info("Welcome to clickColorChange");
      scope.changeColor = function () {
        var buttonElem = element.find('button');
        var button = buttonElem.eq(0);
        if (button.parent().hasClass('divclass')) {
          button.parent().removeClass('divclass');
        } else {
          button.parent().addClass('divclass');
        }

        scope.buttontext = "Hello World";
      };
    }
  };
}]);
