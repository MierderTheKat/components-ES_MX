var app = angular.module('Groups', []);

app.controller('GroupList', function($scope) {

    $scope.pre_registration = {
        A_Options: [
            { id: '1', name: 'Seleccionar Preinscripción', status: true, view: 'invisible' },
            { id: '2', name: 'Demo minificado', description: 'Módulo de preinscripciones del sistema Escolares MX', max_requests: '500', max_tokens: '500', status: false },
            { id: '3', name: 'Demo', description: 'Módulo DEMO de preinscripciones del sistema Escolares MX', max_requests: '400', max_tokens: '400', status: false }
        ],
        S_Option: { id: '1', name: 'Seleccionar Preinscripción', status: true, view: 'invisible' }
    };

    $scope.schools = {
        A_Options: [
            { id: '1', name: 'Seleccionar escuela' },
            { id: '2', name: 'CBTA' },
            { id: '3', name: 'COBAED' },
            { id: '4', name: 'CONALEP' },
            { id: '5', name: 'CBTIS' }
        ],
        S_Option: { id: '1', name: 'Seleccionar escuela' }
    };

    $scope.aspirants = [
        { id: '1', name: 'JUAN PEDRO', lastname: 'BERUMEN RAMIREZ', curp: 'XXXX193486XXXXXX83', register_date: '2022-03-24 16:49:34', photo: 'https://placehold.jp/100x100.png', id_request: '2', id_token: '2' },
        { id: '2', name: 'YASSER GUADALUPE', lastname: 'HERNANDEZ GARCIA', curp: 'XXXX981456XXXXXX42', register_date: '2022-03-24 17:01:59', photo: 'https://placehold.jp/100x100.png', id_request: '3', id_token: '0' },
        { id: '3', name: 'MIGUEL ARTURO', lastname: 'ALVAREZ GALAVIZ', curp: 'XXXX765798XXXXXX98', register_date: '2022-03-25 15:21:42', photo: 'https://placehold.jp/100x100.png', id_request: '0', id_token: '0' }
    ]

    $scope.requests = [
        { id: '1' },
        { id: '2' },
        { id: '3' }
    ]

    $scope.tokens = [
        { id: '1' },
        { id: '2' }
    ]

    $scope.view_camera = false;
    $scope.view_snapshot = 'invisible p-0';
    $scope.camera_error = '';

    //----Modificación de un script sacado de internet para webcam----
    const self = this;
    $scope.cameraOn = () => {
        $scope.view_camera = true;
        $scope.no_click = ' pe-none';

        navigator.getMedia = (navigator.getUserMedia || // use the proper vendor prefix
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);
        navigator.getMedia({
            video: {
                width: 640,
                height: 480
            }
        }, function(stream) {
            self.webCamPermissions(stream); // Tiene webcam
        }, function() {
            self.unavalable = false; // No tiene webcam
            console.log('La camara no esta disponible o no tiene permisos')

            $scope.camera_error = 'La camara no esta disponible o no tiene permisos';
        });
    }

    self.webCamPermissions = stream => {
        self.canvas = document.querySelector('#canvas');
        self.context = self.canvas.getContext('2d');
        self.video = document.getElementById('camera_video');
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            self.video.srcObject = stream;
            self.video.play();
            self.unavalable = true;
        } else if (navigator.getUserMedia) { // Standard
            self.video.src = stream;
            self.video.play();
            self.unavalable = true;
        } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
            self.video.src = window.webkitURL.createObjectURL(stream);
            self.video.play();
            self.unavalable = true;
        } else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
            self.video.srcObject = stream;
            self.video.play();
            self.unavalable = true;
        }
    }

    $scope.getSnapshot = () => {
        if ($scope.view_camera == true && $scope.camera_error == '') {
            $scope.view_snapshot = '';

            self.context.drawImage(self.video, 0, 0, 640, 480);
            self.context.fillStyle = "rgba(255,255,255,1)";
            self.img = self.canvas.toDataURL("image/png"); //base 64
            //console.log(self.img)
            document.getElementById("Snapshot").setAttribute(
                'src', self.img
            );
        }
    }

    $scope.cameraOff = () => {
        if (self.unavalable) {
            $scope.view_camera = false;
            $scope.view_snapshot = 'invisible p-0';
            $scope.no_click = '';

            self.video.srcObject.getTracks()[0].stop()
        }
    }

    self.dataURLtoFile = (dataurl, filename) => {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }


});