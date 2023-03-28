import React from "react";

export const HikingWeatherInfo = (props) =>{
    //Indicates range of temperatures for hiking (found it off of)
    const highestTemp = 86,
    lowestTemp = 44,
    highestAcceptablePrecip = 35,
    highestAcceptableHumidity = 80;

    const rightPrecp = props.precip < highestAcceptablePrecip && props.precipNext < highestAcceptablePrecip
    const rightHumidity = props.humidity <= highestAcceptableHumidity
    const tempGoodForHiking = props.tempFeelsLike > lowestTemp && props.tempFeelsLike < highestTemp 
    ? "Comfortable ✔️": props.tempFeelsLike > highestTemp 
    ? "Heat is overbearing 🔥❌" : "Too cold to hike 🥶❌";

    if (props.error){
    return (
      <p>
        <strong>Haha Prop error. A fix is in the works!: {props.error}</strong>
      </p>
    );
    }

    return(
        <React.Fragment>
            <p>
                <em>
                  Is the weather in {props.city}, {props.region} comfortable for hiking ☺️!?
                </em>
            </p>
            <p>
             style={{
              color: tempGoodForHiking === "Comfortable" ? "green" : "red"
             }}
            </p>
            <p>
              Currently the temperature over in {props.city} is {props.currentTemp}°F. 
              However, it feels like {props.tempGoodForHiking}. Those conditions are pretty {tempGoodForHiking} for hiking!
            </p>
        </React.Fragment>
    )
}