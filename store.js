/** Item:
 * item name, item price, item quantity
 */
class item {
    //properties
    constructor (itemName, itemType, itemPrice, itemQuantity) {
        this.itemName = itemName;
        this.itemType = itemType;
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
            console.log(`Item added: ${itemIn.itemName}.`)
        }
        else {console.log("Invalid Item.")}
    }

    removeItem(itemOut) {
        if (itemOut in this.inventory) {
            delete this.inventory[itemOut]
            console.log(`Item removed: ${itemOut}.`)
        } else {
            console.log("There is no product of this name or brand to delete.")
        }
    }

    updateQuantity(itemName, quantityMod) {
        if(itemName in this.inventory) {
            console.log(`Old quantity: ${this.inventory[itemName].itemQuantity}`)
            this.inventory[itemName].itemQuantity += quantityMod
            console.log(`New quantity: ${this.inventory[itemName].itemQuantity}`)
        } else{
            console.log("There is no product of this name or brand to modify the quantity of.")
        }
    }

    updatePrice(itemName, newPrice) {
        if(itemName in this.inventory) {
            console.log(`Old price: £${this.inventory[itemName].itemPrice}`)
            this.inventory[itemName].itemPrice = newPrice
            console.log(`New price: £${this.inventory[itemName].itemPrice}`)
        }
    }
}


//Items
let JSCereal = new item("JSCereal", "Cereal", 3, 90)
let JSMilk = new item("JSMilk", "Milk", 1, 20)
let JMilk = new item("JMilk", "Milk", 1.5, 50)

//Stores
let Vsco = new store("Vsco")


//Items Testing
Vsco.addItem(JSCereal) //Add valid item 1
Vsco.removeItem("JSCereal") //Remove valid item 1
Vsco.addItem(JSMilk) //Add valid item 2
Vsco.addItem(JMilk) //Add valid item 3
let Henry = ("Henry", 6.5, 1) //Creation of non-item
Vsco.addItem(Henry) //Add invalid item 1
Vsco.updateQuantity("JSMilk", 50) //Add 50 JSMilk to Vsco Inventory
console.log(Vsco.inventory) //Check store inventory
Vsco.updatePrice("JMilk", 2.5) //Updated the price of JMilk