/**
 * Created by Aditya on 02-10-2014.
 */
angular.module('myApp.controller',[]).
controller('homeCtrl',['$log',function($log){
        $log.info("you are inside homeCtrl");
        $log.info("Hey!! you try to ngModelController!!");
    }]);
