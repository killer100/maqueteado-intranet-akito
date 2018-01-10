(function () {
    angular.module('app', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            var homeState = {
                name: 'home',
                url: '/',
                templateUrl: 'pages/home.html'
            }
            var documentosNotmativosState = {
                name: 'documentos-normativos',
                url: '/documentos-normativos',
                templateUrl: 'pages/documentos-normativos.html'
            }

            var areasState = {
                name: 'areas',
                url: '/areas',
                templateUrl: 'pages/areas.html'
            }

            var diversosState = {
                name: 'diversos',
                url: '/diversos',
                templateUrl: 'pages/diversos.html'
            }

            var comitesCajaState = {
                name: 'comites-cajas',
                url: '/comites-cajas',
                templateUrl: 'pages/comites-cajas.html'
            }

            var sistemasGestionState = {
                name: 'sistemas-gestion',
                url: '/sistemas-gestion',
                templateUrl: 'pages/sistemas-gestion.html'
            }

            $stateProvider.state(homeState);
            $stateProvider.state(documentosNotmativosState);
            $stateProvider.state(areasState);            
            $stateProvider.state(diversosState);
            $stateProvider.state(comitesCajaState);
            $stateProvider.state(sistemasGestionState);
            $urlRouterProvider.otherwise("/");
        });
})();