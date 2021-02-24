import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/layout';

const Home = lazy(() => import('./pages'));
const OtherPage = lazy(() => import('./pages/other-page'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/other-page" component={OtherPage} />
              </Switch>
            </Layout>
          </Suspense>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
