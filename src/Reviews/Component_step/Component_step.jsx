import React from 'react';
import './Component_step.css';
import I from './01.png';
import II from './02.png';
import III from './03.png';

function ComponentStep() {
  return (
    <div><div className='getintouch__items1'>
    <div className='getintouch__item1 item-getintouch1'>
      <div className='item-getintouch__icon1'>
        <img src={II} alt="" className='item-getintouch__icon1'></img>
      </div>
      <div className='item-getintouch__text1'>Выберите</div>
      <div className='item-getintouch__label1'>Выберите блюдо, сделайте заказ на сайте или по телефону</div>
    </div>
    
    <div className='getintouch__item item-getintouch1'>
      <div className='item-getintouch__icon1'>
        <img src={I} alt="" className='item-getintouch__icon1'></img>
      </div>
      <div className='item-getintouch__text1'>Подтвердите</div>
      <div className='item-getintouch__label1'>Менеджер свяжется с вами для уточнения деталей</div>
    </div>
    <div className='getintouch__item1 item-getintouch1'>
      <div className='item-getintouch__icon1'>
        <img src={III} alt="" className='item-getintouch__icon1'></img>
      </div>
      <div className='item-getintouch__text1'>Доставим</div>
      <div className='item-getintouch__label1'>Мы с радостью доставим ваш заказ в ближайшие сроки</div>
    </div>
  
  </div>
  </div>
  );
}

export default ComponentStep;