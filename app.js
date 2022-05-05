//Init storage
const storage = new Storage();
//get stored location data
const weatherLocation = storage.changeLocationData();
//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// init UI
const ui = new UI();
// Get weather when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

//Change Location
weather.changeLocation(city, state);

//Set location in localstorage
storage.setLocationData(city, state);

//Get and display weather
getWeather();

//Close modal in the UI using JQuery
 $('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather()
    .then(results => {
    ui.paint(results);
    })
    .catch(err => console.log(err));
};