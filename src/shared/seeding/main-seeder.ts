import {
  BillingAccount,
  CatalogProduct,
  SalesProduct,
  ShippingProduct,
} from '../../entities';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { mockCatalogProducts } from '../../entities/catalog_products/mock';
import { mockSalesProducts } from '../../entities/sales_products/mock';
import { mockShippingProducts } from '../../entities/shipping_products/mock';
import { mockBillingAccounts } from '../../entities/billing_accounts/mock';

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
