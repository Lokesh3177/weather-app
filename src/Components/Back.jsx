import React from 'react';
import image from '../images/bg.jpg';
import axios from 'axios';
import { useState } from 'react';
import logo from '../images/logo.jpg';

function Back() {
    const [city, setCity] = React.useState('');
    function handlechange(event) {
        setCity(event.target.value);
    }
    const [weather, setWeather] = React.useState(null);
    const [temperature, setTemperature] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    function getrepoart() {
        const Weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14ce77320f81d35a95153ed69e9e8a99`)
        Weatherdata.then(function (response) {
            console.log(response.data);
            setWeather(response.data.weather[0].main)
            setTemperature(response.data.main.temp)
            setDescription(response.data.weather[0].description)
        })
    }


    return (
        <div >
            <div
                className="back"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    height: '100vh',
                    width: '100vw',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            ></div>

            <div className="bg-[#B6A9A0] w-full max-w-5xl mx-auto mt-20 rounded-lg shadow-lg p-6 md:p-10">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 "
                ><h1 >Weather Repoart</h1></h1>
               

                <h1 className="text-base md:text-xl font-medium text-center mb-6">
                    I can give you weather report about your city!!
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        className="w-full md:w-1/2 border rounded-md p-2 bg-white"
                        placeholder="Enter your city"
                        onChange={handlechange}
                        value={city}
                    />
                    <button className="p-2 h-10 rounded-md bg-[#534B3B] text-white w-full md:w-1/3" onClick={getrepoart}>
                        Check Weather
                    </button>
                </div>

                <div className="mt-10 flex flex-col md:flex-row justify-between text-center  ">
                    <h1 className='text-xl md:text-2xl font-bold '>weather :{weather}</h1>
                    <h1 className='text-xl md:text-2xl font-bold '>Tempreature:{temperature}</h1>
                    <h1 className='text-xl md:text-2xl font-bold '>Description:{description}</h1>
                </div>
            </div>
        </div>
    );
}

export default Back;
