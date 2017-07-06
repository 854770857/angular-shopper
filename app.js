/**
 * Created by ÕÔÏþ¸Õ on 2017/4/28.
 */
(function(){
    angular.module("app",["ionic"])
        .run(function($rootScope,$http){
            $http.post("data/data.json")
                .success(function(data){
                    $rootScope.list=data[0];
                    $rootScope.list2=data[1];
                })
        })
})()