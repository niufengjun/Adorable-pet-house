$(function(){
    $(".note .note_title a span").click(function(){
	    $(".note .note_title a span").removeClass()
	    $(this).addClass("recommend");
    });
});
var app=angular.module("app",[]);
    app.controller("content",function($scope,$http){
    $http({
        method:"get",
        url:"C:/Users/蓝科教育/Documents/GitHub/Adorable-pet-house/json/data.json"
    }).success(function(res){
        $scope.data=res.note;
    })
});