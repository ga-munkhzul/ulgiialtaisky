import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Header({ activePage }) {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <header className="site-navbar py-1" role="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <h1 className="mb-0">
                <a onClick={() => history.push('/')} className="text-black h2 mb-0">
                  Travelers
                </a>
              </h1>
            </div>
            <div className="col-10 col-md-8 d-none d-xl-block">
              <nav className="site-navigation position-relative text-right text-lg-center" role="navigation">
                <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                  <li className={!activePage || activePage == 'home' ? 'active' : ''}>
                    <a onClick={() => history.push('/')}>Home</a>
                  </li>
                  <li className={activePage == 'destination' ? 'has-children active' : 'has-children'}>
                    <a onClick={() => history.push('/destination')}>Destinations</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Japan</a>
                      </li>
                      <li>
                        <a href="#">Europe</a>
                      </li>
                      <li>
                        <a href="#">China</a>
                      </li>
                      <li>
                        <a href="#">France</a>
                      </li>
                    </ul>
                  </li>
                  <li className={activePage == 'discount' ? 'active' : ''}>
                    <a onClick={() => history.push('/discount')}>Discount</a>
                  </li>
                  <li className={activePage == 'about' ? 'active' : ''}>
                    <a onClick={() => history.push('/about')}>About</a>
                  </li>
                  <li className={activePage == 'blog' ? 'active' : ''}>
                    <a onClick={() => history.push('/blog')}>Blog</a>
                  </li>
                  <li className={activePage == 'contact' ? 'active' : ''}>
                    <a onClick={() => history.push('/contact')}>Contact</a>
                  </li>
                  {/* <li><a href="booking.html">Book Online</a></li> */}
                </ul>
              </nav>
            </div>

            <div className="col-6 col-xl-2 text-right">
              <div className="d-none d-xl-inline-block">
                <ul className="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                  <li>
                    <a href="#" className="pl-0 pr-3 text-black">
                      <span className="icon-tripadvisor"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pl-3 pr-3 text-black">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pl-3 pr-3 text-black">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pl-3 pr-3 text-black">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{ position: 'relative', top: '3px' }}>
                <a href="#" className="site-menu-toggle js-menu-toggle text-black">
                  <span className="icon-menu h3"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
