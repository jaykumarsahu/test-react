import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import SignIn from './components/session/signin';
import SignOut from './components/session/signout';
import Products from './components/products';
import Registration from './components/registration';
// import Home from './components/home';
import Header from './pages/header';
import store from './store';


import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/signup" component={Registration} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signout" component={SignOut} />
          <Route render={() => <h1>not found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
