import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import Slider from 'react-slick';

import Header from './Header';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../assets/fonts/icomoon/style.css';
import '../assets/fonts/flaticon/font/flaticon.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <div className="site-wrap">
        <Header activePage={'home'} />

        <div className="slide-one-item home-slider owl-carousel">
          <Slider {...settings}>
            <div>
              <ParallaxBanner
                className="your-class"
                layers={[
                  {
                    image: require('../assets/images/scene-1.jpeg'),
                    amount: 0.5,
                  },
                ]}
                style={{
                  height: '900px',
                }}
              >
                <div className="site-blocks-cover overlay" data-aos="fade">
                  <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                      <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                        <h1 className="text-white font-weight-light">Never Stop Exploring</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga est inventore ducimus repudiandae.</p>
                        <p>
                          <a onClick={() => history.push('/booking')} className="btn btn-primary py-3 px-5 text-white">
                            Book Now!
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxBanner>
            </div>
            <div>
              <ParallaxBanner
                className="your-class"
                layers={[
                  {
                    image: require('../assets/images/river.jpeg'),
                    amount: 0.5,
                  },
                ]}
                style={{
                  height: '900px',
                }}
              >
                <div className="site-blocks-cover overlay" data-aos="fade">
                  <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                      <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                        <h1 className="text-white font-weight-light">Love The Places</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga est inventore ducimus repudiandae.</p>
                        <p>
                          <a href="#" className="btn btn-primary py-3 px-5 text-white">
                            Book Now!
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxBanner>
            </div>
          </Slider>
        </div>

        <div className="site-section">
          <div className="container overlap-section">
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/img_2.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <h3 className="unit-1-heading">Write Down Your Experience</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/img_1.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <h3 className="unit-1-heading">Explore Asian Mountains</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/img_3.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <h3 className="unit-1-heading">Safe Trip With Airasia</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
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
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
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
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
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
            </div>
          </div>
        </div>

        <div className="site-section block-13 bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7">
                <h2 className="font-weight-light text-black text-center">Testimonials</h2>
              </div>
            </div>

            <div className="nonloop-block-13 owl-carousel">
              <Slider {...settings}>
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
              </Slider>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center">
                <h2 className="font-weight-light text-black">Our Destinations</h2>
                <p className="color-black-opacity-5">Choose Your Next Destination</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/01-greece.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">$590</strong>
                    <h3 className="unit-1-heading">Santorini, Greece</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/02-rome.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">$390</strong>
                    <h3 className="unit-1-heading">Rome, Italy</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/03-japan.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">$390</strong>
                    <h3 className="unit-1-heading">Mount Fuji, Japan</h3>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/04-dubai.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">$320</strong>
                    <h3 className="unit-1-heading">Camels, Dubai</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/05-london.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">$290</strong>
                    <h3 className="unit-1-heading">Elizabeth Tower, London</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                <a href="#" className="unit-1 text-center">
                  <img src={require('../assets/images/06-australia.jpg')} alt="More info" className="img-fluid" />
                  <div className="unit-1-text">
                    <strong className="text-primary mb-2 d-block">$390</strong>
                    <h3 className="unit-1-heading">Opera House, Australia</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="site-section bg-light">
                    
                    </div> */}

        <div
          className="site-blocks-cover overlay inner-page-cover"
          style={{ backgroundImage: `url(${require('../assets/images/hero_bg_2.jpg')})`, backgroundAttachment: 'fixed' }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-7" data-aos="fade-up" data-aos-delay="400">
                <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-single-big mb-4 d-inline-block popup-vimeo">
                  <span className="icon-play"></span>
                </a>
                <h2 className="text-white font-weight-light mb-5 h1">Experience Our Outstanding Services</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section bg-light">
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

        <div className="site-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center">
                <h2 className="font-weight-light text-black">Our Blog</h2>
                <p className="color-black-opacity-5">See Our Daily News &amp; Updates</p>
              </div>
            </div>
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
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <a href="#" className="btn btn-outline-primary border-2 py-3 px-5">
                  View All Blog Posts
                </a>
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
