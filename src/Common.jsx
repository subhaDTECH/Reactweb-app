import React from 'react';
const Common=(props)=>{
    return (
        <>
           <div className="container-fluid mt-5">
           <div className="row">
             <div className="col-md-10 mx-auto mt-5  pt-5">
             <div className="row">
               <div className="col-md-6 d-flex justify-content-center align-items-start flex-column order-2 order-lg-1 mt-5 ">
                 <h1>{props.title} <span>SuvDTech</span> world</h1>
                 <p>{props.subtitle}</p>
                  <button className="btn1">{props.btton}</button>

               </div>
               <div className="col-md-6 order-lg-2 order-1">
               <figure>
                   <img src="https://i.pinimg.com/originals/9d/a2/c2/9da2c25957e90f0dbdaeda961af1e553.png" alt="not" className="img-fluid"/>
               </figure>

               </div>

             </div>

             </div>

           </div>

           </div>
        </>
    )
}
export default Common;
