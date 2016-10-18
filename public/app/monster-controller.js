(function(){
	
	
		var monster = new MonsterService()

		monster.getMonster(drawMonster)
	
	 function drawMonster(data){
        monsterElem = $('#monster');
    
        var template = `<h3>${monsters.monster}</h3>
						<p>${monster.stuff}</p>`
        monsterElem.append(template)
		
		
    }		
		

		
	

	
}())
