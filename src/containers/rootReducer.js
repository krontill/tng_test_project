import { combineReducers } from 'redux';
import ComparePanel from './ComparePanel/reducer';
import ControlPanel from './ControlPanel/reducer';
import SwitchMetric from './SwitchMetric/reducer';

export default combineReducers({
    ComparePanel,
    ControlPanel,
    SwitchMetric
});