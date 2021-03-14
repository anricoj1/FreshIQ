class Product {
    constructor(store_number, item_code, effective_date, expiration_date, price, price_zone) {
        this.store_number = store_number;
        this.item_code = item_code;
        this.effective_date = effective_date;
        this.expiration_date = expiration_date;
        this.price = price;
        this.price_zone = price_zone;
    }
}

export default Product;