import React, { useState, useEffect } from "react";
import configuration from "./config.json";
import { HikingWeatherInfo } from "./Information";
import axios from "axios";

const callWeatherApi = async(place)=>{
    const currentTime = new Date();
}