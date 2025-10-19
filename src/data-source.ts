import { DataSource, DataSourceOptions } from 'typeorm';
import { ilogDbConfig } from './config/database.config';


export const AppDataSource = new DataSource({
  ...ilogDbConfig as DataSourceOptions,
  entities: [__dirname + '/database/ilog/entities/entities/*{.ts,.js}'],
  migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
});