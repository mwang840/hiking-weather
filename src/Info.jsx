import React from "react";

export const Info = (props) =>{
    //Indicates range of temperatures for hiking (found it off of)
    const highestTemp = 86,
        lowestTemp = 44,
        highestAcceptablePrecip = 35,
        highestAcceptableHumidity = 80;

    const rightPrecp = props.precip < highestAcceptablePrecip && props.precipNext < highestAcceptablePrecip 
        ? "No need for a rain jacket" : "Since its raining, you might want to bring a rain jacket!";
    const rightHumidity = props.humidity <= highestAcceptableHumidity;
    const tempGoodForHiking = props.tempFeels > lowestTemp && props.tempFeels < highestTemp 
        ? "Comfortable ✔️": props.tempFeels > highestTemp 
            ? "Too hot  🔥❌" : "Too cold 🥶❌";

    if (props.error){
        return (
            <p style={{
                textAlign: "center"
            }}>
                <strong>Whoopsie, we can't find the weather due to 404 error. A fix is in the works! {props.error}</strong>
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
            <p style={{
                color: tempGoodForHiking === "Comfortable ✔️" ? "green" : "red",
                textAlign: "center"
            }}>
             
              Currently the temperature over in {props.city} is {props.tempActual}°F. 
              However, it feels like {props.tempFeels}°F. Those conditions are {tempGoodForHiking} for hiking!
            </p>
            <p  style={{
                color: rightPrecp === "No need for a rain jacket" ? "green" : "red"
            }}>
              Currently there is a {props.precip}% chance of rain in {props.city}.
              However within the next hour there will be a {props.precipNext}% chance of rain.
            </p>
            <p  style={{
                color: rightHumidity ? "green" : "red"
            }}>
             Currenntly, the Humidity at {props.city} is {props.humidity}%. Dress appropriately for the hiking event!
            </p>
        </React.Fragment>
    );
};

