angular.module("MyAppModule", [ 'ngResource', 'ui.bootstrap' ]);

function MatchesListCtrl($scope, $modal, $resource, $http) {

	$scope.matchDays = [];

	$scope.init = function() {

		$scope.matchDays = [
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":1,"title":"Matchday 1","start_at":"2014/06/12","end_at":"2014/06/12"},"games":[{"rtp":"rtp","team1_key":"bra","team1_title":"Brazil","team1_code":"BRA","team2_key":"cro","team2_title":"Croatia","team2_code":"CRO","play_at":"2014/06/12","hour":"21:00","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},

			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":2,"title":"Matchday 2","start_at":"2014/06/13","end_at":"2014/06/13"},"games":[{"team1_key":"mex","team1_title":"Mexico","team1_code":"MEX","team2_key":"cmr","team2_title":"Cameroon","team2_code":"CMR","play_at":"2014/06/13","hour":"17:00","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"rtp":"rtp","team1_key":"esp","team1_title":"Spain","team1_code":"ESP","team2_key":"ned","team2_title":"Netherlands","team2_code":"NED","play_at":"2014/06/13","hour":"20:00","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"rtp":"rtp","team1_key":"chi","team1_title":"Chile","team1_code":"CHI","team2_key":"aus","team2_title":"Australia","team2_code":"AUS","play_at":"2014/06/13","hour":"23:00","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":3,"title":"Matchday 3","start_at":"2014/06/14","end_at":"2014/06/14"},"games":[{"team1_key":"col","team1_title":"Colombia","team1_code":"COL","team2_key":"gre","team2_title":"Greece","team2_code":"GRE","play_at":"2014/06/14","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"rtp":"rtp","team1_key":"uru","team1_title":"Uruguay","team1_code":"URU","team2_key":"crc","team2_title":"Costa Rica","team2_code":"CRC","play_at":"2014/06/14","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"rtp":"rtp","team1_key":"eng","team1_title":"England","team1_code":"ENG","team2_key":"ita","team2_title":"Italy","team2_code":"ITA","play_at":"2014/06/14","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"team1_key":"civ","team1_title":"C\u00f4te d'Ivoire","team1_code":"CIV","team2_key":"jpn","team2_title":"Japan","team2_code":"JPN","play_at":"2014/06/14","hour":"02:00","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":4,"title":"Matchday 4","start_at":"2014/06/15","end_at":"2014/06/15"},"games":[{"rtp":"rtp","team1_key":"sui","team1_title":"Switzerland","team1_code":"SUI","team2_key":"ecu","team2_title":"Ecuador","team2_code":"ECU","play_at":"2014/06/15","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"team1_key":"fra","team1_title":"France","team1_code":"FRA","team2_key":"hon","team2_title":"Honduras","team2_code":"HON","play_at":"2014/06/15","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"rtp":"rtp","team1_key":"arg","team1_title":"Argentina","team1_code":"ARG","team2_key":"bih","team2_title":"Bosnia-Herzegovina","team2_code":"BIH","play_at":"2014/06/15","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":5,"title":"Matchday 5","start_at":"2014/06/16","end_at":"2014/06/16"},"games":[{"team1_key":"irn","team1_title":"Iran","team1_code":"IRN","team2_key":"nga","team2_title":"Nigeria","team2_code":"NGA","play_at":"2014/06/16","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"rtp":"rtp","team1_key":"ger","team1_title":"Germany","team1_code":"GER","team2_key":"por","team2_title":"Portugal","team2_code":"POR","play_at":"2014/06/16","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"team1_key":"gha","team1_title":"Ghana","team1_code":"GHA","team2_key":"usa","team2_title":"United States","team2_code":"USA","play_at":"2014/06/16","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":6,"title":"Matchday 6","start_at":"2014/06/17","end_at":"2014/06/17"},"games":[{"team1_key":"bel","team1_title":"Belgium","team1_code":"BEL","team2_key":"alg","team2_title":"Algeria","team2_code":"ALG","play_at":"2014/06/17","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"team1_key":"rus","team1_title":"Russia","team1_code":"RUS","team2_key":"kor","team2_title":"South Korea","team2_code":"KOR","play_at":"2014/06/17","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"rtp":"rtp","team1_key":"bra","team1_title":"Brazil","team1_code":"BRA","team2_key":"mex","team2_title":"Mexico","team2_code":"MEX","play_at":"2014/06/17","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":7,"title":"Matchday 7","start_at":"2014/06/18","end_at":"2014/06/18"},"games":[{"team1_key":"cmr","team1_title":"Cameroon","team1_code":"CMR","team2_key":"cro","team2_title":"Croatia","team2_code":"CRO","play_at":"2014/06/18","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"rtp":"rtp","team1_key":"esp","team1_title":"Spain","team1_code":"ESP","team2_key":"chi","team2_title":"Chile","team2_code":"CHI","play_at":"2014/06/18","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"team1_key":"aus","team1_title":"Australia","team1_code":"AUS","team2_key":"ned","team2_title":"Netherlands","team2_code":"NED","play_at":"2014/06/18","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":8,"title":"Matchday 8","start_at":"2014/06/19","end_at":"2014/06/19"},"games":[{"rtp":"rtp","team1_key":"col","team1_title":"Colombia","team1_code":"COL","team2_key":"civ","team2_title":"C\u00f4te d'Ivoire","team2_code":"CIV","play_at":"2014/06/19","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"rtp":"rtp","team1_key":"jpn","team1_title":"Japan","team1_code":"JPN","team2_key":"gre","team2_title":"Greece","team2_code":"GRE","play_at":"2014/06/19","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"team1_key":"uru","team1_title":"Uruguay","team1_code":"URU","team2_key":"eng","team2_title":"England","team2_code":"ENG","play_at":"2014/06/19","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":9,"title":"Matchday 9","start_at":"2014/06/20","end_at":"2014/06/20"},"games":[{"rtp":"rtp","team1_key":"ita","team1_title":"Italy","team1_code":"ITA","team2_key":"crc","team2_title":"Costa Rica","team2_code":"CRC","play_at":"2014/06/20","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"team1_key":"sui","team1_title":"Switzerland","team1_code":"SUI","team2_key":"fra","team2_title":"France","team2_code":"FRA","play_at":"2014/06/20","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"rtp":"rtp","team1_key":"hon","team1_title":"Honduras","team1_code":"HON","team2_key":"ecu","team2_title":"Ecuador","team2_code":"ECU","play_at":"2014/06/20","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":10,"title":"Matchday 10","start_at":"2014/06/21","end_at":"2014/06/21"},"games":[{"team1_key":"arg","team1_title":"Argentina","team1_code":"ARG","team2_key":"irn","team2_title":"Iran","team2_code":"IRN","play_at":"2014/06/21","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"team1_key":"nga","team1_title":"Nigeria","team1_code":"NGA","team2_key":"bih","team2_title":"Bosnia-Herzegovina","team2_code":"BIH","play_at":"2014/06/21","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"rtp":"rtp","team1_key":"ger","team1_title":"Germany","team1_code":"GER","team2_key":"gha","team2_title":"Ghana","team2_code":"GHA","play_at":"2014/06/21","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":11,"title":"Matchday 11","start_at":"2014/06/22","end_at":"2014/06/22"},"games":[{"rtp":"rtp","team1_key":"usa","team1_title":"United States","team1_code":"USA","team2_key":"por","team2_title":"Portugal","team2_code":"POR","play_at":"2014/06/22","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"team1_key":"bel","team1_title":"Belgium","team1_code":"BEL","team2_key":"rus","team2_title":"Russia","team2_code":"RUS","play_at":"2014/06/22","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"team1_key":"kor","team1_title":"South Korea","team1_code":"KOR","team2_key":"alg","team2_title":"Algeria","team2_code":"ALG","play_at":"2014/06/22","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":12,"title":"Matchday 12","start_at":"2014/06/23","end_at":"2014/06/23"},"games":[{"team1_key":"cmr","team1_title":"Cameroon","team1_code":"CMR","team2_key":"bra","team2_title":"Brazil","team2_code":"BRA","play_at":"2014/06/23","hour":"21:00","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"21:00","team1_key":"cro","team1_title":"Croatia","team1_code":"CRO","team2_key":"mex","team2_title":"Mexico","team2_code":"MEX","play_at":"2014/06/23","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"17:00","team1_key":"aus","team1_title":"Australia","team1_code":"AUS","team2_key":"esp","team2_title":"Spain","team2_code":"ESP","play_at":"2014/06/23","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"17:00","team1_key":"ned","team1_title":"Netherlands","team1_code":"NED","team2_key":"chi","team2_title":"Chile","team2_code":"CHI","play_at":"2014/06/23","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":13,"title":"Matchday 13","start_at":"2014/06/24","end_at":"2014/06/24"},"games":[{"hour":"21:00","team1_key":"jpn","team1_title":"Japan","team1_code":"JPN","team2_key":"col","team2_title":"Colombia","team2_code":"COL","play_at":"2014/06/24","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"21:00","team1_key":"civ","team1_title":"C\u00f4te d'Ivoire","team1_code":"CIV","team2_key":"gre","team2_title":"Greece","team2_code":"GRE","play_at":"2014/06/24","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"17:00","team1_key":"ita","team1_title":"Italy","team1_code":"ITA","team2_key":"uru","team2_title":"Uruguay","team2_code":"URU","play_at":"2014/06/24","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"17:00","team1_key":"crc","team1_title":"Costa Rica","team1_code":"CRC","team2_key":"eng","team2_title":"England","team2_code":"ENG","play_at":"2014/06/24","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":14,"title":"Matchday 14","start_at":"2014/06/25","end_at":"2014/06/25"},"games":[{"hour":"21:00","team1_key":"hon","team1_title":"Honduras","team1_code":"HON","team2_key":"sui","team2_title":"Switzerland","team2_code":"SUI","play_at":"2014/06/25","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"21:00","team1_key":"ecu","team1_title":"Ecuador","team1_code":"ECU","team2_key":"fra","team2_title":"France","team2_code":"FRA","play_at":"2014/06/25","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"17:00","team1_key":"nga","team1_title":"Nigeria","team1_code":"NGA","team2_key":"arg","team2_title":"Argentina","team2_code":"ARG","play_at":"2014/06/25","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"17:00","team1_key":"bih","team1_title":"Bosnia-Herzegovina","team1_code":"BIH","team2_key":"irn","team2_title":"Iran","team2_code":"IRN","play_at":"2014/06/25","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]},
			
			{"event":{"key":"world.2014","title":"World Cup 2014"},"round":{"pos":15,"title":"Matchday 15","start_at":"2014/06/26","end_at":"2014/06/26"},"games":[{"hour":"17:00","team1_key":"usa","team1_title":"United States","team1_code":"USA","team2_key":"ger","team2_title":"Germany","team2_code":"GER","play_at":"2014/06/26","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"17:00","team1_key":"por","team1_title":"Portugal","team1_code":"POR","team2_key":"gha","team2_title":"Ghana","team2_code":"GHA","play_at":"2014/06/26","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"21:00","team1_key":"kor","team1_title":"South Korea","team1_code":"KOR","team2_key":"bel","team2_title":"Belgium","team2_code":"BEL","play_at":"2014/06/26","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null},{"hour":"21:00","team1_key":"alg","team1_title":"Algeria","team1_code":"ALG","team2_key":"rus","team2_title":"Russia","team2_code":"RUS","play_at":"2014/06/26","score1":null,"score2":null,"score1ot":null,"score2ot":null,"score1p":null,"score2p":null}]}
		];
		
		for(var i = 0; i < $scope.matchDays.length; i++) {
			var games = $scope.matchDays[i].games;
			for(var j = 0; j < games.length; j++) {
				console.log(games[j].hour);
				if(angular.isUndefined(games[j].hour) || games[j].hour === null){
					if(j === 0) {
						games[j].hour = "17:00";
					}
					else if(j === 1){
						games[j].hour = "20:00";
					}
					else {
						games[j].hour = "23:00";
					}
				}
			}
		}
	}
	
	$scope.init();
	
	$scope.fetchMatch = function(matchDayNumber) {
		$http({
				method : 'jsonp',
				url : 'http://footballdb.herokuapp.com/api/v1/event/world.2014/round/'+matchDayNumber,
				params : {
					callback : 'JSON_CALLBACK'
				}
			}).success(function(data, status, headers, config) {
				$scope.matchDays.push(data);
			}).error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				alert(status);
				return null;
			});
	}

}

angular.module("MyAppModule", [ 'ngResource', 'ui.bootstrap' ]).filter('dateFilter', function () {
    return function (items, startAt) {
        var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		var todaysFullDate = yyyy+"/"+mm+"/"+dd;
        var newItems = [];
		var dt1 = todaysFullDate.split('/'), one = new Date(dt1[0], dt1[1], dt1[2]);
        for (var i = 0; i < items.length; i++) {
			var dt2 = items[i].round.start_at.split('/'), two = new Date(dt2[0], dt2[1], dt2[2]);
			var millisBetween = two.getTime() - one.getTime();

            if (millisBetween >= 0) {
                newItems.push(items[i]);
            }
        };

        return newItems;
    }
});