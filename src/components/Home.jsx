import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const divStyles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    return (
        <div style={divStyles}>
            <h1 className="my-5 display-3">Welcome to the Advanced E-commerce API</h1>
            <p className="lead">Let's get started! Select an option from the nav to begin!</p>
        </div>
    )
}

export default Home;