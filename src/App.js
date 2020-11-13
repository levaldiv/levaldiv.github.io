import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import About from './pages/About';
import Links from './pages/Links';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <About/>
          </Route>
          <Route path="/projects" exact>
            <Projects/>
          </Route>
          <Route path="/links" exact>
            <Links/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
