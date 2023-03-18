class Inventory{

    open() {
        cy.visit('https://www.saucedemo.com/inventory.html')
    }
 
    get productsContainerSelector(){
        return "product_sort_container"
    }
    get inventoryItemsSelector(){
        return ".inventory_item"
    }
    get shoppingCartContainerSelector(){
        return "#shopping_cart_container"
    }

}
export default new Inventory()