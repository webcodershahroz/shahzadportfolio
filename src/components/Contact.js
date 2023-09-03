import React from 'react'
import { useState } from 'react';

export default function Contact(props) {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");

    const handleNameChange = (e) => {
        setname(e.target.value)
    }
    const handleEmailChange = (e) => {
        setemail(e.target.value)
    }
    const handleSubjectChange = (e) => {
        setsubject(e.target.value)

    }
    const handleMessageChange = (e) => {
        setmessage(e.target.value)

    }


    const saveFeedback = (e) => {
        e.preventDefault();
        const response = fetch('http://localhost:2000/portfolio/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, subject, message })
        }).then((response) => response.text())
            .then((text) => {
                alert(text)
                setname("")
                setemail("")
                setmessage("")
                setsubject("")
            });



    }
    return (
        <>
            <div id='contact' className={`p-5 contact contact-${props.mode.background === 'dark' ? 'dark' : 'light'} `}>
                <section>
                    <h1 className="h1-responsive fw-bolder text-center">Contact us</h1>
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>


                    <div className="row">

                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" onSubmit={saveFeedback}>


                                <div className="row">


                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label htmlFor="name" className="">Your name</label>
                                            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required className="form-control" />
                                        </div>
                                    </div>



                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <label htmlFor="email" className="">Your email</label>
                                            <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} required className="form-control" />
                                        </div>
                                    </div>


                                </div>



                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label htmlFor="subject" className="">Subject</label>
                                            <input type="text" id="subject" name="subject" value={subject} onChange={handleSubjectChange} required className="form-control" />
                                        </div>
                                    </div>
                                </div>



                                <div className="row">


                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <label htmlFor="message">Your message</label>
                                            <textarea type="text" id="message" name="message" value={message} onChange={handleMessageChange} required rows="2" className="form-control md-textarea"></textarea>
                                        </div>

                                    </div>
                                </div>

                                <div className="text-center text-md-left">
                                    <button className="my-2 btn btn-primary" type='submit'>Send</button>
                                </div>
                            </form>


                            <div className="status"></div>
                        </div>




                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Jhelum, Pakistan</p>
                                </li>

                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+92 3495898836</p>
                                </li>

                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>shahrozshahzad17@gmail.com</p>
                                </li>
                            </ul>
                        </div>


                    </div>

                </section>
            </div>
        </>
    )
}
