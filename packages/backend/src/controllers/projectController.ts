import {
    ApiChartSummaryListResponse,
    ApiErrorPayload,
    ApiGetProjectMemberResponse,
    ApiProjectAccessListResponse,
    ApiProjectResponse,
    ApiSpaceSummaryListResponse,
    ApiSqlQueryResults,
    ApiSuccessEmpty,
    CreateProjectMember,
    UpdateProjectMember,
} from '@lightdash/common';
import express from 'express';
import {
    Body,
    Controller,
    Delete,
    Get,
    Middlewares,
    OperationId,
    Patch,
    Path,
    Post,
    Request,
    Response,
    Route,
    SuccessResponse,
    Tags,
} from 'tsoa';
import { projectService } from '../services/services';
import {
    allowApiKeyAuthentication,
    isAuthenticated,
    unauthorisedInDemo,
} from './authentication';

@Route('/api/v1/projects')
@Response<ApiErrorPayload>('default', 'Error')
@Tags('Projects')
export class ProjectController extends Controller {
    /**
     * Get a project of an organiztion
     */
    @Middlewares([allowApiKeyAuthentication, isAuthenticated])
    @SuccessResponse('200', 'Success')
    @Get('{projectUuid}')
    @OperationId('GetProject')
    async getProject(
        @Path() projectUuid: string,
        @Request() req: express.Request,
    ): Promise<ApiProjectResponse> {
        this.setStatus(200);
        return {
            status: 'ok',
            results: await projectService.getProject(projectUuid, req.user!),
        };
    }

    /**
     * List all charts in a project
     * @param projectUuid The uuid of the project to get charts for
     * @param req express request
     */
    @Middlewares([allowApiKeyAuthentication, isAuthenticated])
    @SuccessResponse('200', 'Success')
    @Get('{projectUuid}/charts')
    @OperationId('ListChartsInProject')
    async getChartsInProject(
        @Path() projectUuid: string,
        @Request() req: express.Request,
    ): Promise<ApiChartSummaryListResponse> {
        this.setStatus(200);
        return {
            status: 'ok',
            results: await projectService.getCharts(req.user!, projectUuid),
        };
    }

    /**
     * List all spaces in a project
     * @param projectUuid The uuid of the project to get spaces for
     * @param req express request
     */
    @Middlewares([allowApiKeyAuthentication, isAuthenticated])
    @SuccessResponse('200', 'Success')
    @Get('{projectUuid}/spaces')
    @OperationId('ListSpacesInProject')
    async getSpacesInProject(
        @Path() projectUuid: string,
        @Request() req: express.Request,
    ): Promise<ApiSpaceSummaryListResponse> {
        this.setStatus(200);
        return {
            status: 'ok',
            results: await projectService.getSpaces(req.user!, projectUuid),
        };
    }

    /**
     * Get access list for a project. This is a list of users that have been explictly granted access to the project.
     * There may be other users that have access to the project via their organization membership.
     */
    @Middlewares([allowApiKeyAuthentication, isAuthenticated])
    @SuccessResponse('200', 'Success')
    @Get('{projectUuid}/access')
    @OperationId('GetProjectAccessList')
    @Tags('Roles & Permissions')
    async getProjectAccessList(
        @Path() projectUuid: string,
        @Request() req: express.Request,
    ): Promise<ApiProjectAccessListResponse> {
        this.setStatus(200);
        const results = await projectService.getProjectAccess(
            req.user!,
            projectUuid,
        );
        return {
            status: 'ok',
            results,
        };
    }

    /**
     * Get a project member's access for a project.
     *
     * NOTE:
     * We don't use the API on the frontend. Instead, we can call the API
     * so that we make sure of the user's access to the project.
     */
    @Middlewares([allowApiKeyAuthentication, isAuthenticated])
    @SuccessResponse('200', 'Success')
    @Get('{projectUuid}/user/${userUuid}')
    @OperationId('GetProjectMemberAccess')
    @Tags('Roles & Permissions')
    async getProjectMember(
        @Path() projectUuid: string,
        @Path() userUuid: string,
        @Request() req: express.Request,
    ): Promise<ApiGetProjectMemberResponse> {
        const results = await projectService.getProjectMemberAccess(
            req.user!,
            projectUuid,
            userUuid,
        );
        this.setStatus(200);
        return {
            status: 'ok',
            results,
        };
    }

    /**
     * Grant a user access to a project
     */
    @Middlewares([
        allowApiKeyAuthentication,
        isAuthenticated,
        unauthorisedInDemo,
    ])
    @SuccessResponse('200', 'Success')
    @Post('{projectUuid}/access')
    @OperationId('GrantProjectAccessToUser')
    @Tags('Roles & Permissions')
    async grantProjectAccessToUser(
        @Path() projectUuid: string,
        @Body() body: CreateProjectMember,
        @Request() req: express.Request,
    ): Promise<ApiSuccessEmpty> {
        this.setStatus(200);
        await projectService.createProjectAccess(req.user!, projectUuid, body);
        return {
            status: 'ok',
            results: undefined,
        };
    }

    /**
     * Update a user's access to a project
     */
    @Middlewares([
        allowApiKeyAuthentication,
        isAuthenticated,
        unauthorisedInDemo,
    ])
    @SuccessResponse('200', 'Success')
    @Patch('{projectUuid}/access/{userUuid}')
    @OperationId('UpdateProjectAccessForUser')
    @Tags('Roles & Permissions')
    async updateProjectAccessForUser(
        @Path() projectUuid: string,
        @Path() userUuid: string,
        @Body() body: UpdateProjectMember,
        @Request() req: express.Request,
    ): Promise<ApiSuccessEmpty> {
        this.setStatus(200);
        await projectService.updateProjectAccess(
            req.user!,
            projectUuid,
            userUuid,
            body,
        );
        return {
            status: 'ok',
            results: undefined,
        };
    }

    /**
     * Remove a user's access to a project
     */
    @Middlewares([
        allowApiKeyAuthentication,
        isAuthenticated,
        unauthorisedInDemo,
    ])
    @SuccessResponse('200', 'Success')
    @Delete('{projectUuid}/access/{userUuid}')
    @OperationId('RevokeProjectAccessForUser')
    @Tags('Roles & Permissions')
    async revokeProjectAccessForUser(
        @Path() projectUuid: string,
        @Path() userUuid: string,
        @Request() req: express.Request,
    ): Promise<ApiSuccessEmpty> {
        this.setStatus(200);
        await projectService.deleteProjectAccess(
            req.user!,
            projectUuid,
            userUuid,
        );
        return {
            status: 'ok',
            results: undefined,
        };
    }

    /**
     * Run a raw sql query against the project's warehouse connection
     * @param projectUuid The uuid of the project to run the query against
     * @param body The query to run
     * @param req express request
     */
    @Middlewares([
        allowApiKeyAuthentication,
        isAuthenticated,
        unauthorisedInDemo,
    ])
    @SuccessResponse('200', 'Success')
    @Post('{projectUuid}/sqlQuery')
    @OperationId('RunSqlQuery')
    @Tags('Exploring')
    async runSqlQuery(
        @Path() projectUuid: string,
        @Body() body: { sql: string },
        @Request() req: express.Request,
    ): Promise<{ status: 'ok'; results: ApiSqlQueryResults }> {
        this.setStatus(200);
        return {
            status: 'ok',
            results: await projectService.runSqlQuery(
                req.user!,
                projectUuid,
                body.sql,
            ),
        };
    }
}
