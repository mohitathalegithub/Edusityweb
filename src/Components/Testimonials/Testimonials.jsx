import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
    const slider=useRef();
    let tx=0
    const slideForward=()=>{
        if(tx > -50){
            tx-=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
   

    }
    const slideBackward=()=>{
        if(tx < 0){
            tx+=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
        
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn'  onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt=""  />
                            <div>
                                <h3>William john</h3>
                                <span>Edisity,USA</span>
                                <p>As a student at Fresh Prints, I've had an incredible experience. The supportive environment and knowledgeable instructors have helped me grow both academically and personally. -William john</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt=""  />
                            <div>
                                <h3>jassy pieera</h3>
                                <span>Edisity,USA</span>
                                <p>Fresh Prints has exceeded my expectations in every way. The hands-on approach to learning and the emphasis on real-world skills have prepared me well for my future career- Jessy</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt=""  />
                            <div>
                                <h3>Sarah L</h3>
                                <span>Edisity,USA</span>
                                <p>"Attending Fresh Prints has been a game-changer for me.  - Sarah L.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt=""  />
                            <div>
                                <h3>Michael H</h3>
                                <span>Edisity,USA</span>
                                <p>I'm so glad I chose Fresh Prints for my education. The flexible learning options allowed me to balance my studies with other commitments, and the supportive staff were always there to help whenever I needed it. - Michael H.</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Testimonials
