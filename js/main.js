let form = document.querySelector('#weatherForm');

form.addEventListener('submit', async(event) => {
    event.preventDefault()
    getJson()
})

let table = document.getElementById('table-body');
let header = document.getElementById('city-name');

// Grab the data

let getJson = async () =>{
  
    let city = document.querySelector('#city').value;


    // go fetch
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ad65ef7fcebb168e78688d7b777da35`) // grab api link and place in the backtiks -- ${city} video around 25:00 mark


    city_data = response.data.main

    header.innerHTML = city

    // Creating the High
    let high = city_data.temp_max
    let high_f = Math.round(((high-273.15)*1.8) + 32)
    let high_temp = document.createElement("th")
    high_temp.innerHTML=high_f + "°F"
    document.querySelector("#table1").innerHTML = high_temp.innerHTML

    // Creating the Low
    let low = city_data.temp_min
    let low_f = Math.round(((low-273.15)*1.8) + 32)
    let low_temp = document.createElement("th")
    low_temp.innerHTML=low_f + "°F"
    document.querySelector("#table2").innerHTML = low_temp.innerHTML

    // Creating the Humidity
    let humidity = city_data.humidity
    let humidity_value = document.createElement("th")
    humidity_value.innerHTML=humidity + "%"
    document.querySelector("#table3").innerHTML = humidity_value.innerHTML

    // Creating the Forecast
    forecast_data = response.data.weather[0]
    let forecast = forecast_data.main
    let forecast_value = document.createElement("th")
    forecast_value.innerHTML=forecast
    document.querySelector("#table4").innerHTML = forecast_value.innerHTML
}