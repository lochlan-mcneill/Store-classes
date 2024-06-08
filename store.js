/** Item:
 * item name,
 * item price,
 * item quantity
 */
class item {
    //properties
    constructor (itemName, itemBrand, itemPrice, itemQuantity) {
        this.itemName = itemName;
        this.itemBrand = itemBrand;
        this.itemPrice = itemPrice;
        this.itemQuantity = itemQuantity;
    }
}

/** Store:
 * store name
 */
class store {
    //Properties
    constructor (storeName) {
        this.storeName = storeName;
        this.inventory = {};
    }

    //Methods
    addItem(itemIn) {
        if (itemIn instanceof item) {
            
            this.inventory[itemIn.itemName] = itemIn
            console.log(`New item added to Inventory: ${this.inventory}.`)
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


//Items
let Cereal = new item("Cereal", "JSCereal", 3, 90)
let Milk = new item("Milk", "JSMilk", 1, 20)

//Stores
let Tesco = new store("Tesco")

//Items added to Stores
Tesco.addItem(Cereal)
Tesco.addItem(Milk)