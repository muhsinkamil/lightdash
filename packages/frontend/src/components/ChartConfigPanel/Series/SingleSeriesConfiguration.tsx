import { Button, InputGroup } from '@blueprintjs/core';
import { CartesianChartLayout, CartesianSeriesType, Series } from 'common';
import React, { FC } from 'react';
import { useToggle } from 'react-use';
import { useActiveSeries } from '../../../providers/ActiveSeries';
import {
    SeriesExtraInputs,
    SeriesExtraInputWrapper,
    SeriesExtraSelect,
    SeriesMainInputs,
    SeriesOptionsWrapper,
    SeriesWrapper,
} from './Series.styles';
import SeriesColorPicker from './SeriesColorPicker';

type Props = {
    isCollapsable?: boolean;
    seriesLabel: string;
    layout?: CartesianChartLayout;
    series: Series;
    isSingle?: boolean;
    fallbackColor?: string;
    isGrouped?: boolean;
    updateSingleSeries: (updatedSeries: Series) => void;
};

const SingleSeriesConfiguration: FC<Props> = ({
    layout,
    isCollapsable,
    seriesLabel,
    series,
    fallbackColor,
    updateSingleSeries,
    isGrouped,
    isSingle,
}) => {
    const [isOpen, toggleIsOpen] = useToggle(false);
    const { isSeriesActive, setIsSeriesActive } = useActiveSeries();

    const toggleOpenSeries = () => {
        const hasActiveSeries = isSeriesActive.findIndex((item) => {
            return item.isOpen === true;
        });

        const itemToBeToggled = isSeriesActive.findIndex((item) => {
            return item === series;
        });

        if (hasActiveSeries >= 0) {
            isSeriesActive[hasActiveSeries].isOpen = false;
            setIsSeriesActive(isSeriesActive);
            console.log(isSeriesActive);
        }
        if (itemToBeToggled >= 0) {
            isSeriesActive[hasActiveSeries].isOpen = true;
            setIsSeriesActive(isSeriesActive);
            console.log(isSeriesActive);
        }
    };

    console.log('aqui', isSeriesActive);

    return (
        <SeriesWrapper $isSingle={isSingle}>
            <SeriesMainInputs $isGrouped={isGrouped}>
                <SeriesColorPicker
                    color={series.color || fallbackColor}
                    onChange={(color) => {
                        updateSingleSeries({
                            ...series,
                            color,
                        });
                    }}
                />
                {!isSingle && (
                    <InputGroup
                        fill
                        defaultValue={series.name || seriesLabel}
                        onBlur={(e) => {
                            updateSingleSeries({
                                ...series,
                                name: e.currentTarget.value,
                            });
                        }}
                    />
                )}
                {isCollapsable && (
                    <Button
                        icon={isOpen ? 'caret-up' : 'caret-down'}
                        onClick={() => toggleOpenSeries()}
                    />
                )}
            </SeriesMainInputs>
            <SeriesOptionsWrapper
                isOpen={!isCollapsable || isOpen}
                $isGrouped={isGrouped}
                $isSingle={isSingle}
            >
                <SeriesExtraInputs>
                    <SeriesExtraInputWrapper label={!isGrouped && 'Chart type'}>
                        <SeriesExtraSelect
                            fill
                            value={series.type}
                            options={[
                                {
                                    value: CartesianSeriesType.BAR,
                                    label: 'Bar',
                                },
                                {
                                    value: CartesianSeriesType.LINE,
                                    label: 'Line',
                                },
                                {
                                    value: CartesianSeriesType.SCATTER,
                                    label: 'Scatter',
                                },
                            ]}
                            onChange={(e) => {
                                updateSingleSeries({
                                    ...series,
                                    type: e.target.value as CartesianSeriesType,
                                });
                            }}
                        />
                    </SeriesExtraInputWrapper>
                    <SeriesExtraInputWrapper label={!isGrouped && 'Axis'}>
                        <SeriesExtraSelect
                            fill
                            value={series.yAxisIndex}
                            options={[
                                {
                                    value: 0,
                                    label: layout?.flipAxes ? 'Bottom' : 'Left',
                                },
                                {
                                    value: 1,
                                    label: layout?.flipAxes ? 'Top' : 'Right',
                                },
                            ]}
                            onChange={(e) => {
                                updateSingleSeries({
                                    ...series,
                                    yAxisIndex: parseInt(e.target.value, 10),
                                });
                            }}
                        />
                    </SeriesExtraInputWrapper>
                    <SeriesExtraInputWrapper
                        label={!isGrouped && 'Value labels'}
                    >
                        <SeriesExtraSelect
                            fill
                            value={series.label?.position || 'hidden'}
                            options={[
                                { value: 'hidden', label: 'Hidden' },
                                { value: 'top', label: 'Top' },
                                { value: 'bottom', label: 'Bottom' },
                                { value: 'left', label: 'Left' },
                                { value: 'right', label: 'Right' },
                            ]}
                            onChange={(e) => {
                                const option = e.target.value;
                                updateSingleSeries({
                                    ...series,
                                    label:
                                        option === 'hidden'
                                            ? { show: false }
                                            : {
                                                  show: true,
                                                  position: option as any,
                                              },
                                });
                            }}
                        />
                    </SeriesExtraInputWrapper>
                </SeriesExtraInputs>
            </SeriesOptionsWrapper>
        </SeriesWrapper>
    );
};

SingleSeriesConfiguration.defaultProps = {
    isGrouped: false,
};

export default SingleSeriesConfiguration;
