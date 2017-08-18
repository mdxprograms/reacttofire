import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, loggedIn } from '../actions';

class Admin extends React.Component {
  login = () => {
    const { email, password } = this.refs;
    this.props.login(email.value, password.value);
  }

  loggedIn = () => {
    return this.props.isLoggedIn(); 
  }

  render() {
    const { login, user } = this.props;

    return (
      <div>
        <h1>Admin</h1>

        {this.loggedIn().uid &&
          <div>
              You are logged in {this.props.user.email}! 
          </div>
        }

        {!this.loggedIn().uid &&
          <div>
            <h3>Sign In</h3>
            <p>
              <input type="text" ref="email" />
              <input type="password" ref="password" />
              <button onClick={this.login}>Submit</button>
            </p>
          </div> 
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      dispatch(login(email, password))
    },
    isLoggedIn: () => dispatch(loggedIn)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
