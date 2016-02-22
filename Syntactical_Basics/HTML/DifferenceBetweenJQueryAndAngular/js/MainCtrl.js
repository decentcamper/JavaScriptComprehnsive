/**
 * Created by viveksh2 on 2/24/15.
 */
angular.module('app').controller("MainController", function($scope){
    $scope.list_items = [
        'Item 1',
        'Item 2',
        'Item 3'
    ];
    $scope.addListItem = function() {
        $scope.list_items.push('Item 4');
    };
});