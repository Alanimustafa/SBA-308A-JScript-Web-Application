// const { default: axios } = require("axios");
import {theArtistDetails} from './apiretrieve.js'
import {addArtist} from './addArtist.js'



// The institute of Chicago API
let artOfChicagoLink = 'https://api.artic.edu/api/v1/artworks' ;


// apiDatabase Function with two arguments; the API link and a key (if any);
 apiDatabase(artOfChicagoLink, '');

 
//  All Functions
let allContentsArray = [];

export async function apiDatabase (apiURL, apiKey) {
    try {
        // Retrieving All Artists information.
        const apiResponseData = await axios.get(apiURL, {
            headers: {
                'x-api-key': apiKey // I kept this header in case some APIs need a key
            },
        });

            // console.log("apiResponce :",apiResponseData) // Test Checkpoint

            allContentsArray = apiResponseData; // saving the information in allContentsArray.

            // console.log("allContentArray : ",allContentsArray)  // Test Checkpoint
            // console.log ("The Artist Name :", allContentsArray.data.data[0].artist_titles[0]); // Test Checkpoint
            // console.log ("The Array Length :", allContentsArray.data.data.length);  // Test Checkpoint

            infoHeader.textContent = allContentsArray.data.data[0].artist_title;
            infoText.textContent = allContentsArray.data.data[0].artist_display;
            description.textContent = allContentsArray.data.data[0].provenance_text;

            // Loop through allContentsArray.data.data to retrieve the Artist Names and them to the select element. 
            for (let i = 0; i < allContentsArray.data.data.length; i++) {
                let artistList = document.createElement("option");
                artistList.text = allContentsArray.data.data[i].artist_titles[0];
                artistList.value = allContentsArray.data.data[i].id;
                artSelect.appendChild(artistList);
            }
            // console.log("The artSelect value is :::: ", artSelect.value); // Test Checkpoint
            artSelect.addEventListener("change", theArtistDetails);
            
    // handeling any API connection error.
    } catch (error) {
        console.log("ERROR: Faild Retrieving: ", error);
    }

}

const addArtistBTN = document.getElementById ('addArtistBTN') ;
addArtistBTN.addEventListener ('click', () => {
    addArtist();
}); 

