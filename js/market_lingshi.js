$(function(){
	$(".sousuo").click(function(){
		$(".back").siblings().hide();
		$(".text").show();
		$(".cancel").show().css({
			display:"inline-block",
			width:"10%",
			height:"28px",
			lineHeight:"28px",
			textAlign:"center"
		});
		$(".cancel").click(function(){
			$(".back").siblings().show();
		    $(".text").hide();
		    $(".cancel").hide();
		})
	});
	$(".back").click(function(){
        window.history.back(-1);
    })
});
    var app=angular.module("myApp",[]);
	app.controller("main",function($scope,$http){
		console.log(1);
        $http.get("json/data.json").success(function(res){
            console.log(res);
            $scope.data=res.data;
        })
	})