const Item = require('./item');

const Items = new Item(111, 'testPC', 'TINYTEST', 20);
//console.log(Items.toString);
console.log(Items.into_response());