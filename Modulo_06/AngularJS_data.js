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

    $scope.data_reticule_group = {
        A_Options: [
            { id: '1', name: 'Seleccionar Grupo', status: true, view: 'invisible' },
            { id: '2', name: 'INGENIERIA EN SOFTWARE - 1 A TV', status: false },
            { id: '3', name: 'INGENIERIA EN SOFTWARE - 1 A TM', status: false },
            { id: '4', name: 'INGENIERIA EN SOFTWARE - 7 SW TM', status: false }
        ],
        S_Option: { id: '1', name: 'Seleccionar Grupo', status: true, view: 'invisible' }
    };

    $scope.changeGroup_1 = function() {
        if ($scope.data_group.S_Option.id > 1) {
            $scope.data_reticule_group.S_Option = {
                id: '1',
                name: 'Seleccionar Grupo',
                status: true,
                view: 'invisible'
            };
        }

    }

    $scope.changeGroup_2 = function() {
        if ($scope.data_reticule_group.S_Option.id > 1) {
            $scope.data_group.S_Option = {
                id: '1',
                name: 'Seleccionar Grupo',
                status: true,
                view: 'invisible'
            };
        }
    }

    $scope.students = [
        { id: '1', name: 'Arturo', lastname: 'Alvarez Galaviz', school_id: 'ISW2022_B1', id_group: '3', period_id: '10' }
    ]

    $scope.reticle_students = [
        { id: '1', name: 'Juan', lastname: 'Berumen Ramirez', school_id: 'ISW2022_A1', id_group: '2', period_id: '10' },
        { id: '2', name: 'Yasser', lastname: 'Hernadez Garcia', school_id: 'ISW2022_A2', id_group: '2', period_id: '10' },
        { id: '3', name: 'Arturo', lastname: 'Alvarez Galaviz', school_id: 'ISW2022_B1', id_group: '3', period_id: '10' },
        { id: '4', name: 'Mauricio', lastname: 'Velazquez Villagomez', school_id: 'ISW2022_B2', id_group: '3', period_id: '10' },
        { id: '5', name: 'Jovany', lastname: 'Maciaz Elena', school_id: 'ISW2022_C1', id_group: '4', period_id: '10' }
    ]

    $scope.documents = [
        { id: '1', name: 'ACTA DE NACIMIENTO', original: 1, copy: 2 },
        { id: '2', name: 'CURP', original: 1, copy: 2 },
        { id: '3', name: 'FOTO', original: 1, copy: 2 },
        { id: '4', name: 'CERTIFICADO', original: 1, copy: 2 },
        { id: '5', name: 'CERTIFICACIÓN', original: 1, copy: 2 },
        { id: '6', name: 'CARTA PROMEDIO', original: 1, copy: 2 },
        { id: '7', name: 'CARTA DE BUENA CONDUCTA', original: 1, copy: 2 },
        { id: '8', name: 'COMPROBANTE DE DOMICILIO', original: 1, copy: 2 },
        { id: '9', name: 'FORMATO DE LLENADO', original: 1, copy: 2 }
    ]

    $scope.reload = function() {
        location.reload(true);
    }

});