
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";

export default function Welcome(){
    return (
            <div className="container text-center text-md-left">
                <h1>Welcome to <span>Data's Advocate</span></h1>
                <Button variant="info">
                    <Link to="WhatIDo" smooth={true} duration={500} className="btn">
                        Let's Get Started
                    </Link>
                </Button>
            </div>
    );
}