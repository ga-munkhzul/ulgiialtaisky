import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

export default function Discount() {
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

        <Header activePage={'discount'} />
        <Banner title="Avail with Our Discounted Tours" type="Discount" />

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/01-greece.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">
                      <del className="text-white">$590</del> <span className="mx-1 text-white ">&mdash;</span> $120
                    </strong>
                    <h3 className="unit-1-heading">Santorini, Greece</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/02-rome.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">
                      <del className="text-white">$390</del> <span className="mx-1 text-white ">&mdash;</span> $100
                    </strong>
                    <h3 className="unit-1-heading">Rome, Italy</h3>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/01-greece.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">
                      <del className="text-white">$590</del> <span className="mx-1 text-white ">&mdash;</span> $120
                    </strong>
                    <h3 className="unit-1-heading">Santorini, Greece</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/02-rome.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">
                      <del className="text-white">$390</del> <span className="mx-1 text-white ">&mdash;</span> $100
                    </strong>
                    <h3 className="unit-1-heading">Rome, Italy</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/03-japan.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">
                      <del className="text-white">$490</del> <span className="mx-1 text-white ">&mdash;</span> $110
                    </strong>
                    <h3 className="unit-1-heading">Mount Fuji, Japan</h3>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/04-dubai.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">
                      <del className="text-white">$320</del> <span className="mx-1 text-white ">&mdash;</span> $70
                    </strong>
                    <h3 className="unit-1-heading">Camels, Dubai</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/05-london.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">
                      <del className="text-white">$290</del> <span className="mx-1 text-white ">&mdash;</span> $50
                    </strong>
                    <h3 className="unit-1-heading">Elizabeth Tower, London</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/06-australia.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">
                      <del className="text-white">$2,500</del> <span className="mx-1 text-white ">&mdash;</span> $500
                    </strong>
                    <h3 className="unit-1-heading">Opera House, Australia</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section block-13 bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7">
                <h2 className="font-weight-light text-black text-center">What People Says</h2>
              </div>
            </div>

            <div className="nonloop-block-13 owl-carousel">
              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 mb-5">
                      <img src={require('../assets/images/img_1.jpg')} alt="More info" className="img-md-fluid" />
                    </div>
                    <div className="overlap-left col-lg-6 bg-white p-md-5 align-self-center">
                      <p className="text-black lead">
                        &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorem quisquam laudantium, incidunt id laborum, tempora
                        aliquid labore minus. Nemo maxime, veniam! Fugiat odio nam eveniet ipsam atque, corrupti porro&rdquo;
                      </p>
                      <p className="">
                        &mdash; <em>James Martin</em>, <a href="#">Traveler</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 mb-5">
                      <img src={require('../assets/images/img_2.jpg')} alt="More info" className="img-md-fluid" />
                    </div>
                    <div className="overlap-left col-lg-6 bg-white p-md-5 align-self-center">
                      <p className="text-black lead">
                        &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorem quisquam laudantium, incidunt id laborum, tempora
                        aliquid labore minus. Nemo maxime, veniam! Fugiat odio nam eveniet ipsam atque, corrupti porro&rdquo;
                      </p>
                      <p className="">
                        &mdash; <em>Clair Augustin</em>, <a href="#">Traveler</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 mb-5">
                      <img src={require('../assets/images/img_4.jpg')} alt="More info" className="img-md-fluid" />
                    </div>
                    <div className="overlap-left col-lg-6 bg-white p-md-5 align-self-center">
                      <p className="text-black lead">
                        &ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorem quisquam laudantium, incidunt id laborum, tempora
                        aliquid labore minus. Nemo maxime, veniam! Fugiat odio nam eveniet ipsam atque, corrupti porro&rdquo;
                      </p>
                      <p className="">
                        &mdash; <em>James Martin</em>, <a href="#">Traveler</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center">
                <h2 className="font-weight-light text-black">Our Services</h2>
                <p className="color-black-opacity-5">We Offer The Following Services</p>
              </div>
            </div>
            <div className="row align-items-stretch">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div className="unit-4 d-flex">
                  <div className="unit-4-icon mr-4">
                    <span className="text-primary flaticon-airplane"></span>
                  </div>
                  <div>
                    <h3>Air Ticketing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div className="unit-4 d-flex">
                  <div className="unit-4-icon mr-4">
                    <span className="text-primary flaticon-ship"></span>
                  </div>
                  <div>
                    <h3>Cruises</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div className="unit-4 d-flex">
                  <div className="unit-4-icon mr-4">
                    <span className="text-primary flaticon-route"></span>
                  </div>
                  <div>
                    <h3>Tour Packages</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div className="unit-4 d-flex">
                  <div className="unit-4-icon mr-4">
                    <span className="text-primary flaticon-hotel"></span>
                  </div>
                  <div>
                    <h3>Hotel Accomodations</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div className="unit-4 d-flex">
                  <div className="unit-4-icon mr-4">
                    <span className="text-primary flaticon-sailboat"></span>
                  </div>
                  <div>
                    <h3>Sea Explorations</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <div className="unit-4 d-flex">
                  <div className="unit-4-icon mr-4">
                    <span className="text-primary flaticon-ski"></span>
                  </div>
                  <div>
                    <h3>Ski Experiences</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                    <p>
                      <a href="#">Learn More</a>
                    </p>
                  </div>
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
