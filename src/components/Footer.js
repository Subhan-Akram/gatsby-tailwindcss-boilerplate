import React from 'react'
import "./Footer.css"
function Footer() {
  return (
   <div className='footer_container'>
     <div className='footer'>
      <div className='footer_foreachlab bd_blue'>
        <h1>Foreach Labs</h1>
        <p>We sail the digital sea and craft new digital
products on steroids.</p>
<button >Contact Us</button>
      </div>
      <div className='footer_content bd_blue'>
        <div className='footer_content_ul_div'>
           <ul>
           <p>Services</p>
            <li>AI Macine Learning</li>
            <li>Metaverse Development</li>
            <li>App Development</li>
            <li>Mobile Development</li>
            <li>AR Development</li>
            <li>VR Development</li>
            <li>Web Development</li>
           </ul>
        </div>
        <div className='footer_content_ul_div'>
           <ul>
           <p>About Us</p>
            <li>Our Story</li>
            <li>Team</li>
            <li>Jobs</li>
            <li>Clients</li>
           </ul>
        </div>
        <div className='footer_content_ul_div'>
           <ul>
           <p>Legacy Pages</p>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Legal Notice</li>
           </ul>
        </div>
      </div>
     
    </div>
    <div className='footer_hr'></div>
    <p className='footer_rights_text'>Foreach Labs @ 2022 All Rights Reserved.</p>
   </div>
  )
}

export default Footer