/**
 * Created by zw9love on 2017/8/4.
 */
import React, {Component} from 'react';
import styles from '../assets/css/Header.css'
import cs from 'classnames/bind'

let cx = cs.bind(styles)

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: true,
            scrollZero:true
        }

        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(){
        let scroll = document.documentElement.scrollTop || document.body.scrollTop
        scroll > 0 ? this.setState({scrollZero:false}) : this.setState({scrollZero:true})
    }

    componentDidMount() {
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll)
    }

    render() {
        return (
            <div className={cx('container',{'containerTop':this.state.scrollZero})} >
                <div className={cx('wrapper')}>
                    <div className={styles.logoWrapper}>
                        <img src={require('../assets/img/logo.png')} alt=""/>
                    </div>
                    <div className={styles.menuWrapper}>
                        <ul>
                            <li>
                                <span className={styles.menuFontCell}>Why Carbon Black?</span>
                                <span className={styles.menuHoverCell}/>
                            </li>
                            <li>
                                <span className={styles.menuFontCell}>Company</span>
                                <span className={styles.menuHoverCell}/>
                            </li>
                            <li>
                                <span className={styles.menuFontCell}>Company</span>
                                <span className={styles.menuHoverCell}/>
                            </li>
                            <li>
                                <span className={styles.menuFontCell}>Company</span>
                                <span className={styles.menuHoverCell}/>
                            </li>
                            <li>
                                <span className={styles.menuFontCell}>Company</span>
                                <span className={styles.menuHoverCell}/>
                            </li>
                            <li>
                                <img className={styles.searchImage} src={require('../assets/img/search.png')} alt=""/>
                                <span className={styles.menuHoverCell}/>
                            </li>
                            <li>
                                <div className={styles.btnWrapper}>
                                    <span>
                                        <span className={styles.btnFontWrapper}>See It Live</span>
                                        <span className={styles.btnHoverWrapper}/>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}