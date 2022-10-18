var app = angular.module('Groups', []);

app.controller('GroupList', function($scope) {

    $scope.students = [
        { id: '1', name: 'JUAN PEDRO', lastname: 'BERUMEN RAMIREZ', curp: 'MARA940621HDGRMV01', school_id: 'MTA2022_A', archive: 'Asignado hace 5 años' },
        { id: '2', name: 'YASSER GUADALUPE', lastname: 'HERNANDEZ GARCIA', curp: 'GARF940621HDGRMV01', school_id: 'ISW2022_B', archive: '' },
        { id: '3', name: 'MIGUEL ARTURO', lastname: 'ALVAREZ GALAVIZ', curp: 'LUFFY40621HDGRMV01', school_id: 'ADE2022_C', archive: '' }
    ];

    $scope.images = [
        { id: '1', name: 'YASSER GUADALUPE', lastname: 'HERNANDEZ GARCIA', curp: 'MARA940621HDGRMV01', id_student: 'ISW2022_B', calification: 'NULL', career: 'MECATRÓNICA', grade: '2', group: 'C', turn: 'TM', img_link: 'https://placehold.jp/100x200.png' }
    ];


});