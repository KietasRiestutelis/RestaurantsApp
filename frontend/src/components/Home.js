import React from 'react'


function Home() {
    return (
        <div className="Home-picture">
            <div className="card bg-dark text-white border-0">
                <img src="../../assets/Home.jpg" className="card-img" alt="Home-Picture" height="600px"></img>
                    <div className="card-img-overlay">
                        <div className="container">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Home