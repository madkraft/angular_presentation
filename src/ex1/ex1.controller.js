(function (app) {

    app.controller('ex1Controller', ex1Controller);

    ex1Controller.$inject = [];
    function ex1Controller() {
        var ctrl = this;

        ctrl.name = 'John Doe';     // 1
        ctrl.searchQuery = 'lol';   // 1
        ctrl.arr = [1,2,3];         // 3 + 1 for ng-repeat


    }

}(angular.module('app')));