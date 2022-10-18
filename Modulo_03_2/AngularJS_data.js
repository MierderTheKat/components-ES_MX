var app = angular.module('Groups', []);

app.controller('GroupList', function($scope) {

    $scope.students = [
        { id: '1', name: 'JUAN PEDRO', lastname: 'BERUMEN RAMIREZ', type: 'ALUMNO', curp: 'CURPDEMO', student_id: 'ISW2022_A1', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '2', name: 'YASSER GUADALUPE', lastname: 'HERNANDEZ GARCIA', type: 'ALUMNO', curp: 'BERD940621HDGRMV01', student_id: 'ISW2022_A2', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '3', name: 'MIGUEL ARTURO', lastname: 'ALVAREZ GALAVIZ', type: 'ALUMNO', curp: 'XXXX707684XXXXXX37', student_id: 'ISW2022_A3', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '4', name: 'LILITH', lastname: 'LOPEZ DIAZ', type: 'ALUMNO', curp: 'XXXX166507XXXXXX29', student_id: 'ISW2022_A4', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '5', name: 'ALICIA', lastname: 'ZAPATA BRAVO', type: 'ALUMNO', curp: 'XXXX590233XXXXXX12', student_id: 'ISW2022_A5', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '6', name: 'GUSTAVO', lastname: 'GARCIA ZARAGOZA', type: 'ALUMNO', curp: 'XXXX140878XXXXXX48', student_id: 'ISW2022_A6', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '7', name: 'DAVID', lastname: 'RAMIREZ BERUMEN', type: 'ALUMNO', curp: 'XXXX580404XXXXXX21', student_id: 'ISW2022_A7', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '8', name: 'JUAN', lastname: 'VELAZQUEZ VILLAGOMEZ', type: 'ALUMNO', curp: 'XXXX369366XXXXXX13', student_id: 'ISW2022_A8', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '9', name: 'VALERIA', lastname: 'BARRAZA RUANO', type: 'ALUMNO', curp: 'XXXX952086XXXXXX51', student_id: 'ISW2022_B1', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '10', name: 'ALEJANDRO', lastname: 'VILLAGOMEZ ESQUEDA', type: 'ALUMNO', curp: 'XXXX455924XXXXXX48', student_id: 'ISW2022_B2', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '11', name: 'ESAU', lastname: 'ANAYA RIVAS', type: 'ALUMNO', curp: 'XXXX730914XXXXXX47', student_id: 'ISW2022_B3', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '12', name: 'SAMANTHA', lastname: 'NAJERA ONTIVEROS', type: 'ALUMNO', curp: 'XXXX936814XXXXXX54', student_id: 'ISW2022_B4', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '13', name: 'LILIANA', lastname: 'RIVERA GARCIA', type: 'ALUMNO', curp: 'XXXX727589XXXXXX09', student_id: 'ISW2022_B5', photo: 'https://placehold.jp/100x100.png', view: 'invisible' },
        { id: '14', name: 'JOVANY', lastname: 'MARTINEZ NEVAREZ', type: 'ALUMNO', curp: 'XXXX257506XXXXXX96', student_id: 'ISW2022_B6', photo: 'https://placehold.jp/100x100.png', view: 'invisible' }
    ];

    $scope.activeSelector = false;

    $scope.ChangeView = function(id) {
        $scope.search_student = '';
        $scope.activeSelector = true;
        if (id != 0) {
            $scope.students[id - 1].view = 'visible';
            for (let i = 0; i < $scope.students.length; i++) {
                if ($scope.students[i].id != (id)) {
                    $scope.students[i].view = 'invisible';
                }
            }
        } else {
            $scope.activeSelector = false;
            $scope.groups.S_Option = { id: '1', name: 'Seleccionar Grupo', view: 'invisible' };
            for (let i = 0; i < $scope.students.length; i++) {
                $scope.students[i].view = 'invisible';
            }
        }
    };

    $scope.groups = {
        A_Options: [
            { id: '1', name: 'Seleccionar Grupo', view: 'invisible' },
            { id: '2', name: '1 A', group: 'A' },
            { id: '3', name: '1 B', group: 'B' }
        ],
        S_Option: { id: '1', name: 'Seleccionar Grupo', view: 'invisible' }
    };

    $scope.classes = [
        { id: '1', name: 'INGENERIA DE SOFTWARE', group_id: '2', grade: '10', period_id: '2', teacher_id: '2' },
        { id: '2', name: 'ALGEBRA', group_id: '2', grade: '9', period_id: '5', teacher_id: '5' },
        { id: '3', name: 'TOPICOS SELECTOS DE SOFTWARE', group_id: '2', grade: '9', period_id: '2', teacher_id: '3' },
        { id: '4', name: 'BASES DE DATOS II', group_id: '2', grade: '9', period_id: '7', teacher_id: '3' },
        { id: '5', name: 'DISEÑO DE BASES DE DATOS', group_id: '2', grade: '8', period_id: '8', teacher_id: '4' },
        { id: '6', name: 'ARQUITECTURA DE SOFTWARE', group_id: '2', grade: '10', period_id: '7', teacher_id: '4' },
        { id: '7', name: 'PRUEBAS DE SISTEMAS TECNOLOGICOS DE COMUNICACIÓN', group_id: '2', grade: '8', period_id: '8', teacher_id: '2' },
        { id: '8', name: 'INGENERIA DE SOFTWARE', group_id: '3', grade: '5', period_id: '9', teacher_id: '3' },
        { id: '9', name: 'ALGEBRA', group_id: '3', grade: '7', period_id: '10', teacher_id: '4' },
        { id: '10', name: 'TOPICOS SELECTOS DE SOFTWARE', group_id: '3', grade: '8', period_id: '11', teacher_id: '5' },
        { id: '11', name: 'BASES DE DATOS II', group_id: '3', grade: '8', period_id: '11', teacher_id: '5' },
        { id: '12', name: 'DISEÑO DE BASES DE DATOS', group_id: '3', grade: '7', period_id: '12', teacher_id: '4' },
        { id: '13', name: 'ARQUITECTURA DE SOFTWARE', group_id: '3', grade: '9', period_id: '12', teacher_id: '3' },
        { id: '14', name: 'PRUEBAS DE SISTEMAS TECNOLOGICOS DE COMUNICACIÓN', group_id: '3', grade: '6', period_id: '12', teacher_id: '2' }
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

});