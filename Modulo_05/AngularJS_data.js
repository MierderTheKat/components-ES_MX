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
        S_Option: { id: '2', name: 'AGOSTO 2022 - ENERO 2023', status: true }
    };

    $scope.data_groups = [
        { id: '1', name: 'ADMINISTRACIÓN DE RECURSOS HUMANOS', grade: '1', group: 'A', turn: 'TM', students: '1' },
        { id: '2', name: 'INGENIERIA EN SOFTWARE', grade: '2', group: 'B', turn: 'TV', students: '3' },
        { id: '3', name: 'ARQUITECTURA', grade: '3', group: 'C', turn: 'TM', students: '5' }
    ];

    $scope.classes = [
        { id: '1', name: 'QUÍMICA II', p_1: 7.5, p_2: 6, p_3: 6, a_1: 18, a_2: 19, a_3: 19 },
        { id: '2', name: 'LECTURA, EXPRESIÓN ORAL Y ESCRITA II', p_1: 9.5, p_2: 5.5, p_3: 8.2, a_1: 15, a_2: 17, a_3: 23 },
        { id: '3', name: 'INGLÉS II', p_1: 9.2, p_2: 9.3, p_3: 10, a_1: 20, a_2: 20, a_3: 20 }
    ];

    $scope.units = [];

    C_units = function(u_classes) {
        var u = 1;
        for (var i = 1; i < (u_classes + 1); i++) {
            for (var o = 1; o < (4); o++) {
                $scope.units.push({ id: u, unit: o });
                u += 1;
            }
        }
    };

    C_units($scope.classes.length);

    $scope.teachers = [
        { id: '1', name: 'Yasser', lastname: 'Hernadez Garcia' },
        { id: '2', name: 'Arturo', lastname: 'Alvarez Galaviz' },
        { id: '3', name: 'Valeria', lastname: 'Barraza Ruano' }
    ];


    $scope.teacher_disapproveds = [
        { id: '1', name: 'Yasser Hernadez Garcia', students: '20', careers: '30' },
        { id: '2', name: 'Arturo Alvarez Galaviz', students: '15', careers: '12' },
        { id: '3', name: 'Valeria Barraza Ruano', students: '25', careers: '1' }
    ];

    $scope.careers_disapproveds = [
        { id: '1', career: 'GEOMETRÍA Y TRIGONOMETRÍA', students: '423', units: '751' },
        { id: '2', career: 'FÍSICA I', students: '366', units: '554' },
        { id: '3', career: 'CÁLCULO DIFERENCIAL', students: '366', units: '514' }
    ];

    $scope.unlinked_students = [
        { id: '1', id_student: '6770336', name: 'JUAN PEDRO', lastname: 'BERUMEN RAMIREZ', school_id: 'MTA2022_A', curp: 'MARA940621HDGRMV01', career: 'MECATRÓNICA', grade: '2', group: 'C', turn: 'TM' },
        { id: '2', id_student: '6778283', name: 'YASSER GUADALUPE', lastname: 'HERNANDEZ GARCIA', school_id: 'ISW2022_B', curp: 'GARF940621HDGRMV01', career: 'INGENIERIA EN SOFTWARE', grade: '1', group: 'A', turn: 'TV' },
        { id: '3', id_student: '6775085', name: 'MIGUEL ARTURO', lastname: 'ALVAREZ GALAVIZ', school_id: 'ADE2022_C', curp: 'LUFFY40621HDGRMV01', career: 'ADMINISTRACIÓN DE EMPRESAS', grade: '1', group: 'A', turn: 'TN' }
    ]

    $scope.students = [
        { id: '1', date: '2020-04-23 12:52:42', period: 'SEMESTRAL 2 - 2019', period_name: 'AGOSTO 2018 - ENERO 2019', name: 'JUAN PEDRO', lastname: 'BERUMEN RAMIREZ', curp: 'MARA940621HDGRMV01', school_id: 'MTA2022_A', grade: '2', group: 'C', turn: 'TM', career: 'MECATRÓNICA' },
        { id: '2', date: '2022-06-14 13:13:18', period: 'SEMESTRAL 1 - 2021', period_name: 'AGOSTO 2021 - ENERO 2022', name: 'YASSER GUADALUPE', lastname: 'HERNANDEZ GARCIA', curp: 'GARF940621HDGRMV01', school_id: 'ISW2022_B', grade: '1', group: 'A', turn: 'TV', career: 'INGENIERIA EN SOFTWARE' },
        { id: '3', date: '2021-12-30 08:35:60', period: 'SEMESTRAL 3 - 2020', period_name: 'FEBRERO - JULIO 2022', name: 'MIGUEL ARTURO', lastname: 'ALVAREZ GALAVIZ', curp: 'LUFFY40621HDGRMV01', school_id: 'ADE2022_C', grade: '1', group: 'A', turn: 'TN', career: 'ADMINISTRACIÓN DE EMPRESAS' }
    ]

    $scope.student_classes = [
        { id: '1', name: 'QUÍMICA II', p_1: 7.5, p_2: 6, p_3: 6, a_1: 18, a_2: 19, a_3: 19 },
        { id: '2', name: 'LECTURA, EXPRESIÓN ORAL Y ESCRITA II', p_1: 9.5, p_2: 5.5, p_3: 8.2, a_1: 15, a_2: 17, a_3: 23 },
        { id: '3', name: 'INGLÉS II', p_1: 9.2, p_2: 9.3, p_3: 10, a_1: 20, a_2: 20, a_3: 20 }
    ]

    $scope.formatNumber = function(i) {
        return Math.round(i);
    };

    $scope.escolares_students_list = {
        A_Options: [
            { id: '1', name: 'Elegir' },
            { id: '2', name: '#16069-CURPDEMO - ABC123 LOPEZ DIAZ LILITH' },
            { id: '3', name: '#16071-BERD940621HDGRMV01 - DEMO831902 BERUMEN RAMIREZ DAVID VICTOR' },
            { id: '4', name: '#16072-XXXX707684XXXXXX37 - 1000001 ZAPATA BRAVO ALICIA' },
            { id: '5', name: '#16244-XXXX166507XXXXXX29 - 1000002 GARCIA ZARAGOZA GUSTAVO' },
            { id: '6', name: '#16245-XXXX590233XXXXXX12 - DEMO800517 MURILLO AMADOR ALICIA' },
            { id: '7', name: '#16430-XXXX140878XXXXXX48 - DEMO803098 MARTINEZ FLORES RICK' },
            { id: '8', name: '#16441-XXXX580404XXXXXX21 - DEMO644519 ZAVALA MATURINO ERIKA' },
            { id: '9', name: '#16452-XXXX369366XXXXXX13 - DEMO242816 SOSA GARCIA MILDRED' },
            { id: '10', name: '#16453-XXXX952086XXXXXX51 - DEMO778773 AMADOR IBARRA JORGE' },
            { id: '11', name: '#16454-XXXX455924XXXXXX48 - DEMO736589 GUADIAN SINATRA OCTAVIO' },
            { id: '12', name: '#16456-XXXX730914XXXXXX47 - DEMO966013 BAUTISTA VALDEZ GUSTAVO' }
        ],
        S_Option: { id: '1', name: 'Elegir' }
    };

    $scope.escolares_students = [
        { id: '1', name: 'LILITH', lastname: 'LOPEZ DIAZ', curp: 'CURPDEMO', school_id: 'ABC123' },
        { id: '2', name: 'ALICIA', lastname: 'ZAPATA BRAVO', curp: 'BERD940621HDGRMV01', school_id: '1000001' },
        { id: '3', name: 'GUSTAVO', lastname: 'GARCIA ZARAGOZA', curp: 'XXXX707684XXXXXX37', school_id: '1000002' }
    ]

    $scope.status = {
        A_Options: [
            { id: '1', name: 'Elegir' },
            { id: '2', name: 'FIRMADO' },
            { id: '3', name: 'SIN FIRMAR' }
        ],
        S_Option: { id: '2', name: 'FIRMADO' }
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

    $scope.careers = {
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
            { id: '2', name: 'TM' },
            { id: '3', name: 'TV' },
            { id: '4', name: 'TN' }
        ],
        S_Option: { id: '1', name: 'Elegir' }
    };

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Año', 'UNIDAD 1', 'UNIDAD 2', 'UNIDAD 3'],
            ['AGOSTO 2018 - ENERO 2019', 86026, 7995, 4796],
            ['AGOSTO 2021 - ENERO 2022', 195332, 200135, 199051],
            ['FEBRERO - JULIO 2022', 225083, 255889, 234656],
        ]);

        var options = {
            title: 'Total de asistencias por periodo y unidad',
            curveType: 'function',
            height: 400,
            legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);
    }

});