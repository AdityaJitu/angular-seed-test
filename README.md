# angular-seed-test

this is test project not for production.
Think before you use it.

### This line is for h3 markup

> On 17-10-2014

I was able to install bower components.

Action Pan
==========

Write test cases fo0 directives

To Do
-----

Look for information like how to write test case when service is injected in the controller
Pratice to write test case for controller

> On 25-10-2014

ngModelController
=================

**We have to use ngModelController if you want to grab hold of a ngModel which is used as an attributes of a custom directive.  This is a controller of 

### ngModelController.$render() :

* It is responsible to update the view.
* This is called when the value of $modelValue & $viewValue are different.  Actually it's work is to change the value of raw **$modelValue** to usable **$viewValue**.
So if you want to show **Date** output in any format say **dd/mm/yyyy** then it would be best to use **$render**

####Important:
*Model to view converion is done by the **$formatters** .
*View to model is done by the **$parsers** .

> On 26-10-2014 at 09:23 hrs
