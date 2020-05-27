import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

export default function Contact() {
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

        <Header activePage={'contact'} />
        <Banner title="Get In Touch" type="Contact" />

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
                      <input type="text" id="fname" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label className="text-black" htmlFor="lname">
                        Last Name
                      </label>
                      <input type="text" id="lname" className="form-control" />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label className="text-black" htmlFor="email">
                        Email
                      </label>
                      <input type="email" id="email" className="form-control" />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label className="text-black" htmlFor="subject">
                        Subject
                      </label>
                      <input type="subject" id="subject" className="form-control" />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <label className="text-black" htmlFor="message">
                        Message
                      </label>
                      <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..." />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <input type="submit" value="Send Message" className="btn btn-primary py-2 px-4 text-white" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5">
                <div className="p-4 mb-3 bg-white">
                  <p className="mb-0 font-weight-bold">Address</p>
                  <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

                  <p className="mb-0 font-weight-bold">Phone</p>
                  <p className="mb-4">
                    <a href="#">+1 232 3235 324</a>
                  </p>

                  <p className="mb-0 font-weight-bold">Email Address</p>
                  <p className="mb-0">
                    <a href="#">youremail@domain.com</a>
                  </p>
                </div>

                <div className="p-4 mb-3 bg-white">
                  <img src={require('../assets/images/hero_bg_1.jpg')} alt="More info" className="img-fluid mb-4 rounded" />
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
