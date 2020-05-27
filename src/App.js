import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Destination from './components/Destination';
import Discount from './components/Discount';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Error from './components/Error';

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/destination" component={Destination} />
          <Route exact path="/discount" component={Discount} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/booking" component={Booking} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
