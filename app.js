var app = angular.module('infiniteScroll', ['infinite-scroll'])

.factory('fetchServer', ['$http', function($http) {
  
 var items=[];
 var subreddit = "iwallpaper";
 busy=false;
 after ='';
 nextPage = function(cb){
  if (busy) return;
    busy = true;
     var url = "http://api.reddit.com/r/" + subreddit + "/hot?after=" + after + "&jsonp=JSON_CALLBACK";
     $http.jsonp(url).success(function(data) {
      var item = data.data.children;
      for (var i = 0; i < item.length; i++) {
		if((item[i].data.url.lastIndexOf("http://i.imgur", 0) === 0) || (item[i].data.url.lastIndexOf("https://i.imgur", 0) === 0) 
			|| (item[i].data.url.lastIndexOf("http://i.reddituploads.com", 0) === 0) 
			|| (item[i].data.url.lastIndexOf("https://i.reddituploads.com", 0) === 0)) {
				item[i].data.url = item[i].data.url.replace(/&amp;/g, '&');
				items.push(item[i].data);
			}
      }
      after = "t3_" + items[items.length - 1].id;
      busy = false;
      cb(items);
    });
};
return nextPage
}])

.controller('MainCtrl',['$scope','fetchServer',function($scope,fetchServer) {
  
  $scope.nextPage = function() {
    fetchServer(function(items){
      $scope.items=items;
    })
  };
  
}]);