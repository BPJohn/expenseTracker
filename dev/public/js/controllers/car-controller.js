(function(app) {
	app.controller('CarController', ['$scope',function($scope) {
$scope.message = "Car Setup Utility";

$scope.carSetup = [{make:'Nissan'},{model:'Altima'},{year:'2013'},{startmil:"45361"},{serviceDate:Date()}];

$scope.CarForm = function(){

	$scope.carSetup.push({make:$scope.CarMake},{model:$scope.CarModel},{year:$scope.CarYear},{startmil:$scope.StartMilage},{serviceDate:$scope.InServiceDate});

}



	}]);
})(expenseTracker);
