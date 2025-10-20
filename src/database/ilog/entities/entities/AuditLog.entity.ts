import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('AuditLog')
export class AuditLog {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Index('IX_AuditLog_ByTenant')
    @Column()
    centerId: number;

    @Column({ type: 'nvarchar', length: 255, nullable: true })
    centerName: string;

    @Index('IX_AuditLog_ByUser')
    @Column({ type: 'nvarchar', length: 255, nullable: true })
    userId: string;

    @Column({ type: 'nvarchar', length: 255, nullable: true })
    userName: string;

    @Column({ type: 'datetimeoffset', default: () => 'SYSDATETIMEOFFSET()' })
    timestamp: Date;

    @Column({ type: 'nvarchar', length: 100 })
    action: string;

    @Column({ type: 'nvarchar', length: 20 })
    status: string;

    @Index('IX_AuditLog_ByResource')
    @Column({ type: 'nvarchar', length: 100, nullable: true })
    resourceType: string;

    @Column({ type: 'nvarchar', length: 255, nullable: true })
    resourceId: string;

    @Column({ type: 'nvarchar', length: 500, nullable: true })
    resourceTitle: string;

    @Column({ type: 'nvarchar', length: 500, nullable: true })
    beforeState: string;

    @Column({ type: 'nvarchar', length: 500, nullable: true })
    afterState: string;

    @Column({ type: 'nvarchar', length: 500, nullable: true })
    context: string;
}