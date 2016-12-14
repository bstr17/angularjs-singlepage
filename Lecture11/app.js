(function () {
    'use strict'
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Bogdan";

        $scope.sayMessage = function () {
            return "Bogdan o sa manance pizza";
        };

    }
})();