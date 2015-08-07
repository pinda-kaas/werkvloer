var app =angular.module('WIP', ['ui.router','ngTable','ui.bootstrap','ngTableExport']);

app.config(function($stateProvider) {
    // Now set up the states

    $stateProvider
        .state('orders', {
            templateUrl: 'modules/common/orders/partials/tabs.html',
            controller: 'OrdersCtrl'
        });
});

app.run(function($state){
    $state.go('orders');
});

