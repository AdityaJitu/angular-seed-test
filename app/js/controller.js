/**
 * Created by Aditya on 02-10-2014.
 */
angular.module('myApp.controller', []).
controller('homeCtrl', ['$log', '$scope', '$filter', '$injector',
    function ($log, $scope, $filter, $injector) {
        //        $log.info("you are inside homeCtrl");
        $scope.fname = "Aditya";
        $scope.lname = "padhi";


        $scope.countries = [
            {
                id: '5',
                name: 'India'
            },
            {
                id: '1',
                name: 'Russia'
            },
            {
                id: '2',
                name: 'Bangladesh'
            },
            {
                id:'4',
                name:'Nepal'

            }
    ];

    $scope.col=function(col,val){

//        if(angular.isUndefined(val)){
//
//        }
        $scope.rangeCollection=[];

        for(var i=0;i<((val!==undefined && val!=='')?val:col.length);i++){
            $scope.rangeCollection.push(col[i]);
        }
        return $scope.rangeCollection;

    };

        //        $scope.$watch('search', function (newVal, oldVal) {
        //            console.log('got it');
        //            $scope.newcountries=$filter('filter')($scope.countries,newVal);
        //        })

        //    var greeting=$injector.get('greeting');
        //greeting.getgreeting();

        var myFn = function (greeting) {

            greeting.getgreeting();
        };

        $injector.invoke(myFn);
        $scope.clickme = myFn;
    }]);
