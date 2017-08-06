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
import Footer from '../components/Footer'


let cx = cs.bind(styles)


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            protectAdverData: {},
            adverData: [],
            borderWidth: '0px',
            defenseData: []
        }

        this.renderBorderWidth = this.renderBorderWidth.bind(this)
        this.renderData = this.renderData.bind(this)
        this.renderAdverCell = this.renderAdverCell.bind(this)
        this.renderDefenseCell = this.renderDefenseCell.bind(this)
    }

    renderBorderWidth() {
        this.context.router.history.push("/otherPath")
        let width;
        let clientHeight = window.innerHeight
        let docHeight = document.body.scrollHeight || document.documentElement.scrollHeight
        if (docHeight > clientHeight) {
            // 滚动轴出现了
            width = ( window.innerWidth - 17 ) / 2 + 1
        } else {
            // 没有滚动轴
            width = window.innerWidth / 2 + 1
        }
        this.setState({borderWidth: width})
    }


    componentDidMount() {
        this.renderData();
        // this.context.router.history.push("/otherPath")
    }

    renderData() {
        let data = [
            {
                title: 'Stop Malware & Non-Malware Attacks',
                info: 'Legacy and machine learning AV are not enough to stop new and evolving threats. Cb Defense’s streaming prevention stops all types of attacks by intercepting malicious activity before it causes harm.',
                reverse: true,
                src: require('../assets/img/adver.jpg'),
                moreInfo: 'Learn More'
            },
            {
                title: 'Stop Malware & Non-Malware Attacks',
                info: 'Legacy and machine learning AV are not enough to stop new and evolving threats. Cb Defense’s streaming prevention stops all types of attacks by intercepting malicious activity before it causes harm.',
                reverse: false,
                src: require('../assets/img/adver.jpg'),
                moreInfo: 'Learn More'
            },
            {
                title: 'Stop Malware & Non-Malware Attacks',
                info: 'Legacy and machine learning AV are not enough to stop new and evolving threats. Cb Defense’s streaming prevention stops all types of attacks by intercepting malicious activity before it causes harm.',
                reverse: true,
                src: require('../assets/img/adver.jpg'),
                moreInfo: 'Learn More'
            },
            {
                title: 'Stop Malware & Non-Malware Attacks',
                info: 'Legacy and machine learning AV are not enough to stop new and evolving threats. Cb Defense’s streaming prevention stops all types of attacks by intercepting malicious activity before it causes harm.',
                reverse: false,
                src: require('../assets/img/adver.jpg'),
                moreInfo: 'Learn More'
            }
        ]

        let json = {
            title: 'Protect your organization from Petya / NotPetya Ransomware outbreak',
            info: '',
            reverse: false,
            src: require('../assets/img/protect.jpg'),
            moreInfo: 'Stop Petya / NotPetya Ransomware'
        }

        let defenseData = [
            {
                title: 'Cb Defense',
                info: 'Next-Generation Antivirus + EDR',
                src: require('../assets/img/safe1.png'),
            },
            {
                title: 'Cb Defense',
                info: 'Next-Generation Antivirus + EDR',
                src: require('../assets/img/safe1.png'),
            },
            {
                title: 'Cb Defense',
                info: 'Next-Generation Antivirus + EDR',
                src: require('../assets/img/safe1.png'),
            }
        ]

        this.setState({protectAdverData: json, adverData: data, defenseData: defenseData})
    }

    renderAdverCell() {
        let data = this.state.adverData
        let arr = []
        data.map((val, index) => {
            arr.push(<AdverCell data={val} key={index}/>)
        })

        return arr;
    }

    renderDefenseCell() {
        let data = this.state.defenseData
        let arr = []
        data.map((val, index) => {
            arr.push(
                <li key={index}>
                    <img src={val.src} alt="" className={cx('bgImage')}/>
                    <div className={cx('safeCellFontWrapper')}>
                        <p>{val.title}</p>
                        <h1>{val.info}</h1>
                        <MoreInfo classArrow={cx('arrowImage')} classLine={cx('bottomLine')} cellStyle={{bottom: 20}}/>
                    </div>
                </li>
            )
        })

        return arr;
    }

    render() {
        // let borderWidth = this.state.borderWidth
        return (
            <div>
                <Header />
                <div
                    style={{backgroundImage: `url(${require('../assets/img/header_bg.jpg')})`, backgroundSize: 'cover'}}
                    className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <h1>Stop the Most Attacks</h1>
                        <p>Most Proven Next-Generation Endpoint Security</p>
                        <div>
                            <ThreeLevelBtn centerStyle={{backgroundColor: '#fff', color: '#000'}} title="Learn More"/>
                        </div>
                    </div>
                    <div className={cx('reverseTriangle1')}>
                        <svg viewBox="0 0 1280 125" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 142h1280V0L640 112 0 0"></path>
                        </svg>
                    </div>

                    {/*<div className={cx('triangle')} style={{borderLeftWidth:borderWidth,borderRightWidth:borderWidth}}></div>*/}
                </div>
                <div style={{backgroundColor: '#edf0f4'}}>
                    <div className={cx('safeIntroContainer')}>
                        <p>Carbon Black Products</p>
                        <h1>Broadest Security Coverage</h1>
                    </div>
                    <div className={cx('safeCellContainer')}>
                        <ul>
                            {this.renderDefenseCell()}
                        </ul>
                    </div>
                    <AdverCell data={this.state.protectAdverData}/>
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
                            <img src={require('../assets/img/defense_bottom.png')} alt=""
                                 className={cx('defenseBottomImage')}/>
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
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
                             viewBox="0 0 100 102" preserveAspectRatio="none">
                            <path d="M0 0 L50 100 L100 0 Z"></path>
                        </svg>
                    </div>
                </div>
                <div className={cx('adverContainer')}>
                    {this.renderAdverCell()}
                </div>
                <div className={cx('libContainer')}>
                    <h1>Resource Library</h1>
                    <div className={cx('libWrapper')}>
                        <div className={cx('libLeft')}>
                            <div className={cx('libHoverCell')}>
                                <img src={require('../assets/img/lib_left.png')} alt="" className={cx('libLeftImage')}/>
                                <div className={cx('libLeftShadow')}></div>
                                <div className={cx('libInfoWrapper', 'libInfoLeft')}>
                                    <p>Report</p>
                                    <h1>SC Magazine: “5 Stars” for Cb Defense</h1>
                                    <MoreInfo info="Read More" fontStyle={{color: '#000'}}
                                              cellStyle={{position: 'relative', left: 0, bottom: 0}}/>
                                </div>
                            </div>
                        </div>
                        <div className={cx('libRightTop')}>
                            <div className={cx('libHoverCell')}>
                                <img src={require('../assets/img/lib_right_top.png')} alt=""
                                     className={cx('libLeftImage')}/>
                                <div className={cx('libLeftShadow')}></div>
                                <div className={cx('libInfoWrapper', 'libInfoRight')}>
                                    <p>Report</p>
                                    <h2>Stop Petya/NotPetya Ransomware</h2>
                                    <MoreInfo info="Read More" fontStyle={{color: '#000'}}
                                              cellStyle={{position: 'relative', left: 0, bottom: 0}}/>
                                </div>
                            </div>
                        </div>
                        <div className={cx('libRightBottom')}>
                            <div className={cx('libHoverCell')}>
                                <img src={require('../assets/img/lib_right_top.png')} alt=""
                                     className={cx('libLeftImage')}/>
                                <div className={cx('libLeftShadow')}></div>
                                <div className={cx('libInfoWrapper', 'libInfoRight')}>
                                    <p>Report</p>
                                    <h2>Stop Petya/NotPetya Ransomware</h2>
                                    <MoreInfo info="Read More" fontStyle={{color: '#000'}}
                                              cellStyle={{position: 'relative', left: 0, bottom: 0}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('bottomBtnWrapper')}>
                        <div className={cx('bottomBtnLine', 'bottomBtnLeftLine')}></div>
                        <ThreeLevelBtn />
                        <div className={cx('bottomBtnLine', 'bottomBtnRightLine')}></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
}