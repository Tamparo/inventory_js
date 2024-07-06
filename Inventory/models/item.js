class Item {
    constructor(id, name, count, category, status){
        this.id = id;
        this.name = name;
        this.count = count;
        this.category = category;
        this.status = status;
        this.dateUpdated = new Date();
    }
    //set date updated
    Updated_date(){
        this.dateUpdated = new Date();
    }

    // update the quantity
    addCount(newCount){
        if(newQuantity <= 0){
            throw new Error ("Invalid Number");
        }
        this.quantity += newCount;
        this.Updated_date();
}
    removeCount(newCount){
        if(newCount <= 0){
            throw new Error ("Invalid Number: Count must be greater than zero");
        }
        if(newCount >= this.count){
            throw new Error ("Insufficient Quantity");
        }
        this.count -= newCount;
        this.Updated_date();
        }
}