import React from 'react'
import videoBg from '/assets/BannerClip.mp4'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Link to=''><video className='w-full' src={videoBg} autoPlay loop muted /></Link>
    </div>
  )
}

export default Home