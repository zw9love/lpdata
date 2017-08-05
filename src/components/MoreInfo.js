/**
 * Created by zengwei on 2017/8/5.
 */
import React, {Component} from 'react';
import styles from '../assets/css/MoreInfo.css'
import cs from 'classnames/bind'

let cx = cs.bind(styles)

export default class MoreInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            info:'View Product'
        }
    }

    componentDidMount(){
        // console.log(this.props.classCell)
    }

    render(){
        return(
            <div className={cx('moreInfoCell',this.props.classCell)}>
                <span>
                    {this.props.info || this.state.info}
                    <span className={cx('bottomLine',this.props.classLine)} />
                </span>
                <img src={require('../assets/img/arrow.svg')} alt="" className={cx('arrowImage')}/>
            </div>
        )
    }
}