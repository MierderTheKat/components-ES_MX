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

    $scope.turn = {
        A_Options: [
            { id: '1', name: 'Elegir Turno' },
            { id: '2', name: 'TM' },
            { id: '3', name: 'TV' }
        ],
        S_Option: { id: '1', name: 'Elegir Turno' }
    };

    $scope.images = [
        { id: '1', name: 'YASSER GUADALUPE', lastname: 'HERNANDEZ GARCIA', curp: 'MARA940621HDGRMV01', id_student: 'ISW2022_B', calification: 'NULL', career: 'MECATRÓNICA', grade: '2', group: 'C', turn: 'TM', img_link: 'https://placehold.jp/100x200.png' }
    ];

    $scope.hours = [
        { id: '1', name: '07:00' },
        { id: '2', name: '07:30' },
        { id: '3', name: '08:00' },
        { id: '4', name: '08:30' },
        { id: '5', name: '09:00' },
        { id: '6', name: '09:30' },
        { id: '7', name: '10:00' },
        { id: '8', name: '10:30' },
        { id: '9', name: '11:00' },
        { id: '10', name: '11:30' },
        { id: '11', name: '12:00' },
        { id: '12', name: '12:30' },
        { id: '13', name: '13:00' },
        { id: '14', name: '13:30' },
        { id: '15', name: '14:00' },
        { id: '16', name: '14:30' },
        { id: '17', name: '16:00' },
        { id: '18', name: '16:30' },
        { id: '19', name: '17:00' },
        { id: '20', name: '17:30' },
        { id: '21', name: '18:00' },
        { id: '22', name: '18:30' },
        { id: '23', name: '19:00' },
        { id: '24', name: '19:30' },
        { id: '25', name: '20:00' },
        { id: '26', name: '20:30' },
        { id: '27', name: '21:00' },
        { id: '28', name: '21:30' },
    ];

    $scope.week_days = [
        { id: '1', name: 'LUNES' },
        { id: '2', name: 'MARTES' },
        { id: '3', name: 'MIÉRCOLES' },
        { id: '4', name: 'JUEVES' },
        { id: '5', name: 'VIERNES' },
        { id: '6', name: 'SÁBADO' },
        { id: '7', name: 'DOMINGO' }
    ];

    $scope.type = {
        A_Options: [
            { id: '1', name: 'Elegir Tipo' },
            { id: '2', name: 'DOCENTE' },
            { id: '3', name: 'TUTOR' }
        ],
        S_Option: { id: '1', name: 'Elegir Tipo' }
    };

    $scope.teacher = {
        A_Options: [
            { id: '1', name: 'Elegir Docente' },
            { id: '2', name: 'David Berúmen' },
            { id: '3', name: 'Gabriel Ibarra' },
            { id: '4', name: 'Juan Bravo' }
        ],
        S_Option: { id: '1', name: 'Elegir Turno' }
    };

    $scope.class = {
        A_Options: [
                { id: '1', name: 'Elegir Materia' },
                { id: '2', name: 'ADMINISTRA Y CONFIGURA PLATAFORMAS DE E-LEARNING' },
                { id: '3', name: 'ALGEBRA' },
                { id: '4', name: 'ÁLGEBRA 3' },
                { id: '5', name: 'ALGORITMOS' },
                { id: '6', name: 'ALGRBRA LINEAL' },
                { id: '7', name: 'ANALISIS DE FLUIDOS' },
                { id: '8', name: 'APLICA ACABADOS EN MUEBLES DE MADERA' },
                { id: '9', name: 'APLICA ACTIVIDADES DE APROVECHAMIENTO FORESTAL MADERABLE' }
            ],
            S_Option: { id: '1', name: 'Elegir Materia' }
    };

    $scope.reload = function() {
        location.reload(true);
    };

});