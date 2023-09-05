import React from 'react';
import './popups.css';

function Popups() {
  return (
    <div>
<div id='popup' className='popup'>
  <a href='#header' className='popup__area'></a>
  <div className='popup__body'>
    <div className='popup__content'>
      <a href='#header' className='popup__close'>X</a>
      <div className='popup__title'>Напишите ваш заказ в поле ниже</div>
      <div className='popup__text'>
       <textarea name='@' cols="90" rows='20'></textarea>
      </div>
    </div>
  </div>
</div>

<div id='popup2' className='popup'>
  <a href='#header' className='popup__area'></a>
  <div className='popup__body'>
    <div className='popup__content'>
      <a href='#header' className='popup__close'>X</a>
      <div className='popup__title'>Для бронирования столика свяжитесь с нашим оператором по номеру:</div>
      <div className='popup__text'>
       Наталья Ивановна - 84934732387
      </div>
    </div>
  </div>
</div>
</div>
    );
}

export default Popups;