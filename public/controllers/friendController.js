angular
  .module('surfSup')
  .controller('FriendController', function($scope, $location, FriendService, $rootScope) {

    $scope.searchFriends = searchFriends;
    $scope.sendInvite = sendInvite;
    $scope.getRequestList = getRequestList;
    $scope.getFriendsList = getFriendsList;
    // $scope.requestList = requestList;

    function getFriendsList() {
      FriendService.friendsList()
        .then(function(data){
          console.log('in getFriendsList', data);
          // window.glob = data;
          $scope.friendsList = data.data;
        })
    }
    getFriendsList();

    function getRequests() {
      FriendService.requests()
        .then(function(data) {
          $rootScope.requests = data.data;
          console.log('friend request amt:', data.data);
        });
    }
    getRequests();

    function getRequestList() {
      FriendService.requestList()
        .then(function(data) {
          $rootScope.requestList = data.data;
          console.log('friend request list:', data.data);
          // window.glob = data.data;
        });
    }
    getRequestList();

    function searchFriends(friend) {
      console.log('this is a friend', friend);
      FriendService.findFriends(friend);
    }

    FriendService.findFriends()
    .then(function(data) {
      // CacheEngine.put('seshActivity', data);
      $scope.listUsers = data.data;
      window.glow = data;
      console.log('users list is working,', data);
    });

    function sendInvite (username) {
      console.log(username);
      FriendService.friendInvitation(username)
      .then(function(data) {
        console.log('invite friends is working,', data);
      });
    }


  }); // end of FriendController
