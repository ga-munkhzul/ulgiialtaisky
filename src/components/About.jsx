import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import { useHistory } from 'react-router-dom';

import AOS from 'aos';
import '../../node_modules/aos/dist/aos.css';

export default function About() {
  const history = useHistory();

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

        <Header activePage={'about'} />
        <Banner title="About Travelers" type="About" />

        <div className="site-section" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-5 mb-md-0">
                <img src={require('../assets/images/hero_bg_2.jpg')} alt="More info" className="img-fluid rounded" />
              </div>
              <div className="col-md-6 pl-md-5">
                <h2 className="font-weight-light text-black mb-4">About Company</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cumque eius modi expedita accusamus alias error totam ab magnam a mollitia
                  magni, distinctio temporibus optio illo sapiente, odio unde natus.
                </p>

                <ul className="list-unstyled">
                  <li className="d-flex align-items-center">
                    <span className="icon-check2 text-primary h3 mr-2"></span>
                    <span>Vitae cumque eius modi expedita</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="icon-check2 text-primary h3 mr-2"></span>
                    <span>Totam at maxime Accusantium</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="icon-check2 text-primary h3 mr-2"></span>
                    <span>Distinctio temporibus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row justify-content-center mb-5" data-aos="fade-up">
              <div className="col-md-7">
                <h2 className="font-weight-light text-black text-center">Our Team</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                <img src={require('../assets/images/person_1.jpg')} alt="More info" className="img-fluid w-50 rounded-circle mb-4" />
                <h2 className="text-black font-weight-light mb-4">Jean McMiller</h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt,
                  quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?
                </p>
                <p>
                  <a href="#" className="pl-0 pr-3">
                    <span className="icon-twitter"></span>
                  </a>
                  <a href="#" className="pl-3 pr-3">
                    <span className="icon-instagram"></span>
                  </a>
                  <a href="#" className="pl-3 pr-3">
                    <span className="icon-facebook"></span>
                  </a>
                </p>
              </div>
              <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                <img src={require('../assets/images/person_2.jpg')} alt="More info" className="img-fluid w-50 rounded-circle mb-4" />
                <h2 className="text-black font-weight-light mb-4">Claire Peters</h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt,
                  quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?
                </p>
                <p>
                  <a href="#" className="pl-0 pr-3">
                    <span className="icon-twitter"></span>
                  </a>
                  <a href="#" className="pl-3 pr-3">
                    <span className="icon-instagram"></span>
                  </a>
                  <a href="#" className="pl-3 pr-3">
                    <span className="icon-facebook"></span>
                  </a>
                </p>
              </div>
              <div className="col-md-6 col-lg-4 text-center mb-5" data-aos="fade-up">
                <img src={require('../assets/images/person_4.jpg')} alt="More info" className="img-fluid w-50 rounded-circle mb-4" />
                <h2 className="text-black font-weight-light mb-4">John Sawyer</h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt,
                  quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?
                </p>
                <p>
                  <a href="#" className="pl-0 pr-3">
                    <span className="icon-twitter"></span>
                  </a>
                  <a href="#" className="pl-3 pr-3">
                    <span className="icon-instagram"></span>
                  </a>
                  <a href="#" className="pl-3 pr-3">
                    <span className="icon-facebook"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section block-13 bg-light">
          <div className="container" data-aos="fade">
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

        <div className="site-section border-top">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h2 className="mb-5 text-black">Want To Travel With Us?</h2>
                <p className="mb-0">
                  <a onClick={() => history.push('/booking')} className="btn btn-primary py-3 px-5 text-white">
                    Book Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
