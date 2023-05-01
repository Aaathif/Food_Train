import React from 'react'
import css from './Display2.module.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Display2() {
  return (
    <div className={css.container}>
        <div className={css.col2}>
          <form className={css.form}>
            <input type='text' placeholder='Enter New Address' className={css.newAdd} />
            <div className={css.icon}><HiOutlineLocationMarker /></div>
            <input type='text' placeholder='Enter Phone Number' className={css.num} />
            <div className={css.icon0}><BsFillTelephoneFill /></div>
            <h1 className={css.h1}>Recent Locations</h1>
            <button className={css.button}>No 11, Moragasmulla rd, Rajagiriya</button><br />
            <div className={css.icon1}><HiLocationMarker size={'1.5em'} /></div>
            <button className={css.button}>Dehiwala</button><br />
            <div className={css.icon2}><HiLocationMarker size={'1.5em'} /></div>
            <button className={css.button}>Maradana</button>
            <div className={css.icon3}><HiLocationMarker size={'1.5em'} /></div>
            <div className={css.icon4}><AiFillEdit size={'1.5em'} /></div>
            <div className={css.icon5}><AiFillEdit size={'1.5em'} /></div>
            <div className={css.icon6}><AiFillEdit size={'1.5em'} /></div>
            <Link to='/delivery'>
              <button type="submit" className={css.but1} style={{ width: `200px` }}>Continue</button>
            </Link>
          </form>
        </div>

      
    </div>
  )
}

export default Display2
