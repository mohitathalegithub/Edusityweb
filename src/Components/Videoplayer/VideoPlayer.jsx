import React from 'react'
import './VideoPlayer.css'
import clg_vdo from '../../assets/vdos.mp4'
const VideoPlayer = ({playState,setPlayState}) => {
  
  return (
    <div className={`video-player ${playState?'':'hide'}`} >
        <video src={clg_vdo} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
