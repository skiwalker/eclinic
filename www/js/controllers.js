angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state, $ionicModal, $timeout) {
    
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {console.log('teste');
    $scope.modal.show();
  };
    
  $scope.sair = function(){
       $state.go('app.login');
  }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
      $state.go('app.search');
    

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Cardiologistas', id: 1 },
    { title: 'Clinico Geral', id: 2 },
    { title: 'Gastro', id: 3 },
    { title: 'Dermatologista', id: 4 },
    { title: 'Endocrinologia', id: 5 },
    { title: 'Geriatria', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});


function serarchCtrl($scope,$state,$http,$ionicPopup,$ionicLoading)
{
   
    $scope.pesquisar = function(especialidade){
        
        $ionicLoading.show({
              template: 'Carregando Aguarde...'
        });
        
    /*var clinicas = [
        { cli_nome: 'Clinica Cardiologistas avenida Paulista, 1088', id: 1 },
        { cli_nome: 'Cardiologistas avenida nove de julho, 1088', id: 2 },
        { cli_nome: 'Cardiologistas avenida pompeia, 1088', id: 3 },
        { cli_nome: 'Cardiologistas rua treze de maio, 1088', id: 4 },
        { cli_nome: 'Cardiologistas rua patriarca, 1088', id: 5 },
        { cli_nome: 'Cardiologistas rua arthur, 1088', id: 6 },
        { cli_nome: 'Cardiologistas rua arthur, 1088', id: 7 },
        { cli_nome: 'Cardiologistas rua arthur, 1088', id: 8 },
        { cli_nome: 'Cardiologistas rua arthur, 1088', id: 9 },
        { cli_nome: 'Cardiologistas rua arthur, 1088', id: 10 },
        { cli_nome: 'Cardiologistas rua arthur, 1088', id: 11 }
      ];*/
        
         $http({
         method  : 'POST',
         url     : 'http://ettra.esy.es/clinicas.php',
         data    : {dados:especialidade},  // pass in data as strings
         headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data,status,headers,config){
            
            $ionicLoading.hide();
            $scope.consultorios = data;
        })
        .error(function(data,status,headers,config){
             
            var alertPopup = $ionicPopup.alert({
                   title: 'Erro inesperado'
                 });
        });       
    }
}

function LoginCtrl($scope,$state,$ionicModal,$http,$ionicSideMenuDelegate,$ionicPopup,$ionicLoading,$ionicViewService)
{
    
    $ionicSideMenuDelegate.canDragContent(false); //Desabilita o menu slide
    
    $scope.LogIn = function(user){
        
        //http://localhost/testes/serverEclinic/login.php'
        //http://ettra.esy.es/login.php
        $ionicLoading.show({
              template: 'Carregando Aguarde...'
        });
        
        
        $http({
         method  : 'POST',
         url     : 'http://ettra.esy.es/login.php',
         data    : {dados:user},  // pass in data as strings
         headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data,status,headers,config){
            if(!data.error)
            {
                $ionicViewService.nextViewOptions({
                  disableAnimate: true,
                  disableBack: true
                }); 
                
                $state.go('app.search');
                $ionicLoading.hide();
                $ionicSideMenuDelegate.canDragContent(true); //Habilita o menu slide
            }
            else
            {
                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                   title: 'Senha Incorreta'
                 });
            }
        })
        .error(function(data,status,headers,config){
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                   title: 'Erro inesperado'
                 });
        });
        
        //$ionicLoading.hide();
        //$state.go('app.search');
        //$ionicSideMenuDelegate.canDragContent(true);
    }
}

function cadastreSeCtrl()
{
    
}

function esqueciSenhaCtrl()
{
    
}



