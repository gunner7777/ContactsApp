import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import contactsApp from './reducers';
import Contacts from './Contacts';
import { loadState, saveState} from './localstorage';
import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState();

const store = createStore(contactsApp, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Contacts />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
