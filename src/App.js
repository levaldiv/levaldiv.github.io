import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import About from './pages/About';
import Links from './pages/Links';
import Projects from './pages/Projects';

const App = () => {
  return (
    <HashRouter>
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
    </HashRouter>
  );
};

export default App;
