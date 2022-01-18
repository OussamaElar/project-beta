import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProductContainer from './product/product_container';
import ProductCreateContainer from './product/product_create_container';


const App = () => (
      <div>
            <NavBarContainer />
            <Switch>
                  <Route exact path='/' component={MainPage} />
                  <Route exact path='/products' component={props => <ProductContainer {...props}/>} />
                  <AuthRoute exact path='/login' component={LoginFormContainer} />
                  <AuthRoute exact path='/signup' component={SignupFormContainer} />
                  <AuthRoute exact path='/newproduct' component={ ProductCreateContainer }/>
            </Switch>
      </div>
)

export default App;