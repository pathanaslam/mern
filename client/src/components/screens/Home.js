import React from "react";



const Home=()=>{
    return(
        <div className="home">
            <div className="card home-card">
                <h5>Aslam</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2FsbHBhcGVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60"  />
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is post</p>
                    <input type="text" placeholder="add comment" />
                </div>
            </div>
            
        </div>
    )

}


export default Home