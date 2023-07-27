import {
    createConditionalFormattingConfigWithSingleColor,
    ECHARTS_DEFAULT_COLORS,
    FilterableItem,
    getItemId,
    getItemMap,
    isFilterableItem,
    isNumericItem,
} from '@lightdash/common';
import { Button, Stack } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import produce from 'immer';
import { useCallback, useMemo, useState } from 'react';
import { useOrganization } from '../../../hooks/organization/useOrganization';
import MantineIcon from '../../common/MantineIcon';
import { useVisualizationContext } from '../../LightdashVisualization/VisualizationProvider';
import ConditionalFormatting from './ConditionalFormatting';

const ConditionalFormattingList = ({}) => {
    const { data: org } = useOrganization();

    const [isAddingNew, setIsAddingNew] = useState(false);
    const {
        explore,
        resultsData,
        tableConfig: { conditionalFormattings, onSetConditionalFormattings },
    } = useVisualizationContext();

    const defaultColors = useMemo(
        () => org?.chartColors ?? ECHARTS_DEFAULT_COLORS,
        [org],
    );

    const activeFields = useMemo(() => {
        if (!resultsData) return new Set<string>();
        return new Set([
            ...resultsData.metricQuery.dimensions,
            ...resultsData.metricQuery.metrics,
            ...resultsData.metricQuery.tableCalculations.map((tc) => tc.name),
        ]);
    }, [resultsData]);

    const visibleActiveNumericFields = useMemo<FilterableItem[]>(() => {
        if (!explore) return [];

        return Object.values(
            getItemMap(
                explore,
                resultsData?.metricQuery.additionalMetrics,
                resultsData?.metricQuery.tableCalculations,
            ),
        )
            .filter((field) => activeFields.has(getItemId(field)))
            .filter(
                (field) => isNumericItem(field) && isFilterableItem(field),
            ) as FilterableItem[];
    }, [explore, resultsData, activeFields]);

    const activeConfigs = useMemo(() => {
        return conditionalFormattings.filter((config) =>
            config.target
                ? visibleActiveNumericFields.find(
                      (field) => getItemId(field) === config.target?.fieldId,
                  )
                : true,
        );
    }, [conditionalFormattings, visibleActiveNumericFields]);

    const handleAdd = useCallback(() => {
        setIsAddingNew(true);
        onSetConditionalFormattings(
            produce(activeConfigs, (draft) => {
                draft.push(
                    createConditionalFormattingConfigWithSingleColor(
                        defaultColors[0],
                    ),
                );
            }),
        );
    }, [onSetConditionalFormattings, activeConfigs, defaultColors]);

    const handleRemove = useCallback(
        (index) =>
            onSetConditionalFormattings(
                produce(activeConfigs, (draft) => {
                    draft.splice(index, 1);
                }),
            ),
        [onSetConditionalFormattings, activeConfigs],
    );

    const handleChange = useCallback(
        (index, newConfig) =>
            onSetConditionalFormattings(
                produce(activeConfigs, (draft) => {
                    draft[index] = newConfig;
                }),
            ),
        [onSetConditionalFormattings, activeConfigs],
    );

    return (
        <Stack spacing="xs">
            {activeConfigs.map((conditionalFormatting, index) => (
                <ConditionalFormatting
                    key={index}
                    isDefaultOpen={activeConfigs.length === 1 || isAddingNew}
                    index={index}
                    fields={visibleActiveNumericFields}
                    value={conditionalFormatting}
                    onChange={(newConfig) => handleChange(index, newConfig)}
                    onRemove={() => handleRemove(index)}
                />
            ))}

            <Button
                sx={{ alignSelf: 'start' }}
                size="xs"
                variant="outline"
                leftIcon={<MantineIcon icon={IconPlus} />}
                onClick={handleAdd}
            >
                Add new rule
            </Button>
        </Stack>
    );
};

export default ConditionalFormattingList;
