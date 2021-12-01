import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';
import logo from '../../assets/test1.png'
import login_form from '../session/login_form';


class NavBar extends React.Component {
      constructor(props) {
            super(props);
            this.logoutUser = this.logoutUser.bind(this);
            
      }

      logoutUser(e) {
            e.preventDefault();
            this.props.logout();
      }

      render() {
            return (
                  // <nav className="navbar navbar-inverse">
                  // <div className="container-fluid">
                  //       <div className="navbar-header">
                  //             <a className="navbar-brand" href="#">ElarMar</a>
                  //       </div>
                  //       <ul className="nav navbar-nav">
                  //             <li className="active"><a href="#">Home</a></li>
                  //             <li><a href="#">Profil</a></li>
                  //             <li><a href="#">Services</a></li>
                  //       </ul>
                  //       {this.props.loggedIn ? 
                  //             <button onClick={this.logoutUser} className='btn btn-danger navbar-right logout'>Logout</button>  :
                  //             <ul className="nav navbar-nav navbar-right">
                  //                   <li><Link to='/signup' ><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                  //                   <li><Link to='/login' ><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                  //             </ul>   
                  //       } 
                  // </div>
                  // </nav>

                  <nav className='nav-bar'>
                        <ul className='nav-bar-l'>
                              <li><img src={logo} height='40' width='40'/><span className='navbar-menu-item'> ElarMar</span></li>
                              <li className='navbar-menu-item'><Link to='/'>Home</Link></li>
                              <li className='navbar-menu-item'>Services</li>
                              <li className='navbar-menu-item'>About Us</li>
                        </ul>
                              {this.props.loggedIn ? 
                              <button onClick={this.logoutUser} className='btn btn-danger navbar-right logout'>Logout</button> :
                              <ul className='nav-bar-r'>
                                    <li className='navbar-menu-item'><i class="fa fa-sign-in navsupin" aria-hidden="true"></i> <Link to='/login'>Sign In</Link></li>
                                    <li className='navbar-menu-item'><i class="fa fa-user-plus navsupin" aria-hidden="true"></i> <Link to='/signup'>Sign Up</Link></li>
                              </ul>
                              }
                  </nav>
            )
      }
}

export default NavBar;