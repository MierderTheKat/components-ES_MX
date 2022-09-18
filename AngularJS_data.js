var app = angular.module('Groups', []);

app.controller('GroupList', function($scope) {

    $scope.data = {
        A_Options: [
            { id: '1', name: 'Seleccionar Grupo', status: true, view: "hidden" },
            { id: '2', name: 'Ing. de SW', status: false },
            { id: '3', name: 'Ing. de Tele', status: false }
        ],
        S_Option: { id: '1', name: 'Elije una', status: true, view: "hidden" }
    };

    $scope.students = [
        { id: '1', name: 'Juan', lastname: 'Berumen Ramirez', status: "REGULAR", school_id: "ISW2022_A", photo: 'https://cutt.ly/FVpQsHy' },
        { id: '2', name: 'Yasser', lastname: 'Hernadez Garcia', status: "REGULAR", school_id: "ISW2022_B", photo: 'https://cutt.ly/OVpQhay' },
        { id: '3', name: 'Arturo', lastname: 'Alvarez Galaviz', status: "REGULAR", school_id: "ISW2022_C", photo: 'https://cutt.ly/HVpQkmG' }
    ]

});