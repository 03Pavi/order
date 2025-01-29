import { CatalogProduct } from "../../modules/shipping/domain/catalog_product/catalog_product.entity";
import { setSeederFactory } from "typeorm-extension";


// faker is use to create fake values
export const ProductFactory= setSeederFactory(CatalogProduct, (faker) => {
    const product = new CatalogProduct();
    product.description = faker.word.words(10);
    product.name = faker.commerce.productName();
    product.product_url = faker.internet.url();
    return product;
});