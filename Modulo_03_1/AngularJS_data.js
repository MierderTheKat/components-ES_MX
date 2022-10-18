var app = angular.module('Groups', []);

app.controller('GroupList', function($scope) {

    $scope.careers = {
        A_Options: [
            { id: '1', name: 'Seleccionar Carrera', status: true, view: 'invisible' },
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
        S_Option: { id: '1', name: 'Seleccionar Carrera', status: true, view: 'invisible' }
    };

    $scope.reticle = {
        A_Options: [
            { id: '1', name: 'Seleccionar Reticula', status: false, career_id: '0', view: 'invisible' },
            { id: '2', name: 'ISW 2008-2013', career_id: '8', status: true },
            { id: '3', name: 'ISW 2014-2019', career_id: '8', status: true },
            { id: '4', name: 'AN 2010-2015', career_id: '2', status: true },
            { id: '5', name: 'AN 2016-2021', career_id: '2', status: true },
            { id: '6', name: 'ARH 2011-2017', career_id: '3', status: true },
            { id: '7', name: 'ARH 2018-2022', career_id: '3', status: true },
            { id: '8', name: 'ASD 2005-2010', career_id: '4', status: true },
            { id: '9', name: 'ASD 2010-2015', career_id: '4', status: true }
        ],
        S_Option: { id: '1', name: 'Seleccionar Reticula', status: false, career_id: '0', view: 'invisible' }
    };

    $scope.changeReticle = function() {
        $scope.reticle.S_Option = {
            id: '1',
            name: 'Seleccionar Reticula',
            status: false,
            career_id: '0',
            view: 'invisible'
        };
    };

    $scope.classes = [
        { id: '1', name: 'INGENERIA DE SOFTWARE', group_id: '2', studying_id: '2', period_id: '2', teacher_id: '2' },
        { id: '2', name: 'ALGEBRA', group_id: '2', studying_id: '2', period_id: '5', teacher_id: '5' },
        { id: '3', name: 'TOPICOS SELECTOS DE SOFTWARE', group_id: '2', studying_id: '2', period_id: '2', teacher_id: '3' },
        { id: '4', name: 'BASES DE DATOS II', group_id: '2', studying_id: '2', period_id: '7', teacher_id: '3' },
        { id: '5', name: 'DISEÑO DE BASES DE DATOS', group_id: '2', studying_id: '2', period_id: '8', teacher_id: '4' },
        { id: '6', name: 'ARQUITECTURA DE SOFTWARE', group_id: '2', studying_id: '2', period_id: '7', teacher_id: '4' },
        { id: '7', name: 'PRUEBAS DE SISTEMAS TECNOLOGICOS DE COMUNICACIÓN', group_id: '2', studying_id: '3', period_id: '8', teacher_id: '2' },
        { id: '8', name: 'INGENERIA DE SOFTWARE', group_id: '3', studying_id: '2', period_id: '9', teacher_id: '3' },
        { id: '9', name: 'ALGEBRA', group_id: '3', studying_id: '2', period_id: '10', teacher_id: '4' },
        { id: '10', name: 'TOPICOS SELECTOS DE SOFTWARE', group_id: '3', studying_id: '2', period_id: '11', teacher_id: '5' },
        { id: '11', name: 'BASES DE DATOS II', group_id: '3', studying_id: '2', period_id: '11', teacher_id: '5' },
        { id: '12', name: 'DISEÑO DE BASES DE DATOS', group_id: '3', studying_id: '2', period_id: '12', teacher_id: '4' },
        { id: '13', name: 'ARQUITECTURA DE SOFTWARE', group_id: '3', studying_id: '2', period_id: '12', teacher_id: '3' },
        { id: '14', name: 'PRUEBAS DE SISTEMAS TECNOLOGICOS DE COMUNICACIÓN', group_id: '3', studying_id: '2', period_id: '12', teacher_id: '2' }
    ];

    $scope.groups = [
        { id: '1', name: 'A', students: 15, students_f: 0, students_t: 0 },
        { id: '2', name: 'B', students: 7, students_f: 0, students_t: 0 }
    ];

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
        S_Option: { id: '1', name: 'Seleccionar Periodo', status: false, view: 'invisible' }
    };

    $scope.data_type = {
        A_Options: [
            { id: '1', name: 'Docente' },
            { id: '2', name: 'Tutor' },
        ],
        S_Option: { id: '1', name: 'Docente' }
    };

    $scope.data_teachers = {
        A_Options: [
            { id: '1', name: 'Seleccionar Docente' },
            { id: '2', name: 'Gabriel Ibarra' },
            { id: '3', name: 'David Berumen' },
            { id: '4', name: 'Escolares MX' },
            { id: '5', name: 'Demo' }
        ],
        S_Option: { id: '1', name: 'Seleccionar Docente' }
    };

    $scope.students = [
        { id: '1', name: 'JUAN PEDRO', lastname: 'BERUMEN RAMIREZ', group: 'REGULAR', type: 'C' },
        { id: '2', name: 'YASSER GUADALUPE', lastname: 'HERNANDEZ GARCIA', group: 'REGULAR', type: 'C' },
        { id: '3', name: 'MIGUEL ARTURO', lastname: 'ALVAREZ GALAVIZ', group: 'REGULAR', type: 'C' },
        { id: '4', name: 'LILITH', lastname: 'LOPEZ DIAZ', group: 'REGULAR', type: 'C' },
        { id: '5', name: 'ALICIA', lastname: 'ZAPATA BRAVO', group: 'REGULAR', type: 'C' },
        { id: '6', name: 'GUSTAVO', lastname: 'GARCIA ZARAGOZA', group: 'REGULAR', type: 'C' },
        { id: '7', name: 'DAVID', lastname: 'RAMIREZ BERUMEN', group: 'REGULAR', type: 'C' },
        { id: '8', name: 'JUAN', lastname: 'VELAZQUEZ VILLAGOMEZ', group: 'REGULAR', type: 'C' },
        { id: '9', name: 'VALERIA', lastname: 'BARRAZA RUANO', group: 'REGULAR', type: 'C' },
        { id: '10', name: 'ALEJANDRO', lastname: 'VILLAGOMEZ ESQUEDA', group: 'REGULAR', type: 'C' },
        { id: '11', name: 'ESAU', lastname: 'ANAYA RIVAS', group: 'REGULAR', type: 'F' },
        { id: '12', name: 'SAMANTHA', lastname: 'NAJERA ONTIVEROS', group: 'REGULAR', type: 'F' },
        { id: '13', name: 'LILIANA', lastname: 'RIVERA GARCIA', group: 'REGULAR', type: 'F' },
        { id: '14', name: 'JOVANY', lastname: 'MARTINEZ NEVAREZ', group: 'REGULAR', type: 'F' }
    ];

    $scope.reload = function() {
        location.reload(true);
    };

});