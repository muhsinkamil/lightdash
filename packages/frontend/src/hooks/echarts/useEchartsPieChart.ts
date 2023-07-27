import { formatItemValue, ResultRow, ResultValue } from '@lightdash/common';
import { EChartsOption, PieSeriesOption } from 'echarts';
import { useMemo } from 'react';
import { useVisualizationContext } from '../../components/LightdashVisualization/VisualizationProvider';

export type PieSeriesDataPoint = NonNullable<
    PieSeriesOption['data']
>[number] & {
    meta: {
        value: ResultValue;
        groupDimensions: string[];
        rows: ResultRow[];
    };
};

const useEchartsPieConfig = () => {
    const context = useVisualizationContext();
    const {
        pieChartConfig: {
            groupColorDefaults,
            selectedMetric,
            data,
            sortedGroupLabels,
            validPieChartConfig: {
                isDonut,
                valueLabel: valueLabelDefault,
                showValue: showValueDefault,
                showPercentage: showPercentageDefault,
                groupLabelOverrides,
                groupColorOverrides,
                groupValueOptionOverrides,
                showLegend,
            },
        },
        explore,
    } = context;

    const seriesData = useMemo(() => {
        if (!selectedMetric) return;

        return data
            .sort(
                ({ name: nameA }, { name: nameB }) =>
                    sortedGroupLabels.indexOf(nameA) -
                    sortedGroupLabels.indexOf(nameB),
            )
            .map(({ name, value, meta }) => {
                const valueLabel =
                    groupValueOptionOverrides?.[name]?.valueLabel ??
                    valueLabelDefault;
                const showValue =
                    groupValueOptionOverrides?.[name]?.showValue ??
                    showValueDefault;
                const showPercentage =
                    groupValueOptionOverrides?.[name]?.showPercentage ??
                    showPercentageDefault;

                const config: PieSeriesDataPoint = {
                    id: name,
                    groupId: name,
                    name: groupLabelOverrides?.[name] ?? name,
                    value: value,
                    itemStyle: {
                        color:
                            groupColorOverrides?.[name] ??
                            groupColorDefaults?.[name],
                    },
                    label: {
                        show: valueLabel !== 'hidden',
                        position:
                            valueLabel === 'outside' ? 'outside' : 'inside',
                        formatter: (params) => {
                            return valueLabel !== 'hidden' &&
                                showValue &&
                                showPercentage
                                ? `${params.percent}% - ${meta.value.formatted}`
                                : showValue
                                ? `${meta.value.formatted}`
                                : showPercentage
                                ? `${params.percent}%`
                                : `${params.name}`;
                        },
                    },
                    meta,
                };

                return config;
            });
    }, [
        data,
        sortedGroupLabels,
        groupColorDefaults,
        groupColorOverrides,
        groupLabelOverrides,
        groupValueOptionOverrides,
        selectedMetric,
        showPercentageDefault,
        showValueDefault,
        valueLabelDefault,
    ]);

    const pieSeriesOption: PieSeriesOption = useMemo(() => {
        return {
            type: 'pie',
            data: seriesData,
            radius: isDonut ? ['30%', '70%'] : '70%',
            center:
                showLegend &&
                valueLabelDefault === 'outside' &&
                (showValueDefault || showPercentageDefault)
                    ? ['50%', '55%']
                    : showLegend
                    ? ['50%', '52%']
                    : ['50%', '50%'],
            tooltip: {
                trigger: 'item',
                formatter: ({ marker, name, value, percent }) => {
                    const formattedValue = formatItemValue(
                        selectedMetric,
                        value,
                    );

                    return `${marker} <b>${name}</b><br />${percent}% - ${formattedValue}`;
                },
            },
        };
    }, [
        seriesData,
        isDonut,
        showLegend,
        valueLabelDefault,
        showValueDefault,
        showPercentageDefault,
        selectedMetric,
    ]);

    const eChartsOption: EChartsOption = useMemo(() => {
        return {
            legend: {
                show: showLegend,
                orient: 'horizontal',
                left: 'center',
                type: 'scroll',
            },
            tooltip: {
                trigger: 'item',
            },
            series: [pieSeriesOption],
        };
    }, [showLegend, pieSeriesOption]);

    if (!explore || !data || data.length === 0) {
        return undefined;
    }

    return { eChartsOption, pieSeriesOption };
};

export default useEchartsPieConfig;
