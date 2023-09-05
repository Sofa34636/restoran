import React from 'react';
import './Footer.css';
import image from './pngwingut.com.png';
import image1 from './pngwinginst.com (2).png';
import image2 from './pngwingft.com (2).png';
import image3 from './pngwingfs.com (2).png';


function Footer() {
  return (
    
    <div className="App">
      
      <footer className='footer'>
        <section className='page__advantages advantages'>
          <div className='advantages__container _container'>
            <div className='advantages__header header-block'>
              <h2 className='header-block__title'>
                МЫ В СОЦСЕТЯХ
              </h2>
              <div className='header-block__sub-title'>
                Следите за свежими новостями и акциями
              </div>
            </div>
            <div className='advantages__body'>
              <div className='advantages__colum'>
                <div className='advantages__iten'>
                  <div >
<a href="https://www.youtube.com/">
                    <img href="https://www.youtube.com/" src={image} alt='mk' className='advantages__icon' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='advantages__colum'>
                <div className='advantages__iten'>
                  <div >
                  <a href="https://t.me/s/instagram">
                    <img src={image1} alt='mk' className='advantages__icon' /></a>
                  </div>
                </div>
              </div>
              <div className='advantages__colum'>
                <div className='advantages__iten'>
                  <div >
                  <a href="https://hca.twimg.com/ru/using-twitter/create-twitter-account">
                    <img src={image2} alt='mk' className='advantages__icon' /></a>
                  </div>
                </div>
              </div>
              <div className='advantages__colum'>
                <div className='advantages__iten'>
                  <div>
                  <a href="https://www.facebook.com">
                    <img src={image3} alt='mk' className='advantages__icon'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='bground'>
          <div className='text__footer_blok'>
            <div className='text__footer'>
              +8(942)-241-67-89
            </div>
            <div className='text__footer'>
              г. Владивосток, Некросовский переулок, 24
            </div>
            <div className='text__footer'>
              mail@site.ru
            </div>
          </div>
        </div>
      </footer>
      </div>
  );
}

export default Footer;

