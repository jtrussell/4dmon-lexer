"use strict";angular.module("4dmonLexerApp",[]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("4dmonLexerApp").factory("fdLexer",function(){return new window.fourdmon.Lexer}),angular.module("4dmonLexerApp").controller("MainCtrl",["$scope",function(e){e.features=["Syntax highlighting for 4D code snippets","Overview of process and inter-process variable usage","Project method dependency graph","Automated benchmarking"]}]),angular.module("4dmonLexerApp").controller("DemoCtrl",["$scope","fdLexer",function(e){var r=["if(False)",'    alert("I am the uncle of a monkey")',"endif"].join("\n");e.code={raw:r,formatted:r},e.$watch("code.raw",function(r){e.code.formatted=r})}]);