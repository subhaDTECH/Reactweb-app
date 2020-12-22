import React from 'react';
import Card from './Card';
const Service=()=>{
    return (
        <>
         <div className="container-fluid mt-5">
         <h2 className='text-center'>Service</h2>
         <div className="row">
           <div className="col-md-10 mx-auto mt-5">
             <div className="row gy-2 gx-3">
             <Card
                 imgtitle="web development"
                 imgsrc="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
             />
             <Card
                 imgtitle="Androiid development"
                 imgsrc='https://www.rootinfosol.com/sites/default/files/2018-03/best-android-development.jpg'
             />
             <Card
                 imgtitle="python development"
                 imgsrc="https://www.mindinventory.com/blog/wp-content/uploads/2019/04/python-development-1200x500.png"
             />
             <Card
                 imgtitle="Django development"
                 imgsrc="https://devbatch.com/wp-content/uploads/2018/05/django2.png"
             />
             <Card 
                 imgtitle="Java development"
                 imgsrc="https://iconshots.com/wp-content/uploads/2019/03/Java-Developer-1920x960.jpg"
             />
             <Card
                 imgtitle="mechin learning"
                 imgsrc="https://www.trustinsights.ai/wp-content/uploads/2019/07/2019-07-17_11-00-24.png"
             />
              

             </div>

           </div>

         </div>

         </div>

        </>
    )
}
export default  Service;