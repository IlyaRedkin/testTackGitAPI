app.service('dataService',['$http',function($http){

	var users = {
		'list':[]
	};

	var user = {
		'repos':[]
	};

	var repository = {
		'contributors':[]
	};
	return {
		getUser:function(){
			return $http.get('https://api.github.com/users?per_page=50').then(function(response){
				users.list = response.data;
				return users;
			});
		},

		getRepositories:function(user){
			return $http.get(user.repos_url).then(function(response){
				user.repos = response.data;
				return user;
			});
		},

		getCollaborators:function(repository){
			return $http.get(repository.contributors_url).then(function(response){
				repository.contributors = response.data;
				return repository;
			});
		},
	}
}]);