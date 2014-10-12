describe('Unit: MainController', function () {
    beforeEach(module('myApp.controller'));
    var ctrl, scope;
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('MainController', {
            $scope: scope
        });

    }));

    it('should create $scope.greeting when calling sayHello', function () {
        expect(scope.greeting).toBe(undefined);
        // expect(scope.greetingService).toBeDefined();
        scope.sayHello();
        expect(scope.greeting).toBe('Hello World');
        expect(scope.fname).not.toBe('Aditya Padi');
        expect(scope.fname).not.toBe(undefined);

    });
})
