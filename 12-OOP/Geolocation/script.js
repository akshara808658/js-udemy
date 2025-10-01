'use strict'

const months = ['January', 'February', 'March','April','May','June','August','Septemper','October','November','December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map,mapEvent;

class App{
  #map;
  #mapEvent;

  constructor(){
   this._getPosition();
   form.addEventListener('submit', this._newWorkout.bind(this));


//at in running cadence show step/min and in cycling shows meters
inputType.addEventListener('change', function(){ 
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
})
  }

_getPosition(){
  //web API method to get current location (latitude and logitude)
  if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
    this._loadMap.bind(this),
    function(){ // and error callback
      alert('Could not get your position')
    }
   );
}

  _loadMap(position){
    //  function(){ // Success callback
      const {latitude}  = position.coords;
      const {longitude}  = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude]

      this.#map = L.map('map').setView(coords, 13);
      // console.log(map)

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', { // changed here org to fr/hot and that {s} bcz change appear
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.#map);

      //HandlingClicks on map
        this.#map.on('click',(mapE) => {
          this.#mapEvent = mapE;
          form.classList.remove('hidden');
          inputDistance.focus();
   });
// },
  }


  _showForm(){}

  _toggleElevationField(){}

  _newWorkout(e){
    e.preventDefault();
    console.log(this)


    //Clear input fields
  inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''

  //Display marker
    // console.log(this.#mapEvent);
    const {lat, lng} = mapEvent.latlng

   L.marker([lat, lng])
    .addTo(this.#map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeCick:false,
        className:'running-popup'
      })
    )
    .setPopupContent('workout') // put popcontent in running
    .openPopup();
  }
  
}
const app = new App();

//access from other.js
// console.log(firstName)

