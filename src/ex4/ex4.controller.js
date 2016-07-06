(function (app) {

    app.controller('ex4Controller', ex4Controller);

    ex4Controller.$inject = [];
    function ex4Controller() {
        var ctrl = this;


        ctrl.showIt = function () {
            console.log('executing function');
            return true;
        };

        // ctrl.showItRight = ctrl.showIt();


    }

}(angular.module('app')));