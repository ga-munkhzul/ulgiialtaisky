import React, { useEffect } from 'react'
//import "https://fonts.googleapis.com/css?family=Poppins:200,300,400,700,900|Display+Playfair:200,300,400,700";
import "../assets/fonts/icomoon/style.css";

import "../assets/css/bootstrap.min.css";
import "../assets/css/magnific-popup.css";
//import "../assets/css/jquery-ui.css";
//import "../assets/css/owl.carousel.min.css";
//import "../assets/css/owl.theme.default.min.css";

import "../assets/css/bootstrap-datepicker.css";
import "../assets/fonts/flaticon/font/flaticon.css";
//import "https://cdn.jsdelivr.net/npm/mediaelement@4.2.7/build/mediaelementplayer.min.css";

//import "../assets/css/aos.css";
import "../assets/css/style.css";

import AOS from 'aos';
import {Carousel, CarouselItem} from 'react-bootstrap';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

//<script src="js/jquery-3.3.1.min.js"></script>
//<script src="js/jquery-migrate-3.0.1.min.js"></script>
//<script src="js/jquery-ui.js"></script>
//<script src="js/popper.min.js"></script>
//<script src="js/bootstrap.min.js"></script>
//<script src="js/owl.carousel.min.js"></script>
//<script src="js/jquery.stellar.min.js"></script>
//<script src="js/jquery.countdown.min.js"></script>
//<script src="js/jquery.magnific-popup.min.js"></script>
//<script src="js/bootstrap-datepicker.min.js"></script>
//
//<script src="js/main.js"></script>

