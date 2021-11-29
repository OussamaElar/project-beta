import React from 'react';
import { withRouter } from 'react-router-dom';
import './login.css'
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
          <li key={`error-${i}`}>
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
      <section className="h-100 gradient-form login-from" >
            <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-xl-10">
                  <div className="card rounded-3 text-black">
                  <div className="row g-0">
                        <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">

                        <div className="text-center">
                              <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/lotus.png" className='sm-logo'  alt="logo" />
                              <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                              <p>Please login to your account</p>
                               {this.renderErrors()}
                              <div className="form-outline mb-4">
                                    <input 
                                          type="email" 
                                          id="form2Example11" 
                                          className="form-control" 
                                          placeholder="Phone number or email address"
                                          value={this.state.email}
                                          onChange={this.update('email')}
                                    />
                                    <label className="form-label" htmlFor="form2Example11">Username</label>
                              </div>

                              <div className="form-outline mb-4">
                                    <input 
                                          type="password" 
                                          id="form2Example22" 
                                          className="form-control" 
                                          value={this.state.password}
                                          onChange={this.update('password')}      
                                    />
                                    <label className="form-label" htmlFor="form2Example22">Password</label>
                              </div>

                              <div className="text-center pt-1 mb-5 pb-1">
                              <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log in</button>
                              <a className="text-muted" href="#!">Forgot password?</a>
                              </div>

                              <div className="d-flex align-items-center justify-content-center pb-4">
                              <p className="mb-0 me-2">Don't have an account?</p>
                              <button type="button" className="btn btn-outline-danger">Create new</button>
                              </div>

                        </form>

                        </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2 side-shit">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">We are more than just a company</h4>
                        <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        </div>
                  </div>
                  </div>
                  </div>
            </div>
            </div>
      </section>   
    );
  }
}

export default withRouter(LoginForm);