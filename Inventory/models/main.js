const Item = require('./item');
const Inventory = require('./inventory');



const bin = new Inventory();


const item1 = new Item(2222, 'Beaglebone', 3, 'PC', true);
console.log(item1.display());
item1.addCount(25);
console.log(item1.display());
//item1.display();
//bin.add(item1);
//bin.addToCount(2222, 60);
//bin.displayItem(item1);