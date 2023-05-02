import React from 'react'
import css from './Display2.module.css';
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { HiLocationMarker } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";
// import { BsFillTelephoneFill  } from "react-icons/bs";

function Display2() {
  return (
    <div style={{backgroundImage:`url(https://www.foodscounter.com/assets/images/banner.jpg)`}}>
      <div className={css.bgr1} >
        <div className={css.back}>
            <form className={css.form}>
              <input type='text' placeholder='Enter address' className={css.newAdd} />
              {/* <span className={css.icon}><HiOutlineLocationMarker /></span> */}
              <input type='text' placeholder='Enter Phone Number' className={css.num} />
              {/* <span className={css.icon0}><BsFillTelephoneFill /></span> */}
              <h1 className={css.h1}>Recent Locations</h1>
              <button className={css.button}>No 11, Moragasmulla rd, Rajagiriya</button><br />
              {/* <div className={css.icon1}><HiLocationMarker size={'1.5em'} /></div> */}
              <button className={css.button}>Dehiwala</button><br />
              {/* <div className={css.icon2}><HiLocationMarker size={'1.5em'} /></div> */}
              <button className={css.button}>Maradana</button>
              {/* <div className={css.icon3}><HiLocationMarker size={'1.5em'} /></div> */}
              <div className={css.icon4}><AiFillEdit size={'1.5em'} /></div>
              <div className={css.icon5}><AiFillEdit size={'1.5em'} /></div>
              <div className={css.icon6}><AiFillEdit size={'1.5em'} /></div>
              <button type="submit" className={css.but1} style={{width:`200px`}}>Continue</button> 
            </form>
        </div>
      </div>
    </div>
  )
}

export default Display2
