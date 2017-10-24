var app = angular.module("myApp", []);



app.controller("myCtrl", function($scope,$http) {

    $scope.firstName = "John";
    $scope.lastName = "Doe";


     getAll();

    function getAll() {

        $http.get("http://localhost:3000/all").then(function(response) {

            console.log(response.data);

            $scope.etudiants = response.data;

        });

    }

    $scope.remove = function (etudiant) {


        console.log(etudiant);
        console.log("http://localhost:3000/remove?id="+etudiant.ID);



        $http.get("http://localhost:3000/remove?id="+etudiant.ID).then(function(response) {

           // console.log(response.data);

           // $scope.myData = response.data;

        });


        getAll();


    }

    $scope.show = function () {


        alert("OKKK");

    }


    $scope.valider = function (etudiant) {


         console.log(etudiant);

        alert("OKKK valider");

    }

});