
export class AuditLogPayload {
  centerId: number;
  centerName: string;
  userId: string;
  userName: string;
  action: string;
  status: 'SUCCESS' | 'FAILURE';
  resourceType: string;
  resourceId: string;
  resourceTitle: string;
  beforeState?: any;
  afterState?: any;
  context?: any;
}
