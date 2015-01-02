app.directive('slider', function () {
    'use strict';
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            images: '='
        },
        link: function(scope){
            scope.currentIndex = 0;
            var iOS = /(iPad|iPhone|iPod|Safari)/g.test( navigator.userAgent );

            scope.next = function() {
                scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
            };

            scope.prev = function() {
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
            };

            scope.$watch('images', function (newValue, oldValue) {
                if( newValue !== oldValue ){
                    scope.$watch('currentIndex', function() {
                        scope.images.forEach(function(image) {
                            image.visible = false;
                        });
                        scope.images[scope.currentIndex].visible = true;
                    });
                }else{
                    // This is needed to make sure iOS devices load images
                    if (iOS) {
                        scope.$watch('currentIndex', function() {
                            scope.images.forEach(function(image) {
                                image.visible = false;
                            });
                            scope.images[scope.currentIndex].visible = true;
                        });
                    }
                }
            }, true);
        },
        templateUrl: 'backgroundslider.html'
    };
});