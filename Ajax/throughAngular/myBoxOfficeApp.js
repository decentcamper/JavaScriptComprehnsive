/**
 * Created by viveksh2 on 11/23/15.
 */
angular.module('myBoxOfficeApp', [])
    .controller('myBoxOfficeAppController', function ($scope,$http) {
        $http.get('https://api.themoviedb.org/3/discover/movie?api_key=8ba9de8b2a7f0c16b68b1c902d81da58&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22')
            .then(function(resp) {
                console.log('Success', resp);
                $scope.movies = resp.data.results;
                $scope.baseURL = 'http://image.tmdb.org/t/p/w500/';
                // For JSON responses, resp.data contains the result
            }, function(err) {
                console.error('ERR', err);
                // err.status will contain the status code
            })
});
