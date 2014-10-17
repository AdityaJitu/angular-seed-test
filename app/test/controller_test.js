//to know the version of jasmine
describe("Unit:jasmine version",function(){
    it('prints the jasmine version', function(){
        console.log('jasmine-version '+jasmine.getEnv().versionString());
    });
});


//to know the version of jasmine ends here


describe('Unit: MainController', function () { //this is test suite
    beforeEach(module('myApp.controller'));
    var ctrl, scope;
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('MainController', {
            $scope: scope
        });

    }));

    it('should create $scope.greeting when calling sayHello', function () { //this is test spec
        var a = 12, b = 12;
        expect(a).toBe(b);
        expect(scope.greeting).toBe(undefined);
        // expect(scope.greetingService).toBeDefined();
        scope.sayHello();
        expect(scope.greeting).toEqual('Hello World'); //expectation in test spec
        expect(scope.fname).not.toEqual('Aditya Padi');
        expect(scope.fname).not.toBe(undefined);

    });
});
