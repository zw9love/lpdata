/**
 * Created by zw9love on 2017/7/31.
 */
import React, {Component} from 'react';
import styles from '../assets/css/Home.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import MoreInfo from '../components/MoreInfo'


let cx = cs.bind(styles)


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            borderWidth:'0px'
        }
    }


    componentDidMount(){
        // this.context.router.history.push("/otherPath")
        let width;
        let clientHeight = window.innerHeight
        let docHeight = document.body.scrollHeight || document.documentElement.scrollHeight
        if(docHeight > clientHeight){
            // 滚动轴出现了
            width = ( window.innerWidth  - 17 ) / 2 + 1
        }else{
            // 没有滚动轴
            width = window.innerWidth / 2 + 1
        }
        this.setState({borderWidth:width})
    }

    render(){
        let borderWidth = this.state.borderWidth
        return (
            <div>
               <Header />
               <div style={{backgroundImage: `url(${require('../assets/img/header_bg.jpg')})`,backgroundSize:'cover'}} className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <h1>Stop the Most Attacks</h1>
                        <p>Most Proven Next-Generation Endpoint Security</p>
                    </div>
                    <div className={cx('triangle')} style={{borderLeftWidth:borderWidth,borderRightWidth:borderWidth}}></div>
               </div>
                <div className={cx('safeIntroContainer')}>
                    <p>Carbon Black Products</p>
                    <h1>Broadest Security Coverage</h1>
                </div>
                <div className={cx('safeCellContainer')}>
                    <ul>
                        <li>
                            <img src={require('../assets/img/safe1.png')} alt="" className={cx('bgImage')}/>
                            <div className={cx('safeCellFontWrapper')}>
                                <p>Cb Defense</p>
                                <h1>Next-Generation Antivirus + EDR</h1>
                                <MoreInfo classCell={cx('moreInfoCell')} classLine={cx('bottomLine')}/>
                            </div>
                        </li>
                        <li>
                            <img src={require('../assets/img/safe1.png')} alt="" className={cx('bgImage')}/>
                            <div className={cx('safeCellFontWrapper')}>
                                <p>Cb Defense</p>
                                <h1>Next-Generation Antivirus + EDR</h1>
                                <MoreInfo classCell={cx('moreInfoCell')} classLine={cx('bottomLine')}/>
                            </div>
                        </li>
                        <li>
                            <img src={require('../assets/img/safe1.png')} alt="" className={cx('bgImage')}/>
                            <div className={cx('safeCellFontWrapper')}>
                                <p>Cb Defense</p>
                                <h1>Next-Generation Antivirus + EDR</h1>
                                <MoreInfo classCell={cx('moreInfoCell')} classLine={cx('bottomLine')}/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
}