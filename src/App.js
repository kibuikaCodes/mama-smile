import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IntroPage from './components/pages/IntroPage';
import SignInPage from './components/pages/SignInPage';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IntroPage}/>
        <Route path="/intro" component={IntroPage} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/nutrition-diet" component={MainPage} />

      </Switch>
    </Router>
  );
}

export default App;
