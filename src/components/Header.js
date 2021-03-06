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
        let flag = this.state.scrollZero
        return (
            <div className={cx('container', {'containerTop': flag})}>
                <div className={cx('wrapper')}>
                    <div className={cx('logoWrapper',{'logoTopWrapper':flag})}>
                        {/*<img src={require('../assets/img/logo.png')} alt=""/>*/}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1688.15 187.13">
                            <path fill="#0a0a0a" d="M1673.84 134.32h-28.67l-14.35 24.8 14.32 24.84h28.67l14.35-24.8-14.3-24.84M1613.45 47.56h-35.77l-25 43.13c-3 4.62-4.22 7.26-11.33 7.64h-17.15V2.88h-32.1V184h32.1v-56.5h14.1c6.8.35 8.08 2.8 10.8 7.05l28.47 49.45h35.88l-39.33-68.26zM1468.77 60.44a75.37 75.37 0 0 0-16.2-9.78 68.8 68.8 0 0 0-28.3-5.92 71.33 71.33 0 0 0-36.27 9.74 74.92 74.92 0 0 0-26.85 26.05 66.26 66.26 0 0 0-10 35.27 66.93 66.93 0 0 0 10 35.4 74.8 74.8 0 0 0 26.7 26.18 72.17 72.17 0 0 0 65.15 3.7 74.47 74.47 0 0 0 16.07-9.84l-14.47-25.1a41.7 41.7 0 0 1-13.55 9.8 40.2 40.2 0 0 1-17 3.82 38 38 0 0 1-20.52-5.92 42.6 42.6 0 0 1-15-16.06 45.06 45.06 0 0 1-5.53-22 44.56 44.56 0 0 1 5.53-21.7 42.6 42.6 0 0 1 15-16.07 38 38 0 0 1 20.47-5.88 41.4 41.4 0 0 1 30.2 13.6l11.1-19.2zM1270.87 44.5c-17.14 0-35.06 4.74-54.3 14.23l12.5 21.7c11.18-5.45 23.08-9.58 35.47-9.58 22.8 0 31.14 11.68 32.62 27.34h-37.36c-30.58 0-55.63 18.53-55.63 45.42 0 26.37 21.88 43.5 50.9 43.5 15.8 0 32.08-5.93 42.1-18.6V184h32.24v-82c0-34.57-22.4-57.5-58.53-57.5zm26.3 92.7c0 12.9-13 26.46-35 26.46-15.3 0-26.64-8.17-26.64-21.1s12.92-21.4 29-21.4h32.62zM1148.38 2.88h32.1v181.1h-32.1zM1090 88.22q25.53-13.68 25.53-40a41.45 41.45 0 0 0-6.85-23.3 45.72 45.72 0 0 0-18.95-16.18q-12.1-5.8-27.62-5.74H974v181h91.55c11.06-.2 21-2.3 29.74-6.53a49.63 49.63 0 0 0 20.52-17.5 45.15 45.15 0 0 0 7.37-25.4 44.45 44.45 0 0 0-8.7-26.72q-8.7-12-24.5-19.63zm-84-56.85h48.17q12.1 0 19.87 6.27a19.67 19.67 0 0 1 7.76 16q0 9.47-7.76 15.73t-19.87 6.27H1006zm74.88 116.73q-8.56 7.23-22 7.24H1006v-51.6h53q13.42 0 22 7.25a24.4 24.4 0 0 1 0 37.1zM851.22 51.35a50.85 50.85 0 0 0-26.22-6.7 53 53 0 0 0-24.48 5.78A44.8 44.8 0 0 0 782.92 66V47.56h-32.1V184h32.1V97.8a27.86 27.86 0 0 1 10.92-18.42 34.44 34.44 0 0 1 22-7.37q12.63 0 20.66 8.82t8 22.77V184h31.06V97.28A56.56 56.56 0 0 0 869.1 70a47.12 47.12 0 0 0-17.88-18.65zM695.38 54.48a72.1 72.1 0 0 0-72.38 0 75.27 75.27 0 0 0-26.7 26.05 66.26 66.26 0 0 0-10 35.27 66.92 66.92 0 0 0 10 35.4 74.84 74.84 0 0 0 26.7 26.2 72.1 72.1 0 0 0 72.38 0 74.9 74.9 0 0 0 26.7-26.2 67 67 0 0 0 10-35.4 66.3 66.3 0 0 0-10-35.26 75.33 75.33 0 0 0-26.7-26.06zm-.53 83.3a43.68 43.68 0 0 1-15.13 16.06 38 38 0 0 1-20.53 5.92 38.65 38.65 0 0 1-20.67-5.92 43.27 43.27 0 0 1-15.27-16.06 44.3 44.3 0 0 1-5.66-22 43.82 43.82 0 0 1 5.66-21.7A43.27 43.27 0 0 1 638.53 78a38.65 38.65 0 0 1 20.66-5.92A38 38 0 0 1 679.7 78a44.9 44.9 0 0 1 20.8 37.77 44.34 44.34 0 0 1-5.67 22zM538.9 53.82a58.36 58.36 0 0 0-32.1-9.08 55.66 55.66 0 0 0-47.4 24.74V3h-32.1v181.08h32.12v-21.7a55.66 55.66 0 0 0 47.38 24.75 58.36 58.36 0 0 0 32.1-9.08 61.66 61.66 0 0 0 22.25-25.4 82.52 82.52 0 0 0 8.32-36.85 81.66 81.66 0 0 0-8.32-36.7A61.8 61.8 0 0 0 538.9 53.8zm-12.63 93.56q-11.06 12.38-28.17 12.37-16.85 0-27.63-12.37c-7.2-8.25-11-18.77-11-31.58s3.83-23.3 11-31.45 16.4-12.24 27.63-12.24q17.1 0 28.17 12.25t11.05 31.45q0 19.2-11.05 31.6zM354.7 69.62V47.57h-32.1V184h32.12v-65.9q0-19.47 13.42-31.32c8.95-7.9 20.7-10.93 35.27-10.93V47.57c-14.9 0-39.08 10.58-48.7 22.05zM240.06 44.5c-17.14 0-35.06 4.74-54.3 14.23l12.5 21.7c11.18-5.45 23.08-9.58 35.47-9.58 22.8 0 31.14 11.68 32.62 27.34H229c-30.58 0-55.63 18.53-55.63 45.42 0 26.37 21.88 43.5 50.9 43.5 15.8 0 32.08-5.93 42.1-18.6V184h32.24v-82c0-34.57-22.42-57.5-58.54-57.5zm26.3 92.7c0 12.9-13 26.46-35 26.46-15.3 0-26.64-8.17-26.64-21.1s12.92-21.4 29-21.4h32.62zM140.1 137.16a62.67 62.67 0 1 1 0-87.2l15.78-27.3A94.42 94.42 0 0 0 94.34 0C42.24 0 0 41.9 0 93.57s42.24 93.57 94.34 93.57a94.42 94.42 0 0 0 61.5-22.63z"></path>
                        </svg>
                    </div>
                    <div className={cx('menuWrapper',{'menuTopWrapper':flag})}>
                        <ul>
                            {this.renderMenu()}
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill="#0a0a0a" d="M13.6 12.38a7.43 7.43 0 0 0 1.8-4.84 7.7 7.7 0 1 0-7.7 7.55 7.75 7.75 0 0 0 4.5-1.44l6.16 6.06a1 1 0 0 0 1.36 0 .93.93 0 0 0 0-1.33zM1.54 7.54a6.15 6.15 0 1 1 6.15 6 6.1 6.1 0 0 1-6.16-6"></path>
                                </svg>
                                {/*<img className={cx('searchImage')} src={require('../assets/img/search.png')} alt=""/>*/}
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