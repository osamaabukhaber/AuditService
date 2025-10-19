import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('AuditLog')
export class AuditLog {
    @PrimaryGeneratedColumn('uuid')
    Id: string;

    @Index('IX_AuditLog_ByTenant')
    @Column()
    CentertId: number;

    @Column({ type: 'nvarchar', length: 255, nullable: true })
    CenterName: string;

    @Index('IX_AuditLog_ByUser')
    @Column({ type: 'nvarchar', length: 255, nullable: true })
    UserId: string;

    @Column({ type: 'nvarchar', length: 255, nullable: true })
    UserName: string;

    @Column({ type: 'datetimeoffset', default: () => 'SYSDATETIMEOFFSET()' })
    Timestamp: Date;

    @Column({ type: 'nvarchar', length: 100 })
    Action: string;

    @Column({ type: 'nvarchar', length: 20 })
    Status: string;

    @Index('IX_AuditLog_ByResource')
    @Column({ type: 'nvarchar', length: 100, nullable: true })
    ResourceType: string;

    @Column({ type: 'nvarchar', length: 255, nullable: true })
    ResourceId: string;

    @Column({ type: 'nvarchar', length: 500, nullable: true })
    ResourceTitle: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
    BeforeState: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
    AfterState: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
    Context: string;
}