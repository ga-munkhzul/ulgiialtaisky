import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

export default function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <Header activePage={'blog'} />
        <Banner title="Blog Posts" type="Blog" />

        <div className="site-section">
          <div className="container">
            <div className="row mb-3 align-items-stretch">
              <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
                <div className="h-entry">
                  <img src={require('../assets/images/hero_bg_1.jpg')} alt="More info" className="img-fluid" />
                  <h2 className="font-size-regular">
                    <a href="#">How to Plan Your Vacation</a>
                  </h2>
                  <div className="meta mb-4">
                    by Theresa Winston <span className="mx-2">&bull;</span> Jan 18, 2019 at 2:00 pm <span className="mx-2">&bull;</span> <a href="#">News</a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat
                    rerum voluptatibus a eius.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
                <div className="h-entry">
                  <img src={require('../assets/images/hero_bg_2.jpg')} alt="More info" className="img-fluid" />
                  <h2 className="font-size-regular">
                    <a href="#">How to Plan Your Vacation</a>
                  </h2>
                  <div className="meta mb-4">
                    by Theresa Winston <span className="mx-2">&bull;</span> Jan 18, 2019 at 2:00 pm <span className="mx-2">&bull;</span> <a href="#">News</a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat
                    rerum voluptatibus a eius.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
                <div className="h-entry">
                  <img src={require('../assets/images/hero_bg_2.jpg')} alt="More info" className="img-fluid" />
                  <h2 className="font-size-regular">
                    <a href="#">How to Plan Your Vacation</a>
                  </h2>
                  <div className="meta mb-4">
                    by Theresa Winston <span className="mx-2">&bull;</span> Jan 18, 2019 at 2:00 pm <span className="mx-2">&bull;</span> <a href="#">News</a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat
                    rerum voluptatibus a eius.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
                <div className="h-entry">
                  <img src={require('../assets/images/hero_bg_1.jpg')} alt="More info" className="img-fluid" />
                  <h2 className="font-size-regular">
                    <a href="#">How to Plan Your Vacation</a>
                  </h2>
                  <div className="meta mb-4">
                    by Theresa Winston <span className="mx-2">&bull;</span> Jan 18, 2019 at 2:00 pm <span className="mx-2">&bull;</span> <a href="#">News</a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat
                    rerum voluptatibus a eius.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
                <div className="h-entry">
                  <img src={require('../assets/images/hero_bg_1.jpg')} alt="More info" className="img-fluid" />
                  <h2 className="font-size-regular">
                    <a href="#">How to Plan Your Vacation</a>
                  </h2>
                  <div className="meta mb-4">
                    by Theresa Winston <span className="mx-2">&bull;</span> Jan 18, 2019 at 2:00 pm <span className="mx-2">&bull;</span> <a href="#">News</a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat
                    rerum voluptatibus a eius.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
                <div className="h-entry">
                  <img src={require('../assets/images/hero_bg_2.jpg')} alt="More info" className="img-fluid" />
                  <h2 className="font-size-regular">
                    <a href="#">How to Plan Your Vacation</a>
                  </h2>
                  <div className="meta mb-4">
                    by Theresa Winston <span className="mx-2">&bull;</span> Jan 18, 2019 at 2:00 pm <span className="mx-2">&bull;</span> <a href="#">News</a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat
                    rerum voluptatibus a eius.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <a href="#" className="btn btn-outline-primary border-2 py-3 px-5">
                  Load More Posts...
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
}
