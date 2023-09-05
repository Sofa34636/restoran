import React from 'react';
import './Main.css';
import Header from '../components_hed/Header';


function Main() {
  return (
    <main className='main'>
      <section className='top'>
        <div className='container'>
      
          <div className='bloc1'>
            <h1 className='title'>C  I  R  C  L  E</h1>
            <p className='subtitle'>Натуральные ингредиенты, вкусные рецепты и высокий уровень сервиса</p>
            <button className='buy-btn'>
              <a href='/Menu' className='buy-btn__text'>-перейти к меню-</a>
            </button>
          </div>
        </div>
      </section>
    </main>

  );
}

export default Main;
