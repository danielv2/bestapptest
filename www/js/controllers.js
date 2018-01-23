angular.module('starter.controllers', [])
.controller('LoginCtrl', function($scope, $ionicModal, $ionicLoading, $timeout, $state) {
  // Log in modal
  $ionicModal.fromTemplateUrl('templates/welcome/login.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalLogin = modal;
  });
  $scope.openLogin = function() {
    $scope.modalLogin.show();
  };
  $scope.closeLogin = function() {
    $scope.modalLogin.hide();
  };

  $scope.login = function() {
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    });

    $timeout(function() {
      $ionicLoading.hide();
      $state.go('tab.feed');
      $scope.closeLogin();
    }, 2000);
  }
})

.controller('FeedCtrl', function($scope, $rootScope) {
  $scope.refresh = function() {
    // Stop the ion-refresher from spinning
    $scope.$broadcast('scroll.refreshComplete');
  }
})

.controller('PostCtrl', function($rootScope, $scope, $ionicActionSheet, $ionicHistory, $ionicModal, $stateParams, $timeout) {
  $scope.postId = $stateParams.id % 4 + 1;

  $scope.pullToGoBack = function() {
    console.log('hey');
    $ionicHistory.goBack();
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.openActionSheet = function() {
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: 'Save image' },
        { text: 'Copy Link' },
        { text: 'Report Pin' }
      ],
      titleText: 'More Options',
      cancelText: 'Cancel',
      cancel: function() {
      // add cancel code..
      },
      buttonClicked: function(index) {
        return true;
      }
    });
  }


  // Comment modal
  $ionicModal.fromTemplateUrl('templates/modal/comment.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalComment = modal;
  });
  $scope.openComment = function() {
    $scope.modalComment.show();
  };
  $scope.closeComment = function() {
    $scope.modalComment.hide();
  };

  // Pin it modal
  $ionicModal.fromTemplateUrl('templates/modal/pinit.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalPinit = modal;
  });
  $scope.openPinit = function() {
    $scope.modalPinit.show();
  };
  $scope.closePinit = function() {
    $scope.modalPinit.hide();
  };
})

.controller('NotificationsCtrl', function($scope, $stateParams) {
  $scope.activeTab = $stateParams.tab || 0;
})

.controller('MessagesCtrl', function($scope, $ionicScrollDelegate) {
  var viewScroll = $ionicScrollDelegate.$getByHandle('messageScroll');
  viewScroll.scrollBottom();
})

.controller('MeCtrl', function($scope, $ionicActionSheet, $ionicModal) {
  $scope.actionSheet = function() {
    var hideSheet = $ionicActionSheet.show({
      titleText: 'Sort',
      buttons: [
        { text: 'Most recent' },
        { text: 'A to Z' }
      ],
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        return true;
      }
    });
  }

  // Pin it modal
  $ionicModal.fromTemplateUrl('templates/modal/addpin.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalAddPin = modal;
  });
  $scope.openAddPin = function() {
    $scope.modalAddPin.show();
  };
  $scope.closeAddPin = function() {
    $scope.modalAddPin.hide();
  };
})

.controller('MeTatuadorCtrl', function($scope, $ionicActionSheet, $cordovaCamera, $stateParams) {
  $scope.activeTab = $stateParams.tab || 0;

  $scope.openActionSheetFotos = function() {
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: 'Câmera' },
        { text: 'Armazenamento local' }
      ],
      titleText: 'Opções',
      cancelText: 'Cancelar',
      cancel: function() {
      // add cancel code..
      },
      buttonClicked: function(index) {
        return true;
      }
    });
  }

  $scope.openCamera = function() {
    document.addEventListener("deviceready", function () {

      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
      correctOrientation:true
      };
  
      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });
  
    }, false);
  }
})

.controller('CollectionCtrl', function($scope, $ionicModal) {
  // Edit modal
  $ionicModal.fromTemplateUrl('templates/modal/collectionEdit.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalEdit = modal;
  });
  $scope.openEdit = function() {
    $scope.modalEdit.show();
  };
  $scope.closeEdit = function() {
    $scope.modalEdit.hide();
  };
})
