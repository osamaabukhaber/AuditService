import { Logger } from '@nestjs/common';
import * as sql from 'mssql';
import { ILOG_MSSQL_POOL } from './mssql-client.constants';

const logger = new Logger('NativeClientProviders');

async function createPoolFactory(config: sql.config, poolName: string): Promise<sql.ConnectionPool> {
    try {
        logger.log(`Initializing native mssql pool: [${poolName}]`);
        const pool = new sql.ConnectionPool(config);
        const connectedPool = await pool.connect();
        logger.log(` Native mssql pool ready: [${poolName}]`);
        return connectedPool;
    } catch (error) {
        logger.error(` Failed to initialize mssql pool: [${poolName}]`, error.stack);
        throw error;
    }
}

export const nativeClientProviders = [
    {
        provide: ILOG_MSSQL_POOL,
        useFactory: () => createPoolFactory({
            user: process.env.ILOG_DB_USER,
            password: process.env.ILOG_DB_PASS,
            server: process.env.ILOG_DB_HOST,
            database: process.env.ILOG_DB_NAME,
            port: Number(process.env.ILOG_DB_PORT),
            pool: { max: 15, min: 2 },
            options: { trustServerCertificate: true },
        }, 'ilog'),
    },
];