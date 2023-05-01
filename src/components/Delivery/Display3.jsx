import React from 'react'
import css from './Display3.module.css';
import { BiArrowBack } from "react-icons/bi";

function Display3() {
  return (
    <div>
            <div className={css.bgr2} style={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMz_-QQ85UrZA41S5cDTyeRpWfKQFS5FtcQ&usqp=CAU)`}}>
      <form className={css.form1}>
        <h1 className={css.h11}>Address Information</h1>
        <div className={css.icon}><BiArrowBack size={'2em'}/></div>
       <img src='https://techbeacon.com/sites/default/files/styles/social/public/field/image/google-location-privacy.jpg?itok=g3oTUeP2'/>
       {/* <h2>11, Moragasmulla rd, Rajagiriya, Srilanka</h2> */}
       <input type='text' className={css.add1}  placeholder='11, Moragasmulla rd, Rajagiriya' />
       <input type='text' className={css.add2}  placeholder='Business or building name' />
       <input type='text' className={css.add2}  placeholder='Street number and name' />
       <input type='text' className={css.add2}  placeholder='Area / District' />
       <input type='text' className={css.add2}  placeholder='Landmark' />
       <input type='text' className={css.add2}  placeholder='Phone Number' />
       <button type='submit' className={css.btn}>Save</button>
       <button type='submit' className={css.btn1}>Remove</button>
      </form>
      </div>
    </div>
  )
}

export default Display3
