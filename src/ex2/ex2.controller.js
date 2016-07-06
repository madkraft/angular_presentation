(function (app) {

    app.controller('ex2Controller', ex2Controller);

    ex2Controller.$inject = ['$scope', '$http'];
    function ex2Controller($scope, $http) {
        var ctrl = this;

        ctrl.bigArray = [];

        $http.get('http://www.filltext.com/?rows=1000&fname={firstName}&lname={lastName}')
            .then(function (result) {
                ctrl.bigArray = result.data;
            })

        ctrl.triggerDigest = function () {
            $scope.$applyAsync();
        }


    }

}(angular.module('app')));