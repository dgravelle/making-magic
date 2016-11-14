import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import DeckEditor from './components/Decks/DeckEditor';
import SignUp from './components/Users/SignUp';


ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={DeckEditor} />
                <Route path="/signup" component={SignUp} />
            </Route>
        </Router>
    ),
  document.getElementById('root')
);
