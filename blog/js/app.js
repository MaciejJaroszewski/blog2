var app = angular.module('app', []);

app.controller('BlogCtrl', ['$scope', '$http', '$log', function($scope, $http, $log){
	

	$scope.blogEntries = [
	{
		tytul: "Przykładowy tytuł 1",
		wpis: "Przykładowa treść Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam molestias cum, modi consectetur temporibus. In aspernatur, deserunt minus assumenda qui cumque, ullam iure sint, tempore porro laudantium dicta nemo recusandae.",
		data_wpisu: "2016-04-20"
	},
	{
		tytul: "Przykładowy tytuł 2",
		wpis: "Przykładowa treść 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam molestias cum, modi consectetur temporibus. In aspernatur, deserunt minus assumenda qui cumque, ullam iure sint, tempore porro laudantium dicta nemo recusandae.",
		data_wpisu: "2016-04-22"
	},
	{
		tytul: "Przykładowy tytuł 3",
		wpis: "Przykładowa treść 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam molestias cum, modi consectetur temporibus. In aspernatur, deserunt minus assumenda qui cumque, ullam iure sint, tempore porro laudantium dicta nemo recusandae.",
		data_wpisu: "2016-04-25"
	}
	];

	$scope.insertData = function ($params) {


		$http.post("insert.php", {'tytul': $params.tytul, 'wpis': $params.wpis, 'data_wpisu': $params.data_wpisu})
			.success(function (data){
				$log.info(data);
			})
			.error (function(err){
				$log.error(data);
			});
			
		};
		

		// wyzerować formularz !
	

}]);