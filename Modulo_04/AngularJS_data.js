var app = angular.module('Groups', []);

app.controller('GroupList', function($scope) {

    $scope.courses = [
        { id: '1', name: 'CALCULO INTEGRAL', section: '5C PROGRAMACIÓN', description: 'CALCULO INTEGRAL 5C PROGRAMACIÓN', code: 'macbds3', teacher: 'Laura Yolanda Medrano Sanchez', teacher_email: 'laura.yolanda.medrano@cbtf4.edu.mx' },
        { id: '2', name: 'English III 3 B Foresty', section: 'Semestre Agosto 22 - Enero 2023', description: 'English III Semestre Agosto 22 - Enero 2023', code: 'sluvbjq', teacher: 'Laura Veronica Hernandez de la Cruz', teacher_email: 'laura.veronica.hernandez@cbtf4.edu.mx' },
        { id: '3', name: 'English III 3C Foresty', section: 'Semestre Agosto 22 - Enero 2023', description: 'English III Semestre Agosto 22 - Enero 2023', code: 'c2xkiqw', teacher: 'Laura Veronica Hernandez de la Cruz', teacher_email: 'laura.veronica.hernandez@cbtf4.edu.mx' }
    ];

    $scope.homeworks = [
        { id: '1', name: 'Habilidades Socioemocionales', description: 'Esta tarea es solo para los alumnos que no entregaron la actividad' },
        { id: '2', name: 'EXAMEN', description: 'RESOLVER LOS SIGUIENTES EJERCICIOS' },
        { id: '3', name: 'INTEGRALES DE FUNCIONES EXPONENCIALES', description: 'SUBIR POR ESTE MEDIO LA TAREA PENDIENTE' },
    ];

    $scope.califications = [
        { id: '1', student: 'Juan Berumen Ramirez', C_Temporal: '10', C_Final: '', Created: '2022-09-27T14:18:36.083Z', Modified: '2022-09-27T17:43:29.950Z' },
        { id: '2', student: 'Yasser Hernadez Garcia', C_Temporal: '7', C_Final: '', Created: '2022-09-27T14:18:36.083Z', Modified: '2022-09-27T17:43:29.950Z' },
        { id: '3', student: 'Arturo Alvarez Galaviz', C_Temporal: '9', C_Final: '', Created: '2022-09-27T14:18:36.083Z', Modified: '2022-09-27T17:43:29.950Z' },
        { id: '4', student: 'Valeria Barraza Ruano', C_Temporal: '10', C_Final: '', Created: '2022-09-27T14:18:36.083Z', Modified: '2022-09-27T17:43:29.950Z' },
        { id: '5', student: 'Alejandro Villagomez Esqueda', C_Temporal: '10', C_Final: '', Created: '2022-09-27T14:18:36.083Z', Modified: '2022-09-27T17:43:29.950Z' },
    ];

});