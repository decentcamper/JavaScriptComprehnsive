/**
 * Created with JetBrains WebStorm.
 * User: viveksh2
 * Date: 7/23/13
 * Time: 8:43 PM
 * To change this template use File | Settings | File Templates.
 */
var monkey = {
    hair: true,
    feeds: 'bananas',
    breathes: 'air'
};


function Human(name) {
    this.name = name;
}

Human.prototype = monkey;

var george = new Human('George');
monkey.isPrototypeOf(george)
