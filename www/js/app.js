// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
  
    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html",
          controller: 'serarchCtrl'
        }
      },
    })
  
  .state('app.clinicas', {
      url: "/clinicas:idClinica",
      views: {
        'menuContent' :{
          templateUrl: "templates/clinicas.html",
          controller: 'clinicasCtrl'
        }
      }
    })
  
  .state('app.cadastreSe', {
      url: "/cadastreSe",
      views: {
        'menuContent' :{
          templateUrl: "templates/cadastreSe.html",
          controller: 'cadastreSeCtrl'
        }
      }
    }) 
  
  
  .state('app.esqueciSenha', {
      url: "/esqueciSenha",
      views: {
        'menuContent' :{
          templateUrl: "templates/esqueciSenha.html",
          controller: 'esqueciSenhaCtrl'
        }
      }
    })
  
  .state('app.usuario', {
      url: "/usuario",
      views: {
        'menuContent' :{
          templateUrl: "templates/usuario.html"
        }
      }
    })
  
  .state('app.medico', {
      url: "/medico",
      views: {
        'menuContent' :{
          templateUrl: "templates/medico.html"
        }
      }
    })
  
  .state('app.consultorio', {
      url: "/consultorio",
      views: {
        'menuContent' :{
          templateUrl: "templates/consultorio.html"
        }
      }
    })
  
  .state('app.relatorios', {
      url: "/relatorios",
      views: {
        'menuContent' :{
          templateUrl: "templates/relatorios.html"
        }
      }
    })
  
   .state('app.privacidade', {
      url: "/privacidade",
      views: {
        'menuContent' :{
          templateUrl: "templates/privacidade.html"
        }
      }
    })
  
  .state('app.fale', {
      url: "/fale",
      views: {
        'menuContent' :{
          templateUrl: "templates/fale.html"
        }
      }
    })
  
  .state('app.sobre', {
      url: "/sobre",
      views: {
        'menuContent' :{
          templateUrl: "templates/sobre.html"
        }
      }
    })
  
  .state('app.filtros', {
      url: "/filtros",
      views: {
        'menuContent' :{
          templateUrl: "templates/filtros.html"
        }
      }
    })
  
  
  .state('app.login-into-menucontent', {
    url: "/login-into-menucontent",
    views: {
      'menuContent' :{
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
      }
    }
  })
  
  .state('app.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "templates/login.html",
          controller: 'LoginCtrl'
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});

