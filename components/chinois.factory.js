'use strict';

angular.module('generateName.factories.chinois',[])
.factory('Chinois', ["$rootScope","$http",function($rootScope,$http) {
    
    var factory={};
    
    factory.nom=[];
    factory.prenom={};
    factory.prenom.masculin=[];
    factory.prenom.feminin=[];
        
    
    
    function prenomFeminin(){
        $http({
          method: 'GET',
          url: 'data/chinois/prenom-feminin.json'
        }).then(function successCallback(response) {
            factory.prenom.feminin= response.data;
            $rootScope.$broadcast("factory.Chinois.loaded");
        }, function errorCallback(response) {
            console.log(response);
        });
    };
    
    function prenomMasculin(){
        $http({
          method: 'GET',
          url: 'data/chinois/prenom-masculin.json'
        }).then(function successCallback(response) {
            factory.prenom.masculin= response.data;
            prenomFeminin();
        }, function errorCallback(response) {
            console.log(response);
        });
    };
    
    function init(){
        $http({
          method: 'GET',
          url: 'data/chinois/nom.json'
        }).then(function successCallback(response) {
            factory.nom= response.data;
            prenomMasculin();
        }, function errorCallback(response) {
            console.log(response);
        });
    }
    
   
    
    
    init();
    return factory;
    
}]);

