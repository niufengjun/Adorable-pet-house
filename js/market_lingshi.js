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
    });
    $(".cap").click(function(){
    	window.location.href="market_home.html";
    });
});
    var app=angular.module("myApp",[]);
	app.controller("main",function($scope,$http){
        $http.get("json/data.json").success(function(res){
            $scope.data=res.data;
        });
        $scope.part=function(){
        	window.location.href="comment.html";
        }
	})