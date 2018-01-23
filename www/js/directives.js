angular.module('starter.directives', [])
	.directive('resizeScroll', ['$ionicScrollDelegate', function($ionicScrollDelegate) {
		return {
			restrict: 'A',
			link: function(scope, elem, attr) {
				elem.on('click', function() {
					$ionicScrollDelegate.resize();
				});

				scope.$on('$destroy', function() {
					elem.off('click');
				})
			}
		}
	}])

	.directive('randomAvatar', function() {
    var images = [
      'img/adam.jpg',
      'img/ben.png',
      'img/max.png',
      'img/mike.png',
      'img/perry.png',
      'https://pbs.twimg.com/profile_images/589457347229065217/ZtoGwJKr_bigger.jpg'
    ]

    return {
      restrict: 'AE',
      link: function(scope, el) {
        angular.element(el).attr('src', images[Math.round(Math.random(1)*(images.length - 1))]);
      }
    }
  })
