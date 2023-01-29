import React from 'react'



const l = () => {
    return (
        <>

            <section className="section top-section">
                <div className="content-container content-theme-dark">
                    <img style={{ display: 'block', width: '50%' }} src="/ohoh.png" width="300px" height="300px" />
                    <div className="content-inner">
                        <div className="content-center">
                            <h1>Fast Movers</h1>
                            <p>On time - any time
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <center>
                <a href="/signup" className="button">Sign Up</a>
                <a href="/signin" className="button">Sign In</a>
            </center>

        </>
    )
}

export default l