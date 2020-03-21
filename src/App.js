import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route
} from "react-router-dom";
// import Coins from './components/Coins';
// import Coin from './components/Coin';
import "./sass/app.scss";

//Pages
import Index from "./pages/index";
import About from "./pages/about";
import GetStarted from "./pages/getStarted";
import Academy from "./pages/academy";
import ExchangeFinder from "./pages/exchangfinder";
import Blog from "./pages/blog";
import ExchangeState from "./context/exchange/ExchangeState";
import PostState from "./context/post/PostState";
import Exchange from "./components/Exchange";
import Article from "./components/Article";

const App = () => {
  // const searchExchanges = state => {};
  return (
    <ExchangeState>
      <PostState>
        <Router>
          <Route exact path="/" render={props => <Index {...props} />} />
          <Route exact path="/academy" render={props => <Academy {...props} />} />
          <Route exact path="/get-started" render={props => <GetStarted {...props} />} />
          <Route exact path="/about" render={props => <About {...props} />} />
          <Route exact path="/exchange/:id" render={props => <Exchange {...props} />} />
          <Route exact path="/blog" render={props => <Blog {...props} />} />
          <Route exact path="/blog/:slug" render={props => <Article {...props} />} />
          <Route exact path="/exchange-finder" render={props => <ExchangeFinder {...props} />} />
        </Router>
      </PostState>
    </ExchangeState>
  );
};

export default App;
