import React from "react";

const Service = (props) => {

    return(
        
        
        <div className="service">
            <div className="service-body">
                
          <div>
            <h3 className="data_title">{props.Title}</h3>
            <img src={props.image} alt="" className="data_img"/>
            </div>
            <label className="data_loc"><b>Location: </b> {props.Location}</label>
            <p className="para">{props.describe}</p>
            </div>
       
        </div>
   
    )

}

export default Service;
