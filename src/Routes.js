import React from 'react';
import Layout from './hoc/Layout';
import {Switch, Route} from 'react-router-dom';
import './resources/css/app.css';

import Home from './components/home/index'

const Routes=()=>{
    return (
      <Layout>
         <Switch>
            <Route exact component={Home} path="/"/>
         </Switch>
      </Layout>
    );
  }


export default Routes;
