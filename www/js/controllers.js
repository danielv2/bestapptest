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

.controller('MeTatuadorCtrl', function($scope, $ionicActionSheet, $ionicModal,$cordovaFileTransfer, $cordovaClipboard, $cordovaCamera, $stateParams, $cordovaSocialSharing, $cordovaImagePicker) {

  $ionicModal.fromTemplateUrl('templates/modal/album.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalAlbum = modal;
  });
  $scope.openAddAlbum = function() {
    $scope.modalAlbum.show();
  };
  $scope.closeAlbum = function() {
    $scope.modalAlbum.hide();
  };

  $ionicModal.fromTemplateUrl('templates/modal/perfilTatuadorEdit.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalEdit = modal;
  });
  $scope.openTatuadorEdit = function() {
    $scope.modalEdit.show();
  };
  $scope.closeTatuadorEdit = function() {
    $scope.modalEdit.hide();
  };
})

.controller('AlbumTatuadorCtrl', function($scope, $ionicActionSheet, $ionicModal,$cordovaFileTransfer, $cordovaClipboard, $cordovaCamera, $stateParams, $cordovaSocialSharing, $cordovaImagePicker) {
  
  $ionicModal.fromTemplateUrl('templates/modal/album.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalAlbum = modal;
  });
  $scope.openEditAlbum = function() {
    $scope.modalAlbum.show();
  };
  $scope.closeAlbum = function() {
    $scope.modalAlbum.hide();
  };

  $scope.openActionSheetFotos = function() {
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: 'Câmera' },
        { text: 'Armazenamento local' }
      ],
      titleText: 'Opções',
      cancelText: 'Cancelar',
      cancel: function() {
        return true
      },
      buttonClicked: function(index) {
        switch(index) {
          case 0:
              $scope.openCamera()
              return true;
              break
          case 1:
              $scope.openFileLocal()
              return true;
              break
          default:
              return true
        }
      }
    });
  }

  $ionicModal.fromTemplateUrl('templates/modal/social-select.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalSocial = modal;
  });
  $scope.openSocialSelect = function() {
    $scope.modalSocial.show();
  };
  $scope.closeSocialSelect = function() {
    $scope.modalSocial.hide();
  };


  $scope.openCamera = function() {
    document.addEventListener("deviceready", function () {

      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        // allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        // targetWidth: 100,
        // targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true,
        correctOrientation:true
      };
  
      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.socialImage = "data:image/jpeg;base64," + imageData;
        $scope.openSocialSelect()    
      }, function(err) {
        // error
      });
  
    }, false);
  }

  $scope.openFileLocal = function() {
    document.addEventListener("deviceready", function () {
      var options = {
        maximumImagesCount: 1,
        // width: 800,
        // height: 800,
        quality: 100
       };
     
      $cordovaImagePicker.getPictures(options)
        .then(function (result) {
          window.plugins.Base64.encodeFile(result, function(base64){
            alert('file base64 encoding: ');
            $scope.socialImage = base64;
            $scope.openSocialSelect()
          });
        }, function(err) {
          alert(err)
      });
    }, false);
  }

  $scope.socialShare = function(type) {
    switch(type) {
      case 0:
          $cordovaSocialSharing
            .shareViaWhatsApp("Teste", $scope.socialImage, null)
            .then(function(result) {
              
          }, function(err) {
            
          });
          break
      case 1:
          $cordovaClipboard
            .copy('Poodle zumbi')
            .then(function () {
              $cordovaSocialSharing
                .shareViaFacebook("", $scope.socialImage, null)
                .then(function(result) {
                }, function(err) {
                  
              });
            }, function () {
              // error
          });
          break
      case 2:
          Instagram.isInstalled(function (err, installed) {
            if (installed) {
              Instagram.share($scope.socialImage, function (err) {
                if (err) {
                    alert("not shared");
                } else {
                    alert("shared");
                }
              });
            } else {
                alert("Instagram is not installed");
            }
          });
          break
      default:
          break
    }
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
