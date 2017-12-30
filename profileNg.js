var app = angular.module('ProfileApp', []);
app.controller('ProfileController', function($scope) {
        var obj1 = {name : "Upload Resume", id : "Upload Resume", state : "Resume"};
        var obj2 = {name : "Edit Profile Info", id : "Edit Profile Info", state : "Edit"};
        var obj3 = {name : "Upload Photo Avatar", id : "Upload Photo Avatar", state : "Avatar"};
        $scope.viewList = [obj1, obj2, obj3];
        //Possible choices: 'Anonymous' , 'Upload Resume', 'Edit Profile Info', 'Upload Photo Avatar'
        $scope.menuState = "Anonymous";
});