import React from 'react'
import FiverrLogo from '../img/fiverr.png'
import UpworkLogo from '../img/upwork.png'

export default function Hire() {
  return (
    <>
      <div id='hire' className="hire mt-4 w-100 bg-dark text-light" style={{ 'height': 'fitContent' }}>
        <h1 className="fw-bolder p-2 text-center">Hire me</h1>
        <div className='d-flex justify-content-evenly align-items-center'>
          <a rel="noreferrer" target={"_blank"} className="text-center" href="https://www.fiverr.com/shahroz_123/create-update-you-web-pages-using-html-and-css"><img className='w-50' src={FiverrLogo} alt="Fiverr" /></a>
          <a rel="noreferrer" target={"_blank"} className="text-center" href="https://www.upwork.com/services/product/development-it-an-interactive-website-psd-xd-png-to-react-react-front-end-developer-1645012752415780864"><img className='w-50' src={UpworkLogo} alt="Upwork" /></a>
        </div>
      </div>
    </>
  )
}
