import React from 'react'
import './home.css'
import { FaInstagram,FaXTwitter,FaLinkedinIn } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='home-container'>
        <nav>
            <a href='#'>Home</a>
            <a href='#'>Projects</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <p>|</p>
            <a href='#'><FaInstagram /></a>
            <a href='#'><FaXTwitter /> </a>
            <a href='#'><FaLinkedinIn /> </a>
        </nav>

        <div className='home'>
            <article>
                <div className='containner' >
                    <h4>HI, I'M Mike</h4>
                    <h1>I’M A WEB DESIGNER</h1>
                    
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    xxxxxxxx

                    </p>
                    <a className='btn'>VIEW MY PROJECTS</a>
                </div>
                
            </article>
            <article >
                <img src='img/p1.png'/>
            </article>
            <div className='img-blur'></div>
            

        </div>
    </div>
  )
}

export default Home