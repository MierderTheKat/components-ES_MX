var app = angular.module('Groups', []);

app.controller('GroupList', function($scope) {

    $scope.data_period = {
        A_Options: [
            { id: '1', name: 'Seleccionar Periodo', status: false, view: 'invisible' },
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
        S_Option: { id: '2', name: 'AGOSTO 2022 - ENERO 2023', status: true }
    };

    $scope.data_group = {
        A_Options: [
            { id: '1', name: 'Seleccionar Grupo', status: true, view: 'invisible' },
            { id: '2', name: 'INGENIERIA EN SOFTWARE - 1 A TV', status: false },
            { id: '3', name: 'INGENIERIA EN SOFTWARE - 1 A TM', status: false },
            { id: '4', name: 'INGENIERIA EN SOFTWARE - 7 SW TM', status: false }
        ],
        S_Option: { id: '1', name: 'Seleccionar Grupo', status: true, view: 'invisible' }
    };

    $scope.data_class = {
        A_Options: [
            { id: '1', name: 'Seleccionar Materia', status: true, view: 'invisible' },
            { id: '2', name: 'INGENERIA DE SOFTWARE', status: false },
            { id: '3', name: 'ALGEBRA', status: false },
            { id: '4', name: 'TOPICOS SELECTOS DE SOFTWARE', status: false },
            { id: '5', name: 'BASES DE DATOS II', status: false },
            { id: '6', name: 'DISEÑO DE BASES DE DATOS', status: false },
            { id: '7', name: 'ARQUITECTURA DE SOFTWARE', status: false },
            { id: '8', name: 'PRUEBAS DE SISTEMAS TECNOLOGICOS DE COMUNICACIÓN', status: false }
        ],
        S_Option: { id: '1', name: 'Seleccionar Grupo', status: true, view: 'invisible' }
    };

    $scope.changeGroup = function() {
        $scope.data_group.S_Option = {
            id: '1',
            name: 'Seleccionar Grupo',
            status: true,
            view: 'invisible'
        };
    }

    $scope.changeClass = function() {
        $scope.data_class.S_Option = {
            id: '1',
            name: 'Seleccionar Materia',
            status: true,
            view: 'invisible'
        };
    }

    $scope.showClasses = function() {
        if ($scope.data_group.S_Option.id > 1) {
            $scope.data_class = {
                A_Options: [
                    { id: '1', name: 'Seleccionar Materia', status: true, view: 'invisible' },
                    { id: '2', name: 'INGENERIA DE SOFTWARE', status: false },
                    { id: '3', name: 'ALGEBRA', status: false },
                    { id: '4', name: 'TOPICOS SELECTOS DE SOFTWARE', status: false },
                    { id: '5', name: 'BASES DE DATOS II', status: false },
                    { id: '6', name: 'DISEÑO DE BASES DE DATOS', status: false },
                    { id: '7', name: 'ARQUITECTURA DE SOFTWARE', status: false },
                    { id: '8', name: 'PRUEBAS DE SISTEMAS TECNOLOGICOS DE COMUNICACIÓN', status: false }
                ],
                S_Option: { id: '1', name: 'Seleccionar Grupo', status: true, view: 'invisible' }
            };
        } else {
            $scope.data_class = {
                A_Options: [
                    { id: '1', name: 'Seleccionar Materia', status: true, view: 'invisible' }
                ],
                S_Option: { id: '1', name: 'Seleccionar Grupo', status: true, view: 'invisible' }
            };
        }
    }

    $scope.students = [{
            id: '1',
            name: 'Juan',
            lastname: 'Berumen Ramirez',
            school_id: 'ISW2022_A1',
            id_group: '2',
            period_id: '10',
            grade: [
                { id_class: '2', grade_u1: '10', grade_u2: '9', grade_u3: '8' },
                { id_class: '3', grade_u1: '4', grade_u2: '7', grade_u3: '' },
                { id_class: '4', grade_u1: '1', grade_u2: '3', grade_u3: '2' },
                { id_class: '5', grade_u1: '7', grade_u2: '8', grade_u3: '9' },
                { id_class: '6', grade_u1: '5', grade_u2: '5', grade_u3: '8' },
                { id_class: '7', grade_u1: '0', grade_u2: '10', grade_u3: '9' },
                { id_class: '8', grade_u1: '5', grade_u2: '4', grade_u3: '5' }
            ]
        },
        {
            id: '2',
            name: 'Yasser',
            lastname: 'Hernadez Garcia',
            school_id: 'ISW2022_A2',
            id_group: '2',
            period_id: '10',
            grade: [
                { id_class: '7', grade_u1: '7', grade_u2: '8', grade_u3: '5' },
                { id_class: '3', grade_u1: '', grade_u2: '', grade_u3: '' },
                { id_class: '4', grade_u1: '5', grade_u2: '5', grade_u3: '3' },
                { id_class: '5', grade_u1: '2', grade_u2: '7', grade_u3: '5' },
                { id_class: '6', grade_u1: '5', grade_u2: '5', grade_u3: '8' },
                { id_class: '7', grade_u1: '0', grade_u2: '10', grade_u3: '9' },
                { id_class: '8', grade_u1: '5', grade_u2: '4', grade_u3: '5' }
            ]
        },
        {
            id: '3',
            name: 'Arturo',
            lastname: 'Alvarez Galaviz',
            school_id: 'ISW2022_B1',
            id_group: '3',
            period_id: '10',
            grade: [
                { id_class: '3', grade_u1: '7', grade_u2: '8', grade_u3: '5' },
                { id_class: '3', grade_u1: '', grade_u2: '', grade_u3: '' },
                { id_class: '4', grade_u1: '5', grade_u2: '5', grade_u3: '3' },
                { id_class: '5', grade_u1: '2', grade_u2: '7', grade_u3: '5' },
                { id_class: '6', grade_u1: '5', grade_u2: '5', grade_u3: '8' },
                { id_class: '7', grade_u1: '0', grade_u2: '10', grade_u3: '9' },
                { id_class: '8', grade_u1: '5', grade_u2: '4', grade_u3: '5' }
            ]
        },
        {
            id: '4',
            name: 'Mauricio',
            lastname: 'Velazquez Villagomez',
            school_id: 'ISW2022_B2',
            id_group: '3',
            period_id: '10',
            grade: [
                { id_class: '2', grade_u1: '10', grade_u2: '9', grade_u3: '8' },
                { id_class: '3', grade_u1: '4', grade_u2: '7', grade_u3: '' },
                { id_class: '4', grade_u1: '1', grade_u2: '3', grade_u3: '2' },
                { id_class: '5', grade_u1: '7', grade_u2: '8', grade_u3: '9' },
                { id_class: '6', grade_u1: '5', grade_u2: '5', grade_u3: '8' },
                { id_class: '7', grade_u1: '0', grade_u2: '10', grade_u3: '9' },
                { id_class: '8', grade_u1: '5', grade_u2: '4', grade_u3: '5' }
            ]
        },
        {
            id: '5',
            name: 'Jovany',
            lastname: 'Maciaz Elena',
            school_id: 'ISW2022_C1',
            id_group: '4',
            period_id: '10',
            grade: [
                { id_class: '2', grade_u1: '10', grade_u2: '9', grade_u3: '8' },
                { id_class: '3', grade_u1: '4', grade_u2: '7', grade_u3: '' },
                { id_class: '4', grade_u1: '1', grade_u2: '3', grade_u3: '2' },
                { id_class: '5', grade_u1: '7', grade_u2: '8', grade_u3: '9' },
                { id_class: '6', grade_u1: '5', grade_u2: '5', grade_u3: '8' },
                { id_class: '7', grade_u1: '0', grade_u2: '10', grade_u3: '9' },
                { id_class: '8', grade_u1: '5', grade_u2: '4', grade_u3: '5' }
            ]
        }
    ]

    $scope.data_period_student = {
        A_Options: [
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
        S_Option: { id: '10', name: 'AGOSTO 2018 - ENERO 2018', status: true }
    };



    $scope.reload = function() {
        location.reload(true);
    }

});