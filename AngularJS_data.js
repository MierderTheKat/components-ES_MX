var app = angular.module('Groups', []);

app.controller('GroupList', function($scope) {

    $scope.data_group = {
        A_Options: [
            { id: '1', name: 'Seleccionar Grupo', status: true, view: "hidden" },
            { id: '2', name: 'Ing. de SW', status: false },
            { id: '3', name: 'Ing. de Tele', status: false }
        ],
        S_Option: { id: '1', name: 'Seleccionar Grupo', status: true, view: "hidden" }
    };

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
        S_Option: { id: '1', name: 'Seleccionar Periodo', status: true, view: "hidden" }
    };

    $scope.data_type = {
        A_Options: [
            { id: '1', name: 'Seleccionar Tipo' },
            { id: '2', name: 'FIJO' },
            { id: '3', name: 'REGULAR' },
            { id: '4', name: 'TEMPORAL' }
        ],
        S_Option: { id: '1', name: 'Seleccionar Tipo', status: true, view: "hidden" }
    };

    $scope.students = [
        { id: '1', name: 'Juan', lastname: 'Berumen Ramirez', status: "REGULAR", school_id: "ISW2022_A", photo: 'https://cutt.ly/FVpQsHy' },
        { id: '2', name: 'Yasser', lastname: 'Hernadez Garcia', status: "REGULAR", school_id: "ISW2022_B", photo: 'https://cutt.ly/OVpQhay' },
        { id: '3', name: 'Arturo', lastname: 'Alvarez Galaviz', status: "REGULAR", school_id: "ISW2022_C", photo: 'https://cutt.ly/HVpQkmG' }
    ]

    $scope.reload = function() {
        location.reload(true);
    }

});