(function () {

    angular.module('app', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    url: "/"
                })
                .state('example1', {
                    url: "/example1",
                    templateUrl: "src/ex1/example1.html",
                    controllerAs: 'ctrl',
                    controller: 'ex1Controller'
                })
                .state('example2', {
                    url: "/example2",
                    templateUrl: "src/ex2/example2.html",
                    controllerAs: 'ctrl',
                    controller: 'ex2Controller'
                })
                .state('example3', {
                    url: "/example3",
                    templateUrl: "src/ex3/example3.html",
                    controllerAs: 'ctrl',
                    controller: 'ex3Controller'
                })
                .state('example4', {
                    url: "/example4",
                    templateUrl: "src/ex4/example4.html",
                    controllerAs: 'ctrl',
                    controller: 'ex4Controller'
                })
                .state('example5', {
                    url: "/example5",
                    templateUrl: "src/ex5/example5.html",
                    controllerAs: 'ctrl',
                    controller: 'ex5Controller'
                })
                .state('example6', {
                    url: "/example6",
                    templateUrl: "src/ex6/example6.html",
                    controllerAs: 'ctrl',
                    controller: 'ex6Controller'
                });
        })


}());