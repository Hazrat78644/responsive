import React from 'react';
// import web from '../images/s1.jpg'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto my-2">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top " alt="servicesimg" />
                    <div className="card-body">
                        <h5 className="card-title font-eight-bold">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                        <Link to="" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;

