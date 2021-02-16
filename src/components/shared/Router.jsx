import React from 'react';
import { Switch, Route } from 'react-router-dom';
import State from '../Hooks/State';
import Effect from '../Hooks/Effect';
import Ref from '../Hooks/Ref';
import Memo from '../Hooks/Memo';
import Context from '../Hooks/Context';
import LocalData from '../Data/LocalData';
import RemoteData from '../Data/RemoteData';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/state" component={State}/>
      <Route exact path="/effect" component={Effect}/>
      <Route exact path="/ref" component={Ref}/>
      <Route exact path="/memo" component={Memo}/>
      <Route exact path="/context" component={Context}/>
      <Route exact path="/local-data" component={LocalData}/>
      <Route exact path="/remote-data" component={RemoteData}/>
    </Switch>
  );
};

export default Router;