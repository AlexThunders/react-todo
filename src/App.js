import React, {lazy, Suspense} from 'react';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContextProvider from './components/contexts/MainContext';
import CalendarContextProvider from './components/contexts/CalendarContext';
// import Home from './components/Home/Home';
// import Reminder from './components/Reminder/Reminder';


const Home = lazy(() => import('./components/Home/Home'));
const Reminder = lazy(() => import('./components/Reminder/Reminder'));

function App() {
  return (
          <div>
            <MainContextProvider>
              <CalendarContextProvider>
                <BrowserRouter basename='/'>
                    <Header />
                    <Navbar />
                    <Suspense fallback={<div className="loader"></div>}>
                      <Switch>
                        <Route exact path="/appsR7/2021/todo" component={Home} />
                        <Route path="/appsR7/2021/todo/Reminder" component={Reminder} />
                      </Switch>
                    </Suspense>
                </BrowserRouter>
              </CalendarContextProvider>
            </MainContextProvider>
          </div>
  );
}

export default App;
