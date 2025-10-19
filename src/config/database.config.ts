import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export const ilogDbConfig: TypeOrmModuleOptions = {
    name: 'ilog',
    type: 'mssql',
    host: process.env.ILOG_DB_HOST,
    port: Number(process.env.ILOG_DB_PORT),
    username: process.env.ILOG_DB_USER,
    password: process.env.ILOG_DB_PASS,
    database: process.env.ILOG_DB_NAME,
    entities: [
           path.join(__dirname, '/../database/ilog/entities/entities/*{.ts,.js}'),
           path.join(__dirname, '/../database/ilog/entities/views/*{.ts,.js}')

    ],

    options: { encrypt: true },
    extra: { trustServerCertificate: true },
};

