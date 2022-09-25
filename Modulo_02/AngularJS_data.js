var app = angular.module('Groups', []);

app.controller('GroupList', function($scope) {

    $scope.careers = {
        A_Options: [
            { id: '1', name: 'Elegir' },
            { id: '2', name: 'ECONÓMICO - ADMINISTRATIVO' },
            { id: '3', name: 'FISICO - MATEMATICO' },
            { id: '4', name: 'QUIMICO - BIOLOGIA' }
        ],
        S_Option: { id: '1', name: 'Elegir' }
    };

    $scope.status = {
        A_Options: [
            { id: '1', name: 'Elegir' },
            { id: '2', name: 'ACTIVO' },
            { id: '3', name: 'OCULTO' }
        ],
        S_Option: { id: '1', name: 'Elegir' }
    };

    $scope.filtro = {
        A_Options: [
            { id: '1', name: 'Seleccionar', view: 'invisible' },
            { id: '2', name: 'Aspirante', view: 'invisible' },
            { id: '3', name: 'Alumno', view: '' },
            { id: '4', name: 'Egresado', view: 'invisible' }
        ],
        S_Option: { id: '1', name: 'Seleccionar', view: 'invisible' },
        S_Option_E: { id: '3', name: 'Alumno', view: '' }
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

    $scope.careers_2 = {
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

    $scope.turn = {
        A_Options: [
            { id: '1', name: 'Elegir' },
            { id: '2', name: 'MATUTINO' },
            { id: '3', name: 'VESPERTINO' }
        ],
        S_Option: { id: '1', name: 'Elegir' }
    };

    $scope.data_groups = [
        { id: '1', name: 'ADMINISTRACIÓN DE RECURSOS HUMANOS', grade: '3', group: 'C', turn: 'TM', students: '1' },
        { id: '2', name: 'INGENIERIA EN SOFTWARE', grade: '4', group: 'D', turn: 'TV', students: '3' },
        { id: '3', name: 'ASD', grade: '5', group: 'E', turn: 'TM', students: '5' }
    ];

    $scope.certificates = [
        { id: '1', name: 'Carta de buena conducta', status: 'OCULTO', role: 'ALUMNO', number: '169', career: '', extra_info: '' },
        { id: '2', name: 'Constancia', status: 'OCULTO', role: 'ALUMNO', number: '7', career: 'ING. EN SW', extra_info: 'Documento para acreditar estancia de alumno' },
        { id: '3', name: 'Constancia con calificaciones', status: 'ACTIVO', role: 'ALUMNO', number: '14', career: '', extra_info: 'Kardex' }
    ];

    if ($scope.historial != 0) {
        $scope.historial = { id: '1', name: 'Todavía no hay ningún documento', expired: 'Los documentos disponibles se mostrarán aquí.', icon: 'fa-circle-xmark' }
    } else {
        $scope.historial = [
            { id: '2', name: 'BERUMEN RAMIREZ DAVID VICTOR', expired: 'Expira en', date: 'Oct 1,2022', icon: 'fa-file', border: 'border-bottom border-2 py-2' }
        ]
    };

    $scope.students = [
        { id: '1', name: 'Juan', lastname: 'Berumen Ramirez', status: 'REGULAR', school_id: 'ISW2022_A', photo: 'https://placehold.jp/100x100.png' },
        { id: '2', name: 'Yasser', lastname: 'Hernadez Garcia', status: 'REGULAR', school_id: 'ISW2022_B', photo: 'https://placehold.jp/100x100.png' },
        { id: '3', name: 'Arturo', lastname: 'Alvarez Galaviz', status: 'REGULAR', school_id: 'ISW2022_C', photo: 'https://placehold.jp/100x100.png' }
    ]

    $scope.reload = function() {
        location.reload(true);
    }

});