import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';
import Signin from './components/Signin';
import SearchById from './components/SearchById';
import AddStore from './components/AddStore';

import {Provider} from 'react-redux';
import store from './store';
import AllStores from './components/AllStores';
import Search from './components/Search';
import SearchByName from './components/SearchByName';
import SearchByRegion from './components/SearchByRegion';
import EditDetails from './components/EditDetails';
import EditMap from './components/EditMap';
import SearchBothTimes from './components/SearchBothTimes';
import EditBothTimeDetails from './components/EditBothTimeDetails';



class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Landing} /> 
              <Route path="/login" exact component={Signin} /> 
              <Route path="/search" exact component={Search} />
              <Route path="/searchstore" exact component={SearchById} /> 
              <Route path="/editdetails" exact component={EditDetails}/> 
              <Route path="/editmap" exact component={EditMap}/> 
              <Route path="/searchbothtimes" exact component={SearchBothTimes}/> 
              <Route path="/editbothtimes" exact component={EditBothTimeDetails}/> 
              <Route path="/searchstorebyname" exact component={SearchByName} /> 
              <Route path="/searchstorebyregion" exact component={SearchByRegion} /> 
              <Route path="/addstore" exact component={AddStore} /> 
              <Route path="/allstores" exact component={AllStores} /> 
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
