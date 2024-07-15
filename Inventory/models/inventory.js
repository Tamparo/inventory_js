/*const Item = require('./item');

class Inventory {
    constructor(){
        this.items = new Map();
    }

    add(item){
      if(this.items.has(item.id)){
        throw new Error("Item with id ${item.id} already exists");
    }
        if(!(item instanceof Item)){
            throw new Error("Invalid Item");
        }
        this.items.set(item.id, item);
    }
    //return item by its id
    getItem(id){
        return this.items.get(id);
    }

    //remove an item by its id
    removeItem(id){
        this.items.delete(id);
    }
    // update and an item count by its id

    addToCount(id, newCount){
        const item = this.getItem(id);
        if(item){
            item.addCount(newCount);
        }
        else{
            throw new Error("Item with id ${id} cannot be found");
        }
    }
    // remove in count by its id
    removeItemCount(id, number){
        if(getItem(id)){
            item.removeCount(number);
        }
        else{
            throw new Error("Item with id $id cannot be found");
        }
    }
    // display item

    /*displayItem(){
       console.log("Inventory");
       if(this.items.size == 0){
        console.log("Inventory is empty");
       }
       else{
        for(const item of this.items.values()){
            console.log(`ID: ${item.id}, Name: ${item.name}, Count: ${item.count}`);
    }
       }
    }


     displayItem(item) {
    const details = item.displayInfo();
    console.log('Item Details:');
    console.log(`ID: ${details.id}`);
    console.log(`Name: ${details.name}`);
    console.log(`Count: ${details.count}`);
    console.log(`Category: ${details.category}`);
    console.log(`Status: ${details.status}`);
    console.log(`Date Created: ${details.dateCreated}`);
    console.log(`Date Updated: ${details.dateUpdated}`);
  }
}



module.exports = Inventory;*/