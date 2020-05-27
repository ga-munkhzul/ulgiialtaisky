import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export default function Booking() {
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

        <Header activePage={'booking'} />
        <Banner title="Book A Tour" type="Booking" />

        <div className="site-section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-7 mb-5">
                <form action="#" className="p-5 bg-white">
                  <div className="row form-group">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label className="text-black" htmlFor="fname">
                        First Name
                      </label>
                      <input type="text" id="fname" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col-md-6">
                      <label className="text-black" htmlFor="lname">
                        Last Name
                      </label>
                      <input type="text" id="lname" className="form-control" placeholder="Last Name" />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label className="text-black" htmlFor="date">
                        Date of Travel
                      </label>
                      <DateTime inputProps={{ placeholder: 'Date of visit' }} dateFormat="YYYY/MM/DD" timeFormat={false} />
                    </div>
                    <div className="col-md-6">
                      <label className="text-black" htmlFor="email">
                        Email
                      </label>
                      <input type="email" id="email" className="form-control" placeholder="Email" />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label className="text-black" htmlFor="treatment">
                        How Many Person
                      </label>
                      <select name="treatment" id="treatment" className="form-control">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5+</option>
                      </select>
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label className="text-black" htmlFor="treatment">
                        Destination
                      </label>
                      <select name="treatment" id="treatment" className="form-control">
                        <option value="">Japan</option>
                        <option value="">Europe</option>
                        <option value="">China</option>
                        <option value="">France</option>
                        <option value="">Philippines</option>
                      </select>
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label className="text-black" htmlFor="note">
                        Notes
                      </label>
                      <textarea name="note" id="note" cols="30" rows="5" className="form-control" placeholder="Write your notes or questions here..." />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <input type="submit" value="Send" className="btn btn-primary py-2 px-4 text-white" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5">
                <div className="p-4 mb-3 bg-white">
                  <img src={require('../assets/images/hero_bg_1.jpg')} alt="more info" className="img-fluid mb-4 rounded" />
                  <h3 className="h5 text-black mb-3">More Info</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi
                    perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary px-4 py-2 text-white">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
}
