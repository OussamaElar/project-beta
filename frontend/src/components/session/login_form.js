import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css'
import logo from '../../assets/test1.png';



class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`} className='errors'>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      // <div>
      //   <form onSubmit={this.handleSubmit}>
      //     <div>
      //         <input type="text"
      //           value={this.state.email}
      //           onChange={this.update('email')}
      //           placeholder="Email"
      //         />
      //       <br/>
      //         <input type="password"
      //           value={this.state.password}
      //           onChange={this.update('password')}
      //           placeholder="Password"
      //         />
      //       <br/>
      //       <input type="submit" value="Submit" />
      //       {this.renderErrors()}
      //     </div>
      //   </form>
      // </div>
      <div>
        <form action="" className='signup-form' onSubmit={this.handleSubmit}>
          <img src={logo} alt='/' className='signup-logo' />
          <h4>Please Enter you credentials</h4>
          {this.renderErrors()}
          <div className='entry-section'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' size='40' onChange={this.update('email')} value={this.state.email} placeholder="Email"></input>
          </div>
          <div className='entry-section'>
            <label htmlFor='pass1'>Password</label>
            <input id='pass1' type='password' size='40' onChange={this.update('password')} value={this.state.password}></input>
          </div>
          <div className='button-section'>
            <button className='submit-button btn btn-outline-dark'>Login</button>
          </div>
          <div className='form-footer'>
            <h6>New costumer? <span><Link to='./signup'>Sign Up</Link></span></h6>
          </div>
        </form>
      </div>        
    );
  }
}

export default withRouter(LoginForm);