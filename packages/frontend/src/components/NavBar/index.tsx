import { ProjectType } from '@lightdash/common';
import {
    ActionIcon,
    Box,
    Button,
    Center,
    Divider,
    getDefaultZIndex,
    Group,
    Header,
    MantineProvider,
    Text,
} from '@mantine/core';
import { IconInfoCircle, IconTool, IconX } from '@tabler/icons-react';
import { FC, memo, useEffect, useMemo } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useActiveProjectUuid } from '../../hooks/useActiveProject';
import { useProjects } from '../../hooks/useProjects';
import { ReactComponent as Logo } from '../../svgs/logo-icon.svg';
import MantineIcon from '../common/MantineIcon';
import BrowseMenu from './BrowseMenu';
import ExploreMenu from './ExploreMenu';
import GlobalSearch from './GlobalSearch';
import HeadwayMenuItem from './HeadwayMenuItem';
import HelpMenu from './HelpMenu';
import { NotificationsMenu } from './NotificationsMenu';
import ProjectSwitcher from './ProjectSwitcher';
import SettingsMenu from './SettingsMenu';
import UserMenu from './UserMenu';

export const NAVBAR_HEIGHT = 50;
export const BANNER_HEIGHT = 35;

const PreviewBanner = () => (
    <Center pos="fixed" w="100%" h={BANNER_HEIGHT} bg="blue.6">
        <MantineIcon icon={IconTool} color="white" size="sm" />
        <Text color="white" fw={500} fz="xs" mx="xxs">
            This is a preview environment. Any changes you make here will not
            affect production.
        </Text>
    </Center>
);

const DashboardExplorerBanner: FC<{
    dashboardName: string;
    projectUuid: string;
    dashboardUuid: string;
}> = ({ dashboardName, projectUuid, dashboardUuid }) => {
    const history = useHistory();
    const { savedQueryUuid, mode } = useParams<{
        savedQueryUuid: string;
        mode?: string;
    }>();

    const action = useMemo(() => {
        if (!savedQueryUuid) {
            return 'creating';
        }
        switch (mode) {
            case 'edit':
                return 'editing';
            case 'view':
                return 'viewing';
            default:
                return 'viewing';
        }
    }, [savedQueryUuid, mode]);

    return (
        <Center w="100%" h={BANNER_HEIGHT} bg="blue.6">
            <MantineIcon icon={IconInfoCircle} color="white" size="sm" />
            <Text color="white" fw={500} fz="xs" mx="xxs">
                You are {action} this chart from within "{dashboardName}"
            </Text>
            <ActionIcon
                onClick={() => {
                    history.push(
                        `/projects/${projectUuid}/dashboards/${dashboardUuid}/${
                            savedQueryUuid ? 'view' : 'edit'
                        }`,
                    );
                    sessionStorage.removeItem('fromDashboard');
                    sessionStorage.removeItem('dashboardUuid');
                }}
                size="sm"
                mx="xxs"
                variant="outline"
                color="white"
            >
                <MantineIcon icon={IconX} color="white" size="sm" />
            </ActionIcon>
        </Center>
    );
};

const NavBar = memo(() => {
    const { projectUuid } = useParams<{ projectUuid: string }>();
    const { data: projects } = useProjects();
    const { activeProjectUuid, isLoading: isLoadingActiveProject } =
        useActiveProjectUuid();

    const homeUrl = activeProjectUuid
        ? `/projects/${activeProjectUuid}/home`
        : '/';

    const isCurrentProjectPreview = !!projects?.find(
        (project) =>
            project.projectUuid === activeProjectUuid &&
            project.type === ProjectType.PREVIEW,
    );
    const fromDashboard = sessionStorage.getItem('fromDashboard');
    const dashboardUuid = sessionStorage.getItem('dashboardUuid');

    useEffect(() => {
        const clearDashboardStorage = () => {
            if (fromDashboard) {
                sessionStorage.clear();
            }
        };
        window.addEventListener('beforeunload', clearDashboardStorage);
        return () =>
            window.removeEventListener('beforeunload', clearDashboardStorage);
    }, [fromDashboard]);

    if (fromDashboard && dashboardUuid) {
        return (
            <DashboardExplorerBanner
                dashboardName={fromDashboard}
                projectUuid={projectUuid}
                dashboardUuid={dashboardUuid}
            />
        );
    }

    return (
        <MantineProvider inherit theme={{ colorScheme: 'dark' }}>
            {isCurrentProjectPreview ? <PreviewBanner /> : null}
            {/* hack to make navbar fixed and maintain space */}
            <Box
                h={
                    NAVBAR_HEIGHT +
                    (isCurrentProjectPreview ? BANNER_HEIGHT : 0)
                }
            />
            <Header
                height={NAVBAR_HEIGHT}
                fixed
                mt={isCurrentProjectPreview ? BANNER_HEIGHT : 'none'}
                display="flex"
                px="md"
                zIndex={getDefaultZIndex('app')}
                sx={{
                    alignItems: 'center',
                    boxShadow: 'lg',
                }}
            >
                {/* Header content */}
                <Group align="center" sx={{ flexShrink: 0 }}>
                    <ActionIcon
                        component={Link}
                        to={homeUrl}
                        title="Home"
                        size="lg"
                    >
                        <Logo />
                    </ActionIcon>

                    {!isLoadingActiveProject && activeProjectUuid ? (
                        <>
                            <Button.Group>
                                <ExploreMenu projectUuid={activeProjectUuid} />
                                <BrowseMenu projectUuid={activeProjectUuid} />
                            </Button.Group>

                            <Divider
                                orientation="vertical"
                                my="xs"
                                color="gray.8"
                            />

                            <GlobalSearch projectUuid={activeProjectUuid} />
                        </>
                    ) : null}
                </Group>

                <Box sx={{ flexGrow: 1 }} />

                <Group sx={{ flexShrink: 0 }}>
                    <Button.Group>
                        <SettingsMenu />

                        {!isLoadingActiveProject && activeProjectUuid ? (
                            <NotificationsMenu
                                projectUuid={activeProjectUuid}
                            />
                        ) : null}

                        <HelpMenu />

                        {!isLoadingActiveProject && activeProjectUuid ? (
                            <HeadwayMenuItem projectUuid={activeProjectUuid} />
                        ) : null}
                    </Button.Group>

                    <Divider orientation="vertical" my="xs" color="gray.8" />

                    <ProjectSwitcher />

                    <UserMenu />
                </Group>
            </Header>
        </MantineProvider>
    );
});

export default NavBar;