export default function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <React.Fragment>
            <head>
                <meta charSet='utf-8'/>
                <meta name='viewport'content='width=device-width, initial-scale=1, shrink-to-fit=no'/>
            </head>
            <body>
    
                <div className="site-wrap">

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
                                    <h1 className="mb-0"><a href="index.html" className="text-black h2 mb-0">Travelers</a></h1>
                                </div>
                                <div className="col-10 col-md-8 d-none d-xl-block">
                                    <nav className="site-navigation position-relative text-right text-lg-center" role="navigation">

                                    <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                        <li className="active">
                                        <a href="index.html">Home</a>
                                        </li>
                                        <li className="has-children">
                                        <a href="destination.html">Destinations</a>
                                        <ul className="dropdown">
                                            <li><a href="#">Japan</a></li>
                                            <li><a href="#">Europe</a></li>
                                            <li><a href="#">China</a></li>
                                            <li><a href="#">France</a></li>
                                        </ul>
                                        </li>
                                        
                                        <li><a href="discount.html">Discount</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        
                                        <li><a href="contact.html">Contact</a></li>
                                        {/* <li><a href="booking.html">Book Online</a></li> */}
                                    </ul>
                                    </nav>
                                </div>

                                <div className="col-6 col-xl-2 text-right">
                                    <div className="d-none d-xl-inline-block">
                                    <ul className="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                                        <li>
                                        <a href="#" className="pl-0 pr-3 text-black"><span className="icon-tripadvisor"></span></a>
                                        </li>
                                        <li>
                                        <a href="#" className="pl-3 pr-3 text-black"><span className="icon-twitter"></span></a>
                                        </li>
                                        <li>
                                        <a href="#" className="pl-3 pr-3 text-black"><span className="icon-facebook"></span></a>
                                        </li>
                                        <li>
                                        <a href="#" className="pl-3 pr-3 text-black"><span className="icon-instagram"></span></a>
                                        </li>
                                        
                                    </ul>
                                    </div>
                                    <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position:"relative", top: "3px" }}><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

                                </div>

                            </div>
                        </div>
                    </header>

                    <div className="slide-one-item home-slider owl-carousel">
                    <Carousel indicators={true} controls={true} touch={true} interval={1000}>
                        <Carousel.Item>   
                            <div className="site-blocks-cover overlay" style={{ backgroundImage: `url(${require("../assets/images/hero_bg_1.jpg")})` }} data-aos="fade" data-stellar-background-ratio="0.5">
                                <div className="container">
                                <div className="row align-items-center justify-content-center text-center">

                                    <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                                    

                                    <h1 className="text-white font-weight-light">Never Stop Exploring</h1>
                                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga est inventore ducimus repudiandae.</p>
                                    <p><a href="#" className="btn btn-primary py-3 px-5 text-white">Book Now!</a></p>

                                    </div>
                                </div>
                                </div>
                            </div>  
                        </Carousel.Item> 
                        <Carousel.Item>  
                            <div className="site-blocks-cover overlay" style={{backgroundImage: `url(${require("../assets/images/hero_bg_2.jpg")})` }} data-aos="fade" data-stellar-background-ratio="0.5">
                                <div className="container">
                                <div className="row align-items-center justify-content-center text-center">

                                    <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                                    <h1 className="text-white font-weight-light">Love The Places</h1>
                                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga est inventore ducimus repudiandae.</p>
                                    <p><a href="#" className="btn btn-primary py-3 px-5 text-white">Book Now!</a></p>
                                    </div>
                                </div>
                                </div>
                            </div> 
                        </Carousel.Item> 
                    </Carousel> 

                    </div>


                    <div className="site-section">
                        <div className="container overlap-section">
                            <div className="row">
                                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <a href="#" className="unit-1 text-center">
                                    <img src={require("../assets/images/img_2.jpg")} alt="Image" className="img-fluid"/>
                                    <div className="unit-1-text">
                                        <h3 className="unit-1-heading">Write Down Your Experience</h3>
                                    </div>
                                    </a>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <a href="#" className="unit-1 text-center">
                                    <img src={require("../assets/images/img_1.jpg")} alt="Image" className="img-fluid"/>
                                    <div className="unit-1-text">
                                        <h3 className="unit-1-heading">Explore Asian Mountains</h3>
                                    </div>
                                    </a>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <a href="#" className="unit-1 text-center">
                                    <img src={require("../assets/images/img_3.jpg")} alt="Image" className="img-fluid"/>
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
                                    <div className="unit-4-icon mr-4"><span className="text-primary flaticon-airplane"></span></div>
                                    <div>
                                        <h3>Air Ticketing</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-primary flaticon-ship"></span></div>
                                    <div>
                                        <h3>Cruises</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-primary flaticon-route"></span></div>
                                    <div>
                                        <h3>Tour Packages</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
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

                        {/* <div className="nonloop-block-13 owl-carousel"> */}
                        <OwlCarousel items={1}  
                            className="owl-theme"  
                            loop  
                            nav  
                            dots={false}
                            margin={0} >
                            <div className="item">
                                <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 mb-5">
                                    <img src={require("../assets/images/img_1.jpg")} alt="Image" className="img-md-fluid"/>
                                    </div>
                                    <div className="overlap-left col-lg-6 bg-white p-md-5 align-self-center">
                                    <p className="text-black lead">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorem quisquam laudantium, incidunt id laborum, tempora aliquid labore minus. Nemo maxime, veniam! Fugiat odio nam eveniet ipsam atque, corrupti porro&rdquo;</p>
                                    <p className="">&mdash; <em>James Martin</em>, <a href="#">Traveler</a></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 mb-5">
                                    <img src={require("../assets/images/img_2.jpg")} alt="Image" className="img-md-fluid"/>
                                    </div>
                                    <div className="overlap-left col-lg-6 bg-white p-md-5 align-self-center">
                                    <p className="text-black lead">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorem quisquam laudantium, incidunt id laborum, tempora aliquid labore minus. Nemo maxime, veniam! Fugiat odio nam eveniet ipsam atque, corrupti porro&rdquo;</p>
                                    <p className="">&mdash; <em>Clair Augustin</em>, <a href="#">Traveler</a></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 mb-5">
                                    <img src={require("../assets/images/img_4.jpg")} alt="Image" className="img-md-fluid"/>
                                    </div>
                                    <div className="overlap-left col-lg-6 bg-white p-md-5 align-self-center">
                                    <p className="text-black lead">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorem quisquam laudantium, incidunt id laborum, tempora aliquid labore minus. Nemo maxime, veniam! Fugiat odio nam eveniet ipsam atque, corrupti porro&rdquo;</p>
                                    <p className="">&mdash; <em>James Martin</em>, <a href="#">Traveler</a></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </OwlCarousel>
                        {/* </div> */}
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
                            <img src={require("../assets/images/01-greece.jpg")} alt="Image" className="img-fluid"/>
                            <div className="unit-1-text">
                                <strong className="text-primary mb-2 d-block">$590</strong>
                                <h3 className="unit-1-heading">Santorini, Greece</h3>
                            </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <a href="#" className="unit-1 text-center">
                            <img src={require("../assets/images/02-rome.jpg")} alt="Image" className="img-fluid"/>
                            <div className="unit-1-text">
                                <strong className="text-primary mb-2 d-block">$390</strong>
                                <h3 className="unit-1-heading">Rome, Italy</h3>
                            </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <a href="#" className="unit-1 text-center">
                            <img src={require("../assets/images/03-japan.jpg")} alt="Image" className="img-fluid"/>
                            <div className="unit-1-text">
                                <strong className="text-primary mb-2 d-block">$390</strong>
                                <h3 className="unit-1-heading">Mount Fuji, Japan</h3>
                            </div>
                            </a>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <a href="#" className="unit-1 text-center">
                            <img src={require("../assets/images/04-dubai.jpg")} alt="Image" className="img-fluid"/>
                            <div className="unit-1-text">
                                <strong className="text-primary mb-2 d-block">$320</strong>
                                <h3 className="unit-1-heading">Camels, Dubai</h3>
                            </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <a href="#" className="unit-1 text-center">
                            <img src={require("../assets/images/05-london.jpg")} alt="Image" className="img-fluid"/>
                            <div className="unit-1-text">
                                <strong className="text-primary mb-2 d-block">$290</strong>
                                <h3 className="unit-1-heading">Elizabeth Tower, London</h3>
                            </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <a href="#" className="unit-1 text-center">
                            <img src={require("../assets/images/06-australia.jpg")} alt="Image" className="img-fluid"/>
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

                    <div className="site-blocks-cover overlay inner-page-cover" style={{backgroundImage: `url(${require("../assets/images/hero_bg_2.jpg")})`, backgroundAttachment: 'fixed' }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">

                        <div className="col-md-7" data-aos="fade-up" data-aos-delay="400">
                            <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-single-big mb-4 d-inline-block popup-vimeo"><span className="icon-play"></span></a>
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
                            <div className="unit-4-icon mr-4"><span className="text-primary flaticon-airplane"></span></div>
                            <div>
                                <h3>Air Ticketing</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <p><a href="#">Learn More</a></p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div className="unit-4 d-flex">
                            <div className="unit-4-icon mr-4"><span className="text-primary flaticon-ship"></span></div>
                            <div>
                                <h3>Cruises</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <p><a href="#">Learn More</a></p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div className="unit-4 d-flex">
                            <div className="unit-4-icon mr-4"><span className="text-primary flaticon-route"></span></div>
                            <div>
                                <h3>Tour Packages</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <p><a href="#">Learn More</a></p>
                            </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div className="unit-4 d-flex">
                            <div className="unit-4-icon mr-4"><span className="text-primary flaticon-hotel"></span></div>
                            <div>
                                <h3>Hotel Accomodations</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <p><a href="#">Learn More</a></p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div className="unit-4 d-flex">
                            <div className="unit-4-icon mr-4"><span className="text-primary flaticon-sailboat"></span></div>
                            <div>
                                <h3>Sea Explorations</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <p><a href="#">Learn More</a></p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                            <div className="unit-4 d-flex">
                            <div className="unit-4-icon mr-4"><span className="text-primary flaticon-ski"></span></div>
                            <div>
                                <h3>Ski Experiences</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                <p><a href="#">Learn More</a></p>
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
                            <img src={require("../assets/images/hero_bg_1.jpg")} alt="Image" className="img-fluid"/>
                            <h2 className="font-size-regular"><a href="#">How to Plan Your Vacation</a></h2>
                            <div className="meta mb-4">by Theresa Winston <span className="mx-2">&bullet;</span> Jan 18, 2019 at 2:00 pm <span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                            </div> 
                        </div>
                        <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
                            <div className="h-entry">
                            <img src={require("../assets/images/hero_bg_2.jpg")} alt="Image" className="img-fluid"/>
                            <h2 className="font-size-regular"><a href="#">How to Plan Your Vacation</a></h2>
                            <div className="meta mb-4">by Theresa Winston <span className="mx-2">&bullet;</span> Jan 18, 2019 at 2:00 pm <span className="mx-2">&bullet;</span> <a href="#">News</a></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-12 text-center">
                            <a href="#" className="btn btn-outline-primary border-2 py-3 px-5">View All Blog Posts</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="site-section border-top">
                    <div className="container">
                        <div className="row text-center">
                        <div className="col-md-12">
                            <h2 className="mb-5 text-black">Want To Travel With Us?</h2>
                            <p className="mb-0"><a href="booking.html" className="btn btn-primary py-3 px-5 text-white">Book Now</a></p>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="mb-5">
                            <h3 className="footer-heading mb-4">About Travelers</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
                            </div>

                            
                            
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="row mb-5">
                            <div className="col-md-12">
                                <h3 className="footer-heading mb-4">Navigations</h3>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Destination</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">About</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <ul className="list-unstyled">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Discounts</a></li>
                                </ul>
                            </div>
                            </div>

                            

                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                        

                            <div className="mb-5">
                            <h3 className="footer-heading mb-2">Subscribe Newsletter</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.</p>

                            <form action="#" method="post">
                                <div className="input-group mb-3">
                                <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary text-white" type="button" id="button-addon2">Send</button>
                                </div>
                                </div>
                            </form>

                            </div>

                        </div>
                        
                        </div>
                        <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <div className="mb-5">
                            <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                            <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                            <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                            <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                            </div>

                            <p>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p>
                        </div>
                        
                        </div>
                    </div>
                    </footer>
                </div>

                <script src="js/jquery-3.3.1.min.js"></script>
                <script src="js/jquery-migrate-3.0.1.min.js"></script>
                <script src="js/jquery-ui.js"></script>
                <script src="js/popper.min.js"></script>
                <script src="js/bootstrap.min.js"></script>
                <script src="js/owl.carousel.min.js"></script>
                <script src="js/jquery.stellar.min.js"></script>
                <script src="js/jquery.countdown.min.js"></script>
                <script src="js/jquery.magnific-popup.min.js"></script>
                <script src="js/bootstrap-datepicker.min.js"></script>
                <script src="js/aos.js"></script>

                <script src="js/main.js"></script>
                    
            </body>
        </React.Fragment>
    )
}
