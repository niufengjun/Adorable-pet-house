$(function(){
    $(".note .note_title a span").click(function(){
	    $(".note .note_title a span").removeClass()
	    $(this).addClass("recommend");
    });
    // window.onresize=function(){
        // console.log($(document).width());
        // $(document).ready(function(){
        //     var zIndex=0;
        //     $(".wrap>ol>li").click(function(){
        //         zIndex++;
        //         $(this).addClass("active").siblings().removeClass("active");
        //         $(".wrap ul li").eq($(this).index()).css({
        //             "z-index":zIndex,
        //             "left":$(document).width()
        //         }).animate({
        //             "left":0
        //         },1000);
        //         var i=0;
        //         var timer=setInterval(autoplay,1000);
        //         function autoplay(){
        //             zIndex++;
        //             i++;
        //             if(i>$(".wrap ol li").length-1){
        //                 i=0;
        //             }
        //             $(".wrap ol li").eq(i).addClass("active").siblings().removeClass("active");
        //             $(".wrap ul li").eq(i).css({
        //                 "z-index":zIndex,
        //                 "left":$(document).width()
        //             }).animate({
        //                 "left":0
        //             })
        //         }
        //     })
        // })
    // }
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