/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={() =>{
                setPlayState(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow s Leaders Today</h2>
            <p>Emback on a transformative educational journey with our university 
                comprehensive education programs.our cutting-edge curriculum is 
                designed to empower students with the knowledge,skills, and experiences 
                neede to excel in the dynamic field of education </p>
            <p>With a focus on innoviation,hands -on leraning, and 
                personalized mentorship,our programs prepare aspiring 
                educator o make a meaningfull impact in clssrooms,schools
                ,and communities .</p>
            <p>Wheather you aspire to become a teacher,administrator,
                counselor,or educational leader ,our diverse range of
                 programs offers the perfect pathway to achieve your 
                 goals and unlock your goals and unlock your full potential
                  in shaping the future of education </p>


        </div>
    </div>
  )
}

export default About