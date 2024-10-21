import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welding Simulator</h1>
                <p>
                    Simulanis' Paint Virtual Reality Simulator is an impactful alternative training
                    method to traditional coating and spray-painting techniques.
                </p>
                <div className="hero-buttons">
                    <button className="cta-button">Unlock Your Free XR Experience</button>
                    <div className="watch-intro">
                        <img src="/video-thumbnail.png" alt="Watch Intro" />
                        <p>Watch Intro</p>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="https://s3-alpha-sig.figma.com/img/d325/4851/e86e7ea579ef44d279b882e254ca8b23?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bo5asinGwgQzAflZ8K-0UVYLjTZRxuptjmhibOBzkB-1KvZEGDyg1RqkEv28adLQNasF7PZ5VYUWPvjrrNBcnh4oZu6hwTcpqRCbCq9bDFsoBt2~FDCiCDy0efc-q9o1nLe8U183h7vTfHToq1l0bvd6dOw~ERIgtsNF-W2X0Kk2ex1-kWTtkvUsxTYpTomQkYSWuJhsEjbIx7hrKPqZrvvLA9ZF5j0j~Ye1EYTaqCoM7-sPcjXbgTWUF9~3snWmRMbQD6UYvCgF8u-bGqhivJ4VtA0PmQjL5gVxhYN43ftY1-x-nqtWIR9f-3kZAkszqQLnSN~DGCgIt5Ag6B7h1Q__" alt="Simulanis Logo" />
            </div>
        </section>
    );
};

export default Hero;