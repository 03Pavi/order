import { BillingAccount } from '../../modules/billing/domain/billing-account/billing-account.entity';
import { mockBillingAccounts } from '../../modules/billing/domain/billing-account/mock';
import { SalesProduct } from '../../modules/sales/domain/sales_product/sales_product.entity';
import { mockSalesProducts } from '../../modules/sales/domain/sales_product/mock';
import { CatalogProduct } from '../../modules/shipping/domain/catalog_product/catalog_product.entity';
import { mockCatalogProducts } from '../../modules/shipping/domain/catalog_product/mock';
import { mockShippingProducts } from '../../modules/shipping/domain/shipping_product/mock';
import { ShippingProduct } from '../../modules/shipping/domain/shipping_product/shipping_product.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const billingAccountRepo = dataSource.getRepository(BillingAccount);
    const catalogProductRepo = dataSource.getRepository(CatalogProduct);
    const salesProductRepo = dataSource.getRepository(SalesProduct);
    const shippingProductRepo = dataSource.getRepository(ShippingProduct);

    await billingAccountRepo.save(mockBillingAccounts);
    await catalogProductRepo.save(mockCatalogProducts);
    await salesProductRepo.save(mockSalesProducts);
    await shippingProductRepo.save(mockShippingProducts);
    console.log("data seeded successfully");
  }
}
