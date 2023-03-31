import React from "react";

export const Info = (props) =>{
    //Indicates range of temperatures for hiking (found it off of)
    const highestTemp = 86,
        lowestTemp = 44,
        highestAcceptablePrecip = 35,
        highestAcceptableHumidity = 80;

    const rightPrecp = props.precip < highestAcceptablePrecip && props.precipNext < highestAcceptablePrecip;
    const rightHumidity = props.humidity <= highestAcceptableHumidity;
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
              Currently the temperature over in {props.city} is {props.currentTemp}°F. 
              However, it feels like {props.tempGoodForHiking}. Those conditions are pretty {tempGoodForHiking} for hiking!
            </p>
            <p>
              Currently there is a {props.precip}% chance of rain in {props.city}.
              However within the next hour there will be a {props.precipNext}% chance of rain.
            </p>
            <p>
            style={{
                    color: rightPrecp ? "green" : "red"
                }}
            </p>
            <p>
            style={{
                    color: rightHumidity ? "green" : "red"
                }}
             Humidity at {props.city} is {props.humidity}
            </p>
        </React.Fragment>
    );
};

