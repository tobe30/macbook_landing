import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef = useRef();

 useEffect(() => {
  setTimeout(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.2;
    }
  }, 1000);
}, []);;


  return (
    <section id='hero'>
        <div>
            <h1>Macbook pro</h1>
            <img src="/title.png" alt="Macbook title" />
        </div>

        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline preload="metadata" />
        
        <button>Buy</button>

        <p>From $1599 or $133/mo for 12 months</p>
        
    </section>
  )
}

export default Hero