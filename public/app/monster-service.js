function MonsterService(){
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://localhost:8080/monsters';
	var apiUrl = url + encodeURIComponent(url2);

	
	this.getMonster =  function(callWhenDone){
			$.get(apiUrl, function (res) {
			var monster = JSON.parse(res)
			callWhenDone(monster);

			})	
			
		}
	}

