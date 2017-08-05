/**
 * Created by zengwei on 2017/8/6.
 */
import React, {Component} from 'react';
import styles from '../assets/css/AdverCell.css'
import cs from 'classnames/bind'

import MoreInfo from '../components/MoreInfo'

let cx = cs.bind(styles)

export default class AdverCell extends Component{
    constructor(props){
        super(props)
        this.renderImageOnRight = this.renderImageOnRight.bind(this)
        this.renderImageOnLeft = this.renderImageOnLeft.bind(this)
    }

    renderImageOnRight(){
        return(
            <div className={cx('protectContainer')}>
                <div className={cx('protectLeft')}>
                    <div className={cx('protectLeftCenter')}>
                        <h1>Protect your organization from Petya / NotPetya Ransomware outbreak</h1>
                        <MoreInfo info="Stop Petya / NotPetya Ransomware" fontStyle={{color:'#000'}} cellStyle={{position:'relative',textAlign:'right',marginRight:'20px'}}/>
                    </div>
                </div>
                <div className={cx('protectRight')}>
                    <img src={require('../assets/img/adver.jpg')} alt="" className={cx('protectImage')}/>
                    <div className={cx('protectShadow')}></div>
                </div>
            </div>
        )
    }

    renderImageOnLeft(){
        return(
            <div className={cx('protectContainer')}>
                <div className={cx('protectRight')}>
                    <img src={require('../assets/img/adver.jpg')} alt="" className={cx('protectImage')}/>
                    <div className={cx('protectShadow')} style={{left:'-50px'}}></div>
                </div>
                <div className={cx('protectLeft')}>
                    <div className={cx('protectLeftCenter')}>
                        <h1>Stop Malware & Non-Malware Attacks</h1>
                        <p>Legacy and machine learning AV are not enough to stop new and evolving threats. Cb Defense’s streaming prevention stops all types of attacks by intercepting malicious activity before it causes harm.</p>
                        <MoreInfo info="Stop Petya / NotPetya Ransomware" fontStyle={{color:'#000'}} cellStyle={{position:'relative',textAlign:'left',left:0,bottom:0}}/>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            this.props.reverse ? this.renderImageOnLeft() : this.renderImageOnRight()
        )
    }
}