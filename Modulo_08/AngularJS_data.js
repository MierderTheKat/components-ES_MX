var app = angular.module('Groups', []);

app.controller('GroupList', function($scope) {

    $scope.data_period = {
        A_Options: [
            { id: '1', name: 'Seleccionar Periodo', status: false },
            { id: '2', name: 'AGOSTO 2022 - ENERO 2023', status: true },
            { id: '3', name: 'FEBRERO - JULIO 2022', status: true },
            { id: '4', name: 'AGOSTO 2021 - ENERO 2022', status: true },
            { id: '5', name: 'FEBRERO - JULIO 2021', status: true },
            { id: '6', name: 'AGOSTO 2020 - ENERO 2021', status: true },
            { id: '7', name: 'FEBRERO - JULIO 2020', status: true },
            { id: '8', name: 'AGOSTO 2019 - ENERO 2020', status: true },
            { id: '9', name: 'FEBRERO - JULIO 2019', status: true },
            { id: '10', name: 'AGOSTO 2018 - ENERO 2019', status: true },
            { id: '11', name: 'FEBRERO - JULIO 2018', status: true },
            { id: '12', name: 'AGOSTO 2017 - ENERO 2018', status: true },
            { id: '13', name: 'FEBRERO - JULIO 2017', status: true }
        ],
        S_Option: { id: '1', name: 'Seleccionar Periodo', status: false }
    };

    $scope.data_courses = {
        A_Options: [
            { id: '1', name: 'Seleccionar Curso', status: true, view: 'invisible' },
            { id: '2', name: 'Examen Extraordinario', status: false },
            { id: '3', name: 'Examen Extraordinario Test', status: false },
            { id: '4', name: 'Recursamiento Intersemestral', status: false }
        ],
        S_Option: { id: '1', name: 'Seleccionar Curso', status: true, view: 'invisible' }
    };

    $scope.data_limit = {
        A_Options: [
            { id: '1', name: 'Seleccionar el Limite' },
            { id: '2', name: '10' },
            { id: '3', name: '20' },
            { id: '4', name: '50' },
            { id: '5', name: '100' },
            { id: '6', name: '200' },
            { id: '7', name: '500' },
            { id: '8', name: '1000' }
        ],
        S_Option: { id: '1', name: 'Seleccionar Limite', status: true }
    };

    $scope.students = [
        { id: '1', id_course: '2', name: 'JUAN PEDRO', lastname: 'BERUMEN RAMIREZ', curp: 'MARA940621HDGRMV01', school_id: 'MTA2022_A', pay: 'SI', status: 'FALSE', inscription_date: '2018-12-10', inscription_hour: '09:00:00', message: 'No ha tramitado la credencial, canalizar al módulo de credenciales', photo: 'https://placehold.jp/100x100.png' },
        { id: '2', id_course: '2', name: 'YASSER GUADALUPE', lastname: 'HERNANDEZ GARCIA', curp: 'GARF940621HDGRMV01', school_id: 'ISW2022_B', pay: 'NO', status: 'FALSE', inscription_date: '', inscription_hour: '', message: 'No ha tramitado la credencial, canalizar al módulo de credenciales', photo: 'https://placehold.jp/100x100.png' },
        { id: '3', id_course: '3', name: 'MIGUEL ARTURO', lastname: 'ALVAREZ GALAVIZ', curp: 'LUFFY40621HDGRMV01', school_id: 'ADE2022_C', pay: 'NO', status: 'FALSE', inscription_date: '2015-08-02', inscription_hour: '10:00:00', message: 'No ha tramitado la credencial, canalizar al módulo de credenciales', photo: 'https://placehold.jp/100x100.png' }
    ]

    $scope.teachers = [
        { id: '1', teacher_id: 'ISA143B', name: 'Yasser', lastname: 'Hernadez Garcia', class: 'PRUEBAS DE SOFTWARE', documents: '2', classroom: '14', date: '12/09/2020', hour: '12:10 AM' },
        { id: '2', teacher_id: 'EFE567G', name: 'Arturo', lastname: 'Alvarez Galaviz', class: 'SISTEMAS OPERATIVOS', documents: '5', classroom: '12', date: '12/09/2020', hour: '10:40 AM' },
        { id: '3', teacher_id: 'OWQ765R', name: 'Valeria', lastname: 'Barraza Ruano', class: 'PROGRAMACIÓN', documents: '3', classroom: '1', date: '12/09/2015', hour: '04:30 PM' }
    ];

    $scope.turn = {
        A_Options: [
            { id: '1', name: 'Seleccionar Turno' },
            { id: '2', name: 'MATUTINO' },
            { id: '3', name: 'VESPERTINO' }
        ],
        S_Option: { id: '1', name: 'Seleccionar Turno' }
    };

    $scope.courses = [
        { id: '1', id_course: '2', name: 'EXAMEN EXTRAORDINARIO', description: 'Registro a examen extraordinario', course_id: 'C13018' },
        { id: '2', id_course: '3', name: 'EXAMEN EXTRAORDINARIO Test', description: 'Registro a examen extraordinario test', course_id: 'C13019' },
        { id: '3', id_course: '4', name: 'RECURSAMIENTO INTERSEMESTRAL', description: 'Registro a examen de recursamiento intersemestral', course_id: 'A32043' }
    ];

    $scope.pay = {
        A_Options: [
            { id: '1', name: 'Selecciona el estatus de pago', status: true, view: 'invisible' },
            { id: '2', name: 'Pendiente', status: false },
            { id: '3', name: 'No aplica', status: false },
            { id: '4', name: 'Si', status: false },
            { id: '5', name: 'No', status: false }
        ],
        S_Option: { id: '1', name: 'Selecciona el estatus de pago', status: true, view: 'invisible' }
    };

    $scope.verify = {
        A_Options: [
            { id: '1', name: 'Selecciona una opción', status: true, view: 'invisible' },
            { id: '2', name: 'Si', status: false },
            { id: '3', name: 'No', status: false }
        ],
        S_Option: { id: '1', name: 'Selecciona una opción', status: true, view: 'invisible' }
    };





    $scope.type = {
        A_Options: [
            { id: '1', name: 'EXAMEN EXTRAORDINARIO' },
            { id: '2', name: 'CURSO INTERSEMESTRAL' }
        ],
        S_Option: { id: '1', name: 'EXAMEN EXTRAORDINARIO' }
    };









    $scope.reload = function() {
        location.reload(true);
    }

});