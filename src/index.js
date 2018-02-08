import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SignIn from './components/session/signin';
import SignOut from './components/session/signout';
import Products from './components/products';
import Registration from './components/registration';
// import Home from './components/home';
import Header from './pages/header';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/signup" component={Registration} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signout" component={SignOut} />
        <Route render={() => <h1>not found</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
