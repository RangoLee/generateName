'use strict';

angular.module('generateName.generator', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/generator', {
    templateUrl: 'generator/generator.html',
    controller: 'generatorCtrl'
  });
}])

.controller('generatorCtrl', ["$scope","Chinois",function($scope,Chinois) {

    $scope.selectedSexe="M";
    $scope.name="";
    $scope.currentObject={};
    
    $scope.$on("factory.Chinois.loaded",function(event,args){
        $scope.currentObject = Chinois;
    });
   
    
    $scope.generateName= function(){
        
        var listPrenom = [];
        if($scope.currentObject){
            
            if($scope.selectedSexe ==="M"){
                listPrenom = $scope.currentObject.prenom.masculin;
            }
            else{
                listPrenom = $scope.currentObject.prenom.feminin;
            }
            
        }
        
        var listNom = $scope.currentObject.nom; 
        $scope.name=getRandomFromList(listPrenom)+" "+getRandomFromList(listNom);
        
        
    };
    
    
    function getRandomFromList(list){
        var resultat = undefined;
        var limit = list.length;
        
        while(!resultat){
            var number = generateNumber(limit);
            resultat= list[number];
        }
        
        return resultat;
    }
    
    function generateNumber(limit){
        return Math.round(Math.random() * limit);      
    }
    
}]);