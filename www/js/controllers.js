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
    //alert($stateParams.playlistId);
})


.controller('serarchCtrl', function($scope,$state,$http,$ionicPopup,$ionicLoading) {
    
    
     $scope.especialidadesMedicas = [
        {"esp_id": 1,"esp_nome": "Alergia e Imunologia","esp_descricao": "doencas alergicas e do sistema imunitario."}, 
        {"esp_id": 2,"esp_nome": "Anestesiologia","esp_descricao": "estudo da dor e anestesia."}, 
        {"esp_id": 3,"esp_nome": "Angiologia","esp_descricao": "doencas do aparelho circulatorio."}, 
        {"esp_id": 4,"esp_nome": "Cancerologia (oncologia)","esp_descricao": "tumores malignos ou cancer."}, 
        {"esp_id": 5,"esp_nome": "Cardiologia","esp_descricao": "doencas relacionadas com o coracao."}, 
        {"esp_id": 6,"esp_nome": "Cirurgia Cardiovascular","esp_descricao": "tratamento cirurgico de doencas do coracao."}, 
        {"esp_id": 7,"esp_nome": "Cirurgia da Mao","esp_descricao": "tratamento cirurgico das maos.","esp_atv": 1,"esp_qdo": "2014-10-13 19:36:18"}, 
        {"esp_id": 8,"esp_nome": "Cirurgia de Cabeca e Pescoco","esp_descricao": "tratamento cirurgico de doencas da cabeca e do pescoco."}, 
        {"esp_id": 9,"esp_nome": "Cirurgia do Aparelho Digestorio","esp_descricao": "cirurgia dos orgaos do aparelho digestorio, como esofago, estomago, figado e pancreas"}, 
        {"esp_id": 10,"esp_nome": "Cirurgia Geral","esp_descricao": "engloba todas as areas cirurgicas."}, 
        {"esp_id": 11,"esp_nome": "Cirurgia Pediatrica","esp_descricao": "cirurgia geral em criancas."}, 
        {"esp_id": 12,"esp_nome": "Cirurgia Plastica","esp_descricao": "tratamento para correcao das deformidades, ma formacao ou lesoes que comprometem funcoes dos orgaos atraves de cirurgia de carater reparador."}, 
        {"esp_id": 13,"esp_nome": "Cirurgia Toracica","esp_descricao": "cirurgia dos pulmoes."}, 
        {"esp_id": 14,"esp_nome": "Cirurgia Vascular","esp_descricao": "tratamento das veias e arterias, atraves de cirurgia."}, 
        {"esp_id": 15,"esp_nome": "Clinica Medica","esp_descricao": "engloba as areas nao cirurgicas, subdividida em varias outras especialidades."}, 
        {"esp_id": 16,"esp_nome": "Coloproctologia","esp_descricao": "problemas do intestino grosso (colon), doencas do reto e anus."}, 
        {"esp_id": 17,"esp_nome": "Dermatologia","esp_descricao": "pele e suas doencas."}
          ]; 
    
    
    $scope.faixa = function(letra){
        
        
        if(letra == 'a')
        {
            $scope.especialidadesMedicas = [
            {"esp_id": 1,"esp_nome": "Alergia e Imunologia","esp_descricao": "doencas alergicas e do sistema imunitario."}, 
            {"esp_id": 2,"esp_nome": "Anestesiologia","esp_descricao": "estudo da dor e anestesia."}, 
            {"esp_id": 3,"esp_nome": "Angiologia","esp_descricao": "doencas do aparelho circulatorio."}, 
            {"esp_id": 4,"esp_nome": "Cancerologia (oncologia)","esp_descricao": "tumores malignos ou cancer."}, 
            {"esp_id": 5,"esp_nome": "Cardiologia","esp_descricao": "doencas relacionadas com o coracao."}, 
            {"esp_id": 6,"esp_nome": "Cirurgia Cardiovascular","esp_descricao": "tratamento cirurgico de doencas do coracao."}, 
            {"esp_id": 7,"esp_nome": "Cirurgia da Mao","esp_descricao": "tratamento cirurgico das maos."}, 
            {"esp_id": 8,"esp_nome": "Cirurgia de Cabeca e Pescoco","esp_descricao": "tratamento cirurgico de doencas da cabeca e do pescoco."}, 
            {"esp_id": 9,"esp_nome": "Cirurgia do Aparelho Digestorio","esp_descricao": "cirurgia dos orgaos do aparelho digestorio, como esofago, estomago, figado e pancreas"}, 
            {"esp_id": 10,"esp_nome": "Cirurgia Geral","esp_descricao": "engloba todas as areas cirurgicas."}, 
            {"esp_id": 11,"esp_nome": "Cirurgia Pediatrica","esp_descricao": "cirurgia geral em criancas."}, 
            {"esp_id": 12,"esp_nome": "Cirurgia Plastica","esp_descricao": "tratamento para correcao das deformidades, ma formacao ou lesoes que comprometem funcoes dos orgaos atraves de cirurgia de carater reparador."}, 
            {"esp_id": 13,"esp_nome": "Cirurgia Toracica","esp_descricao": "cirurgia dos pulmoes."}, 
            {"esp_id": 14,"esp_nome": "Cirurgia Vascular","esp_descricao": "tratamento das veias e arterias, atraves de cirurgia."}, 
            {"esp_id": 15,"esp_nome": "Clinica Medica","esp_descricao": "engloba as areas nao cirurgicas, subdividida em varias outras especialidades."}, 
            {"esp_id": 16,"esp_nome": "Coloproctologia","esp_descricao": "problemas do intestino grosso (colon), doencas do reto e anus."}, 
            {"esp_id": 17,"esp_nome": "Dermatologia","esp_descricao": "pele e suas doencas."}
          ]; 
        }
        else if(letra == 'e')
        {
            $scope.especialidadesMedicas = [
            {"esp_id": 18,"esp_nome": "Endocrinologia e Metabologia","esp_descricao": "tratamento das glandulas."}, 
            {"esp_id": 19,"esp_nome": "Endoscopia","esp_descricao": "estudo dos mecanismos fisiopatologicos, diagnostico e tratamento de enfermidades passiveis de abordagem por procedimentos cirurgicos."}, 
            {"esp_id": 20,"esp_nome": "Gastroenterologia","esp_descricao": "tratamento do aparelho digestivo."}, 
            {"esp_id": 21,"esp_nome": "Genetica medica","esp_descricao": "estudo dos genes, celulas tronco e clonagem humana."}, 
            {"esp_id": 22,"esp_nome": "Geriatria","esp_descricao": "estudo das doencas do idoso."}, 
            {"esp_id": 23,"esp_nome": "Ginecologia e Obstetricia","esp_descricao": "sistema reprodutor feminino."}, 
            {"esp_id": 24,"esp_nome": "Hematologia e Hemoterapia","esp_descricao": "estudo dos elementos figurados do sangue (hemacias, leucocitos, plaquetas) e da producao desses elementos nos orgaos hematopoieticos (medula ossea, baco, linfonodos)."}, 
            {"esp_id": 25,"esp_nome": "Homeopatia","esp_descricao": "pratica medica baseada na Lei dos Semelhantes."}
            ];
        }
        else if(letra == 'i')
        {
            $scope.especialidadesMedicas = [
            {"esp_id": 26,"esp_nome": "Infectologia","esp_descricao": "estudo das causas e tratamentos de infeccoes (causadas por virus, bacterias e fungos)."}, 
            {"esp_id": 27,"esp_nome": "Mastologia","esp_descricao": "doencas da mama."}, 
            {"esp_id": 28,"esp_nome": "Medicina de Familia e Comunidade","esp_descricao": "estuda o individuo inserido em contexto familiar e comunitario e as doencas correlacionadas."}, 
            {"esp_id": 29,"esp_nome": "Medicina do Trabalho","esp_descricao": "doencas causadas ou relacionadas ao trabalho."}, 
            {"esp_id": 30,"esp_nome": "Medicina do Trafego","esp_descricao": "manutencao do bem-estar fisico, psiquico e social do ser humano que se desloca, qualquer que seja o meio que propicie a sua mobilidade."}, 
            {"esp_id": 31,"esp_nome": "Medicina Esportiva","esp_descricao": "abordagem do atleta de uma forma global e do individuo em exercicio fisico, da prevencao ao cuidado de lesoes."}, 
            {"esp_id": 32,"esp_nome": "Medicina Fisica e Reabilitacao","esp_descricao": "diagnostico e terapêutica de diferentes areas."}, 
            {"esp_id": 33,"esp_nome": "Medicina Intensiva","esp_descricao": "cuidados de pacientes graves com recursos tecnologicos e humanos no tratamento de doencas ou complicacoes."}, 
            {"esp_id": 34,"esp_nome": "Medicina Legal","esp_descricao": "aplica os conhecimentos medicos aos interesses da Justica, na elaboracao de leis e na adequada caracterizacao dos fenômenos biologicos que possam interessar às autoridades no sentido da aplicacao das leis."}, 
            {"esp_id": 35,"esp_nome": "Medicina Nuclear","esp_descricao": "estudo imagiologico ou terapia pelo uso de radiofarmacos."}, 
            {"esp_id": 36,"esp_nome": "Medicina Preventiva e Social","esp_descricao": "atua na prevencao de doencas."}, 
            {"esp_id": 37,"esp_nome": "Nefrologia","esp_descricao": "doencas do rim, como insuficiência renal."}, 
            {"esp_id": 38,"esp_nome": "Neurocirurgia","esp_descricao": "atua no tratamento de doencas do sistema nervoso central e periferico passiveis de abordagem cirurgica."}, 
            {"esp_id": 39,"esp_nome": "Neurologia","esp_descricao": "estuda e trata o sistema nervoso."}, 
            {"esp_id": 40,"esp_nome": "Nutrologia","esp_descricao": "disturbios e doencas do comportamento alimentar."}
            ];
        }
        
        else if(letra == 'o')
        {
            $scope.especialidadesMedicas = [
                {"esp_id": 41,"esp_nome": "Oftalmologia","esp_descricao": "estuda e trata os disturbios dos olhos."}, 
                {"esp_id": 42,"esp_nome": "Ortopedia e Traumatologia","esp_descricao": "estuda e trata as doencas do sistema locomotor e as fraturas."}, 
                {"esp_id": 43,"esp_nome": "Otorrinolaringologia","esp_descricao": "estuda e trata as doencas da orelha, nariz, seios paranasais, faringe e laringe."}, 
                {"esp_id": 44,"esp_nome": "Patologia","esp_descricao": "estudo das doencas em geral sob determinados aspectos, envolvendo ciência basica e pratica clinica."}, 
                {"esp_id": 45,"esp_nome": "Pediatria","esp_descricao": "estuda e trata o ser em desenvolvimento (criancas)."}, 
                {"esp_id": 46,"esp_nome": "Neonatologia","esp_descricao": "ramo da Pediatria que estuda e cuida dos recem-nascidos, do nascimento ate os 28 dias de idade."}, 
                {"esp_id": 47,"esp_nome": "Pneumologia","esp_descricao": "estuda e trata o sistema respiratorio."}, 
                {"esp_id": 48,"esp_nome": "Psiquiatria","esp_descricao": "transtornos mentais e comportamentais."}, 
                {"esp_id": 49,"esp_nome": "Radiologia e Diagnostico por Imagem","esp_descricao": "realizacao e interpretacao de exames de imagem como raio-X e Ressonancia Magnetica."}, 
                {"esp_id": 50,"esp_nome": "Radioterapia","esp_descricao": "tratamento empregado em varias doencas, especialmente o cancer, com uso de um tipo de raio X ou outra forma de energia radiante."}, 
                {"esp_id": 51,"esp_nome": "Reumatologia","esp_descricao": "trata das doencas do tecido conjuntivo, articulacoes e doencas autoimunes."}, 
                {"esp_id": 52,"esp_nome": "Urologia","esp_descricao": "estuda e trata os problemas do sistema urinario e do sistema reprodutor masculino."}
            ];

        }   
        
    }
    
    $scope.especialidadeTypes = {
        defaultId:1
    } 

    $scope.pesquisar = function(){
        
        $state.go('app.clinicas',{idClinica:$scope.especialidadeTypes.defaultId});
        
    }
    
})




.controller('clinicasCtrl', function($scope, $stateParams,$state,$http,$ionicPopup,$ionicLoading){
    
    $ionicLoading.show({
        template: 'Carregando Aguarde...'
    });     
    
    $http({
         method  : 'POST',
         url     : 'http://ettra.esy.es/clinicas.php',
         data    : {dados:$stateParams.idClinica},  // pass in data as strings
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
})



.controller('LoginCtrl', function($scope,$state,$ionicModal,$http,$ionicSideMenuDelegate,$ionicPopup,$ionicLoading,$ionicViewService){
    
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
})

.controller('cadastreSeCtrl', function(){
})

.controller('esqueciSenhaCtrl', function(){
})



