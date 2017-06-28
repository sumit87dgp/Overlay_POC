import angular from 'angular';

angular.module('childpagemodule')
    .controller('childcontroller', function () {
        var self = this;
        self.openOverLay = function () {
            alert("Hi and Hello World");
        };
    });