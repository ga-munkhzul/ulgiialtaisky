import React from 'react';
import { useHistory } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function Banner({ title, type }) {
  const history = useHistory();

  return (
    <ParallaxBanner
      className="your-class"
      layers={[
        {
          image: require('../assets/images/hero_bg_2.jpg'),
          amount: 0.5,
        },
      ]}
      style={{
        minHeight: '600px',
        height: 'calc(30vh)',
      }}
    >
      <div className="site-blocks-cover inner-page-cover" data-aos="fade">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
              <h1 className="text-white font-weight-light">{title}</h1>
              <div>
                <a href="#" onClick={() => history.push('/')}>
                  Home
                </a>{' '}
                <span className="mx-2 text-white">&bull;</span> <span className="text-white">{type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
}
