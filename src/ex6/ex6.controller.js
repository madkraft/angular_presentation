(function (app) {

    app.controller('ex6Controller', ex6Controller);
    app.directive('customMouseClick', customMouseClick);

    ex6Controller.$inject = ['$scope'];
    function ex6Controller($scope) {
        var ctrl = this;

        ctrl.hello = 'Hello World!';

        ctrl.ctrlMouseClick = function (event) {
            ctrl.hello = 'Hello again';
            $scope.$digest();
        };




    }

    function customMouseClick() {
        return {
            restrict: 'A',
            link: linker
        };

        function linker(scope, el, attr) {
            var fName = attr.customMouseClick;

            var func = function (event) {
                scope.ctrl[fName](event);
            };

            el.on('mousedown', func);

            scope.$on('$destroy', function () {
                el.off('mousedown', func);
            });

        }
    }





}(angular.module('app')));