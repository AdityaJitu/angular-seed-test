    /**
     * Created by Aditya on 02-10-2014.
     */
    'use strict';
    angular.module('myApp.directive', []).
    directive('dirinsidemodel', [ //model inside
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

                    scope.$watch(function () {
                        return input.eq(0).val()
                    }, function () {

                    });
                    scope.$watch(function () {
                        return input.eq(1).val();
                    }, function (newVal, oldVal) {

                    });

                    scope.$watch('foo', function (newVal, oldVal) {

                    });

                    scope.$watch('bar', function (newVal, oldVal) {

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
            }]).directive('parserdirective', ['$parse',
        function ($parse) {
            return {
                restrict: 'AEC',
                link: function (scope, elem, attr) {
                    var getter = $parse('name');
                    var context = {
                        name: 'Aditya'
                    };

                    scope.name = $parse(attr.add);
                },
                template: '{{name()}}'
            };
        }]).directive('outerdirmodel', [
        function () {
            return {
                restrict: 'AEC',
                scope: {},
                require: 'ngModel',
                template: '<button ng-click="decrement()">-</button><div>{{value}}</div><button ng-click="increment()">+</button>',
                link: function (scope, elem, attr, ngModelController) {

                    //scope.value = 0; //initialising the value of the model
                    

                    //updating model to view
                    ngModelController.$render = function () {
                        elem.find('div').text(ngModelController.$viewValue);

                    };

                    function updateModel(offset) {
                        ngModelController.$setViewValue(ngModelController.$viewValue + offset); //updating the model
                        ngModelController.$render();
                    }
                    
                    scope.decrement = function () {
                        updateModel(-1);
                    };

                    scope.increment = function () {
                        updateModel(+1);
                    };

                }
            };
        }]);