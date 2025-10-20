import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { AuditLog } from 'src/database/ilog/entities/entities/AuditLog.entity';
import { AuditLogPayload } from './audit-log-payload';

@Injectable()
export class AuditLogService {
  private readonly logger = new Logger(AuditLogService.name);

  constructor(
    @InjectRepository(AuditLog, 'ilog')
    private readonly auditLogRepository: Repository<AuditLog>,
  ) { }

  async writeLog(payload: AuditLogPayload , correlationId:string): Promise<void> {
    try {
      const logEntry = this.auditLogRepository.create(<DeepPartial<AuditLog>>{
        centerId: payload.centerId,
        centerName: payload.centerName,
        userId: String(payload.userId),
        userName: payload.userName,
        action: payload.action,
        status: payload.status,
        resourceType: payload.resourceType,
        resourceId: payload.resourceId,
        resourceTitle: payload.resourceTitle,
        beforeState: payload.beforeState ? JSON.stringify(payload.beforeState) : null,
        afterState: payload.afterState ? JSON.stringify(payload.afterState) : null,
        context: payload.context ? JSON.stringify(payload.context) : null,
      });

      await this.auditLogRepository.save(logEntry);
      this.logger.log({ correlationId },`Logged action to DB: ${payload.action}`,);

    } catch (error) {
      this.logger.error({ correlationId, err: error },`Failed to write audit log: ${error.message}`,);
    }
  }
}