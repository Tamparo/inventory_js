class Item {
    constructor(id, name, quantity, category, status){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.category = category;
        this.status = status;
        this.dateUpdated = new Date();
    }
    //set date updated
    Updated_date(){
        this.dateUpdated = new Date();
    }

    // update the quantity
    updateQuantity(newQuantity){
        if(newQuantity <= 0){
            throw new Error ("Invalid quantity");
        }
        this.quantity = newQuantity;
        this.Updated_date();
}
}