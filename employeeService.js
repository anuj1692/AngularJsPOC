(function () {
    angular
    .module('app.employee')
    .service('employeeService', employeeService);
    employeeService.$inject = ['$http'];
    function employeeService($http) {
        this.loadEmployee = loadEmployee;
        loadEmployee();
        function loadEmployee()
        {   
            return $http.get('http://localhost:55417/api/EmployeeTbl');
        }
    }
}());