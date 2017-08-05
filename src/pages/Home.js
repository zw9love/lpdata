/**
 * Created by zw9love on 2017/7/31.
 */
import React, {Component} from 'react';
import styles from '../assets/css/Home.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import MoreInfo from '../components/MoreInfo'
import ThreeLevelBtn from '../components/ThreeLevelBtn'
import AdverCell from '../components/AdverCell'


let cx = cs.bind(styles)


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            borderWidth:'0px'
        }

        this.renderBorderWidth = this.renderBorderWidth.bind(this)
    }

    renderBorderWidth(){
        this.context.router.history.push("/otherPath")
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


    componentDidMount(){

    }

    render(){
        // let borderWidth = this.state.borderWidth
        return (
            <div>
               <Header />
               <div style={{backgroundImage: `url(${require('../assets/img/header_bg.jpg')})`,backgroundSize:'cover'}} className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <h1>Stop the Most Attacks</h1>
                        <p>Most Proven Next-Generation Endpoint Security</p>
                    </div>
                   <div className={cx('reverseTriangle1')}>
                       <svg viewBox="0 0 1280 125" xmlns="http://www.w3.org/2000/svg">
                           <path d="M0 142h1280V0L640 112 0 0"></path>
                       </svg>
                   </div>

                    {/*<div className={cx('triangle')} style={{borderLeftWidth:borderWidth,borderRightWidth:borderWidth}}></div>*/}
               </div>
                <div style={{backgroundColor:'#edf0f4'}}>
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
                                    <MoreInfo classArrow={cx('arrowImage')} classLine={cx('bottomLine')}/>
                                </div>
                            </li>
                            <li>
                                <img src={require('../assets/img/safe1.png')} alt="" className={cx('bgImage')}/>
                                <div className={cx('safeCellFontWrapper')}>
                                    <p>Cb Defense</p>
                                    <h1>Next-Generation Antivirus + EDR</h1>
                                    <MoreInfo classArrow={cx('arrowImage')} classLine={cx('bottomLine')}/>
                                </div>
                            </li>
                            <li>
                                <img src={require('../assets/img/safe1.png')} alt="" className={cx('bgImage')}/>
                                <div className={cx('safeCellFontWrapper')}>
                                    <p>Cb Defense</p>
                                    <h1>Next-Generation Antivirus + EDR</h1>
                                    <MoreInfo classArrow={cx('arrowImage')} classLine={cx('bottomLine')}/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <AdverCell />
                    <div className={cx('defenseTitle')}>
                        <h1>Explore Cb Defense</h1>
                        <p>Powerful next-generation antivirus and
                            EDR keeps you safe without slowing you down. </p>
                    </div>
                    <div className={cx('defenseInfo')}>
                        <div className={cx('defenseInfoLeft')}>
                            <ul>
                                <li>
                                    <span>Unparalleled Threat Visibility</span>
                                </li>
                                <li>
                                    <span>Unparalleled Threat Visibility</span>
                                </li>
                                <li>
                                    <span>Unparalleled Threat Visibility</span>
                                </li>
                                <li>
                                    <span>Unparalleled Threat Visibility</span>
                                </li>
                                <li>
                                    <span>Unparalleled Threat Visibility</span>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('defenseInfoRight')}>
                            <div className={cx('defenseImageWrapper')}>
                                <img src={require('../assets/img/defense.png')} alt="" className={cx('defenseImage')}/>
                            </div>
                            <img src={require('../assets/img/defense_bottom.png')} alt="" className={cx('defenseBottomImage')}/>
                        </div>
                    </div>
                    <div className={cx('btnContainer')}>
                        <ul>
                            <li>
                                <h1>Beyond AV Tour</h1>
                                <ThreeLevelBtn />
                            </li>
                            <li>
                                <h1>Beyond AV Tour</h1>
                                <ThreeLevelBtn />
                            </li>
                            <li>
                                <h1>Beyond AV Tour</h1>
                                <ThreeLevelBtn />
                            </li>
                        </ul>
                    </div>
                    <div className={cx('reverseTriangle2')}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                            <path d="M0 0 L50 100 L100 0 Z"></path>
                        </svg>
                    </div>
                </div>
                <div className={cx('adverContainer')}>
                    <AdverCell reverse={true}/>
                    <AdverCell reverse={false}/>
                    <AdverCell reverse={true}/>
                    <AdverCell reverse={false}/>
                </div>
            </div>
        )
    }
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
}