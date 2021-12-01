import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup.css';
import logo from '../../assets/test1.png'


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

        this.props.signup(user, this.props.history);

  }

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
      // <div className="signup-form-container">
      //   <form onSubmit={this.handleSubmit}>
      //     <div className="signup-form">
      //       <br/>
      //         <input type="text"
      //           value={this.state.email}
      //           onChange={this.update('email')}
      //           placeholder="Email"
      //         />
      //       <br/>
      //         <input type="text"
      //           value={this.state.handle}
      //           onChange={this.update('handle')}
      //           placeholder="Handle"
      //         />
      //       <br/>
      //         <input type="password"
      //           value={this.state.password}
      //           onChange={this.update('password')}
      //           placeholder="Password"
      //         />
      //       <br/>
      //         <input type="password"
      //           value={this.state.password2}
      //           onChange={this.update('password2')}
      //           placeholder="Confirm Password"
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
          <h4>Please fill out all the fields </h4>
          {this.renderErrors()}
          <div className='entry-section'>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' size='40' onChange={this.update('handle')} value={this.state.handle}></input>
          </div>
          <div className='entry-section'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' size='40' onChange={this.update('email')} value={this.state.email} placeholder="Email"></input>
          </div>
          <div className='entry-section'>
            <label htmlFor='pass1'>Password</label>
            <input id='pass1' type='password' size='40' onChange={this.update('password')} value={this.state.password}></input>
          </div>
          <div className='entry-section'>
            <label htmlFor='pass2'>Repeat Password</label>
            <input id='pass2' type='password' size='40' onChange={this.update('password2')} value={this.state.password2}></input>
          </div>
          <div className='button-section'>
            <button className='submit-button btn btn-outline-dark'>Register</button>
            <button className='create-button btn btn-outline-dark'>Login</button>
          </div>
        </form>
      </div>       
    );
  }
}

export default withRouter(SignupForm);