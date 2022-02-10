import React from 'react';

export default function Card (props){
    return(
        <div className="card--div">
            <section className="card--firstbox">
                <img src={props.item.image} className="card--img" alt="restaurant" />
            </section>

            <section className="card--secondbox">
                <section className="card--titlerow"> 
                    <h2 className="card--name">{props.item.name}</h2>
                    <img src={props.item.icon} className="card--icon" alt="icon" />
                </section>
                <section className="card--firstrow">
                    <img src="../images/location.gif" className="card--locationgif" alt="location gif" />
                    <h5 className="card--address">{props.item.address}</h5> 
                </section>
                <h5 className="card--phone">Phone: {props.item.phone}</h5>
                <p className="card--description"><span className="thoughts-title">My thoughts:</span> {props.item.description}</p>
                <h4>My rating: <span className="card--recommendation">({props.item.rating}) </span> </h4>
                <h4 className="card--finalthought">Final thought: <span className="card--recommendation">{props.item.recommendation}</span></h4> 
            </section>
        </div>
    )

}