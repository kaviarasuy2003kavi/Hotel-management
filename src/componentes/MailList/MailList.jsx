import './MailList.css'
import { useState } from 'react'
import {   message } from 'antd';
 

const MailList = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const [open,setopen] = useState(' ')
  
  const success = () => {
    messageApi.open({
      type: 'success',

      content: open + ' ' + 'your Mail has been Registered..',
      duration: 3,  
    });
    setTimeout(messageApi.destroy, 2500);
  };
  
 
 

    return (
        <div className="mail">
          <h1 className="mailTitle">Save time, save money!</h1>
          <span className="mailDesc">Sign up and we'll send the best deals to you</span>
          <div className="mailInputContainer">
            <input type="text" placeholder="Your Email"  onChange={(event)=>(setopen(event.target.value))} />
            {contextHolder}
            <button  onClick={success}>Subscribe</button>
          </div>
        </div>
      )
    }
    
export default MailList