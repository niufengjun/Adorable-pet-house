$(function(){
    $(".note .note_title a span").click(function(){
	    $(".note .note_title a span").removeClass()
	    $(this).addClass("recommend");
    });
    $("#all").siblings("#pictures").css({
        marginBottom:"50px"
    })
    $(".note .nav a span").click(function(){
    	$(".note .nav a span").removeClass()
        $(this).addClass("all");
    	var id=$(this).parent().attr("href");
        if(id==="#all"){
            $(".content").show();
            $("#new").children().children().last().removeAttr("style");
            $("#topic").children().children().last().removeAttr("style");
            $("#interest").children().children().last().removeAttr("style");
            $("#pictures").children().children().last().removeAttr("style");
        }else{
            $(".content").hide();
            $(id).children().children().last().css({
                marginBottom:"50px"
            });
            $(id).css({
                display:"block",
            })
        }	
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
		$scope.data=res.note;
	})
});
