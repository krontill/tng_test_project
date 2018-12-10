import React from 'react';
import {mmToCm, mmToIn} from '../../core/utils';
import './itemBox.css';

export const ItemBox = (props) => {
    const productIsWiderThanLarger = props.item.itemBoxThumb.width > props.item.itemBoxThumb.height;
    const thumbStyle = {
        width: productIsWiderThanLarger ? '7em' : 'auto',
        height: productIsWiderThanLarger ? 'auto' : '7em'
    };
    const setMetric = (size) => {
        return props.metric === 'CM' ? `${mmToCm(size)} cm` : `${mmToIn(size)} in`;
    };
    return (
        <li>
            <a onMouseOver={props.onHovered} className={props.isActive ? 'item-box item-box--active' : 'item-box'}>
                <div className="item-box__content">
                    <div className="item-box__content__title">
                        <span className="item-box__title">{props.item.name.substring(0, 32)}{props.item.name.length > 32 && '...'}</span>
                    </div>
                    <div className="item-box__content__thumb">
                        <img src={props.item.itemBoxThumb.url} style={thumbStyle} alt=""/>
                    </div>
                </div>
                <div className="item-box__content-overlay">
                    <div className="content-overlay__title">
                        <span className="item-box__title">
                            {props.item.itemBoxThumb.width && <span>W: {setMetric(props.item.itemBoxThumb.width)}</span>}&nbsp;
                            {props.item.itemBoxThumb.height && <span>H: {setMetric(props.item.itemBoxThumb.height)}</span>}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    );
};