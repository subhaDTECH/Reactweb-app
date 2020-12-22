import React, {useState } from 'react';
const  Contact=()=>{
    const[data,setData]=useState({
        username:"",
        email:"",
        password:"",
    })
 const inputEvent=(event)=>{
     const[name,value]= event.target;

    setData((PreVal)=>{
        return {
            ...PreVal,
            [name]:value,
        }
       

    })

 }   

 const  onsubmitForm=(e)=>{
     e.preventDefault();
     

 }  
    return (
        <>
          <div className="container-fluid mt-5">
            <h1 className="text-center">contact form</h1>
            <div className="row">
             <div className="col-md-10 mx-auto mt-5">
             <form autoComplete="off" onSubmit={onsubmitForm}>
            
             <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">UserName</label>
                <input type="text" class="form-control" id="exampleInputPassword1"

                name="username"
                value={data.username}
                onChange={inputEvent}
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"

                name="email"
                value={data.email}
                onChange={inputEvent}
                />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" 
                name="password"
                value={data.password}
                onChange={inputEvent}

                />
            </div>
           
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

             </div>

            </div>

          </div>

        </>
    )
}
export default  Contact;