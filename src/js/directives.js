
angular.module('myApp.directives', [])
.directive('helloWorld', function () {
    return {
        restrict: 'AE',
        scope: { name: "=name" },
        template: 
"<h1>Hello {{ name.first }} {{ name.last }}!</h1>" +
   "<input data-ng-model='name.first'></input>" + 
  "<input data-ng-model='name.last'></input>"
        }
    });

// myapp.directive('helloWorld', function() {
//     var directive = {};

//     directive.restrict = 'AE'; /* restrict this directive to elements & attributes*/
// 	directive.scope = {
//         name : "=name"
//     }
//     directive.restrict = 'AE';
//          directive.template = "<h1>Hello {{ name.first }} {{ name.last }}!</h1>" +
//    "<input data-ng-model='name.first'></input>" + 
//   "<input data-ng-model='name.last'></input>";
	
//     return directive;
// });