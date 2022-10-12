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
        { id: '1', name: 'Juan', lastname: 'Berumen Ramirez', },
        { id: '2', name: 'Yasser', lastname: 'Hernadez Garcia', },
        { id: '3', name: 'Arturo', lastname: 'Alvarez Galaviz', },
        { id: '4', name: 'Mauricio', lastname: 'Velazquez Villagomez', },
        { id: '5', name: 'Jovany', lastname: 'Maciaz Elena', }
    ]

    $scope.documents = [
        { id: '1', name: 'ACTA DE NACIMIENTO', original: 1, copy: 2, status: "Sin archivo", revision: 0 },
        { id: '2', name: 'CURP', original: 1, copy: 2, status: "Sin archivo", revision: 1 },
        { id: '3', name: 'FOTO', original: 1, copy: 2, status: "Sin archivo", revision: 0 },
        { id: '4', name: 'CERTIFICADO', original: 1, copy: 2, status: "Sin archivo", revision: 2 },
        { id: '5', name: 'CERTIFICACIÓN', original: 1, copy: 2, status: "Sin archivo", revision: 3 },
        { id: '6', name: 'CARTA PROMEDIO', original: 1, copy: 2, status: "Sin archivo", revision: 0 },
        { id: '7', name: 'CARTA DE BUENA CONDUCTA', original: 1, copy: 2, status: "Sin archivo", revision: 1 },
        { id: '8', name: 'COMPROBANTE DE DOMICILIO', original: 1, copy: 2, status: "Sin archivo", revision: 0 },
        { id: '9', name: 'FORMATO DE LLENADO', original: 1, copy: 2, status: "Sin archivo", revision: 4 }
    ]

    $scope.students_docs = [
        { id: '1', name: 'DAVID', lastname: 'BERUMEN RAMIREZ', request: 1, view: 'invisible', status: 'Pendiente', status_color: 'danger', curp: 'MARA940621HDGRMV01', email: 'ramirezjuanber@gmail.com', photo: 'https://placehold.jp/100x100.png' },
        { id: '2', name: 'JUAN', lastname: 'VELAZQUEZ VILLAGOMEZ', request: 2, view: 'invisible', status: 'Realizado', status_color: 'success', curp: 'MARA940621HDGRMV01', email: 'ramirezjuanber@gmail.com', photo: 'https://placehold.jp/100x100.png' },
        { id: '3', name: 'YASSER', lastname: 'HERNANDEZ GARCIA', request: 3, view: 'invisible', status: 'Pendiente', status_color: 'danger', curp: 'MARA940621HDGRMV01', email: 'ramirezjuanber@gmail.com', photo: 'https://placehold.jp/100x100.png' }
    ]

    $scope.ChangeView = function(id) {
        for (let i = 0; i < $scope.students_docs.length; i++) {
            $scope.students_docs[id].view = 'visible';
            if ($scope.students_docs[i].id != (id + 1)) {
                $scope.students_docs[i].view = 'invisible';
            }
        }
    }

    $scope.reload = function() {
        location.reload(true);
    }

});