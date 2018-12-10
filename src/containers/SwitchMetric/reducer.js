import {SWITCH_METRIC} from '../../constants/actions';

const initialState = {
    metric: 'IN'
};

export default function handle(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SWITCH_METRIC:
            return {...state, metric: payload.metric ? 'CM' : 'IN'};
        default:
            return state;
    }
}