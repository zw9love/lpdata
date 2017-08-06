/**
 * Created by zengwei on 2017/8/5.
 */
import React, {Component} from 'react';
import styles from '../assets/css/ThreeLevelBtn.css'
import cs from 'classnames/bind'

let cx = cs.bind(styles)

export default class ThreeLevelBtn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={cx('btnCell')} style={this.props.cellStyle}>
                <div className={cx('btnCellLeft')}></div>
                <div className={cx('btnCellCenter')}
                     style={this.props.centerStyle}>{this.props.title || 'Attend an Event'}</div>
                <div className={cx('btnCellRight')}></div>
            </div>
        )
    }
}