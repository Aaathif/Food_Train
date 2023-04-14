import React from 'react'
import EventList from './EventList';
import events from './EventDB';

function EventMain() {
  return (
    <div>
      {
        events.map((event,index)=>{
            return <div key={index}><EventList event={event}/></div>
        })
      }
    </div>
  )
}

export default EventMain
