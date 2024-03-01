/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

import white_arrow from '../../assets/white-arrow.png'
import mail_icon from '../../assets/mail-icon.png'
const Contact =() =>{

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "fe64ad2c-2662-42d6-8a82-e118e9f266c2");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };


    return(
<div className ='contact'>
    <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon}/></h3>
        <p>feel free to reach out through 
            contact form or find our contact
             information below .your feedback,questions 
             ,and suggestions are important to us as we 
             strive to provide exceptional service to our
              university community.</p>
    
    <ul>
        <li><img src={mail_icon} alt=""/>Contact@gopinadh.versal.app</li>
        <li><img src={phone_icon} alt=""/>+91 8074732620</li>
        <li><img src={location_icon} alt=""/>puligaddavaripalem village <br/>cherukupalli mandal <br/>guntur district</li>
    </ul>
    </div>
    <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>enter name : </label>
            <input type= "text" name='name' placeholder='enter your name ' required/>  
            <label>Phone number :</label>
            <input type= "tel" name='phone' placeholder='enter your mobile number ' required/>  
            <label>write your messages here</label>
            <textarea name="message" rows="6" placeholder='enter your message' required/>
            <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt=""/></button>
                </form>
                <span>{result}</span>
    </div>
</div>
    )
}
export default Contact