class item {
    //properties
    constructor (itemName, itemPrice, itemQuantity) {
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemQuantity = itemQuantity;
    }
}


class store {
    //Properties
    constructor (storeName) {
        this.storeName = storeName;
        this.inventory = {};
    }

    //Methods
    addItem(itemIn) {
        if (itemIn instanceof item == true) {
            
            this.inventory[itemIn.itemName] = itemIn
            console.log (this.inventory)
            // console.log(`New item added to Inventory: ${this.inventory}.`)
        }
        else {console.log("Invalid Item.")}
    }

    removeItem(itemOut) {
        for (i=0; i < this.inventory.itemName.length; i++) {
            if (itemOut == item.itemName[i]) {

            }
        }
    }
}





let Cereal = new item("JSCereal", 3, 90)
let Milk = new item("JSMilk", 1, 20)

let Tesco = new store("Tesco")

Tesco.addItem(Cereal)
Tesco.addItem(Milk)

