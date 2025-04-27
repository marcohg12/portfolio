import React from "react";
import { Link } from "react-router-dom";

function InfoCard({title, text, imgSrc, imgPosition, toLink}){
    return(
        <Link className="card border-0 shadow rounded-3 hover-card text-decoration-none" to={toLink}>
            <div className="row g-0">

                {imgSrc &&
                    <div className={`col-md-4 col-12 ${imgPosition === 'right' ? 'order-md-1' : 'order-md-0'}`}>
                        <img
                        src={imgSrc}
                        alt=""
                        className={`img-fluid h-100 ${imgPosition === 'right' ? 'rounded-end' : 'rounded-start'}`}
                        style={{ objectFit: 'cover' }}
                        />
                    </div>
                }

                <div className="col-md-8 col-12">
                    <div className="card-body m-3">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <Link className="btn btn-primary" to={toLink}>Leer más</Link>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default InfoCard;