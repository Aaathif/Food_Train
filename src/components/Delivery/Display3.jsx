import React from 'react'
import css from './Display3.module.css';
import { BiArrowBack } from "react-icons/bi";

function Display3() {
  return (
    <div>
      <div className={css.bgr2} style={{backgroundImage:`url(https://c8.alamy.com/comp/W4HTRW/indian-cuisine-dishes-tikka-masala-dal-paneer-samosa-chapati-chutney-spices-indian-food-on-white-wooden-background-assortment-indian-meal-with-copy-space-for-text-top-view-or-flat-lay-W4HTRW.jpg)`}}>
      <form className={css.form1}>
        <h1 className={css.h11}>Address Information</h1>
        <div className={css.icon}><BiArrowBack size={'2em'}/></div>
       <img src='https://techbeacon.com/sites/default/files/styles/social/public/field/image/google-location-privacy.jpg?itok=g3oTUeP2'/>
       {/* <h2>11, Moragasmulla rd, Rajagiriya, Srilanka</h2> */}
       <input type='text' className={css.add2}  placeholder='Address' />
       <input type='text' className={css.add2}  placeholder='City' />
       <input type='phone' className={css.add2}  placeholder='Phone Number' />

       <button type='submit' className={css.btn}>Save</button>
       <button type='submit' className={css.btn1}>Cancel</button>
      </form>
      </div>
    </div>
  )
}

export default Display3
