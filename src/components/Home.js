import React from 'react'
import MyPic from '../img/mypic.png'
export default function Home(props) {
    return (
        <>
            <div id='home' className={`mycontainer d-flex flex-wrap align-items-center justify-content-center text-${props.mode.color}`}>
                <div className="w-50 details">
                    <div className="name fs-1 fw-bolder">I'm Muhammad Shahroz Shahzad</div>
                    <div className="detail my-4 fs-5">I'm Front-end website developer. I know the technologies like <span className='fw-bold'>HTML, CSS, JavaScript, Bootstrap, ReactJS, NodeJS</span></div>
                </div>
                <div className="d-none d-xl-block img"><img className='my-pic' src={MyPic} alt="" /></div>
            </div>
        </>
    )
}
