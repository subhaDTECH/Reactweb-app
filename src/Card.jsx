import React from 'react';
const Card=(props)=>{
    return (
        <>

                 <div className="col-md-4">
                    <div class="card">
                    <img src={props.imgsrc} class="card-img-top" alt="not"/>
                    <div class="card-body">
                    <h5 class="card-title">{props.imgtitle}</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>

              </div>
        </>
    )
}
export default Card;
