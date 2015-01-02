app.directive('slider', function () {
    'use strict';
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            images: '=',
            index: '='
        },
        link: function(scope){
            scope.index = 0;
            var iOS = /(iPad|iPhone|iPod|Safari)/g.test( navigator.userAgent );

            scope.next = function() {
                scope.index < scope.images.length - 1 ? scope.index++ : scope.index = 0;
            };

            scope.prev = function() {
                scope.index > 0 ? scope.index-- : scope.index = scope.images.length - 1;
            };

            scope.$watch('images', function (newValue, oldValue) {
                if( newValue !== oldValue ){
                    scope.$watch('index', function() {
                        scope.images.forEach(function(image) {
                            image.visible = false;
                        });
                        scope.images[scope.index].visible = true;
                    });
                }else{
                    // This is needed to make sure iOS devices load images
                    if (iOS) {
                        scope.$watch('index', function() {
                            scope.images.forEach(function(image) {
                                image.visible = false;
                            });
                            scope.images[scope.index].visible = true;
                        });
                    }
                }
            }, true);
        },
        templateUrl: 'backgroundslider.html'
    };
});