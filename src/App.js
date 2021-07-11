import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import { SingleProject } from "./data";
import Home from "./screens/Home";
import About from "./screens/About";
import Services from "./screens/Services";
import Contact from "./screens/Contact";
import Career from "./screens/Career";
import Portfolios from "./screens/Portfolios";
import Portfolio from "./screens/Portfolio";
import PageNotFound from "./screens/PageNotFound";
import CallButton from "./components/CallButton";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    // AOS.refresh();
  }, []);
  const items = [...SingleProject];
  const _ScrollToTop = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  };
  const ScrollToTop = withRouter(_ScrollToTop);
  return (
    <Router>
      <div className="app">
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/works" exact>
              <Portfolios />
            </Route>
            <Route path="/works/:id" exact>
              <Portfolio data={items} />
            </Route>
            <Route path="/career">
              <Career />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <CallButton />
        </ScrollToTop>
      </div>
    </Router>
  );
};

export default App;
