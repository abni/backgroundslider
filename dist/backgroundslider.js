app.directive("slider",function(){return{restrict:"AE",replace:!0,scope:{images:"="},link:function(scope){scope.currentIndex=0,scope.next=function(){scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0},scope.prev=function(){scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1},scope.$watch("currentIndex",function(){scope.images.forEach(function(image){image.visible=!1}),scope.images[scope.currentIndex].visible=!0})},templateUrl:"backgroundslider.html"}});