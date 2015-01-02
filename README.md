Fullscreen background slideshow
====================
An Angular directive to create fullscreen background slideshows.

Check out the [demo here](http://andersbergmann.dk/backgroundslider/example.html)

The directive has only been tested in modern browsers and on iOS devices.

# Use
Add these files to your project (in the dist folder you will find minified versions):
dist/backgroundslider.css
dist/backgroundslider.js
dist/backgroundslider.html

# Dependencies:
angular
angular-animate
angular-touch

Drop the slider element into your HTML:
`<slider images="images" index="index"></slider>`

`images` is an array of image objects.
`index` is two-way binding (between directive and and the $scope).

Tell the slider which images to use from your controller:
`$scope.images = [{src: 'images/img.jpg', caption: 'lorem ipsom'}];`

See example.html for more.

# Technology
- AngularJS
- Gulp
