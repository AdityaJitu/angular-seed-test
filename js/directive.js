/**
 * Created by Aditya on 02-10-2014.
 */
angular.module('myApp.directive',[]).
directive('inputbox',['$log','$parse',function($log, $parse){
        return{
            restrict:'AEC',
            scope:{
                name:'='
            },
            template:'<input type=text ng-model="box"/>{{box}}<br/>',
            link:function(scope, element, attr){
                    $log.info("Hello Welcome to TechMahindra.  We are trying to watch ngModel box");

                    scope.$watch('box',function(newVal, oldVal){
                       //box is watched here

                    });



                attr.$observe('derp',function(newVal, oldVal){
                        //derp is watched here
                })


                    scope.$watch('name',function(newVal, oldVal){
                        //name is watched here

                    });



            }
        }
    }]);
