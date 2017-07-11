var app=angular.module("app",[]);
app.controller("main",function($scope,$http){
	
});
app.controller("content",function($scope,$http){
	$http({
		method:"get",
		url:"C:/Users/蓝科教育/Documents/GitHub/Adorable-pet-house/json/data.json"
	}).success(function(res){
		$scope.data=res.data;
	})
})