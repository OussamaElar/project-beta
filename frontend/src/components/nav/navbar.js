import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'


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
                  <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                        <div className="navbar-header">
                              <a className="navbar-brand" href="#">ElarMar</a>
                        </div>
                        <ul className="nav navbar-nav">
                              <li className="active"><a href="#">Home</a></li>
                              <li><a href="#">Profil</a></li>
                              <li><a href="#">Services</a></li>
                        </ul>
                        {this.props.loggedIn ? 
                              <button onClick={this.logoutUser} className='btn btn-danger navbar-right logout'>Logout</button>  :
                              <ul className="nav navbar-nav navbar-right">
                                    <li><Link to='/signup' ><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                    <li><Link to='/login' ><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                              </ul>   
                        } 
                  </div>
                  </nav>
            )
      }
}

export default NavBar;