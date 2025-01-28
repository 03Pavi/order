import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { BillingAccountFactory } from './billing-account.factory';
import { ProductFactory } from './product.factory';
import { MainSeeder } from './main-seeder';
import dbConfig from '../database/db-config';

const options: DataSourceOptions & SeederOptions = {
  ...dbConfig(),
  factories: [BillingAccountFactory, ProductFactory],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);
dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
})