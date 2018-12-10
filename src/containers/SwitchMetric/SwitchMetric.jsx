import React from 'react';
import './switchMetric.css';
import {connect} from 'react-redux';
import {switchMetric} from './actions';

const switchMetricComponent = (props) => {
    return (
        <div className="switch">
            <input id='switch' type='checkbox' className='switch__input' onChange={(e) => props.switchMetric(e.currentTarget.checked)}/>
            <label htmlFor='switch' className='switch__label'/>
        </div>
    );
};

let mapStateToProps = () => {
    return {};
};

export default connect(mapStateToProps, {switchMetric})(switchMetricComponent);

