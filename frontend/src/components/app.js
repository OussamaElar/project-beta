import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import './app.css'
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProductContainer from './product/product_container';
import ProductCreateContainer from './product/product_create_container';
import ProductUpdateContainer from './product/product_update_container';
import ProductShowContainer from './product/product_show_container';
import ProfileContainer from './profile/profile_container';


const App = () => (
      <div className='app' id='app'>
            <NavBarContainer />
            <div className='main-container'>
                  <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route exact path='/products' component={props => <ProductContainer {...props} />} />
                        <Route exact path='/products/:productId' component={props => <ProductShowContainer {...props}/> }/>
                        <AuthRoute exact path='/login' component={LoginFormContainer} />
                        <AuthRoute exact path='/signup' component={SignupFormContainer} />
                        <ProtectedRoute exact path='/newproduct' component={props => <ProductCreateContainer {...props} />} />
                        <ProtectedRoute exact path='/updateproduct/:id' component={props => <ProductUpdateContainer {...props} />} />
                        <ProtectedRoute exact path='/profile/:id' component={props => <ProfileContainer {...props}/> }/>
                  </Switch>
            </div>
      </div>
)

export default App;