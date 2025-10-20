import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AuditLogService } from './audit-log.service';
import { AuditLogPayload } from './audit-log-payload';

@Controller()
export class AuditLogController {
  private readonly logger = new Logger(AuditLogController.name);

  constructor(private readonly auditLogService: AuditLogService) { }

  // 1. Listen for the new SUCCESS event name
  @EventPattern('audit.poll_created.success')
  async handlePollCreatedEvent(@Payload() payload: AuditLogPayload) {
    const correlationId = payload.context?.correlationId || 'no-correlation-id';

    this.logger.log(
      { correlationId },
      `Received event: audit.poll_created.success`,
    );
    await this.auditLogService.writeLog(payload, correlationId);
  }

  // 2. Listen for the new FAILURE event name
  @EventPattern('audit.poll_created.failed')
  async handlePollCreateFailedEvent(@Payload() payload: AuditLogPayload) {
    const correlationId = payload.context?.correlationId || 'no-correlation-id';

    this.logger.log(
      { correlationId },
      `Received event: audit.poll_created.failed`,
    );
    await this.auditLogService.writeLog(payload, correlationId);
  }
}