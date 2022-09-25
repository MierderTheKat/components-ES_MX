var app = angular.module('Groups', []);

app.controller('GroupList', function($scope) {

    $scope.data_group = {
        A_Options: [
            { id: '1', name: 'Seleccionar Grupo', status: true, view: 'invisible' },
            { id: '2', name: 'INGENIERIA EN SOFTWARE - 1 A TV', status: false },
            { id: '3', name: 'INGENIERIA EN SOFTWARE - 1 A TM', status: false },
            { id: '4', name: 'INGENIERIA EN SOFTWARE - 7 SW TM', status: false }
        ],
        S_Option: { id: '1', name: 'Seleccionar Grupo', status: true, view: 'invisible' }
    };

    $scope.status = {
        A_Options: [
            { id: '1', name: 'Elegir' },
            { id: '2', name: 'Activo' },
            { id: '3', name: 'Egresado' }
        ],
        S_Option: { id: '1', name: 'Elegir' }
    };

    $scope.careers = {
        A_Options: [
            { id: '1', name: 'Elegir' },
            { id: '2', name: 'ANIMADOR' },
            { id: '3', name: 'ARH' },
            { id: '4', name: 'ASD' },
            { id: '5', name: 'ADR' },
            { id: '6', name: 'CONFECCION' },
            { id: '7', name: 'DISEÑO GRAFICO' },
            { id: '8', name: 'INGENIERIA EN SOFTWARE' },
            { id: '9', name: 'INGENIERÍA MECATRÓNICA' },
            { id: '10', name: 'LICENCIATURA EN TRABAJO SOCIAL' },
            { id: '11', name: 'MECATRONICA' },
            { id: '12', name: 'PRUEBA' }
        ],
        S_Option: { id: '1', name: 'Elegir' }
    };

    $scope.reticle = {
        A_Options: [
            { id: '1', name: 'Elegir' },
            { id: '2', name: 'ISW 2008-2013' },
            { id: '3', name: 'ISW 2014-2019' }
        ],
        S_Option: { id: '1', name: 'Elegir' }
    };

    $scope.grade = {
        A_Options: [
            { id: '1', name: 'Elegir' },
            { id: '2', name: '1' },
            { id: '3', name: '2' },
            { id: '4', name: '3' },
            { id: '5', name: '4' },
            { id: '6', name: '5' },
            { id: '7', name: '6' },
            { id: '8', name: '7' },
            { id: '9', name: '8' },
            { id: '10', name: '9' },
            { id: '11', name: '10' }
        ],
        S_Option: { id: '1', name: 'Elegir' }
    };

    $scope.turn = {
        A_Options: [
            { id: '1', name: 'Elegir' },
            { id: '2', name: 'TM' },
            { id: '3', name: 'TV' },
            { id: '4', name: 'TN' },
            { id: '5', name: 'N/A' }
        ],
        S_Option: { id: '1', name: 'Elegir' }
    };

    $scope.sex = {
        A_Options: [
            { id: '1', name: 'Elegir' },
            { id: '2', name: 'Femenino' },
            { id: '3', name: 'Masculino' },
            { id: '4', name: 'Otro' }
        ],
        S_Option: { id: '1', name: 'Elegir' }
    };

    $scope.students = [
        { id: '1', name: 'Juan', lastname: 'Berumen Ramirez', status: 'REGULAR', school_id: 'ISW2022_A1', id_group: '2', photo: 'https://placehold.jp/100x100.png' },
        { id: '2', name: 'Yasser', lastname: 'Hernadez Garcia', status: 'REGULAR', school_id: 'ISW2022_A2', id_group: '2', photo: 'https://placehold.jp/100x100.png' },
        { id: '3', name: 'Arturo', lastname: 'Alvarez Galaviz', status: 'REGULAR', school_id: 'ISW2022_A3', id_group: '2', photo: 'https://placehold.jp/100x100.png' },
        { id: '1', name: 'Esau', lastname: 'Anaya Rivas', status: 'REGULAR', school_id: 'ISW2022_B1', id_group: '3', photo: 'https://placehold.jp/100x100.png' },
        { id: '2', name: 'Valeria', lastname: 'Barraza Ruano', status: 'REGULAR', school_id: 'ISW2022_B2', id_group: '3', photo: 'https://placehold.jp/100x100.png' },
        { id: '3', name: 'Alex', lastname: 'Villagomez Esqueda', status: 'REGULAR', school_id: 'ISW2022_C1', id_group: '4', photo: 'https://placehold.jp/100x100.png' }
    ]

    $scope.data_period = {
        A_Options: [
            { id: '1', name: 'Seleccionar Periodo' },
            { id: '2', name: 'AGOSTO 2022 - ENERO 2023' },
            { id: '3', name: 'FEBRERO - JULIO 2022' },
            { id: '4', name: 'AGOSTO 2021 - ENERO 2022' },
            { id: '5', name: 'FEBRERO - JULIO 2021' },
            { id: '6', name: 'AGOSTO 2020 - ENERO 2021' },
            { id: '7', name: 'FEBRERO - JULIO 2020' },
            { id: '8', name: 'AGOSTO 2019 - ENERO 2020' },
            { id: '9', name: 'FEBRERO - JULIO 2019' },
            { id: '10', name: 'AGOSTO 2018 - ENERO 2019' },
            { id: '11', name: 'FEBRERO - JULIO 2018' },
            { id: '12', name: 'AGOSTO 2017 - ENERO 2018' },
            { id: '13', name: 'FEBRERO - JULIO 2017' }
        ],
        S_Option: { id: '1', name: 'Seleccionar Periodo', status: true, view: 'hidden' }
    };

    $scope.data_type = {
        A_Options: [
            { id: '1', name: 'Seleccionar Tipo' },
            { id: '2', name: 'FIJO' },
            { id: '3', name: 'REGULAR' },
            { id: '4', name: 'TEMPORAL' }
        ],
        S_Option: { id: '1', name: 'Seleccionar Tipo', status: true, view: 'hidden' }
    };

    $scope.reload = function() {
        location.reload(true);
    }

});