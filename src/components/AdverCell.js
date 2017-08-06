/**
 * Created by zengwei on 2017/8/6.
 */
import React, {Component} from 'react';
import styles from '../assets/css/AdverCell.css'
import cs from 'classnames/bind'

import MoreInfo from '../components/MoreInfo'

let cx = cs.bind(styles)

export default class AdverCell extends Component {
    constructor(props) {
        super(props)
        this.renderImageOnRight = this.renderImageOnRight.bind(this)
        this.renderImageOnLeft = this.renderImageOnLeft.bind(this)
    }

    renderImageOnRight() {
        let rightStyle = {position: 'relative', textAlign: 'right', marginRight: '40px', left: 0}
        return (
            <div className={cx('protectContainer')}>
                <div className={cx('protectLeft')}>
                    <div className={cx('protectLeftCenter')}>
                        <h1>{this.props.data.title}</h1>
                        <p>{this.props.data.info}</p>
                        <MoreInfo info={this.props.data.moreInfo} fontStyle={{color: '#000'}} cellStyle={rightStyle}/>
                    </div>
                </div>
                <div className={cx('protectRight')}>
                    <img src={this.props.data.src} alt="" className={cx('protectImage')}/>
                    <div className={cx('protectShadow')}></div>
                </div>
            </div>
        )
    }

    renderImageOnLeft() {
        let leftStyle = {position: 'relative', textAlign: 'left', left: 0, bottom: 0}
        return (
            <div className={cx('protectContainer')}>
                <div className={cx('protectRight')}>
                    <img src={this.props.data.src} alt="" className={cx('protectImage')}/>
                    <div className={cx('protectShadow')} style={{left: '-50px'}}></div>
                </div>
                <div className={cx('protectLeft')}>
                    <div className={cx('protectLeftCenter')}>
                        <h1>{this.props.data.title}</h1>
                        <p>{this.props.data.info}</p>
                        <MoreInfo info={this.props.data.moreInfo} fontStyle={{color: '#000'}} cellStyle={leftStyle}/>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            this.props.data.reverse ? this.renderImageOnLeft() : this.renderImageOnRight()
        )
    }
}