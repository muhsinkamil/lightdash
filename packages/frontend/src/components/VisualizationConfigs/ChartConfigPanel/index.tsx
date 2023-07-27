import { Button, Popover } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import {
    COLLAPSABLE_CARD_BUTTON_PROPS,
    COLLAPSABLE_CARD_POPOVER_PROPS,
} from '../../common/CollapsableCard';
import MantineIcon from '../../common/MantineIcon';
import { useVisualizationContext } from '../../LightdashVisualization/VisualizationProvider';
import ChartConfigTabs from './ChartConfigTabs';

const ChartConfigPanel: React.FC = () => {
    const { resultsData, explore, cartesianConfig } = useVisualizationContext();

    const disabled =
        !resultsData ||
        resultsData?.rows.length === 0 ||
        !explore ||
        !cartesianConfig.validCartesianConfig;

    return (
        <Popover
            withinPortal={true}
            {...COLLAPSABLE_CARD_POPOVER_PROPS}
            disabled={disabled}
        >
            <Popover.Target>
                <Button
                    {...COLLAPSABLE_CARD_BUTTON_PROPS}
                    disabled={disabled}
                    rightIcon={
                        <MantineIcon icon={IconChevronDown} color="gray" />
                    }
                >
                    Configure
                </Button>
            </Popover.Target>

            <Popover.Dropdown>
                <ChartConfigTabs />
            </Popover.Dropdown>
        </Popover>
    );
};

export default ChartConfigPanel;
