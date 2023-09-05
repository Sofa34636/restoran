import React from 'react';
import './Menu_content.css';
import Foto_con from '../Foto_con/Foto_con';
import Popups from '../popups/popups';

function Menu() {
  return (
    <div className='All1'>
      <div className='Bg_menu'>

        <div className='blok'>
          <div className='blok4'>
            <div className='advantages__heade header-bloc'>
              <div className='header-block__titl'>
                БУРГЕР
              </div>
              <div className='blok'>
                <div >
                  <div className='header-block__sub-titl'>
                    Гамбургер
                  </div>
                  <div className='header-block__sub-titl'>
                    Чизбургер
                  </div>
                  <div className='header-block__sub-titl'>
                    Куриный
                  </div>
                  <div className='header-block__sub-titl'>
                    Грибной
                  </div>
                  <div className='header-block__sub-titl'>
                    Классический
                  </div>
                </div>
                <div className='blok12'>
                  <div className='header-block__sub-2'>
                    70руб.
                  </div>
                  <div className='header-block__sub-2'>
                    75руб.
                  </div>
                  <div className='header-block__sub-2'>
                    340руб.
                  </div>
                  <div className='header-block__sub-2'>
                    320руб.
                  </div>
                  <div className='header-block__sub-2'>
                    300руб.
                  </div>
                </div>
              </div>
            </div>


            <div className='advantages__heade header-bloc'>
              <div className='header-block__titl'>
                СТЕЙК
              </div>
              <div className='blok'>
                <div >
                  <div className='header-block__sub-3'>
                    Классический
                  </div>
                  <div className='header-block__sub-3'>
                    Нью-Йорк
                  </div>
                  <div className='header-block__sub-3'>
                    Скерт
                  </div>

                </div>
                <div className='blok12'>
                  <div className='header-block__sub-titl2'>
                    650руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    780руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    620руб.
                  </div>

                </div>
              </div>
            </div>


            <div className='advantages__heade header-bloc'>
              <div className='header-block__titl'>
                САЛАТ
              </div>
              <div className='blok'>
                <div >
                  <div className='header-block__sub-1'>
                    Греческий
                  </div>
                  <div className='header-block__sub-1'>
                    Цезарь
                  </div>
                </div>
                <div className='blok123'>
                  <div className='header-block__sub-titl2'>
                    290руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    290руб.
                  </div>

                </div>
              </div>
            </div>

          </div>



          <div className='blok4'>
            <div className='advantages__heade header-bloc'>
              <div className='header-block__titl'>
                ПИЦЦА
              </div>
              <div className='blok'>
                <div >
                  <div className='header-block__sub-titl'>
                    Маргарита
                  </div>
                  <div className='header-block__sub-titl'>
                    Гавайская
                  </div>
                  <div className='header-block__sub-titl'>
                    Грибная
                  </div>
                  <div className='header-block__sub-titl'>
                    Вегетарианская
                  </div>
                  <div className='header-block__sub-titl'>
                    Пепперони
                  </div>
                  <div className='header-block__sub-titl'>
                    Сырная
                  </div>
                </div>
                <div className='blok1'>
                  <div className='header-block__sub-titl2'>
                    380руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    420руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    360руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    450руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    450руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    420руб.
                  </div>
                </div>
              </div>
            </div>

            <div className='advantages__heade header-bloc'>
              <div className='header-block__titl'>
                НАПИТКИ
              </div>
              <div className='blok'>
                <div className='hapitki'>
                  <div className='header-block__sub-1'>
                    Лимонад
                  </div>
                  <div className='header-block__sub-1'>
                    Cola
                  </div>
                  <div className='header-block__sub-1'>
                    Коктейль
                  </div>
                  <div className='header-block__sub-1'>
                    Кофе
                  </div>
                  <div className='header-block__sub-1'>
                    Чай
                  </div>
                  <div className='header-block__sub-1'>
                    Fanta
                  </div>
                </div>
                <div className='blok13'>
                  <div className='header-block__sub-titl2'>
                    140руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    150руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    160руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    120руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    90руб.
                  </div>
                  <div className='header-block__sub-titl2'>
                    130руб.
                  </div>
                </div>
              </div>
            </div>

          </div>



        </div >
        <div className='buttonOn'>
        <button className='buy-btn'>
          <a href='#popup' className='buy-btn__text'>-заказать-</a>
        </button>
        <button className='buy-btn1'>
          <a href='#popup2' className='buy-btn__text'>забронировать <br></br>столик</a>
        </button>
<Popups/>
        </div>
      </div>
<Foto_con/>
    </div>
  );
}

export default Menu;