import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ilogDbConfig } from './config/database.config';
import { MssqlClientModule } from './config/mssql/mssql-client.module';
import { AppLoggerModule } from './common/logger/logger.module';




@Module({
  imports: [
    //Common imports
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(ilogDbConfig),
    MssqlClientModule,AppLoggerModule,

    //Feature Modules  
  ],
  providers: []
})
export class AppModule { }