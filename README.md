# AuditService

## Structure:

```
├── src
│   ├── common
│   │   ├── decorators
│   │   │   └── response-message.decorator.ts
│   │   ├── dto
│   │   │   └── pagination.dto.ts
│   │   ├── guards
│   │   │   ├── center-access.guard.ts
│   │   │   └── internal-api-key.guard.ts
│   │   ├── interfaces
│   │   │   └── paginated-response.interface.ts
│   │   ├── logger
│   │   │   └── logger.module.ts
│   │   ├── middleware
│   │   │   └── correlation-id.middleware.ts
│   │   └── utils
│   ├── config
│   │   ├── file system
│   │   │   ├── file.config.ts
│   │   │   └── upload.config.json
│   │   ├── mssql
│   │   │   ├── mssql-client.constants.ts
│   │   │   ├── mssql-client.module.ts
│   │   │   └── mssql-client.providers.ts
│   │   └── database.config.ts
│   ├── database
│   │   ├── ilog
│   │   │   └── entities
│   │   │       └── entities
│   │   │           └── AuditLog.entity.ts
│   │   └── migrations
│   ├── modules
│   │   └── audit-log
│   │       ├── dto
│   │       ├── audit-log-payload.ts
│   │       ├── audit-log.controller.ts
│   │       ├── audit-log.module.ts
│   │       └── audit-log.service.ts
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── data-source.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .gitignore
├── .prettierrc
├── README.md
├── docker-compose.yml
├── eslint.config.mjs
├── nest-cli.json
├── package-lock.json
├── package.json
└── tsconfig.json
```


