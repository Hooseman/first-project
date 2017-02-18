angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friendsList = [
      'Ryan',
      'Austin',
      'Zac',
      'sterling chin'
      ]

      $scope.addFriend = function(){
    $scope.friendsList.push($scope.newFriend)
    $scope.newFriend = '';
  }

});
