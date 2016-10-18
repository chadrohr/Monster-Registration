let routes = require('express').Router();

let monsters = [
    {
"monster":{
	"name": "Dracula",
	"age": "15",
	"description": "blood sucker",
	"imageurl": "http://www.blastr.com/sites/blastr/files/DraculaLugosi.jpg",
	"type": "Vampire"
	}	
}
];

function addMonster(monster) {
    monsters.push(monster);
}
function removeMonster(index) {
    monsters.splice(index, 1);
}
function editMonster(index, newMonster) {
    if (index < monsters.length) {
        monsters[index] = newMonster
        return { message: 'Successfully editted' }
    }
    return { error: 'Out of bounds' }
}


    routes.route('/monsters/:index?')
    .get(function (req, res) {
        res.send(monsters);

    })
    .post(function (req, res) {
        addMonster(req.body.monster)
        res.send({ message: 'Successfully added to monsters' })
    })
    .put(function (req, res) {
        res.send(
            editMonster(req.params.index, req.body.monster)
        )
    })
    .delete(function (req, res) {
        removeMonster(req.params.index)
        res.send({ message: 'Successfully removed' })
    })
    module.exports = {
        routes
    }