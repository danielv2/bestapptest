// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives', 'wu.masonry', 'ion-sticky', 'ngCordova'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  // Prevent overlapping bricks of Angular Masonry
  // http://stackoverflow.com/questions/27656197/opening-closing-the-modal-window-triggers-window-resize
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (toState.name == 'tab.feed' || toState.name == 'tab.post' || toState.name == 'tab.collection') {
      ionic.trigger('resize');
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // Login/Signup
  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome/landing.html',
    controller: 'LoginCtrl'
  })

  // Tabs
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.feed', {
    url: '/feed',
    views: {
      'tab-feed': {
        templateUrl: 'templates/feed/main.html',
        controller: 'FeedCtrl'
      }
    }
  })

  .state('tab.post', {
    url: '/post/:id',
    views: {
      'tab-feed': {
        templateUrl: 'templates/feed/post.html',
        controller: 'PostCtrl'
      }
    }
  })

  .state('tab.foto', {
    url: '/foto/:id',
    views: {
      'tab-feed': {
        templateUrl: 'templates/me/tatuador/foto.html',
        controller: 'PostCtrl'
      }
    }
  })

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/search/main.html',
        // controller: 'FeedCtrl'
      }
    }
  })

  .state('tab.notifications', {
    url: '/notifications?tab',
    views: {
      'tab-notifications': {
        templateUrl: 'templates/notifications/main.html',
        controller: 'NotificationsCtrl'
      }
    }
  })

  .state('tab.chat', {
    url: '/chat/:id',
    views: {
      'tab-notifications': {
        templateUrl: 'templates/notifications/message.html',
        controller: 'MessagesCtrl'
      }
    }
  })

  .state('tab.me', {
    url: '/me',
    views: {
      'tab-me': {
        templateUrl: 'templates/me/main.html',
        controller: 'MeCtrl'
      }
    }
  })

  .state('tab.tatuador', {
    url: '/me/tatuador',
    views: {
      'tab-me': {
        templateUrl: 'templates/me/tatuador/main.html',
        controller: 'MeTatuadorCtrl'
      }
    }
  })

  .state('tab.tatuador-profile', {
    url: '/me/tatuador/profile',
    views: {
      'tab-me': {
        templateUrl: 'templates/me/tatuador/profile.html',
        controller: 'TatuadorProfileCtrl'
      }
    }
  })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-me': {
        templateUrl: 'templates/me/profile.html',
        controller: 'CollectionCtrl'
      }
    }
  })

  .state('tab.collection', {
    url: '/collection',
    views: {
      'tab-me': {
        templateUrl: 'templates/me/collection.html',
        controller: 'CollectionCtrl'
      }
    }
  })

  .state('tab.album', {
    url: '/album',
    views: {
      'tab-me': {
        templateUrl: 'templates/me/tatuador/album.html',
        controller: 'AlbumTatuadorCtrl'
      }
    }
  })

  // Settings
  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-me': {
        templateUrl: 'templates/settings/main.html'
        // controller: 'SettingsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');

})

.config(function($ionicConfigProvider) {
  // note that you can also chain configs
  $ionicConfigProvider.backButton.text('').previousTitleText(false);
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
});
