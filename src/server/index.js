import React from "react";
import App from "../App.js";
import express from "express";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import MovieSearchReducer from "../store/reducers/movieSearchReducer";
import MovieDetailsReducer from "../store/reducers/movieDetailsReducer";
import thunk from "redux-thunk";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MovieSearchPage from "../pages/MovieSearchPage";
import MovieDetailsContainer from '../containers/MovieDetailsContainer/MovieDetailsContainer';
// import ResultsBody from "../components/ResultsBody/ResultsBody.js";
import { renderToString } from "react-dom/server";
import { createMemoryHistory } from 'history';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;
const history = createMemoryHistory();

const rootReducer = combineReducers({
  msr: MovieSearchReducer,
  mdr: MovieDetailsReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const routing = renderToString(
  <Provider store={store} history={history} >
    <Router>
      <App />
      <Switch>
        <Route path="/" exact component={MovieSearchPage} />
        <Route path="/search/" component={MovieSearchPage} />
        <Route path="/movie/:id" component={MovieDetailsContainer} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
);

const app = express();
//app.use(express.static("public"));
const preloadedState = store.getState();
console.log(routing);
console.log(preloadedState.msr);


app.get("*", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <title>Document</title>
    </head>
    <body>
        <div id="root">${(routing, preloadedState.msr)}</div>
    </body>
    </html>`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server is listening");
});