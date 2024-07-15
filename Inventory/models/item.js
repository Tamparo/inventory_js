class Item{
    constructor(id, name, description, count) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.count = count;
        this.dateCreated = new Date;
        this.dateUpdated = new Date;
    }
    toString() {
        return `
        ID: ${this.id}
        Name: ${this.name}
        Description: ${this.description}
        Count: ${this.count}
        Date Created: ${this.dateCreated.toLocaleDateString()}
        Date Updated: ${this.dateUpdated.toLocaleDateString()}`
    }
    into_response(){
        return {
            statusCode: 200,
            body: JSON.stringify(this),
        };
    }
}

module.exports = Item;