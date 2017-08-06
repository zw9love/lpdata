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
            scrollZero: true,
            menuData: ['Why Carbon Black?', 'Company', 'Company', 'Company', 'Company']
        }

        this.handleScroll = this.handleScroll.bind(this)
        this.renderMenu = this.renderMenu.bind(this)
    }

    renderMenu() {
        let data = this.state.menuData
        let arr = []
        data.map((val, index) => {
            arr.push(
                <li key={index}>
                    <span className={cx('menuFontCell')}>{val}</span>
                    <span className={cx('menuHoverCell')}/>
                </li>
            )
        })

        return arr
    }

    handleScroll() {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop
        scroll > 0 ? this.setState({scrollZero: false}) : this.setState({scrollZero: true})
    }

    componentDidMount() {
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        return (
            <div className={cx('container', {'containerTop': this.state.scrollZero})}>
                <div className={cx('wrapper')}>
                    <div className={cx('logoWrapper')}>
                        <img src={require('../assets/img/logo.png')} alt=""/>
                    </div>
                    <div className={cx('menuWrapper')}>
                        <ul>
                            {this.renderMenu()}
                            <li>
                                <img className={cx('searchImage')} src={require('../assets/img/search.png')} alt=""/>
                                <span className={cx('menuHoverCell')}/>
                            </li>
                            <li>
                                <div className={cx('btnWrapper')}>
                                    <span>
                                        <span className={cx('btnFontWrapper')}>See It Live</span>
                                        <span className={cx('btnHoverWrapper')}/>
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