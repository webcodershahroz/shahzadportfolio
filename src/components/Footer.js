import React from 'react'

export default function Footer(props) {
  return (
    <>
      <div className={`d-flex justify-content-center flex-column align-items-center bg-${props.mode.background} text-${props.mode.color} footer`} style={{'padding':'20px'}}>
        <div className="copyright-text">Copyright &copy; 2023 Portfolio Shahroz</div>
        <div className="social-links">
            <a target='_blank' rel="noreferrer" href="https://web.whatsapp.com/"><i className={`text-${props.mode.color} p-1 fa-brands fa-whatsapp`}></i></a>
            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/shahrozshahzad123/"><i className={`text-${props.mode.color} p-1 fa-brands fa-instagram`}></i></a>
            <a target='_blank' rel="noreferrer" href="https://www.facebook.com/mirza.shahroz.351/"><i className={`text-${props.mode.color} p-1 fa-brands fa-facebook`}></i></a>
            <a target='_blank' rel="noreferrer" href="https://twitter.com/shahroz_123"><i className={`text-${props.mode.color} p-1 fa-brands fa-twitter`}></i></a>
        </div>
      </div>
    </>
  )
}
