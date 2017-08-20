var app = angular.module("myApp", []);
app.controller('gitApi', ['$scope','dataService', function($scope,dataService) {
	
	dataService.getUser().then(function(users){
		$scope.usersList = users.list;
	})

	$scope.selectedUser = false;
	
	$scope.setSelectedUser = function(user){
		$scope.selectedUser = user.login;
		$scope.selectedRepository = false;

		dataService.getRepositories(user).then(function(user){
			$scope.userRepositories = user.repos;
		})
	}

	$scope.setSelectedRepository = function(repository){
		$scope.selectedRepository = repository.name;

		dataService.getCollaborators(repository).then(function(repository){
			$scope.userContributors = repository.contributors;
		})
	}
	
}]);