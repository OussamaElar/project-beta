import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProductContainer from './product/product_container';
import ProductCreateContainer from './product/product_create_container';
import ProductUpdateContainer from './product/product_update_container';


const App = () => (
      <div>
            <NavBarContainer />
            <Switch>
                  <Route exact path='/' component={MainPage} />
                  <Route exact path='/products' component={props => <ProductContainer {...props}/>} />
                  <AuthRoute exact path='/login' component={LoginFormContainer} />
                  <AuthRoute exact path='/signup' component={SignupFormContainer} />
                  <ProtectedRoute exact path='/newproduct' component={props => <ProductCreateContainer {...props} />} />
                  <ProtectedRoute exact path='/updateproduct' component={props => <ProductUpdateContainer {...props} />} />
            </Switch>
      </div>
)

export default App;