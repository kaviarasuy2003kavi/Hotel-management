import React from 'react'
 import './Navbar.css'
 import {Button} from 'antd'
 import   { useState } from 'react'
import {   message } from 'antd';
 

const Navbar = () => {

  const [messageApi, contextHolder] = message.useMessage();
   
  const success = () => {
    messageApi.open({
      type: 'success',

      content:  'you are already Registered our site..',
      duration: 3,  
    });
    setTimeout(messageApi.destroy, 2500);
  };
  const successlogin = () => {
    messageApi.open({
      type: 'success',

      content:  'you are already Login our site..',
      duration: 3,  
    });
    setTimeout(messageApi.destroy, 2500);
  };
  
 

  return (
         <div className='Navbar'>
            <div className="Navcontainer">
                <span className='logo'> BookMySite</span>
                    <div className="Navitems">
                    {contextHolder}
                        <Button className='NavButton'  onClick={success}> register</Button>
                        <Button className='NavButton'  onClick={successlogin}> login</Button>
                    </div>
            </div>
         </div>
  )
}

export default Navbar