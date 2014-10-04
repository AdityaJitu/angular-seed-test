/**
 * Created by Aditya on 02-10-2014.
 */
angular.module('myApp.directive',[]).
directive('inputbox',['$log','$parse',function($log, $parse){
        return{
            restrict:'AEC',
            //require:'ngModel',
            scope: {},
            template: '<input type="text" ng-model="foo.bar" ng-init="foo.bar=\'aditya\'"/>{{foo.bar}}',
            link: function (scope, element, attr, ngModelCtrl) {
                scope.$watch('foo.bar', function (newVal, oldVal) {
                    $log.info("inside inputbox" + newVal);
                }, true)



            }
        }
    }]).directive('outsideisolatedmodel', ['$log', function ($log) {
        return{
            restrict: 'AEC',
            require: 'ngModel',
            scope: {
                outermodel: '=ngModel'
            },
            link: function (scope, element, attr) {
                scope.outermodel = "Aditya from directive";
                scope.$watch('outermodel', function (newVal, oldVal) {
                    $log.info(newVal);
                })
            }
        }
    }]).directive('outsidemodel', [function () {
        return{
            restrict: 'AEC',
            require: 'ngModel',
            link: function (scope, element, attr, ngmodelctrl) {

                scope.$watch(attr.ngModel, function (newVal, oldVal) {
                    ngmodelctrl.$setViewValue(newVal);
                    //     ngmodelctrl.$render();

                })
            }
        }
    }]);
