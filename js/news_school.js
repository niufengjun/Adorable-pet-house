$(function(){
    $(".note .note_title a span").click(function(){
	    $(".note .note_title a span").removeClass()
	    $(this).addClass("recommend");
    });
    $(".note .nav a span").click(function(){
    	$(".note .nav a span").removeClass()
        $(this).addClass("all");
    	var id=$(this).parent().attr("href");
    	$(".content").hide();
        $(id).css({
        	display:"block"
        })
    })
});
var app=angular.module("app",[]);
app.controller("main",function($scope,$http){
	
});
app.controller("content",function($scope,$http){
	$http({
		method:"get",
		url:"C:/Users/蓝科教育/Documents/GitHub/Adorable-pet-house/json/data.json"
	}).success(function(res){
		$scope.data=res.school;
	})
});
