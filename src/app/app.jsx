import React from 'react'
import {Route, Router} from 'react-router-dom';
import Board from './component/board';
import LoginForm from './component/loginForm'
import RegistrationForm from './component/registrationForm';
import ProfileLinks from './component/profileLinks'
import {history} from './helpers/index'

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Router history={history}>
            <div>
              <Route exact path='/' component={ProfileLinks}/>
              <Route path='/login' component={LoginForm}/>
              <Route path='/registration' component={RegistrationForm}/>
              <Board/>
            </div>
          </Router>

        </div>
    );
  }
}




