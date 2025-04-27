import React from "react";
import { Link } from "react-router-dom";

function InfoCard({title, text, imgSrc, imgPosition, toLink}){
    return(
        <div className="card">
            <div className="row g-0">

                {imgSrc &&
                    <div className={`col-md-4 col-12 ${imgPosition === 'right' ? 'order-md-1' : 'order-md-0'}`}>
                        <img
                        src={imgSrc}
                        alt=""
                        className="img-fluid h-100"
                        style={{ objectFit: 'cover' }}
                        />
                    </div>
                }

                <div className="col-md-8 col-12">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <Link className="btn btn-primary" to={toLink}>Leer más</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;