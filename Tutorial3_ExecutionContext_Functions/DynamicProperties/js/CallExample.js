/**
 * Created by viveksh2 on 3/7/15.
 */

var hero = {
        name: 'Rafaelo',
        sayName: function() {
            return this.name;
        }
    }

var bill= {
    name:"billy"


}


function createObjects(name, occupation){
    this.name = name;
    this.occupation= occupation;
}


var x =  createObjects("bill","SD");
var x1 = new createObjects("billy","SM");



