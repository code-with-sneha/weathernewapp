import React from "react";

const Current = ({current, location}) =>{
    return(
        <div className="container mt-3">
            <h5 className="text-white text-center">Current weather of {location.name},{location.region}</h5>
            <div className="row p-2">
                {/* Col-1 */}
            <div className="col-3 ">
            <div className="card bg-info rounded bg-opacity-10 border border-info border-opacity-25 text-white">
                <div className="card-body">
                <img src={current.condition.icon} className="card-img-top" alt='weatherIcon' style={{height: '20px', width: '50px'}}/>
                {current.condition.text}
                </div>
            </div>
             </div>
              {/* Col-2 */}
            <div className="col-3">
            <div className="card bg-info rounded bg-opacity-10 border border-info border-opacity-25 text-white">
                <div className="card-body">
                    Temp in C. {current.temp_c}
                </div>
            </div>
             </div>
              {/* Col-3 */}
            <div className="col-3">
            <div className="card bg-info rounded bg-opacity-10 border border-info border-opacity-25 text-white">
                <div className="card-body">
                    Temp in F. {current.temp_f}
                </div>
            </div>
            </div>
             {/* Col-4 */}
            <div className="col-3">
            <div className="card bg-info rounded bg-opacity-10 border border-info border-opacity-25 text-white">
                <div className="card-body">
                    Humidity {current.humidity}
                </div>
            </div>
             </div>
            </div>
            {/* Row-2 */}
            <div className="row p-2">
                {/* Col-1 */}
            <div className="col-3 ">
            <div className="card bg-info rounded bg-opacity-10 border border-info border-opacity-25 text-white">
                <div className="card-body">
                    Wind Degree: {current.wind_degree}
                </div>
            </div>
             </div>
              {/* Col-2 */}
            <div className="col-3">
            <div className="card bg-info rounded bg-opacity-10 border border-info border-opacity-25 text-white">
                <div className="card-body">
                    Wind Dir: {current.wind_dir}
                </div>
            </div>
             </div>
              {/* Col-3 */}
            <div className="col-3">
            <div className="card bg-info rounded bg-opacity-10 border border-info border-opacity-25 text-white">
                <div className="card-body">
                    Cloud: {current.cloud}
                </div>
            </div>
            </div>
             {/* Col-4 */}
            <div className="col-3">
            <div className="card bg-info rounded bg-opacity-10 border border-info border-opacity-25 text-white">
                <div className="card-body">
                    Wind Kph: {current.wind_kph}
                </div>
            </div>
             </div>
            </div>
        </div>
    )
}
export default Current;