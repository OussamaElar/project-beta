import React from 'react';
import { withRouter } from 'react-router-dom';

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

        this.props.signup(user).then(() => this.props.login(user));

  }

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
          
      <section className="vh-100 sign-form" >
      <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
            <div className="card text-black" >
            <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                  <form className="mx-1 mx-md-4" onSubmit={this.handleSubmit}>

                        <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                              <input 
                                    type="text" 
                                    id="form3Example1c" 
                                    className="form-control" 
                                    value={this.state.handle}
                                    onChange={this.update('handle')}
                              />
                              <label className="form-label" for="form3Example1c">Your Name</label>
                        </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                              <input 
                                    type="email" 
                                    id="form3Example3c" 
                                    className="form-control" 
                                    value={this.state.email}
                                    onChange={this.update('email')}
                              />
                              <label className="form-label" for="form3Example3c">Your Email</label>
                        </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                              <input 
                                    type="password" 
                                    id="form3Example4c" 
                                    className="form-control"   
                                    value={this.state.password}
                                    onChange={this.update('password')}    
                              />
                              <label className="form-label" for="form3Example4c">Password</label>
                        </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                              <input 
                                    type="password" 
                                    id="form3Example4cd" 
                                    className="form-control" 
                                    value={this.state.password2}
                                    onChange={this.update('password2')}
                              />
                              <label className="form-label" for="form3Example4cd">Repeat your password</label>
                        </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                        <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                        />
                        <label className="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                  </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample image"/>

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

export default withRouter(SignupForm);