Fullscreen background slideshow
====================
An Angular directive to create fullscreen background slideshows.

# Use
Add these files to your project (in the dist folder you will find minified versions):
dist/backgroundslider.css
dist/backgroundslider.js
dist/backgroundslider.html

Dependencies:
angular
angular-animate

Drop the slider element into your HTML:
´<slider images="images" index="index"></slider>´

Tell the slider which images to use from your controller:
´$scope.images = [{src: 'images/img.jpg', caption: 'lorem ipsom'}];´

See example.html for more.

# Technology
- AngularJS
- Gulp
