import { useAuth } from "../store/auth";

export const Service = () => {
    const { services } = useAuth();
    console.log(services);
    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading"> Services</h1>
            </div>


            <div className="container grid grid-three-cols">
                 {services.map((curElem,index) => {
                    //const { Price, Description, Porvider, Service } = curElem; 
                    return(  
                  
                   <div className="card" >
                   <div className="card-img">
                       <img src="/images/designs.jpg" alt=""
                           width="800"
                       height="400"/>
                   </div>
                   <div className="card-details">
                       <div className="grid grid-two-cols">
                            <p>{curElem.provider}</p> 
                           <p>{curElem.price}</p>
                       </div>
                       <h2>{curElem.service}</h2>
                       <p>{curElem.description}</p>
                   </div>.
                        </div>
             ) 
               })} 
                
            </div>

        </section>

    )
};