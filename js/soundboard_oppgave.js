
import { sounds } from "../data/soundsJSexample.js";
import {soundFiles} from "../data/soundJSONexample.json"
//*1. Create an external JSON or js file containing information about the sounds you want to use. Import the file in here:  */
// import referanceWord from "the location of the file" 
// Remember: 
    // to use type="module" for this js file when using imports
    // to use assert {type: "json"} if using a json file
// examples of how the structure can look is in the data folder


//* ////////////////////////////////////// */

//*1. Catch the html element with id drumkit: */

const drumkit = document.getElementById("drumkit");
const whiteKeys = document.querySelectorAll("whiteKey");
const blackKeys = document.querySelectorAll("blackKey");



//* ////////////////////////////////////// */

//*2. Write a console log for the fetched sounds so you know how the structure is and how you can use it */


//* ////////////////////////////////////// */


//*3. Create the function with a parameter that is refering to the sound used that does the following: */

//3.1. make a variable that creates a button element with .createElement

    // add textContent to the created buttonElement. Textcontent should be either the file name and/or key needed to be pressed

//3.2. make a variables that create an audio element with .createElement 
    //the audio element that is created should have the src equal to the file source
    //the audio element that is created should have the id equal to the textcontent created in 3.1.

//3.3. add an eventlistner to the whole page that: 
    //actives when pressing a keyboard key (first parameter of the eventlistener)
    //runs a nameless function with parameter event (refering to the key pressed)

    // 3.3.1. inside of the eventlistner:

        // create a variable that refers to the key pressed 
        // make a conditional logic that asks if the variable created just above is the same as the sound key that should be pressed (the key "key" in the js or JSON data you created)
            // if the conditional is true, play the audio element that you created in 3.2.
        
//3.4. OPTIONAL. If you used keydown as the first parameter in the previous eventlistener, add another eventlistner to the whole page that: 
    //actives when releasing a keyboard key (first parameter of the eventlistener)

    // 3.4.1. inside of the eventlistner:

        // pauses the audio element
        // sets the current time of the audio element to 0

//3.5. OPTIONAL. Create an eventlistener for clicking. Also create a logic for preventing more sounds to be played at the same time

//3.6. append the created button and audio element to the html element you refered in 1.


//* ///////////////////////////////////////////////////////////////////////////////////////////// */


//*4. Create a function that loops over the sounds (from the data file you created). Use that function created in 3. to use the logic there to create the buttons. I prefer that you use .forEach or .map */


//* ////////////////////////////////////// */


//*4. Call on the function that loops over the sounds and creates the buttons */

// create a drum component:
const drumComponent = (sound) => {
    // const soundRef = `${data.sounds.folder}/${sound.file}`
    const buttonEl = document.createElement('button');
    buttonEl.textContent = `${sound.file.slice(0, -4)}\n(${sound.key})`;

    //! koden under gir heller hvilken key som skal trykkes på
    // buttonEl.textContent = sound.key

    const audioEl = document.createElement('audio');
    // create an id for each audio element (not needed to make this work, but just for the example)
    audioEl.id = `hotkey-${sound.key}`
    audioEl.src = `${data.sounds.folder}/${sound.file}`
    // audioEl.src = soundRef

    buttonEl.addEventListener('focus', () => {
        audioEl.play()
    })

    // buttonEl.addEventListener('pointerup', () => {
    //     audioEl.pause()
    //     audioEl.currentTime = 0
    // })

    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        if (key === sound.key.toLowerCase()) {
            audioEl.play()
        }

    })


    document.addEventListener('keyup', () => {
        audioEl.pause()
        audioEl.currentTime = 0
    })
    drumkitContainer.append(buttonEl, audioEl)
}

const createDrumKit = () => {
    data.sounds.soundsFiles.forEach((sound) => {
        drumComponent(sound)
    })
}

createDrumKit();



