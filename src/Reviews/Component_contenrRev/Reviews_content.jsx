import React from 'react';
import I from './full_B4C3FT4W.png';
import II from './full_OPIiC9OJ.png';
import III from './full_SkAOelh2.png';
import './Reviews_content.css';
import ComponentReviws from '../component_reviws/component_reviws';
import ComponentStep from '../Component_step/Component_step';

function Reviews() {
  return (
    <div>
    <div className='All'>
      <div className='getintouch__items'>
        <div className='getintouch__item item-getintouch'>
          <div className='item-getintouch__icon'>
            <img src={II} alt="" className='item-getintouch__icon'></img>
          </div>
          <div className='item-getintouch__text'>НАТУРАЛЬНО</div>
          <div className='item-getintouch__label'>Правильное приготовление еды в соответствии с нормами безопасности и здоровья</div>
        </div>
        
        <div className='getintouch__item item-getintouch'>
          <div className='item-getintouch__icon'>
            <img src={I} alt="" className='item-getintouch__icon'></img>
          </div>
          <div className='item-getintouch__text'>ЛУЧШИЕ ЦЕНЫ</div>
          <div className='item-getintouch__label'>Для постоянных клиентов предусмотрены приятные бонусы и лучшие скидки для наших клиентов</div>
        </div>
        <div className='getintouch__item item-getintouch'>
          <div className='item-getintouch__icon'>
            <img src={III} alt="" className='item-getintouch__icon'></img>
          </div>
          <div className='item-getintouch__text'>БЫСТРАЯ ДОСТАВКА</div>
          <div className='item-getintouch__label'>Оперативные консультации с операторами и согласованию времени</div>
        </div>
      
      </div>
    
    </div>
    <ComponentReviws/>
 <ComponentStep/>
    </div>
    
  );
}

export default Reviews;