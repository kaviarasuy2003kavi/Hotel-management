import React, { useState   } from 'react'
import   './Header.css'
import { MdFlight ,MdAttractions } from "react-icons/md";
import { FaBed ,FaCar , FaTaxi } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaPerson } from "react-icons/fa6";
import { Button } from 'antd/es/radio';
import { Input } from 'antd';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
 import {Link, useNavigate} from "react-router-dom"

const Header = ( ) => {
    const [destination ,setdestination] = useState('')
    const [opendate , setopendate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [openOptions ,  setopenOptions] = useState(false);
      const [Options ,  setOptions] = useState(  1 );
     
 const increment = ()=>{
    setOptions (Options + 1)
 }

 const decrement = ()=>{
    setOptions (Options - 1)
 }
 
 const navigate = useNavigate()
 const handlechange = ()=>{
    navigate('/list', {state :{destination,date,Options}})
 }
   return (
  
     <div className="header">  
      
        <div className="headercontainer">
            <div className="headerlist">
            
                        <div className="headerlistitem active">
                            <FaBed />
                            <span>stays</span>
                        </div>
                        <div className="headerlistitem">
                            <MdFlight/>
                            <span>flight</span>
                        </div>
                        <div className="headerlistitem">
                            <FaCar />
                            <span>car rentals</span>
                        </div>
                        <div className="headerlistitem">
                            <MdAttractions />
                            <span>attractions</span>
                        </div>
                        <div className="headerlistitem">
                            <FaTaxi />
                            <span>airport taxis</span>
                        </div> 
            </div>
                 
                  <h1 className='headertitle'> A lifetime of discounts? it's genius.</h1>
                    <p className='headerdesc'>Get rewarded for your travels - unlock instant savings or 10% or more with a free  BookMySite account </p> 
                    <Button className='headerbtn'> sign in / register</Button>
         
                <div className="headersearch">
                        <div className="headersearchitem">
                                <FaBed   className='headericon'/>
                                < input type='text'
                                placeholder='where are you going?'
                                className='headersearchinput'
                                onChange={(e)=>setdestination(e.target.value)}
                                />               
                        </div>
                        <div className="headersearchitem">
                                <SlCalender  className='headericon' onClick={()=>setopendate(!opendate)} />
                                 <span onClick={()=>setopendate(!opendate)} className='headersearchtext'> {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,'dd/MM/yyyy')} `} </span> 
                                { opendate &&  <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                    /> }          
                        </div>
                        <div className="headersearchitem" >
                                 <FaPerson className='headericon' onClick={()=>setopenOptions(!openOptions)}  />
                                 <span onClick={()=>setopenOptions(!openOptions)} className='headersearchtext'> {Options} </span>  
                               { openOptions && <div className="options">
                                    <div className="optionitem">
                                        <span className='optiontext'> persons </span>
                                        <button onClick={()=> decrement()}  className='optioncounter'> - </button>
                                        <span className='optioncounternumber'>{Options} </span>
                                        <button onClick={()=>increment()} className='optioncounter'> + </button>
                                    </div>
                                </div>  }
                                 
                                    
                        </div> 
                        <div className="headersearchitem">
                            <Button className='headerbtn' onClick={()=>{handlechange()}} >   search  </Button>
                         </div> 
                </div> 
        </div>
     </div> 
  )
}

export default Header