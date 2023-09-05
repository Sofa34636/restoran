import React from 'react';
import './AboutUs_content.css';
import imagee from './ocr.jpg';
import imageee from './Ulichnye_tkani_3.jpg';
import imag from './Friends-all-together-at-restaurant-having-meal-1200x854.jpg';

function AboutUs() {
  return (
    <div>
      <div className='header1'></div>
    <div className='All'>

 <div className='advantages__header header-block'>
              <h2 className='header-block__sub-title'>
                Немного о нас
              </h2>
              <div className='header-block__title'>
              Хотите насладиться вкусной едой? Мы получаем самые свежие продукты от надежных поставщиков и включаем их в наши эксклюзивные блюда. На наше меню влияют кулинарные традиции Европы, Дальнего Востока и других уголков мира. Все блюда готовятся нашими лучшими поворами с большой любовью и заботой о каждом госте.
              </div>
            </div>

            <div className='cotenerAll_foto'>
            <img src={imagee} alt='mk' className='advantages__icon1' />
              <div className='cotener_foto'>
              <img src={imageee} alt='mk' className='advantages__icon2' />
              <img src={imag} alt='mk' className='advantages__icon3' />
              </div>
            </div>
    </div>
    </div>
  );
}

export default AboutUs;