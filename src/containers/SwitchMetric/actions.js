import {SWITCH_METRIC} from '../../constants/actions';

export function switchMetric(metric) {
    return {
        type: SWITCH_METRIC,
        payload: {metric}
    };
}