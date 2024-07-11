class Item {
    constructor(id, name, count, category, status){
        this.id = id;
        this.name = name;
        this.count = count;
        this.category = category;
        this.status = status;
        this.dateCreated = new Date;
        this.dateUpdated = new Date();
    }
    //set date updated
    Updated_date(){
        this.dateUpdated = new Date();
    }

    // update the quantity
    addCount(newCount){
        this.count += newCount;
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
    itemDetail(){
        return {
            id: this.id,
            name: this.name,
            count: this.count,
            category: this.category,
            status: this.status,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated
        };
    }
    display() {
        return `
            Item Details:
            ID: ${this.id}
            Name: ${this.name}
            Count: ${this.count}
            Category: ${this.category}
            Status: ${this.status}
            Date Created: ${this.dateCreated.toLocaleString()}
            Date Updated: ${this.dateUpdated.toLocaleString()}
        `;
    }
}



module.exports = Item;