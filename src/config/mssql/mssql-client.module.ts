import { Module, Inject, OnModuleDestroy, Logger, Global } from '@nestjs/common';
import * as sql from 'mssql';
import { nativeClientProviders } from './mssql-client.providers';
import { ILOG_MSSQL_POOL } from './mssql-client.constants';

@Global() 
@Module({
    providers: [...nativeClientProviders],
    exports: [...nativeClientProviders],
})
export class MssqlClientModule implements OnModuleDestroy {
    private readonly logger = new Logger(MssqlClientModule.name);

    constructor(
        @Inject(ILOG_MSSQL_POOL) private readonly ilogPool: sql.ConnectionPool,
    ) {}

    async onModuleDestroy() {
        if (this.ilogPool) await this.ilogPool.close();
        this.logger.log('Native mssql pools closed.');
    }
}