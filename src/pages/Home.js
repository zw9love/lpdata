/**
 * Created by zw9love on 2017/7/31.
 */
import React, {Component} from 'react';
import styles from '../assets/css/Home.css'
import Header from '../components/Header'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }


    componentDidMount(){
        // this.context.router.history.push("/otherPath")
    }

    render(){
        return (
           <main>
               <Header />
               <section style={{backgroundImage: `url(${require('../assets/img/header_bg.jpg')})`,backgroundSize:'cover'}} className={`${styles.theme_2} ${styles.hero} ${styles['hero--large']} ${styles['section-square-separator']}`}>

                   {/*<div className="row">*/}
                       {/*<div className={`${styles['columns']} ${styles['small-12']} ${styles['small-centered']} ${styles['text-center']}`}>*/}


                           {/*<h1 id="theTarget" className={`${styles['heading']} ${styles['large-9']} ${styles['medium-10']} ${styles['heading--basic']}`}>Stop the Most Attacks</h1>*/}

                           {/*<p className={`${styles['medium-8 ']} ${styles['large-6']} ${styles['text-center']}`}>Most Proven Next-Generation Endpoint Security</p>*/}
                       {/*</div>*/}
                   {/*</div>*/}

                   {/*<div className={`${styles['row']} ${styles['header-static-layer']} ${styles['padding-bottom-medium--large']}`}>*/}
                       {/*<div className={`${styles['columns']} ${styles['medium-12']}`}>*/}
                           {/*<ul className={`${styles['buttons-row']} ${styles['hero-buttons']} ${styles['buttons-row--one']}`}>*/}
                               {/*<li>*/}
                                   {/*<a href="javascript:;" className={`${styles['button']} ${styles['button-primary']}`}>*/}
                                       {/*Learn More*/}
                                   {/*</a>*/}
                               {/*</li>*/}
                           {/*</ul>*/}
                       {/*</div>*/}
                   {/*</div>*/}


                   {/*<div className={`${styles['triangle-overlay']} ${styles['theme_2']}`}>*/}
                       {/*<svg viewBox="0 0 1280 125" xmlns="http://www.w3.org/2000/svg">*/}
                           {/*<path d="M0 142h1280V0L640 112 0 0"></path>*/}
                       {/*</svg>*/}
                   {/*</div>*/}

               </section>
           </main>
        )
    }
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
}