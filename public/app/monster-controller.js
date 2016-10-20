function MonsterController(){
    var ms= this;
    var monsterService= new MonsterService();

    function addNewMonster(monster){
        monsterService.addMonster(monster,function(res){
        return res
         })
    }
    function editThisMonster(index){
        monsterService.editMonster(index, function(res){
        return res
        })
    }

    function deleteThisMonster(index){
        monsterService.deleteMonster(index, function(res){
        return res
        })
    }

    // function editThisMonster(index, monster){}

    function drawMonsters(array){
        var monsterElem = $('#monster-cards')
        var myTemplate=''
        for (var i=0; i<array.length; i++){
            var nextM = array[i];
            
            
            myTemplate+=
            `
            
            <div class='col-sm-6 col-lg-4 monster-card card'>
                <img class= 'monster-pic card-img-top text-center' src='${nextM.url}' width="300" alt=''>
                <h3>${nextM.name}</h3>
                <h4>${nextM.age}</h4>
                <h4>${nextM.description}</h4>
                <h4>${nextM.type}</h4>
                <button class= 'btn btn-danger remove-monster' monsterindex="${i}"> KILL IT WITH FIRE </button>
                <button class= 'btn btn-danger edit-monster' monsterindex="${i}"> EDIT IT WITH FIRE </button>
            </div>`
        }
        monsterElem.empty()
        monsterElem.append(myTemplate);
    }

var Monster=function(name, age, description, sightings, url, type){
    this.name=name
    this.age=age
    this.description=description
    this.sightings=sightings
    this.url=url
    this.type=type
   
}

$('#submit').on('submit', function(e){
    e.preventDefault();
    var monster = new Monster(this.name.value, this.age.value, this.description.value, this.sightings.value, this.photoUrl.value, this.type.value)
    var newMonster ={monster}
    addNewMonster(newMonster)
    monsterService.getMonsters(drawMonsters)
})

$('#monster-cards').on('click', '.remove-monster', function(e){
    e.preventDefault()
    var identifier = $(this).attr('monsterindex')
    deleteThisMonster(identifier)
    monsterService.getMonsters(drawMonsters)
})
$('#monster-cards').on('click', '.edit-monster', function(e){
    e.preventDefault()
    var identifier = $(this).attr('monsterindex')
    console.log(identifier)
    editThisMonster(identifier)    

    monsterService.getMonsters(drawMonsters)
})
 
 
 
 
 
 
 
 monsterService.getMonsters(drawMonsters)

}
MonsterController();