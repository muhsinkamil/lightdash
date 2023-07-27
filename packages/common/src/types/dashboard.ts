import { FilterableField } from './field';
import { DashboardFilters } from './filter';
import { CreateSavedChart, SavedChartType } from './savedCharts';
import { UpdatedByUser } from './user';
import { ValidationSummary } from './validation';

export enum DashboardTileTypes {
    SAVED_CHART = 'saved_chart',
    MARKDOWN = 'markdown',
    LOOM = 'loom',
}

type CreateDashboardTileBase = {
    uuid?: string;
    type: DashboardTileTypes;
    x: number;
    y: number;
    h: number;
    w: number;
};

type DashboardTileBase = Required<CreateDashboardTileBase>;

export type DashboardMarkdownTileProperties = {
    type: DashboardTileTypes.MARKDOWN;
    properties: {
        title: string;
        content: string;
    };
};

export type DashboardLoomTileProperties = {
    type: DashboardTileTypes.LOOM;
    properties: {
        title: string;
        hideTitle?: boolean;
        url: string;
    };
};

export type DashboardChartTileProperties = {
    type: DashboardTileTypes.SAVED_CHART;
    properties: {
        title?: string;
        hideTitle?: boolean;
        savedChartUuid: string | null;
        belongsToDashboard?: boolean; // this should be required and not part of the "create" types, but we need to fix tech debt first. Open ticket https://github.com/lightdash/lightdash/issues/6450
        chartName?: string | null;
    };
};

type CreateChartTileWithSavedChartUuid =
    DashboardChartTileProperties['properties'] & {
        savedChartUuid: string | null;
        newChartData?: null;
    };

type CreateChartTileWithNewChartData =
    DashboardChartTileProperties['properties'] & {
        savedChartUuid: null;
        newChartData: CreateSavedChart;
    };

export type CreateDashboardChartTileProperties = Omit<
    DashboardChartTileProperties,
    'properties'
> & {
    properties:
        | CreateChartTileWithSavedChartUuid
        | CreateChartTileWithNewChartData;
};

export type CreateDashboardMarkdownTile = CreateDashboardTileBase &
    DashboardMarkdownTileProperties;
export type DashboardMarkdownTile = DashboardTileBase &
    DashboardMarkdownTileProperties;

export type CreateDashboardLoomTile = CreateDashboardTileBase &
    DashboardLoomTileProperties;
export type DashboardLoomTile = DashboardTileBase & DashboardLoomTileProperties;

export type CreateDashboardChartTile = CreateDashboardTileBase &
    CreateDashboardChartTileProperties;
export type DashboardChartTile = DashboardTileBase &
    DashboardChartTileProperties;

export const isChartTile = (
    tile: DashboardTileBase,
): tile is DashboardChartTile => tile.type === DashboardTileTypes.SAVED_CHART;

export type CreateDashboard = {
    name: string;
    description?: string;
    tiles: Array<
        | CreateDashboardChartTile
        | CreateDashboardMarkdownTile
        | CreateDashboardLoomTile
    >;
    filters?: DashboardFilters;
    updatedByUser?: Pick<UpdatedByUser, 'userUuid'>;
    spaceUuid?: string;
};

export type DashboardTile =
    | DashboardChartTile
    | DashboardMarkdownTile
    | DashboardLoomTile;

export const isDashboardChartTileType = (
    tile: DashboardTile,
): tile is DashboardChartTile => tile.type === DashboardTileTypes.SAVED_CHART;

export type Dashboard = {
    organizationUuid: string;
    projectUuid: string;
    uuid: string;
    name: string;
    description?: string;
    updatedAt: Date;
    tiles: Array<DashboardTile>;
    filters: DashboardFilters;
    updatedByUser?: UpdatedByUser;
    spaceUuid: string;
    spaceName: string;
    views: number;
    firstViewedAt: Date | string | null;
    pinnedListUuid: string | null;
    pinnedListOrder: number | null;
};

export type DashboardBasicDetails = Pick<
    Dashboard,
    | 'uuid'
    | 'name'
    | 'description'
    | 'updatedAt'
    | 'projectUuid'
    | 'updatedByUser'
    | 'organizationUuid'
    | 'spaceUuid'
    | 'views'
    | 'firstViewedAt'
    | 'pinnedListUuid'
    | 'pinnedListOrder'
> & { validationErrors?: ValidationSummary[] };

export type SpaceDashboard = DashboardBasicDetails;

export type DashboardUnversionedFields = Pick<
    CreateDashboard,
    'name' | 'description' | 'spaceUuid'
>;

export type DashboardVersionedFields = Pick<
    CreateDashboard,
    'tiles' | 'filters' | 'updatedByUser'
>;

export type UpdateDashboardDetails = Pick<Dashboard, 'name' | 'description'>;

export type UpdateDashboard =
    | DashboardUnversionedFields
    | DashboardVersionedFields
    | (DashboardUnversionedFields & DashboardVersionedFields);

export type UpdateMultipleDashboards = Pick<
    Dashboard,
    'uuid' | 'name' | 'description' | 'spaceUuid'
>;

export type DashboardAvailableFilters = Record<string, FilterableField[]>;

export const isDashboardUnversionedFields = (
    data: UpdateDashboard,
): data is DashboardUnversionedFields =>
    ('name' in data && !!data.name) ||
    ('spaceUuid' in data && !!data.spaceUuid);

export const isDashboardVersionedFields = (
    data: UpdateDashboard,
): data is DashboardVersionedFields => 'tiles' in data && !!data.tiles;

export const defaultTileSize = {
    h: 9,
    w: 15,
    x: 0,
    y: 0,
};

export const getDefaultChartTileSize = (
    chartType: SavedChartType | string | undefined,
) => {
    switch (chartType) {
        case 'big_number':
            return {
                h: 6,
                w: 9,
                x: 0,
                y: 0,
            };
        default:
            return defaultTileSize;
    }
};

export const hasChartsInDashboard = (dashboard: Dashboard) =>
    dashboard.tiles.some(
        (tile) => isChartTile(tile) && tile.properties.belongsToDashboard,
    );
