import React from "react";
import { Link } from "react-router-dom";

function InfoCard({title, text, imgSrc, imgPosition, toLink}){
    return(
        <Link className="card border-0 shadow rounded-3 hover-card text-decoration-none" to={toLink}>
            <div className="row g-0">

                {imgSrc &&
                    <div className={`col-xl-5 col-12 ${imgPosition === 'right' ? 'order-xl-1' : 'order-xl-0'}`}>
                        <img
                        src={imgSrc}
                        alt=""
                        className={`img-fluid rounded`}
                        style={{objectFit: 'cover', width: '100%', height: '100%'}}
                        />
                    </div>
                }

                <div className="col-xl-7 col-12">
                    <div className="card-body m-3">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <button className="btn btn-primary">Leer más</button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default InfoCard;