import {
    Button,
    Classes,
    Menu,
    MenuDivider,
    PopoverPosition,
} from '@blueprintjs/core';
import { MenuItem2, Popover2 } from '@blueprintjs/popover2';
import { Dashboard, DashboardTileTypes } from '@lightdash/common';
import { Tooltip } from '@mantine/core';
import { useHover, useToggle } from '@mantine/hooks';
import React, { ReactNode, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useChartSummaries } from '../../../hooks/useChartSummaries';
import ChartUpdateModal from '../TileForms/ChartUpdateModal';
import TileUpdateModal from '../TileForms/TileUpdateModal';
import {
    ButtonsWrapper,
    ChartContainer,
    HeaderContainer,
    TileBaseWrapper,
    TileTitleLink,
    TitleWrapper,
} from './TileBase.styles';

type Props<T> = {
    isEditMode: boolean;
    title: string;
    chartName?: string;
    titleHref?: string;
    description?: string;
    tile: T;
    isLoading?: boolean;
    extraMenuItems?: React.ReactNode;
    onDelete: (tile: T) => void;
    onEdit: (tile: T) => void;
    children?: ReactNode;
    extraHeaderElement?: React.ReactNode;
};

const TileBase = <T extends Dashboard['tiles'][number]>({
    isEditMode,
    title,
    chartName,
    description,
    tile,
    isLoading,
    extraMenuItems,
    onDelete,
    onEdit,
    children,
    extraHeaderElement,
    titleHref,
}: Props<T>) => {
    const [isEditingChartTile, setIsEditingChartTile] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const { hovered: containerHovered, ref: containerRef } = useHover();
    const { hovered: titleHovered, ref: titleRef } =
        useHover<HTMLAnchorElement>();
    const [isMenuOpen, toggleMenu] = useToggle([false, true]);
    const { projectUuid } = useParams<{ projectUuid: string }>();
    const { data: savedCharts } = useChartSummaries(projectUuid);

    const hideTitle =
        tile.type !== DashboardTileTypes.MARKDOWN
            ? tile.properties.hideTitle
            : false;

    const toggleHideTitle = () =>
        onEdit({
            ...tile,
            properties: {
                ...tile.properties,
                hideTitle: !hideTitle,
            },
        });

    return (
        <TileBaseWrapper
            className={isLoading ? Classes.SKELETON : undefined}
            ref={containerRef}
            $isEditMode={isEditMode}
            $isHovering={isHovering}
        >
            {!isLoading && (
                <>
                    <HeaderContainer
                        $isEditMode={isEditMode}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <Tooltip
                            disabled={!description}
                            label={description}
                            multiline
                            position="top-start"
                        >
                            <TitleWrapper $hovered={titleHovered}>
                                {!hideTitle ? (
                                    <TileTitleLink
                                        ref={titleRef}
                                        href={titleHref}
                                        $hovered={titleHovered}
                                        target="_blank"
                                        className="non-draggable"
                                    >
                                        {title}
                                    </TileTitleLink>
                                ) : null}
                            </TitleWrapper>
                        </Tooltip>

                        {(containerHovered && !titleHovered) || isMenuOpen ? (
                            <ButtonsWrapper className="non-draggable">
                                {extraHeaderElement}
                                {(isEditMode ||
                                    (!isEditMode && extraMenuItems)) && (
                                    <Popover2
                                        lazy
                                        onOpening={() => toggleMenu(true)}
                                        onClosed={() => toggleMenu(false)}
                                        position={PopoverPosition.BOTTOM_RIGHT}
                                        content={
                                            <Menu>
                                                {extraMenuItems}
                                                {isEditMode &&
                                                    extraMenuItems && (
                                                        <MenuDivider />
                                                    )}
                                                {isEditMode && (
                                                    <>
                                                        <MenuItem2
                                                            icon="edit"
                                                            text="Edit tile content"
                                                            onClick={() =>
                                                                setIsEditingChartTile(
                                                                    true,
                                                                )
                                                            }
                                                        />
                                                        {tile.type !==
                                                            DashboardTileTypes.MARKDOWN && (
                                                            <MenuItem2
                                                                icon={
                                                                    hideTitle
                                                                        ? 'eye-open'
                                                                        : 'eye-off'
                                                                }
                                                                text={`${
                                                                    hideTitle
                                                                        ? 'Show'
                                                                        : 'Hide'
                                                                } title`}
                                                                onClick={
                                                                    toggleHideTitle
                                                                }
                                                            />
                                                        )}
                                                        <MenuDivider />
                                                        <MenuItem2
                                                            icon="delete"
                                                            intent="danger"
                                                            text="Remove tile"
                                                            onClick={() =>
                                                                onDelete(tile)
                                                            }
                                                        />
                                                    </>
                                                )}
                                            </Menu>
                                        }
                                        renderTarget={({ ref, ...props }) => (
                                            <Button
                                                elementRef={ref}
                                                minimal
                                                small
                                                icon="more"
                                                {...props}
                                            />
                                        )}
                                    />
                                )}
                            </ButtonsWrapper>
                        ) : null}
                    </HeaderContainer>
                    <ChartContainer className="non-draggable sentry-block fs-block cohere-block">
                        {children}
                    </ChartContainer>
                    {tile.type === DashboardTileTypes.SAVED_CHART ? (
                        <ChartUpdateModal
                            opened={isEditingChartTile}
                            chartTitle={
                                tile.properties.title ?? chartName ?? ''
                            }
                            onClose={() => setIsEditingChartTile(false)}
                            onConfirm={(newTitle, newUuid, shouldShowTitle) => {
                                onEdit({
                                    ...tile,
                                    properties: {
                                        ...tile.properties,
                                        title:
                                            newTitle.length > 0
                                                ? newTitle
                                                : savedCharts?.find(
                                                      (chart) =>
                                                          chart.uuid ===
                                                          (newUuid.length > 0
                                                              ? newUuid
                                                              : tile.properties
                                                                    .savedChartUuid),
                                                  )?.name,
                                        savedChartUuid:
                                            newUuid.length > 0
                                                ? newUuid
                                                : tile.properties
                                                      .savedChartUuid,
                                        hideTitle: shouldShowTitle,
                                    },
                                });
                                setIsEditingChartTile(false);
                            }}
                            hideTitle={!!hideTitle}
                        />
                    ) : (
                        <TileUpdateModal
                            className="non-draggable"
                            isOpen={isEditingChartTile}
                            tile={tile}
                            onClose={() => setIsEditingChartTile(false)}
                            onConfirm={(newTile) => {
                                onEdit(newTile);
                                setIsEditingChartTile(false);
                            }}
                        />
                    )}
                </>
            )}
        </TileBaseWrapper>
    );
};

TileBase.defaultProps = {
    isLoading: false,
    extraMenuItems: null,
    description: null,
    hasFilters: false,
};

export default TileBase;
