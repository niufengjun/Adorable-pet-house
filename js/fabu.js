var app=angular.module("app",[]);
app.controller("main",function($scope){
	$scope.NotW=false;
	$scope.content=function(){
		if(this.msg.length>=500){
		    $scope.NotW=!$scope.NotW;
	    }
	}	
});
$(function(){
	$(".back").click(function(){
        window.history.back(-1);
   });
   $(".send").click(function(){
   	window.location.href="find_detail.html"
   })
})

