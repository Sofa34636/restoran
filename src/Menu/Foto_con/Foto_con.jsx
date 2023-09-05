import React from 'react';
import './Foto_con.css';
import imag1 from './1CuZXql9.jpg';
import imag2 from './AlU9MoVr.jpg';
import imag3 from './CL0KcobU.jpg';
import imag4 from './DnkSO4xu.jpg';

function Foto_con() {
  return (
    <div className='slider middle'>
  <div className='slides'>
    <input type='radio' name='r' id="r1" checked></input>
    <input type='radio' name='r' id="r2" checked></input>
    <input type='radio' name='r' id="r3" checked></input>
    <input type='radio' name='r' id="r4" checked></input>


 <div className="slide s1"><img src={imag1} alt="" /></div>
 <div className="slide"><img src={imag2} alt="" /></div>
 <div className="slide"><img src={imag3} alt="" /></div>
 <div className="slide"><img src={imag4} alt="" /></div>
  </div>

  <div className="navigation">
    <label for="r1" className='bar'></label>
    <label for="r2" className='bar' ></label>
    <label for="r3" className='bar'></label>
    <label for="r4" className='bar'></label>
    </div>
</div>
  );
}

export default Foto_con;
