/**
 * Created by ÕÔÏþ¸Õ on 2017/4/28.
 */
angular.module("app")
    .directive("hospitalShop",function(){
        return{
            restrict:"E",
            templateUrl:"views/hospitalshop.html",
            scope:{
                listData:"="
            },
            controller:function($scope){
                //console.log($scope.listData.con)
                $scope.toggleRadio=function(){
                    //console.log($scope.radio)
                    $scope.$broadcast("to-child",$scope.radio);
                }
            },
            link:function(scope,attr,ele){

            }
        }
    })
    .directive("hospotalAll",function(){
        return{
            restrict:"E",
            templateUrl:"views/all.html",
            scope:{
                listData2:"="
            },
            controller:function($scope,$rootScope){
                /*$rootScope.total=$scope.total;*/
                $scope.sum=1;
                var obj={};
                var name=$scope.listData2.name;

                //console.log(obj[name])
                $scope.$on("to-child",function(e,data){
                    $scope.checked=data;
                });

                $scope.del=function(){
                    if($scope.sum<=1) return;
                    $scope.sum--;
                    all();
                };

                $scope.add=function(){
                    $scope.sum++;
                    all();
                };

                $scope.togglecheckbox=function(){
                    //console.log(scope.listData2.con)
                    //console.log(scope)
                    all();
                };
                function all(){
                    if($scope.checked){
                        obj[name]=$scope.sum*$scope.listData2.price;
                    }else{
                        obj[name]=0;
                    }
                    console.log(obj[name])
                    var summ=0;
                    /*angular.forEach(obj,function(value,key){
                        console.log(value)
                        summ+=value;
                    });*/
                    $scope.total=summ;
                    $rootScope.total=$scope.total
                    //console.log($rootScope.total)
                }
                all()

            },
            link:function(scope,rootscope){

            }
        }
    })

/*.controller("child",function($scope,$rootScope){
        $scope.$on("to-child",function(e,data){
            $scope.checked=data;
        })

        $scope.sum=1;
        $scope.del=function(){
            if($scope.sum<=1) return
            $scope.sum--;
            all();
        }
        $scope.add=function(){
            $scope.sum++;
            all();
        }
        $scope.togglecheckbox=function(){
            //console.log($scope.listData.con)
            console.log($scope.univalent)
        }

        //console.log($scope.listData)
        if($scope.checked){
            console.log($scope.listData)
        }
        function all(){
            if($scope.checked){

            }else{

            }
        }
    })*/
