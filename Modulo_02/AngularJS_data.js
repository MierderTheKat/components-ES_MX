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
        { id: '1', name: 'Carta de buena conducta', status: 'OCULTO', role: 'ALUMNO', number: '169', career: '', extra_info: '', content: '' },
        { id: '2', name: 'Constancia', status: 'OCULTO', role: 'ALUMNO', number: '7', career: 'ING. EN SW', extra_info: 'Documento para acreditar estancia de alumno', content: '' },
        { id: '3', name: 'Constancia con calificaciones', status: 'ACTIVO', role: 'ALUMNO', number: '14', career: '', extra_info: 'Kardex', content: '' }
    ];

    $scope.historial = [
        { id: '1', name: 'DAVID VICTOR', lastname: 'BERUMEN RAMIREZ', expired_date: 'Oct 1,2022' },
        { id: '2', name: 'YASSER GUADALUPE', lastname: 'HERNANDEZ GARCIA', expired_date: 'Oct 1,2022' },
        { id: '3', name: 'MIGUEL ARTURO', lastname: 'ALVAREZ GALAVIZ', expired_date: 'Oct 1,2022' }
    ];

    $scope.students = [
        { id: '1', name: 'JUAN PEDRO', lastname: 'BERUMEN RAMIREZ', school_id: 'ISW2022_A', curp: 'MARA940621HDGRMV01', careers: 'INGENIERIA EN SOFTWARE', grade: '2', group: 'C', turn: 'VESPERTINO', type: 'FISICO', photo: 'https://placehold.jp/100x100.png' },
        { id: '2', name: 'YASSER GUADALUPE', lastname: 'HERNANDEZ GARCIA', school_id: 'ISW2022_B', curp: 'GARF940621HDGRMV01', careers: 'INGENIERIA EN SOFTWARE', grade: '1', group: 'A', turn: 'MATUTINO', type: 'VIRTUAL', photo: 'https://placehold.jp/100x100.png' },
        { id: '3', name: 'MIGUEL ARTURO', lastname: 'ALVAREZ GALAVIZ', school_id: 'ISW2022_C', curp: 'LUFFY40621HDGRMV01', careers: 'ADMINISTRACIÓN DE EMPRESAS', grade: '1', group: 'A', turn: 'MATUTINO', type: 'FISICO', photo: 'https://placehold.jp/100x100.png' }
    ];

    $scope.reload = function() {
        location.reload(true);
    };

    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.setOnLoadCallback(drawStuff);

    function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
            ["", ""],
            ["Carta BC", 2],
            ["Constancia", 7]
        ]);

        var options = {
            title: "D , i",
            bar: { groupWidth: "95%" },
            legend: { position: "none" },
            bars: 'horizontal',
            axes: {
                x: {
                    0: { side: 'top', label: 'Reporte mensual' }
                }
            },
        };

        var chart = new google.charts.Bar(document.getElementById('chart_div'));
        chart.draw(data, options);
    };

});