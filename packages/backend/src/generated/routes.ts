/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
    Controller,
    fetchMiddlewares,
    FieldErrors,
    HttpStatusCodeLiteral,
    TsoaResponse,
    TsoaRoute,
    ValidateError,
    ValidationService,
} from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CsvController } from './../controllers/csvController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DbtCloudIntegrationController } from './../controllers/dbtCloudIntegrationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { GroupsController } from './../controllers/groupsController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OrganizationController } from './../controllers/organizationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PinningController } from './../controllers/pinningController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ProjectController } from './../controllers/projectController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { RunViewChartQueryController } from './../controllers/runQueryController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SavedChartController } from './../controllers/savedChartController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SchedulerController } from './../controllers/schedulerController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ShareController } from './../controllers/shareController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SlackController } from './../controllers/slackController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SpaceController } from './../controllers/spaceController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SshController } from './../controllers/sshController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserAttributesController } from './../controllers/userAttributesController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../controllers/userController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { RequestHandler } from 'express';
import * as express from 'express';
import { ValidationController } from './../controllers/validationController';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    ApiErrorPayload: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                error: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        data: { dataType: 'any' },
                        message: { dataType: 'string' },
                        name: { dataType: 'string', required: true },
                        statusCode: { dataType: 'double', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['error'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCsvUrlResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        status: { dataType: 'string', required: true },
                        url: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateDbtCloudIntegration.metricsJobId_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                metricsJobId: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtCloudIntegration: {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreateDbtCloudIntegration.metricsJobId_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiDbtCloudIntegrationSettings: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'union',
                    subSchemas: [
                        { ref: 'DbtCloudIntegration' },
                        { dataType: 'undefined' },
                    ],
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiDbtCloudSettingsDeleteSuccess: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { dataType: 'undefined', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtCloudMetric: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                label: { dataType: 'string', required: true },
                timeGrains: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                description: { dataType: 'string', required: true },
                dimensions: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                name: { dataType: 'string', required: true },
                uniqueId: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtCloudMetadataResponseMetrics: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                metrics: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'DbtCloudMetric' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiDbtCloudMetrics: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    ref: 'DbtCloudMetadataResponseMetrics',
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Group: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                organizationUuid: { dataType: 'string', required: true },
                createdAt: { dataType: 'datetime', required: true },
                name: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGroupResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Group', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSuccessEmpty: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { dataType: 'undefined', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    GroupMember: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                lastName: { dataType: 'string', required: true },
                firstName: { dataType: 'string', required: true },
                email: { dataType: 'string', required: true },
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGroupMembersResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'GroupMember' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Group.name_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: { name: { dataType: 'string', required: true } },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateGroup: {
        dataType: 'refAlias',
        type: { ref: 'Pick_Group.name_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Organization: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                defaultProjectUuid: { dataType: 'string' },
                needsProject: { dataType: 'boolean' },
                chartColors: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                },
                name: { dataType: 'string', required: true },
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiOrganization: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Organization', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Organization.name_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: { name: { dataType: 'string', required: true } },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateOrganization: {
        dataType: 'refAlias',
        type: { ref: 'Pick_Organization.name_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Partial_Omit_Organization.organizationUuid-or-needsProject__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string' },
                chartColors: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                },
                defaultProjectUuid: { dataType: 'string' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateOrganization: {
        dataType: 'refAlias',
        type: {
            ref: 'Partial_Omit_Organization.organizationUuid-or-needsProject__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ProjectType: {
        dataType: 'refEnum',
        enums: ['DEFAULT', 'PREVIEW'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    OrganizationProject: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                type: { ref: 'ProjectType', required: true },
                name: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiOrganizationProjects: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'OrganizationProject' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    OrganizationMemberRole: {
        dataType: 'refEnum',
        enums: [
            'member',
            'viewer',
            'interactive_viewer',
            'editor',
            'developer',
            'admin',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    OrganizationMemberProfile: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                isInviteExpired: { dataType: 'boolean' },
                isActive: { dataType: 'boolean', required: true },
                role: { ref: 'OrganizationMemberRole', required: true },
                organizationUuid: { dataType: 'string', required: true },
                email: { dataType: 'string', required: true },
                lastName: { dataType: 'string', required: true },
                firstName: { dataType: 'string', required: true },
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiOrganizationMemberProfiles: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'OrganizationMemberProfile',
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiOrganizationMemberProfile: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'OrganizationMemberProfile', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UUID: {
        dataType: 'refAlias',
        type: {
            dataType: 'string',
            validators: {
                pattern: {
                    value: '[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}',
                },
            },
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    OrganizationMemberProfileUpdate: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                role: { ref: 'OrganizationMemberRole', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'OrganizationMemberRole.EDITOR': {
        dataType: 'refEnum',
        enums: ['editor'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'OrganizationMemberRole.INTERACTIVE_VIEWER': {
        dataType: 'refEnum',
        enums: ['interactive_viewer'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'OrganizationMemberRole.VIEWER': {
        dataType: 'refEnum',
        enums: ['viewer'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'OrganizationMemberRole.MEMBER': {
        dataType: 'refEnum',
        enums: ['member'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AllowedEmailDomainsRole: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'OrganizationMemberRole.EDITOR' },
                { ref: 'OrganizationMemberRole.INTERACTIVE_VIEWER' },
                { ref: 'OrganizationMemberRole.VIEWER' },
                { ref: 'OrganizationMemberRole.MEMBER' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ProjectMemberRole.EDITOR': {
        dataType: 'refEnum',
        enums: ['editor'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ProjectMemberRole.INTERACTIVE_VIEWER': {
        dataType: 'refEnum',
        enums: ['interactive_viewer'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ProjectMemberRole.VIEWER': {
        dataType: 'refEnum',
        enums: ['viewer'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AllowedEmailDomainProjectsRole: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'ProjectMemberRole.EDITOR' },
                { ref: 'ProjectMemberRole.INTERACTIVE_VIEWER' },
                { ref: 'ProjectMemberRole.VIEWER' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AllowedEmailDomains: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                projects: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            role: {
                                ref: 'AllowedEmailDomainProjectsRole',
                                required: true,
                            },
                            projectUuid: { dataType: 'string', required: true },
                        },
                    },
                    required: true,
                },
                role: { ref: 'AllowedEmailDomainsRole', required: true },
                emailDomains: {
                    dataType: 'array',
                    array: { dataType: 'string' },
                    required: true,
                },
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiOrganizationAllowedEmailDomains: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'AllowedEmailDomains', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_AllowedEmailDomains.Exclude_keyofAllowedEmailDomains.organizationUuid__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    emailDomains: {
                        dataType: 'array',
                        array: { dataType: 'string' },
                        required: true,
                    },
                    role: { ref: 'AllowedEmailDomainsRole', required: true },
                    projects: {
                        dataType: 'array',
                        array: {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                role: {
                                    ref: 'AllowedEmailDomainProjectsRole',
                                    required: true,
                                },
                                projectUuid: {
                                    dataType: 'string',
                                    required: true,
                                },
                            },
                        },
                        required: true,
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_AllowedEmailDomains.organizationUuid_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_AllowedEmailDomains.Exclude_keyofAllowedEmailDomains.organizationUuid__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateAllowedEmailDomains: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_AllowedEmailDomains.organizationUuid_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateGroup.name_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: { name: { dataType: 'string', required: true } },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGroupListResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'Group' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ResourceViewItemType.DASHBOARD': {
        dataType: 'refEnum',
        enums: ['dashboard'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdatedByUser: {
        dataType: 'refObject',
        properties: {
            userUuid: { dataType: 'string', required: true },
            firstName: { dataType: 'string', required: true },
            lastName: { dataType: 'string', required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ValidationResponse.error-or-createdAt-or-validationId_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                validationId: { dataType: 'double', required: true },
                createdAt: { dataType: 'datetime', required: true },
                error: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationSummary: {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_ValidationResponse.error-or-createdAt-or-validationId_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_DashboardBasicDetails.uuid-or-spaceUuid-or-description-or-name-or-views-or-firstViewedAt-or-pinnedListUuid-or-pinnedListOrder-or-updatedAt-or-updatedByUser-or-validationErrors_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    description: { dataType: 'string' },
                    updatedAt: { dataType: 'datetime', required: true },
                    updatedByUser: { ref: 'UpdatedByUser' },
                    spaceUuid: { dataType: 'string', required: true },
                    views: { dataType: 'double', required: true },
                    firstViewedAt: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'datetime' },
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListOrder: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    validationErrors: {
                        dataType: 'array',
                        array: {
                            dataType: 'refAlias',
                            ref: 'ValidationSummary',
                        },
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ResourceViewDashboardItem: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                data: {
                    ref: 'Pick_DashboardBasicDetails.uuid-or-spaceUuid-or-description-or-name-or-views-or-firstViewedAt-or-pinnedListUuid-or-pinnedListOrder-or-updatedAt-or-updatedByUser-or-validationErrors_',
                    required: true,
                },
                type: { ref: 'ResourceViewItemType.DASHBOARD', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ResourceViewItemType.CHART': {
        dataType: 'refEnum',
        enums: ['chart'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartKind: {
        dataType: 'refEnum',
        enums: [
            'line',
            'horizontal_bar',
            'vertical_bar',
            'scatter',
            'area',
            'mixed',
            'pie',
            'table',
            'big_number',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SpaceQuery.uuid-or-name-or-chartType-or-firstViewedAt-or-views-or-pinnedListUuid-or-pinnedListOrder-or-spaceUuid-or-description-or-updatedAt-or-updatedByUser-or-validationErrors_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    description: { dataType: 'string' },
                    updatedAt: { dataType: 'datetime', required: true },
                    updatedByUser: { ref: 'UpdatedByUser' },
                    spaceUuid: { dataType: 'string', required: true },
                    views: { dataType: 'double', required: true },
                    firstViewedAt: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'datetime' },
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListOrder: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    validationErrors: {
                        dataType: 'array',
                        array: {
                            dataType: 'refAlias',
                            ref: 'ValidationSummary',
                        },
                    },
                    chartType: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'ChartKind' },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ResourceViewChartItem: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                data: {
                    ref: 'Pick_SpaceQuery.uuid-or-name-or-chartType-or-firstViewedAt-or-views-or-pinnedListUuid-or-pinnedListOrder-or-spaceUuid-or-description-or-updatedAt-or-updatedByUser-or-validationErrors_',
                    required: true,
                },
                type: { ref: 'ResourceViewItemType.CHART', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'ResourceViewItemType.SPACE': {
        dataType: 'refEnum',
        enums: ['space'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Space.projectUuid-or-uuid-or-name-or-isPrivate-or-pinnedListUuid-or-pinnedListOrder-or-organizationUuid_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    organizationUuid: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    projectUuid: { dataType: 'string', required: true },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListOrder: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    isPrivate: { dataType: 'boolean', required: true },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ResourceViewSpaceItem: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                data: {
                    dataType: 'intersection',
                    subSchemas: [
                        {
                            ref: 'Pick_Space.projectUuid-or-uuid-or-name-or-isPrivate-or-pinnedListUuid-or-pinnedListOrder-or-organizationUuid_',
                        },
                        {
                            dataType: 'nestedObjectLiteral',
                            nestedProperties: {
                                chartCount: {
                                    dataType: 'double',
                                    required: true,
                                },
                                dashboardCount: {
                                    dataType: 'double',
                                    required: true,
                                },
                                accessListLength: {
                                    dataType: 'double',
                                    required: true,
                                },
                                access: {
                                    dataType: 'array',
                                    array: { dataType: 'string' },
                                    required: true,
                                },
                            },
                        },
                    ],
                    required: true,
                },
                type: { ref: 'ResourceViewItemType.SPACE', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PinnedItems: {
        dataType: 'refAlias',
        type: {
            dataType: 'array',
            array: {
                dataType: 'union',
                subSchemas: [
                    { ref: 'ResourceViewDashboardItem' },
                    { ref: 'ResourceViewChartItem' },
                    { ref: 'ResourceViewSpaceItem' },
                ],
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiPinnedItems: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'PinnedItems', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ResourceViewItemType: {
        dataType: 'refEnum',
        enums: ['chart', 'dashboard', 'space'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ResourceViewItem-at-data.uuid-or-pinnedListOrder_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                uuid: { dataType: 'string', required: true },
                pinnedListOrder: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdatePinnedItemOrder: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                data: {
                    ref: 'Pick_ResourceViewItem-at-data.uuid-or-pinnedListOrder_',
                    required: true,
                },
                type: { ref: 'ResourceViewItemType', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.DBT': {
        dataType: 'refEnum',
        enums: ['dbt'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtProjectEnvironmentVariable: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                value: { dataType: 'string', required: true },
                key: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtProjectType: {
        dataType: 'refEnum',
        enums: [
            'dbt',
            'dbt_cloud_ide',
            'github',
            'gitlab',
            'bitbucket',
            'azure_devops',
            'none',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtLocalProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.DBT', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            profiles_dir: { dataType: 'string' },
            project_dir: { dataType: 'string' },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.DBT_CLOUD_IDE': {
        dataType: 'refEnum',
        enums: ['dbt_cloud_ide'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtCloudIDEProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.DBT_CLOUD_IDE', required: true },
            api_key: { dataType: 'string', required: true },
            account_id: {
                dataType: 'union',
                subSchemas: [{ dataType: 'string' }, { dataType: 'double' }],
                required: true,
            },
            environment_id: {
                dataType: 'union',
                subSchemas: [{ dataType: 'string' }, { dataType: 'double' }],
                required: true,
            },
            project_id: {
                dataType: 'union',
                subSchemas: [{ dataType: 'string' }, { dataType: 'double' }],
                required: true,
            },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.GITHUB': {
        dataType: 'refEnum',
        enums: ['github'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtGithubProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.GITHUB', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            personal_access_token: { dataType: 'string', required: true },
            repository: { dataType: 'string', required: true },
            branch: { dataType: 'string', required: true },
            project_sub_path: { dataType: 'string', required: true },
            host_domain: { dataType: 'string' },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.BITBUCKET': {
        dataType: 'refEnum',
        enums: ['bitbucket'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtBitBucketProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.BITBUCKET', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            username: { dataType: 'string', required: true },
            personal_access_token: { dataType: 'string', required: true },
            repository: { dataType: 'string', required: true },
            branch: { dataType: 'string', required: true },
            project_sub_path: { dataType: 'string', required: true },
            host_domain: { dataType: 'string' },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.GITLAB': {
        dataType: 'refEnum',
        enums: ['gitlab'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtGitlabProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.GITLAB', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            personal_access_token: { dataType: 'string', required: true },
            repository: { dataType: 'string', required: true },
            branch: { dataType: 'string', required: true },
            project_sub_path: { dataType: 'string', required: true },
            host_domain: { dataType: 'string' },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.AZURE_DEVOPS': {
        dataType: 'refEnum',
        enums: ['azure_devops'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtAzureDevOpsProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.AZURE_DEVOPS', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            personal_access_token: { dataType: 'string', required: true },
            organization: { dataType: 'string', required: true },
            project: { dataType: 'string', required: true },
            repository: { dataType: 'string', required: true },
            branch: { dataType: 'string', required: true },
            project_sub_path: { dataType: 'string', required: true },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'DbtProjectType.NONE': {
        dataType: 'refEnum',
        enums: ['none'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtNoneProjectConfig: {
        dataType: 'refObject',
        properties: {
            type: { ref: 'DbtProjectType.NONE', required: true },
            target: { dataType: 'string' },
            environment: {
                dataType: 'array',
                array: {
                    dataType: 'refAlias',
                    ref: 'DbtProjectEnvironmentVariable',
                },
            },
            hideRefreshButton: { dataType: 'boolean' },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DbtProjectConfig: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'DbtLocalProjectConfig' },
                { ref: 'DbtCloudIDEProjectConfig' },
                { ref: 'DbtGithubProjectConfig' },
                { ref: 'DbtBitBucketProjectConfig' },
                { ref: 'DbtGitlabProjectConfig' },
                { ref: 'DbtAzureDevOpsProjectConfig' },
                { ref: 'DbtNoneProjectConfig' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.SNOWFLAKE': {
        dataType: 'refEnum',
        enums: ['snowflake'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    WeekDay: {
        dataType: 'refEnum',
        enums: [0, 1, 2, 3, 4, 5, 6],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateSnowflakeCredentials.Exclude_keyofCreateSnowflakeCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    role: { dataType: 'string' },
                    type: { ref: 'WarehouseTypes.SNOWFLAKE', required: true },
                    account: { dataType: 'string', required: true },
                    database: { dataType: 'string', required: true },
                    warehouse: { dataType: 'string', required: true },
                    schema: { dataType: 'string', required: true },
                    threads: { dataType: 'double' },
                    clientSessionKeepAlive: { dataType: 'boolean' },
                    queryTag: { dataType: 'string' },
                    accessUrl: { dataType: 'string' },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                        ],
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreateSnowflakeCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreateSnowflakeCredentials.Exclude_keyofCreateSnowflakeCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SnowflakeCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreateSnowflakeCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.REDSHIFT': {
        dataType: 'refEnum',
        enums: ['redshift'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateRedshiftCredentials.Exclude_keyofCreateRedshiftCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: { ref: 'WarehouseTypes.REDSHIFT', required: true },
                    schema: { dataType: 'string', required: true },
                    threads: { dataType: 'double' },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                        ],
                    },
                    useSshTunnel: { dataType: 'boolean' },
                    sshTunnelHost: { dataType: 'string' },
                    sshTunnelPort: { dataType: 'double' },
                    sshTunnelUser: { dataType: 'string' },
                    sshTunnelPublicKey: { dataType: 'string' },
                    host: { dataType: 'string', required: true },
                    port: { dataType: 'double', required: true },
                    dbname: { dataType: 'string', required: true },
                    keepalivesIdle: { dataType: 'double' },
                    sslmode: { dataType: 'string' },
                    ra3Node: { dataType: 'boolean' },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreateRedshiftCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreateRedshiftCredentials.Exclude_keyofCreateRedshiftCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    RedshiftCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreateRedshiftCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.POSTGRES': {
        dataType: 'refEnum',
        enums: ['postgres'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreatePostgresCredentials.Exclude_keyofCreatePostgresCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    role: { dataType: 'string' },
                    type: { ref: 'WarehouseTypes.POSTGRES', required: true },
                    schema: { dataType: 'string', required: true },
                    threads: { dataType: 'double' },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                        ],
                    },
                    useSshTunnel: { dataType: 'boolean' },
                    sshTunnelHost: { dataType: 'string' },
                    sshTunnelPort: { dataType: 'double' },
                    sshTunnelUser: { dataType: 'string' },
                    sshTunnelPublicKey: { dataType: 'string' },
                    host: { dataType: 'string', required: true },
                    port: { dataType: 'double', required: true },
                    dbname: { dataType: 'string', required: true },
                    keepalivesIdle: { dataType: 'double' },
                    sslmode: { dataType: 'string' },
                    searchPath: { dataType: 'string' },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreatePostgresCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreatePostgresCredentials.Exclude_keyofCreatePostgresCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    PostgresCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreatePostgresCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.BIGQUERY': {
        dataType: 'refEnum',
        enums: ['bigquery'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateBigqueryCredentials.Exclude_keyofCreateBigqueryCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: { ref: 'WarehouseTypes.BIGQUERY', required: true },
                    threads: { dataType: 'double' },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                        ],
                    },
                    project: { dataType: 'string', required: true },
                    dataset: { dataType: 'string', required: true },
                    timeoutSeconds: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                    priority: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'enum', enums: ['interactive'] },
                            { dataType: 'enum', enums: ['batch'] },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                    retries: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                    location: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                    maximumBytesBilled: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'undefined' },
                        ],
                        required: true,
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreateBigqueryCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreateBigqueryCredentials.Exclude_keyofCreateBigqueryCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    BigqueryCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreateBigqueryCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.DATABRICKS': {
        dataType: 'refEnum',
        enums: ['databricks'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateDatabricksCredentials.Exclude_keyofCreateDatabricksCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: { ref: 'WarehouseTypes.DATABRICKS', required: true },
                    database: { dataType: 'string', required: true },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                        ],
                    },
                    catalog: { dataType: 'string' },
                    serverHostName: { dataType: 'string', required: true },
                    httpPath: { dataType: 'string', required: true },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreateDatabricksCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreateDatabricksCredentials.Exclude_keyofCreateDatabricksCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DatabricksCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreateDatabricksCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'WarehouseTypes.TRINO': {
        dataType: 'refEnum',
        enums: ['trino'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_CreateTrinoCredentials.Exclude_keyofCreateTrinoCredentials.SensitiveCredentialsFieldNames__':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    type: { ref: 'WarehouseTypes.TRINO', required: true },
                    schema: { dataType: 'string', required: true },
                    startOfWeek: {
                        dataType: 'union',
                        subSchemas: [
                            { ref: 'WeekDay' },
                            { dataType: 'enum', enums: [null] },
                        ],
                    },
                    host: { dataType: 'string', required: true },
                    port: { dataType: 'double', required: true },
                    dbname: { dataType: 'string', required: true },
                    http_scheme: { dataType: 'string', required: true },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_CreateTrinoCredentials.SensitiveCredentialsFieldNames_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_CreateTrinoCredentials.Exclude_keyofCreateTrinoCredentials.SensitiveCredentialsFieldNames__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TrinoCredentials: {
        dataType: 'refAlias',
        type: {
            ref: 'Omit_CreateTrinoCredentials.SensitiveCredentialsFieldNames_',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    WarehouseCredentials: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'SnowflakeCredentials' },
                { ref: 'RedshiftCredentials' },
                { ref: 'PostgresCredentials' },
                { ref: 'BigqueryCredentials' },
                { ref: 'DatabricksCredentials' },
                { ref: 'TrinoCredentials' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Project: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                copiedFromProjectUuid: { dataType: 'string' },
                pinnedListUuid: { dataType: 'string' },
                warehouseConnection: { ref: 'WarehouseCredentials' },
                dbtConnection: { ref: 'DbtProjectConfig', required: true },
                type: { ref: 'ProjectType', required: true },
                name: { dataType: 'string', required: true },
                projectUuid: { dataType: 'string', required: true },
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiProjectResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Project', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SavedChart.uuid-or-name-or-description-or-spaceName-or-spaceUuid-or-projectUuid-or-organizationUuid-or-pinnedListUuid_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    organizationUuid: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    description: { dataType: 'string' },
                    projectUuid: { dataType: 'string', required: true },
                    spaceUuid: { dataType: 'string', required: true },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    spaceName: { dataType: 'string', required: true },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartType: {
        dataType: 'refEnum',
        enums: ['cartesian', 'table', 'big_number', 'pie'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartSummary: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_SavedChart.uuid-or-name-or-description-or-spaceName-or-spaceUuid-or-projectUuid-or-organizationUuid-or-pinnedListUuid_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        chartType: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'ChartType' },
                                { dataType: 'undefined' },
                            ],
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiChartSummaryListResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'ChartSummary' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Space.organizationUuid-or-projectUuid-or-uuid-or-name-or-isPrivate-or-pinnedListUuid-or-pinnedListOrder_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    organizationUuid: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    projectUuid: { dataType: 'string', required: true },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListOrder: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    isPrivate: { dataType: 'boolean', required: true },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SpaceSummary: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_Space.organizationUuid-or-projectUuid-or-uuid-or-name-or-isPrivate-or-pinnedListUuid-or-pinnedListOrder_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        dashboardCount: { dataType: 'double', required: true },
                        chartCount: { dataType: 'double', required: true },
                        access: {
                            dataType: 'array',
                            array: { dataType: 'string' },
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSpaceSummaryListResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceSummary' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ProjectMemberRole: {
        dataType: 'refEnum',
        enums: ['viewer', 'interactive_viewer', 'editor', 'developer', 'admin'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ProjectMemberProfile: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                lastName: { dataType: 'string', required: true },
                firstName: { dataType: 'string', required: true },
                email: { dataType: 'string', required: true },
                role: { ref: 'ProjectMemberRole', required: true },
                projectUuid: { dataType: 'string', required: true },
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiProjectAccessListResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'ProjectMemberProfile',
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiGetProjectMemberResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'ProjectMemberProfile', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateProjectMember: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                sendEmail: { dataType: 'boolean', required: true },
                role: { ref: 'ProjectMemberRole', required: true },
                email: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateProjectMember: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                role: { ref: 'ProjectMemberRole', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string._type-DimensionType--__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.unknown_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSqlQueryResults: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                rows: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'Record_string.unknown_',
                    },
                    required: true,
                },
                fields: {
                    ref: 'Record_string._type-DimensionType--__',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FieldId: {
        dataType: 'refAlias',
        type: { dataType: 'string', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    FilterGroupResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        or: {
                            dataType: 'array',
                            array: { dataType: 'any' },
                            required: true,
                        },
                        id: { dataType: 'string', required: true },
                    },
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        and: {
                            dataType: 'array',
                            array: { dataType: 'any' },
                            required: true,
                        },
                        id: { dataType: 'string', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Filters: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                metrics: { ref: 'FilterGroupResponse' },
                dimensions: { ref: 'FilterGroupResponse' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SortField: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                descending: { dataType: 'boolean', required: true },
                fieldId: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TableCalculationFormatType: {
        dataType: 'refEnum',
        enums: ['default', 'percent', 'currency', 'number'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    NumberSeparator: {
        dataType: 'refEnum',
        enums: [
            'default',
            'commaPeriod',
            'spacePeriod',
            'periodComma',
            'noSeparatorPeriod',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Compact: {
        dataType: 'refEnum',
        enums: ['thousands', 'millions', 'billions', 'trillions'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TableCalculationFormat: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                suffix: { dataType: 'string' },
                prefix: { dataType: 'string' },
                compact: { ref: 'Compact' },
                currency: { dataType: 'string' },
                separator: { ref: 'NumberSeparator' },
                round: { dataType: 'double' },
                type: { ref: 'TableCalculationFormatType', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    TableCalculation: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                format: { ref: 'TableCalculationFormat' },
                sql: { dataType: 'string', required: true },
                displayName: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
                index: { dataType: 'double' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricType: {
        dataType: 'refEnum',
        enums: [
            'percentile',
            'average',
            'count',
            'count_distinct',
            'sum',
            'min',
            'max',
            'number',
            'median',
            'string',
            'date',
            'boolean',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CompactOrAlias: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'Compact' },
                {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['K'] },
                        { dataType: 'enum', enums: ['thousand'] },
                        { dataType: 'enum', enums: ['M'] },
                        { dataType: 'enum', enums: ['million'] },
                        { dataType: 'enum', enums: ['B'] },
                        { dataType: 'enum', enums: ['billion'] },
                        { dataType: 'enum', enums: ['T'] },
                        { dataType: 'enum', enums: ['trillion'] },
                    ],
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Format: {
        dataType: 'refEnum',
        enums: ['km', 'mi', 'usd', 'gbp', 'eur', 'id', 'percent'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ConditionalOperator: {
        dataType: 'refEnum',
        enums: [
            'isNull',
            'notNull',
            'equals',
            'notEquals',
            'startsWith',
            'endsWith',
            'include',
            'doesNotInclude',
            'lessThan',
            'lessThanOrEqual',
            'greaterThan',
            'greaterThanOrEqual',
            'inThePast',
            'notInThePast',
            'inTheNext',
            'inTheCurrent',
            'inBetween',
        ],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricFilterRule: {
        dataType: 'refObject',
        properties: {
            values: { dataType: 'array', array: { dataType: 'any' } },
            operator: { ref: 'ConditionalOperator', required: true },
            id: { dataType: 'string', required: true },
            target: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    fieldRef: { dataType: 'string', required: true },
                },
                required: true,
            },
            settings: { dataType: 'any' },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AdditionalMetric: {
        dataType: 'refObject',
        properties: {
            label: { dataType: 'string' },
            type: { ref: 'MetricType', required: true },
            description: { dataType: 'string' },
            sql: { dataType: 'string', required: true },
            hidden: { dataType: 'boolean' },
            round: { dataType: 'double' },
            compact: { ref: 'CompactOrAlias' },
            format: { ref: 'Format' },
            table: { dataType: 'string', required: true },
            name: { dataType: 'string', required: true },
            index: { dataType: 'double' },
            filters: {
                dataType: 'array',
                array: { dataType: 'refObject', ref: 'MetricFilterRule' },
            },
            baseDimensionName: { dataType: 'string' },
            uuid: {
                dataType: 'union',
                subSchemas: [
                    { dataType: 'string' },
                    { dataType: 'enum', enums: [null] },
                ],
            },
        },
        additionalProperties: false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    MetricQueryResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                additionalMetrics: {
                    dataType: 'array',
                    array: { dataType: 'refObject', ref: 'AdditionalMetric' },
                },
                tableCalculations: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'TableCalculation' },
                    required: true,
                },
                limit: { dataType: 'double', required: true },
                sorts: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SortField' },
                    required: true,
                },
                filters: { ref: 'Filters', required: true },
                metrics: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FieldId' },
                    required: true,
                },
                dimensions: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FieldId' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiRunQueryResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        rows: {
                            dataType: 'array',
                            array: { dataType: 'any' },
                            required: true,
                        },
                        metricQuery: {
                            ref: 'MetricQueryResponse',
                            required: true,
                        },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    RunQueryRequest: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                csvLimit: { dataType: 'double' },
                additionalMetrics: {
                    dataType: 'array',
                    array: { dataType: 'refObject', ref: 'AdditionalMetric' },
                },
                tableCalculations: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'TableCalculation' },
                    required: true,
                },
                limit: { dataType: 'double', required: true },
                sorts: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SortField' },
                    required: true,
                },
                filters: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        metrics: { dataType: 'any' },
                        dimensions: { dataType: 'any' },
                    },
                    required: true,
                },
                metrics: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FieldId' },
                    required: true,
                },
                dimensions: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'FieldId' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerFormat: {
        dataType: 'refEnum',
        enums: ['csv', 'image'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerCsvOptions: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                limit: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['table'] },
                        { dataType: 'enum', enums: ['all'] },
                        { dataType: 'double' },
                    ],
                    required: true,
                },
                formatted: { dataType: 'boolean', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerImageOptions: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerOptions: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'SchedulerCsvOptions' },
                { ref: 'SchedulerImageOptions' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerBase: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                options: { ref: 'SchedulerOptions', required: true },
                dashboardUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                savedChartUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                cron: { dataType: 'string', required: true },
                format: { ref: 'SchedulerFormat', required: true },
                createdBy: { dataType: 'string', required: true },
                updatedAt: { dataType: 'datetime', required: true },
                createdAt: { dataType: 'datetime', required: true },
                name: { dataType: 'string', required: true },
                schedulerUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ChartScheduler: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'SchedulerBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        dashboardUuid: {
                            dataType: 'enum',
                            enums: [null],
                            required: true,
                        },
                        savedChartUuid: { dataType: 'string', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardScheduler: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'SchedulerBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        dashboardUuid: { dataType: 'string', required: true },
                        savedChartUuid: {
                            dataType: 'enum',
                            enums: [null],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Scheduler: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'ChartScheduler' },
                { ref: 'DashboardScheduler' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerSlackTarget: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                channel: { dataType: 'string', required: true },
                schedulerUuid: { dataType: 'string', required: true },
                updatedAt: { dataType: 'datetime', required: true },
                createdAt: { dataType: 'datetime', required: true },
                schedulerSlackTargetUuid: {
                    dataType: 'string',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerEmailTarget: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                recipient: { dataType: 'string', required: true },
                schedulerUuid: { dataType: 'string', required: true },
                updatedAt: { dataType: 'datetime', required: true },
                createdAt: { dataType: 'datetime', required: true },
                schedulerEmailTargetUuid: {
                    dataType: 'string',
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerAndTargets: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'Scheduler' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        targets: {
                            dataType: 'array',
                            array: {
                                dataType: 'union',
                                subSchemas: [
                                    { ref: 'SchedulerSlackTarget' },
                                    { ref: 'SchedulerEmailTarget' },
                                ],
                            },
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerJobStatus: {
        dataType: 'refEnum',
        enums: ['scheduled', 'started', 'completed', 'error'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Record_string.any_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {},
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerLog: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                details: { ref: 'Record_string.any_' },
                targetType: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'enum', enums: ['email'] },
                        { dataType: 'enum', enums: ['slack'] },
                    ],
                },
                target: { dataType: 'string' },
                status: { ref: 'SchedulerJobStatus', required: true },
                createdAt: { dataType: 'datetime', required: true },
                scheduledTime: { dataType: 'datetime', required: true },
                jobGroup: { dataType: 'string' },
                jobId: { dataType: 'string', required: true },
                schedulerUuid: { dataType: 'string' },
                task: {
                    dataType: 'union',
                    subSchemas: [
                        {
                            dataType: 'enum',
                            enums: ['handleScheduledDelivery'],
                        },
                        { dataType: 'enum', enums: ['sendEmailNotification'] },
                        { dataType: 'enum', enums: ['sendSlackNotification'] },
                        { dataType: 'enum', enums: ['downloadCsv'] },
                        { dataType: 'enum', enums: ['compileProject'] },
                        { dataType: 'enum', enums: ['testAndCompileProject'] },
                        { dataType: 'enum', enums: ['validateProject'] },
                    ],
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SchedulerWithLogs: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                logs: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SchedulerLog' },
                    required: true,
                },
                dashboards: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            dashboardUuid: {
                                dataType: 'string',
                                required: true,
                            },
                            name: { dataType: 'string', required: true },
                        },
                    },
                    required: true,
                },
                charts: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            savedChartUuid: {
                                dataType: 'string',
                                required: true,
                            },
                            name: { dataType: 'string', required: true },
                        },
                    },
                    required: true,
                },
                users: {
                    dataType: 'array',
                    array: {
                        dataType: 'nestedObjectLiteral',
                        nestedProperties: {
                            userUuid: { dataType: 'string', required: true },
                            lastName: { dataType: 'string', required: true },
                            firstName: { dataType: 'string', required: true },
                        },
                    },
                    required: true,
                },
                schedulers: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SchedulerAndTargets' },
                    required: true,
                },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSchedulerLogsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'SchedulerWithLogs', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSchedulerAndTargetsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'SchedulerAndTargets', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ScheduledJobs: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                id: { dataType: 'string', required: true },
                date: { dataType: 'datetime', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiScheduledJobsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'ScheduledJobs' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiJobStatusResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        status: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ShareUrl: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                host: { dataType: 'string' },
                url: { dataType: 'string' },
                shareUrl: { dataType: 'string' },
                organizationUuid: { dataType: 'string' },
                createdByUserUuid: { dataType: 'string' },
                params: { dataType: 'string', required: true },
                path: { dataType: 'string', required: true },
                nanoid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiShareResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'ShareUrl', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ShareUrl.path-or-params_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                path: { dataType: 'string', required: true },
                params: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateShareUrl: {
        dataType: 'refAlias',
        type: { ref: 'Pick_ShareUrl.path-or-params_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SlackChannel: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                id: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSlackChannelsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SlackChannel' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SavedChart.uuid-or-name-or-updatedAt-or-updatedByUser-or-description-or-spaceUuid-or-pinnedListUuid-or-pinnedListOrder_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    description: { dataType: 'string' },
                    updatedAt: { dataType: 'datetime', required: true },
                    updatedByUser: { ref: 'UpdatedByUser' },
                    spaceUuid: { dataType: 'string', required: true },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListOrder: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ViewStatistics: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                firstViewedAt: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'datetime' },
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                views: { dataType: 'double', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SpaceQuery: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_SavedChart.uuid-or-name-or-updatedAt-or-updatedByUser-or-description-or-spaceUuid-or-pinnedListUuid-or-pinnedListOrder_',
                },
                { ref: 'ViewStatistics' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        validationErrors: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'ValidationSummary',
                            },
                        },
                        chartType: {
                            dataType: 'union',
                            subSchemas: [
                                { ref: 'ChartKind' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_Dashboard.uuid-or-name-or-description-or-updatedAt-or-projectUuid-or-updatedByUser-or-organizationUuid-or-spaceUuid-or-views-or-firstViewedAt-or-pinnedListUuid-or-pinnedListOrder_':
        {
            dataType: 'refAlias',
            type: {
                dataType: 'nestedObjectLiteral',
                nestedProperties: {
                    name: { dataType: 'string', required: true },
                    organizationUuid: { dataType: 'string', required: true },
                    uuid: { dataType: 'string', required: true },
                    description: { dataType: 'string' },
                    updatedAt: { dataType: 'datetime', required: true },
                    projectUuid: { dataType: 'string', required: true },
                    updatedByUser: { ref: 'UpdatedByUser' },
                    spaceUuid: { dataType: 'string', required: true },
                    views: { dataType: 'double', required: true },
                    firstViewedAt: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'datetime' },
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListUuid: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'string' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                    pinnedListOrder: {
                        dataType: 'union',
                        subSchemas: [
                            { dataType: 'double' },
                            { dataType: 'enum', enums: [null] },
                        ],
                        required: true,
                    },
                },
                validators: {},
            },
        },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    DashboardBasicDetails: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                {
                    ref: 'Pick_Dashboard.uuid-or-name-or-description-or-updatedAt-or-projectUuid-or-updatedByUser-or-organizationUuid-or-spaceUuid-or-views-or-firstViewedAt-or-pinnedListUuid-or-pinnedListOrder_',
                },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        validationErrors: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'ValidationSummary',
                            },
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SpaceDashboard: {
        dataType: 'refAlias',
        type: { ref: 'DashboardBasicDetails', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    SpaceShare: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                role: { ref: 'ProjectMemberRole', required: true },
                lastName: { dataType: 'string', required: true },
                firstName: { dataType: 'string', required: true },
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    Space: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                pinnedListOrder: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'double' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                pinnedListUuid: {
                    dataType: 'union',
                    subSchemas: [
                        { dataType: 'string' },
                        { dataType: 'enum', enums: [null] },
                    ],
                    required: true,
                },
                access: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceShare' },
                    required: true,
                },
                dashboards: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceDashboard' },
                    required: true,
                },
                projectUuid: { dataType: 'string', required: true },
                queries: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceQuery' },
                    required: true,
                },
                isPrivate: { dataType: 'boolean', required: true },
                name: { dataType: 'string', required: true },
                uuid: { dataType: 'string', required: true },
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSpaceResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Space', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateSpace: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                access: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'SpaceShare' },
                },
                isPrivate: { dataType: 'boolean' },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UpdateSpace: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                isPrivate: { dataType: 'boolean', required: true },
                name: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    AddSpaceShare: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_SshKeyPair.publicKey_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                publicKey: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiSshKeyPairResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'Pick_SshKeyPair.publicKey_', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UserAttributeValue: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                value: { dataType: 'string', required: true },
                email: { dataType: 'string', required: true },
                userUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UserAttribute: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                users: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'UserAttributeValue' },
                    required: true,
                },
                description: { dataType: 'string' },
                organizationUuid: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
                createdAt: { dataType: 'datetime', required: true },
                uuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiUserAttributesResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'UserAttribute' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiCreateUserAttributeResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'UserAttribute', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_UserAttribute.name-or-description_': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                name: { dataType: 'string', required: true },
                description: { dataType: 'string' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_UserAttributeValue.Exclude_keyofUserAttributeValue.email__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                userUuid: { dataType: 'string', required: true },
                value: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_UserAttributeValue.email_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_UserAttributeValue.Exclude_keyofUserAttributeValue.email__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateUserAttributeValue: {
        dataType: 'refAlias',
        type: { ref: 'Omit_UserAttributeValue.email_', validators: {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    CreateUserAttribute: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'Pick_UserAttribute.name-or-description_' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        users: {
                            dataType: 'array',
                            array: {
                                dataType: 'refAlias',
                                ref: 'CreateUserAttributeValue',
                            },
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EmailOneTimePassword: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                numberOfAttempts: { dataType: 'double', required: true },
                createdAt: { dataType: 'datetime', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EmailStatus: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                otp: { ref: 'EmailOneTimePassword' },
                isVerified: { dataType: 'boolean', required: true },
                email: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EmailOneTimePasswordExpiring: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'EmailOneTimePassword' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        isMaxAttempts: { dataType: 'boolean', required: true },
                        isExpired: { dataType: 'boolean', required: true },
                        expiresAt: { dataType: 'datetime', required: true },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    EmailStatusExpiring: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'EmailStatus' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        otp: { ref: 'EmailOneTimePasswordExpiring' },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiEmailStatusResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: { ref: 'EmailStatusExpiring', required: true },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    UserAllowedOrganization: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                membersCount: { dataType: 'double', required: true },
                name: { dataType: 'string', required: true },
                organizationUuid: { dataType: 'string', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiUserAllowedOrganizationsResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'UserAllowedOrganization',
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiJobScheduledResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        jobId: { dataType: 'string', required: true },
                    },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationErrorType: {
        dataType: 'refEnum',
        enums: ['chart', 'sorting', 'filter', 'metric', 'model', 'dimension'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationSourceType: {
        dataType: 'refEnum',
        enums: ['chart', 'dashboard', 'table'],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationResponseBase: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                source: { ref: 'ValidationSourceType' },
                spaceUuid: { dataType: 'string' },
                projectUuid: { dataType: 'string', required: true },
                errorType: { ref: 'ValidationErrorType', required: true },
                error: { dataType: 'string', required: true },
                name: { dataType: 'string', required: true },
                createdAt: { dataType: 'datetime', required: true },
                validationId: { dataType: 'double', required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationErrorChartResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'ValidationResponseBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        chartName: { dataType: 'string' },
                        chartViews: { dataType: 'double', required: true },
                        lastUpdatedAt: { dataType: 'datetime' },
                        lastUpdatedBy: { dataType: 'string' },
                        fieldName: { dataType: 'string' },
                        chartType: { ref: 'ChartKind' },
                        chartUuid: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationErrorDashboardResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'ValidationResponseBase' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        dashboardViews: { dataType: 'double', required: true },
                        lastUpdatedAt: { dataType: 'datetime' },
                        lastUpdatedBy: { dataType: 'string' },
                        fieldName: { dataType: 'string' },
                        chartName: { dataType: 'string' },
                        dashboardUuid: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Pick_ValidationResponseBase.Exclude_keyofValidationResponseBase.name__': {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                projectUuid: { dataType: 'string', required: true },
                spaceUuid: { dataType: 'string' },
                validationId: { dataType: 'double', required: true },
                createdAt: { dataType: 'datetime', required: true },
                error: { dataType: 'string', required: true },
                errorType: { ref: 'ValidationErrorType', required: true },
                source: { ref: 'ValidationSourceType' },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    'Omit_ValidationResponseBase.name_': {
        dataType: 'refAlias',
        type: {
            ref: 'Pick_ValidationResponseBase.Exclude_keyofValidationResponseBase.name__',
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationErrorTableResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'intersection',
            subSchemas: [
                { ref: 'Omit_ValidationResponseBase.name_' },
                {
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        name: {
                            dataType: 'union',
                            subSchemas: [
                                { dataType: 'string' },
                                { dataType: 'undefined' },
                            ],
                            required: true,
                        },
                    },
                },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ValidationResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'union',
            subSchemas: [
                { ref: 'ValidationErrorChartResponse' },
                { ref: 'ValidationErrorDashboardResponse' },
                { ref: 'ValidationErrorTableResponse' },
            ],
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiValidateResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                results: {
                    dataType: 'array',
                    array: { dataType: 'refAlias', ref: 'ValidationResponse' },
                    required: true,
                },
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    ApiValidationDismissResponse: {
        dataType: 'refAlias',
        type: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
                status: { dataType: 'enum', enums: ['ok'], required: true },
            },
            validators: {},
        },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get(
        '/api/v1/csv/:jobId',
        ...fetchMiddlewares<RequestHandler>(CsvController),
        ...fetchMiddlewares<RequestHandler>(CsvController.prototype.get),

        function CsvController_get(request: any, response: any, next: any) {
            const args = {
                jobId: {
                    in: 'path',
                    name: 'jobId',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new CsvController();

                const promise = controller.get.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/projects/:projectUuid/integrations/dbt-cloud/settings',
        ...fetchMiddlewares<RequestHandler>(DbtCloudIntegrationController),
        ...fetchMiddlewares<RequestHandler>(
            DbtCloudIntegrationController.prototype.getSettings,
        ),

        function DbtCloudIntegrationController_getSettings(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new DbtCloudIntegrationController();

                const promise = controller.getSettings.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/projects/:projectUuid/integrations/dbt-cloud/settings',
        ...fetchMiddlewares<RequestHandler>(DbtCloudIntegrationController),
        ...fetchMiddlewares<RequestHandler>(
            DbtCloudIntegrationController.prototype.updateSettings,
        ),

        function DbtCloudIntegrationController_updateSettings(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new DbtCloudIntegrationController();

                const promise = controller.updateSettings.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/projects/:projectUuid/integrations/dbt-cloud/settings',
        ...fetchMiddlewares<RequestHandler>(DbtCloudIntegrationController),
        ...fetchMiddlewares<RequestHandler>(
            DbtCloudIntegrationController.prototype.deleteSettings,
        ),

        function DbtCloudIntegrationController_deleteSettings(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new DbtCloudIntegrationController();

                const promise = controller.deleteSettings.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/projects/:projectUuid/integrations/dbt-cloud/metrics',
        ...fetchMiddlewares<RequestHandler>(DbtCloudIntegrationController),
        ...fetchMiddlewares<RequestHandler>(
            DbtCloudIntegrationController.prototype.getMetrics,
        ),

        function DbtCloudIntegrationController_getMetrics(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new DbtCloudIntegrationController();

                const promise = controller.getMetrics.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/groups/:groupUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.getGroup,
        ),

        function GroupsController_getGroup(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                groupUuid: {
                    in: 'path',
                    name: 'groupUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new GroupsController();

                const promise = controller.getGroup.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/groups/:groupUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.deleteGroup,
        ),

        function GroupsController_deleteGroup(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                groupUuid: {
                    in: 'path',
                    name: 'groupUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new GroupsController();

                const promise = controller.deleteGroup.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put(
        '/api/v1/groups/:groupUuid/members/:userUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.addUserToGroup,
        ),

        function GroupsController_addUserToGroup(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                groupUuid: {
                    in: 'path',
                    name: 'groupUuid',
                    required: true,
                    dataType: 'string',
                },
                userUuid: {
                    in: 'path',
                    name: 'userUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new GroupsController();

                const promise = controller.addUserToGroup.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/groups/:groupUuid/members/:userUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.removeUserFromGroup,
        ),

        function GroupsController_removeUserFromGroup(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                groupUuid: {
                    in: 'path',
                    name: 'groupUuid',
                    required: true,
                    dataType: 'string',
                },
                userUuid: {
                    in: 'path',
                    name: 'userUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new GroupsController();

                const promise = controller.removeUserFromGroup.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/groups/:groupUuid/members',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.getGroupMembers,
        ),

        function GroupsController_getGroupMembers(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                groupUuid: {
                    in: 'path',
                    name: 'groupUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new GroupsController();

                const promise = controller.getGroupMembers.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch(
        '/api/v1/groups/:groupUuid',
        ...fetchMiddlewares<RequestHandler>(GroupsController),
        ...fetchMiddlewares<RequestHandler>(
            GroupsController.prototype.updateGroup,
        ),

        function GroupsController_updateGroup(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                groupUuid: {
                    in: 'path',
                    name: 'groupUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'UpdateGroup',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new GroupsController();

                const promise = controller.updateGroup.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/org',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.getOrganization,
        ),

        function OrganizationController_getOrganization(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise = controller.getOrganization.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put(
        '/api/v1/org',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.createOrganization,
        ),

        function OrganizationController_createOrganization(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'CreateOrganization',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise = controller.createOrganization.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch(
        '/api/v1/org',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.updateOrganization,
        ),

        function OrganizationController_updateOrganization(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'UpdateOrganization',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise = controller.updateOrganization.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/org/:organizationUuid',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.deleteOrganization,
        ),

        function OrganizationController_deleteOrganization(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                organizationUuid: {
                    in: 'path',
                    name: 'organizationUuid',
                    required: true,
                    dataType: 'string',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise = controller.deleteOrganization.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/org/projects',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.getProjects,
        ),

        function OrganizationController_getProjects(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise = controller.getProjects.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/org/users',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.getOrganizationMembers,
        ),

        function OrganizationController_getOrganizationMembers(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise = controller.getOrganizationMembers.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/org/users/:userUuid',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.getOrganizationMemberByUuid,
        ),

        function OrganizationController_getOrganizationMemberByUuid(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                userUuid: {
                    in: 'path',
                    name: 'userUuid',
                    required: true,
                    ref: 'UUID',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise = controller.getOrganizationMemberByUuid.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch(
        '/api/v1/org/users/:userUuid',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.updateOrganizationMember,
        ),

        function OrganizationController_updateOrganizationMember(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                userUuid: {
                    in: 'path',
                    name: 'userUuid',
                    required: true,
                    dataType: 'string',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'OrganizationMemberProfileUpdate',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise = controller.updateOrganizationMember.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/org/user/:userUuid',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.deleteUser,
        ),

        function OrganizationController_deleteUser(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                userUuid: {
                    in: 'path',
                    name: 'userUuid',
                    required: true,
                    dataType: 'string',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise = controller.deleteUser.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/org/allowedEmailDomains',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.getOrganizationAllowedEmailDomains,
        ),

        function OrganizationController_getOrganizationAllowedEmailDomains(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise =
                    controller.getOrganizationAllowedEmailDomains.apply(
                        controller,
                        validatedArgs as any,
                    );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch(
        '/api/v1/org/allowedEmailDomains',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype
                .updateOrganizationAllowedEmailDomains,
        ),

        function OrganizationController_updateOrganizationAllowedEmailDomains(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'UpdateAllowedEmailDomains',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise =
                    controller.updateOrganizationAllowedEmailDomains.apply(
                        controller,
                        validatedArgs as any,
                    );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/org/groups',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.createGroup,
        ),

        function OrganizationController_createGroup(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'Pick_CreateGroup.name_',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise = controller.createGroup.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/org/groups',
        ...fetchMiddlewares<RequestHandler>(OrganizationController),
        ...fetchMiddlewares<RequestHandler>(
            OrganizationController.prototype.listGroupsInOrganization,
        ),

        function OrganizationController_listGroupsInOrganization(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new OrganizationController();

                const promise = controller.listGroupsInOrganization.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/projects/:projectUuid/pinned-lists/:pinnedListUuid/items',
        ...fetchMiddlewares<RequestHandler>(PinningController),
        ...fetchMiddlewares<RequestHandler>(PinningController.prototype.get),

        function PinningController_get(request: any, response: any, next: any) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                pinnedListUuid: {
                    in: 'path',
                    name: 'pinnedListUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PinningController();

                const promise = controller.get.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch(
        '/api/v1/projects/:projectUuid/pinned-lists/:pinnedListUuid/items/order',
        ...fetchMiddlewares<RequestHandler>(PinningController),
        ...fetchMiddlewares<RequestHandler>(PinningController.prototype.post),

        function PinningController_post(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                pinnedListUuid: {
                    in: 'path',
                    name: 'pinnedListUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    dataType: 'array',
                    array: {
                        dataType: 'refAlias',
                        ref: 'UpdatePinnedItemOrder',
                    },
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PinningController();

                const promise = controller.post.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/projects/:projectUuid',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getProject,
        ),

        function ProjectController_getProject(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();

                const promise = controller.getProject.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/projects/:projectUuid/charts',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getChartsInProject,
        ),

        function ProjectController_getChartsInProject(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();

                const promise = controller.getChartsInProject.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/projects/:projectUuid/spaces',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getSpacesInProject,
        ),

        function ProjectController_getSpacesInProject(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();

                const promise = controller.getSpacesInProject.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/projects/:projectUuid/access',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getProjectAccessList,
        ),

        function ProjectController_getProjectAccessList(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();

                const promise = controller.getProjectAccessList.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/projects/:projectUuid/user/$:userUuid',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.getProjectMember,
        ),

        function ProjectController_getProjectMember(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                userUuid: {
                    in: 'path',
                    name: 'userUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();

                const promise = controller.getProjectMember.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/projects/:projectUuid/access',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.grantProjectAccessToUser,
        ),

        function ProjectController_grantProjectAccessToUser(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'CreateProjectMember',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();

                const promise = controller.grantProjectAccessToUser.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch(
        '/api/v1/projects/:projectUuid/access/:userUuid',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.updateProjectAccessForUser,
        ),

        function ProjectController_updateProjectAccessForUser(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                userUuid: {
                    in: 'path',
                    name: 'userUuid',
                    required: true,
                    dataType: 'string',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'UpdateProjectMember',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();

                const promise = controller.updateProjectAccessForUser.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/projects/:projectUuid/access/:userUuid',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.revokeProjectAccessForUser,
        ),

        function ProjectController_revokeProjectAccessForUser(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                userUuid: {
                    in: 'path',
                    name: 'userUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();

                const promise = controller.revokeProjectAccessForUser.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/projects/:projectUuid/sqlQuery',
        ...fetchMiddlewares<RequestHandler>(ProjectController),
        ...fetchMiddlewares<RequestHandler>(
            ProjectController.prototype.runSqlQuery,
        ),

        function ProjectController_runSqlQuery(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        sql: { dataType: 'string', required: true },
                    },
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProjectController();

                const promise = controller.runSqlQuery.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/projects/:projectUuid/explores/:exploreId/runUnderlyingDataQuery',
        ...fetchMiddlewares<RequestHandler>(RunViewChartQueryController),
        ...fetchMiddlewares<RequestHandler>(
            RunViewChartQueryController.prototype.postUnderlyingData,
        ),

        function RunViewChartQueryController_postUnderlyingData(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'RunQueryRequest',
                },
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                exploreId: {
                    in: 'path',
                    name: 'exploreId',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new RunViewChartQueryController();

                const promise = controller.postUnderlyingData.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/projects/:projectUuid/explores/:exploreId/runQuery',
        ...fetchMiddlewares<RequestHandler>(RunViewChartQueryController),
        ...fetchMiddlewares<RequestHandler>(
            RunViewChartQueryController.prototype.runMetricQuery,
        ),

        function RunViewChartQueryController_runMetricQuery(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'RunQueryRequest',
                },
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                exploreId: {
                    in: 'path',
                    name: 'exploreId',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new RunViewChartQueryController();

                const promise = controller.runMetricQuery.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/saved/:chartUuid/results',
        ...fetchMiddlewares<RequestHandler>(SavedChartController),
        ...fetchMiddlewares<RequestHandler>(
            SavedChartController.prototype.postDashboardTile,
        ),

        function SavedChartController_postDashboardTile(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: { filters: { ref: 'Filters' } },
                },
                chartUuid: {
                    in: 'path',
                    name: 'chartUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SavedChartController();

                const promise = controller.postDashboardTile.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/schedulers/:projectUuid/logs',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(
            SchedulerController.prototype.getLogs,
        ),

        function SchedulerController_getLogs(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SchedulerController();

                const promise = controller.getLogs.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/schedulers/:schedulerUuid',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(SchedulerController.prototype.get),

        function SchedulerController_get(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                schedulerUuid: {
                    in: 'path',
                    name: 'schedulerUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SchedulerController();

                const promise = controller.get.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch(
        '/api/v1/schedulers/:schedulerUuid',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(
            SchedulerController.prototype.patch,
        ),

        function SchedulerController_patch(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                schedulerUuid: {
                    in: 'path',
                    name: 'schedulerUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    dataType: 'any',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SchedulerController();

                const promise = controller.patch.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 201, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/schedulers/:schedulerUuid',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(
            SchedulerController.prototype.delete,
        ),

        function SchedulerController_delete(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                schedulerUuid: {
                    in: 'path',
                    name: 'schedulerUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SchedulerController();

                const promise = controller.delete.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 201, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/schedulers/:schedulerUuid/jobs',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(
            SchedulerController.prototype.getJobs,
        ),

        function SchedulerController_getJobs(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                schedulerUuid: {
                    in: 'path',
                    name: 'schedulerUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SchedulerController();

                const promise = controller.getJobs.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/schedulers/job/:jobId/status',
        ...fetchMiddlewares<RequestHandler>(SchedulerController),
        ...fetchMiddlewares<RequestHandler>(
            SchedulerController.prototype.getSchedulerStatus,
        ),

        function SchedulerController_getSchedulerStatus(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                jobId: {
                    in: 'path',
                    name: 'jobId',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SchedulerController();

                const promise = controller.getSchedulerStatus.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/share/:nanoId',
        ...fetchMiddlewares<RequestHandler>(ShareController),
        ...fetchMiddlewares<RequestHandler>(ShareController.prototype.get),

        function ShareController_get(request: any, response: any, next: any) {
            const args = {
                nanoId: {
                    in: 'path',
                    name: 'nanoId',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ShareController();

                const promise = controller.get.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/share',
        ...fetchMiddlewares<RequestHandler>(ShareController),
        ...fetchMiddlewares<RequestHandler>(ShareController.prototype.create),

        function ShareController_create(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'CreateShareUrl',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ShareController();

                const promise = controller.create.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 201, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/slack/channels',
        ...fetchMiddlewares<RequestHandler>(SlackController),
        ...fetchMiddlewares<RequestHandler>(SlackController.prototype.get),

        function SlackController_get(request: any, response: any, next: any) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SlackController();

                const promise = controller.get.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(SpaceController.prototype.getSpace),

        function SpaceController_getSpace(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                spaceUuid: {
                    in: 'path',
                    name: 'spaceUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SpaceController();

                const promise = controller.getSpace.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/projects/:projectUuid/spaces',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.createSpace,
        ),

        function SpaceController_createSpace(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'CreateSpace',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SpaceController();

                const promise = controller.createSpace.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.deleteSpace,
        ),

        function SpaceController_deleteSpace(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                spaceUuid: {
                    in: 'path',
                    name: 'spaceUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SpaceController();

                const promise = controller.deleteSpace.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 204, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.updateSpace,
        ),

        function SpaceController_updateSpace(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                spaceUuid: {
                    in: 'path',
                    name: 'spaceUuid',
                    required: true,
                    dataType: 'string',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'UpdateSpace',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SpaceController();

                const promise = controller.updateSpace.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid/share',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.addSpaceShare,
        ),

        function SpaceController_addSpaceShare(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                spaceUuid: {
                    in: 'path',
                    name: 'spaceUuid',
                    required: true,
                    dataType: 'string',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'AddSpaceShare',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SpaceController();

                const promise = controller.addSpaceShare.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/projects/:projectUuid/spaces/:spaceUuid/share/:userUuid',
        ...fetchMiddlewares<RequestHandler>(SpaceController),
        ...fetchMiddlewares<RequestHandler>(
            SpaceController.prototype.revokeSpaceAccessForUser,
        ),

        function SpaceController_revokeSpaceAccessForUser(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                spaceUuid: {
                    in: 'path',
                    name: 'spaceUuid',
                    required: true,
                    dataType: 'string',
                },
                userUuid: {
                    in: 'path',
                    name: 'userUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SpaceController();

                const promise = controller.revokeSpaceAccessForUser.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/ssh/key-pairs',
        ...fetchMiddlewares<RequestHandler>(SshController),
        ...fetchMiddlewares<RequestHandler>(
            SshController.prototype.createSshKeyPair,
        ),

        function SshController_createSshKeyPair(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new SshController();

                const promise = controller.createSshKeyPair.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 201, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/org/attributes',
        ...fetchMiddlewares<RequestHandler>(UserAttributesController),
        ...fetchMiddlewares<RequestHandler>(
            UserAttributesController.prototype.getUserAttributes,
        ),

        function UserAttributesController_getUserAttributes(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserAttributesController();

                const promise = controller.getUserAttributes.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/org/attributes',
        ...fetchMiddlewares<RequestHandler>(UserAttributesController),
        ...fetchMiddlewares<RequestHandler>(
            UserAttributesController.prototype.createUserAttribute,
        ),

        function UserAttributesController_createUserAttribute(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'CreateUserAttribute',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserAttributesController();

                const promise = controller.createUserAttribute.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put(
        '/api/v1/org/attributes/:userAttributeUuid',
        ...fetchMiddlewares<RequestHandler>(UserAttributesController),
        ...fetchMiddlewares<RequestHandler>(
            UserAttributesController.prototype.updateUserAttribute,
        ),

        function UserAttributesController_updateUserAttribute(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                userAttributeUuid: {
                    in: 'path',
                    name: 'userAttributeUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    ref: 'CreateUserAttribute',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserAttributesController();

                const promise = controller.updateUserAttribute.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/org/attributes/:userAttributeUuid',
        ...fetchMiddlewares<RequestHandler>(UserAttributesController),
        ...fetchMiddlewares<RequestHandler>(
            UserAttributesController.prototype.removeUserAttribute,
        ),

        function UserAttributesController_removeUserAttribute(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                userAttributeUuid: {
                    in: 'path',
                    name: 'userAttributeUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserAttributesController();

                const promise = controller.removeUserAttribute.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put(
        '/api/v1/user/me/email/otp',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.createEmailOneTimePasscode,
        ),

        function UserController_createEmailOneTimePasscode(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();

                const promise = controller.createEmailOneTimePasscode.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/user/me/email/status',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.getEmailVerificationStatus,
        ),

        function UserController_getEmailVerificationStatus(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                passcode: { in: 'query', name: 'passcode', dataType: 'string' },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();

                const promise = controller.getEmailVerificationStatus.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/user/me/allowedOrganizations',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.getOrganizationsUserCanJoin,
        ),

        function UserController_getOrganizationsUserCanJoin(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();

                const promise = controller.getOrganizationsUserCanJoin.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/user/me/joinOrganization/:organizationUuid',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.joinOrganization,
        ),

        function UserController_joinOrganization(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                organizationUuid: {
                    in: 'path',
                    name: 'organizationUuid',
                    required: true,
                    dataType: 'string',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();

                const promise = controller.joinOrganization.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/user/me',
        ...fetchMiddlewares<RequestHandler>(UserController),
        ...fetchMiddlewares<RequestHandler>(
            UserController.prototype.deleteUser,
        ),

        function UserController_deleteUser(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();

                const promise = controller.deleteUser.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post(
        '/api/v1/projects/:projectUuid/validate',
        ...fetchMiddlewares<RequestHandler>(ValidationController),
        ...fetchMiddlewares<RequestHandler>(
            ValidationController.prototype.post,
        ),

        function ValidationController_post(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                body: {
                    in: 'body',
                    name: 'body',
                    required: true,
                    dataType: 'nestedObjectLiteral',
                    nestedProperties: {
                        explores: {
                            dataType: 'array',
                            array: { dataType: 'any' },
                        },
                    },
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ValidationController();

                const promise = controller.post.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get(
        '/api/v1/projects/:projectUuid/validate',
        ...fetchMiddlewares<RequestHandler>(ValidationController),
        ...fetchMiddlewares<RequestHandler>(ValidationController.prototype.get),

        function ValidationController_get(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
                fromSettings: {
                    in: 'query',
                    name: 'fromSettings',
                    dataType: 'boolean',
                },
                jobId: { in: 'query', name: 'jobId', dataType: 'string' },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ValidationController();

                const promise = controller.get.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete(
        '/api/v1/projects/:projectUuid/validate/:validationId',
        ...fetchMiddlewares<RequestHandler>(ValidationController),
        ...fetchMiddlewares<RequestHandler>(
            ValidationController.prototype.dismiss,
        ),

        function ValidationController_dismiss(
            request: any,
            response: any,
            next: any,
        ) {
            const args = {
                projectUuid: {
                    in: 'path',
                    name: 'projectUuid',
                    required: true,
                    dataType: 'string',
                },
                validationId: {
                    in: 'path',
                    name: 'validationId',
                    required: true,
                    dataType: 'double',
                },
                req: {
                    in: 'request',
                    name: 'req',
                    required: true,
                    dataType: 'object',
                },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ValidationController();

                const promise = controller.dismiss.apply(
                    controller,
                    validatedArgs as any,
                );
                promiseHandler(controller, promise, response, 200, next);
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return (
            'getHeaders' in object &&
            'getStatus' in object &&
            'setStatus' in object
        );
    }

    function promiseHandler(
        controllerObj: any,
        promise: any,
        response: any,
        successStatus: any,
        next: any,
    ) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers);
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(
        response: any,
        statusCode?: number,
        data?: any,
        headers: any = {},
    ) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (
            data &&
            typeof data.pipe === 'function' &&
            data.readable &&
            typeof data._read === 'function'
        ) {
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(
        response: any,
    ): TsoaResponse<HttpStatusCodeLiteral, unknown> {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(
                        args[key],
                        request.query[name],
                        name,
                        fieldErrors,
                        undefined,
                        { noImplicitAdditionalProperties: 'throw-on-extras' },
                    );
                case 'path':
                    return validationService.ValidateParam(
                        args[key],
                        request.params[name],
                        name,
                        fieldErrors,
                        undefined,
                        { noImplicitAdditionalProperties: 'throw-on-extras' },
                    );
                case 'header':
                    return validationService.ValidateParam(
                        args[key],
                        request.header(name),
                        name,
                        fieldErrors,
                        undefined,
                        { noImplicitAdditionalProperties: 'throw-on-extras' },
                    );
                case 'body':
                    return validationService.ValidateParam(
                        args[key],
                        request.body,
                        name,
                        fieldErrors,
                        undefined,
                        { noImplicitAdditionalProperties: 'throw-on-extras' },
                    );
                case 'body-prop':
                    return validationService.ValidateParam(
                        args[key],
                        request.body[name],
                        name,
                        fieldErrors,
                        'body.',
                        { noImplicitAdditionalProperties: 'throw-on-extras' },
                    );
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(
                            args[key],
                            request.file,
                            name,
                            fieldErrors,
                            undefined,
                            {
                                noImplicitAdditionalProperties:
                                    'throw-on-extras',
                            },
                        );
                    } else if (
                        args[key].dataType === 'array' &&
                        args[key].array.dataType === 'file'
                    ) {
                        return validationService.ValidateParam(
                            args[key],
                            request.files,
                            name,
                            fieldErrors,
                            undefined,
                            {
                                noImplicitAdditionalProperties:
                                    'throw-on-extras',
                            },
                        );
                    } else {
                        return validationService.ValidateParam(
                            args[key],
                            request.body[name],
                            name,
                            fieldErrors,
                            undefined,
                            {
                                noImplicitAdditionalProperties:
                                    'throw-on-extras',
                            },
                        );
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
