import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { LastLocationProvider } from 'react-router-last-location';
import thunk from 'redux-thunk';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import rootReducer from './duck/store/reducers';
import containers from './containers';
import './App.css';
import {
  Nav,
  Modal,
  Logo,
  ErrorPopup
} from './static';
/* eslint-disable no-underscore-dangle */
const proc = (process.env.MIX_ENV === 'local' || process.env.MIX_ENV === 'staging');
const devTools = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const composeEnhancer = ((proc && devTools) || compose);
const store = createStore(
  rootReducer, compose(applyMiddleware(thunk), composeEnhancer)
);
if (process.env.MIX_ENV === 'production') {
  // eslint-disable-next-line no-console
  console.log = () => {};
}
const Content = () => (
  <React.Fragment>
    <Helmet
      defaultTitle="VISUM"
      titleTemplate="%s - VISUM"
    />
    <Nav />
    <Logo />
    <Modal />
    <ErrorPopup />
    <Switch>
      {containers.map(el => (
        <Route
          key={el.id}
          exact={el.exact}
          render={props => <el.component {...props} />}
          path={el.path}
        />
      ))
      }
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </React.Fragment>
);
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LastLocationProvider>
        <Content />
      </LastLocationProvider>
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById('app'));
