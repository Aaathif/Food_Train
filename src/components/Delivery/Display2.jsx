import React, { useState } from 'react'
import css from './Display2.module.css';
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { HiLocationMarker } from "react-icons/hi";
import { AiFillEdit } from "react-icons/ai";
// import { BsFillTelephoneFill  } from "react-icons/bs";
import axios from 'axios';

function Display2() {
  const [info, setInfo] = useState({})

  const handleChange = (e) => {
    setInfo((prev) => ({...prev, [e.target.name]: e.target.value}))
  } 


  const handleClick = async (e) => {
    alert("Hello submitted")
    e.preventDefault();
    const data = new FormData();
    data.append("upload_preset", "upload");
    try {
      const newDelivery = {
        ...info,
      };
      await axios.post("http://localhost:8000/api/delivery", newDelivery)
    } catch (err) {
      console.log(err);
    }
  } 

  return (
    <div style={{backgroundImage:`url(https://www.foodscounter.com/assets/images/banner.jpg)`}}>
      <div className={css.bgr1} >
        <div className={css.back}>
            <form className={css.form} onSubmit={handleClick}>
              <input type='text' name="address" placeholder='Enter address' className={css.newAdd} onChange={handleChange}/>
              {/* <span className={css.icon}><HiOutlineLocationMarker /></span> */}
              <input type='text' name="phoneNo" placeholder='Enter Phone Number' className={css.num} onChange={handleChange}/>
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
