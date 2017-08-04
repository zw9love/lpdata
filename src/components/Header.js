/**
 * Created by zw9love on 2017/8/4.
 */
import React, {Component} from 'react';
import styles from '../assets/css/Header.css'

export default class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.logoWrapper}>
                        <img src={require('../assets/img/logo.png')} alt=""/>
                    </div>
                    <div className={styles.menuWrapper}>
                        <ul>
                            <li>Why Carbon Black?</li>
                            <li>Company</li>
                            <li>Company</li>
                            <li>Company</li>
                            <li>Company</li>
                            <li>
                                搜索框
                                {/*<img src="" alt=""/>*/}
                            </li>
                            <li>
                                <div className={styles.btnWrapper}>
                                    <span>
                                        See It Live
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