import React from "react";

const Forcast = ({forecast,location}) => {
return (
    <div className="container mt-3">
        <h5 className="text-white text-center mb-3">Forecast weather of {location.name},{location.region} </h5>
        {forecast.forecastday.map((data,index)=>{
            return(
                <div className="accordion accordion-flush" id="accordionFlushExample">
                     <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                    <div class="d-flex flex-row align-items-center">
                        <div class="p-2">Day {data.date}</div>
                        <div class="p-2"><img src={data.day.condition.icon}/></div>
                        <div class="p-2">{data.day.condition.text}</div>
                        <div class="p-2">Max Temp {data.day.maxtemp_c}</div>
                        </div>
                   </button>
                  </h2>
                    <div id={`${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    {/* <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style={{width: "25%"}}>25%</div>
                    </div> */}
                    {data.hour.map((data)=>{
                        return(
                            <>
                            <h6>{data.time} Max Temp: {data.temp_c}</h6>
                            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar" style={{width:`${data.temp_c}%`}}>{data.temp_c}</div>
                            </div>
                            </>
                    )
                       
                    })}
                    </div>
                    </div>
                </div>
                 </div>
            )
        })}
    </div>
)
}
export default Forcast