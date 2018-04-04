(function () {
    angular
    .module('app.employee')
    .controller('employeeController', employeeController);
    employeeController.$inject = ['employeeService','$http','$location', '$routeParams', '$rootScope', '$scope'];
    function employeeController(employeeService, $http, $location, $routeParams, $rootScope, $scope) {
        var vm = this;
        vm.loadEmployee = loadEmployee;
        function loadEmployee()
        {
            return employeeService.loadEmployee();
        }
    }
})();

//var App = angular.module("myApp", [])
//App.controller("EmployeeCtrl", function ($scope, $http) {
//    var vm = this;
//    vm.loadEmployee = loadEmployee;
//    GetAll();
//    function loadEmployee() {
//        return employeeService.loadEmployee();
//    }
//})