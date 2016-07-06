(function (app) {

    app.controller('ex3Controller', ex3Controller);

    ex3Controller.$inject = ['$scope', '$http'];
    function ex3Controller($scope, $http) {
        var ctrl = this;

        ctrl.bigArray = [];

        ctrl.name = 'John Doe';     // 1

        ctrl.i18n = {
            label: 'Translation'
        }   // 1

        ctrl.arr = ['Home', 'About', 'Contact'];         // 3 + 1 for ng-repeat

        ctrl.colors = {
            red: true
        };

        ctrl.changeColor = function () {
            ctrl.colors.red = !ctrl.colors.red;
        };
    }

}(angular.module('app')));