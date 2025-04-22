import heroVid from "/assets/videos/hero.mp4"

function Hero(){
    return(
<div className='hero'>
<div className='flagShip'> iPhone 16 pro</div>
<div className='tagline'>
  Built for Exellence

</div>
<video width={700} autoPlay muted  src={heroVid}></video>
</div>
    )
}
export default Hero