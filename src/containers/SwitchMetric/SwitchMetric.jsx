import React from 'react';
import './switchMetric.css';
import {connect} from 'react-redux';
import {switchMetric} from './actions';

const switchMetricComponent = (props) => {
    const onHandleChange = (e) => {
        localStorage.setItem('metric', e.currentTarget.checked ? 'CM' : 'IN');
        return props.switchMetric(e.currentTarget.checked);
    };
    return (
        <div className="switch">
            <input id='switch' type='checkbox' className='switch__input' defaultChecked={props.metric === 'CM'} onChange={onHandleChange}/>
            <label htmlFor='switch' className='switch__label'/>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        metric: state.SwitchMetric.metric
    };
};

export default connect(mapStateToProps, {switchMetric})(switchMetricComponent);

