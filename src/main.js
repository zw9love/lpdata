/**
 * Created by zw9love on 2017/08/03.
 */
//main.js
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import './assets/css/Main.css';//使用require导入css文件
// import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router'
import {HashRouter,BrowserRouter,Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import store from './store/index'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Home}>
                {/*/!*默认的路由组件是<RecommendSearchTxt />*!/*/}
                {/*<IndexRoute component={RecommendSearchTxt}/>*/}
                {/*<Route path="/home/industry" component={IndustryNav}/>*/}
                {/*<Route path="/home/order" component={OrderSearchTxt}/>*/}
            </Route>
            {/*<Route path="/show" component={Show}/>*/}
            {/*<Route path="/recommendSearch" component={RecommendSearch}/>*/}
            {/*<Route path="/myOrder" component={MyOrder}/>*/}
            {/*<Route path="/orderSearch" component={OrderSearch}/>*/}
            {/*<Route path="/myLike" component={MyLike}/>*/}
            {/*<Route path="/myComment" component={MyComment}/>*/}
            {/*<Route path="/sugguestion" component={Sugguestion}/>*/}
            {/*<Route path="/loginList" component={LoginList}/>*/}
            {/*<Route path="/phoneLogin" component={PhoneLogin}/>*/}
            {/*<Route path="/orderShow" component={OrderShow}/>*/}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));