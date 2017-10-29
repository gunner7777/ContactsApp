import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContactsList from '../containers/ContactsList';
import About from './About';
import ContactView from '../containers/ContactView';
import ContactEditor from '../containers/ContactEditor';

const List = () => {
  return (
    <div className="contacts">
      <Switch>
        <Route exact path="/" component={ContactsList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/p/:id?" component={ContactView} />
        <Route path="/p/:id/:edit" component={ContactEditor} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default List;