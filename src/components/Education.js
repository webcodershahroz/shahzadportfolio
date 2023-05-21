import React from 'react'

export default function Education(props) {
    return (
        <>
            <h1 id='education' className={`mt-4 fw-bolder text-center text-${props.mode.color}`}>Education</h1>
            <div className={`d-flex container align-items-center justify-content-center`} style={{"height": "fitContent","width": '95vw','margin':'10px auto 10px auto' }}>
                <div className={`d-flex flex-wrap flex-xl-nowrap justify-content-center text-${props.mode.color} `}>
                    <div className="card m-2" style={{ "width": " 18rem" }}>
                        <div className={`card-body bg-${props.mode.background}`}>
                            <h5 className="card-title">Matriculation</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Fauji Foundation Education System Dina</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div> 
                    </div>
                    <div className="card m-2" style={{ "width": " 18rem" }}>
                        <div className={`card-body bg-${props.mode.background}`}>
                            <h5 className="card-title">Intermediate</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Army Public School and College Jhelum</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card m-2" style={{ "width": " 18rem" }}>
                        <div className={`card-body bg-${props.mode.background}`}>
                            <h5 className="card-title">BS Software Engineering</h5>
                            <h6 className="card-subtitle mb-2 text-muted">University Of Gujrat</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
