import { assertUnreachable, ResourceViewSpaceItem } from '@lightdash/common';
import { Box, Flex, Text, Tooltip, useMantineTheme } from '@mantine/core';
import { IconLock, IconUser, IconUsers } from '@tabler/icons-react';
import { FC, forwardRef, useMemo } from 'react';

enum ResourceAccess {
    Private = 'private',
    Public = 'public',
    Shared = 'shared',
}

const AccessInfoData = {
    [ResourceAccess.Private]: {
        Icon: IconLock,
        status: 'Private',
    },
    [ResourceAccess.Public]: {
        Icon: IconUsers,
        status: 'Public',
    },
    [ResourceAccess.Shared]: {
        Icon: IconUser,
        status: 'Shared',
    },
} as const;

const getResourceAccessType = (item: ResourceViewSpaceItem): ResourceAccess => {
    if (!item.data.isPrivate) {
        return ResourceAccess.Public;
    } else if (item.data.accessListLength > 1) {
        return ResourceAccess.Shared;
    } else {
        return ResourceAccess.Private;
    }
};

interface AccessInfoProps {
    item: ResourceViewSpaceItem;
}

const AccessInfo: FC<AccessInfoProps> = forwardRef<
    HTMLDivElement,
    AccessInfoProps
>(({ item }, ref) => {
    const { Icon, status } = AccessInfoData[getResourceAccessType(item)];

    const theme = useMantineTheme();

    return (
        <Flex ref={ref}>
            <Icon color={theme.colors.gray[6]} size={14} />

            <Text size={14} color="gray.6" fz="xs" component="span" ml={5}>
                {status}
            </Text>
        </Flex>
    );
});

interface ResourceSharedProps {
    item: ResourceViewSpaceItem;
}

export const ResourceShared = ({ item }: ResourceSharedProps) => {
    const tooltipText = useMemo(() => {
        const accessType = getResourceAccessType(item);

        switch (accessType) {
            case ResourceAccess.Private:
                return 'Only visible to you';
            case ResourceAccess.Public:
                return 'Everyone in this project has access';
            case ResourceAccess.Shared:
                return `Shared with ${item.data.accessListLength} user${
                    item.data.accessListLength > 1 ? 's' : ''
                }`;
            default:
                return assertUnreachable(
                    accessType,
                    `Unknown access type ${accessType}`,
                );
        }
    }, [item]);

    return (
        <Box>
            <Tooltip label={tooltipText} position="top" withArrow>
                <AccessInfo item={item} />
            </Tooltip>
        </Box>
    );
};
