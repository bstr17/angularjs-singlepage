(function () {
    'use strict'
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchInput = "";
        $scope.test = function () {
            var inputs = $scope.lunchInput.split(",");
            var itemsToShow = [];
            var index = 0;
            if ((inputs[0] == "") && inputs.length == 1) {
                $scope.showItems = "Please enter data first";
                turnRed();
                redBorder();
                //alert("emptyyy");

            } else {

                for (var item of inputs) {
                    item = item.trim();
                    if (item !== "") {
                        console.log(item);
                        itemsToShow[index] = item.trim();
                        index++;
                    }
                }
                if (itemsToShow.length <= 3) {
                    $scope.showItems = "Enjoy!";
                    turnGreen();
                    greenBorder();
                } else {
                    $scope.showItems = "Too much!";
                    greenBorder();
                    turnGreen();
                }
                //$scope.showItems = itemsToShow.toString();
            }
            // alert(items.length);
            // if(a===""){
            //
            // }else {
            //     alert(a.toUpperCase());
            // }
        }

        $scope.clear = function () {
            $scope.showItems = "";
            $scope.colorBorder.style = {};

        }

        $scope.colorBorder = {};
        var redBorder = function () {
            $scope.colorBorder.style = {"border": "2px red solid"}

        }
        var greenBorder = function () {
            $scope.colorBorder.style = {"border": "2px green solid"}

        }
        $scope.customStyle = {};
        var turnGreen = function () {
            //what to do here?
            $scope.customStyle.style = {"color": "green"};
        }
        var turnRed = function () {
            $scope.customStyle.style = {"color": "red"};
        }
    }
})();