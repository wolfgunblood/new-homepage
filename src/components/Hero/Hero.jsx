import React from 'react';
import "./Hero.scss";
import web3 from "../../assets/images/image-web-3-desktop.jpg";

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-left'>
                <img src={web3} alt="Web3" />
                <div className='hero-left-bottom'>
                    <h2 className='bright-future-left'>The Bright Future of Web 3.0?</h2>
                    <div className='bright-future-right'>
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
            <div className='hero-right'>
                <h2>New</h2>
                <ul>
                    <li>
                        <p className='para-head'>Hydrogen VS Electric Cars</p>
                        <p className='para-content'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </li>
                    <li>
                        <p className='para-head'>The Downsides of AI Artistry</p>
                        <p className='para-content'>What are the possible adverse effects of on-demand AI image generation?</p>
                    </li>
                    <li>
                        <p className='para-head'>Is VC Funding Drying Up?</p>
                        <p className='para-content'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Hero