/**
 * Created by Aditya on 12-10-2014.
 */

describe("Unit: clickColorChange", function () {
    
    var compile, rootScope;
    var template='<div><button ng-click="changeColor()" class="ng-binding">Click Here</button></div>';
    
    //beforeEach(module('myApp.directive'));
    
    beforeEach(function(){
        module('myApp.directive',function($provide){
            $provide.value('$log',console);
        })
    })
    
    beforeEach(inject(function(_$compile_, _$rootScope_){        
        compile=_$compile_;
        rootScope=_$rootScope_;       
    }));
    
    it("should only render the compiled text 'Click Here'",function(){
        var element=compile(angular.element("<click-color-change></click-color-change>"))(rootScope);
        rootScope.$digest();
        expect(element.html()).toContain(template);
    });
    
    
    it("should change the button text on click", function(){
        var element=compile(angular.element("<click-color-change></click-color-change>"))(rootScope);
        rootScope.$digest();
        
        expect(rootScope.buttontext).toEqual('Click Here');
        
        var buttonElement=element.find('button');
        var firstButtonElement=buttonElement.eq(0);
        
        console.log(firstButtonElement.parent().hasClass('divclass'));
        expect(firstButtonElement.parent().hasClass('divclass')).toBe(false);
        
        expect(firstButtonElement.attr('disabled')).toBeFalsy();
        firstButtonElement.triggerHandler('click');
        
        console.log(firstButtonElement.parent().hasClass('divclass'));
        expect(firstButtonElement.parent().hasClass('divclass')).toBeTruthy();
        
        expect(rootScope.buttontext).toEqual('Hello World');
        
    })
});