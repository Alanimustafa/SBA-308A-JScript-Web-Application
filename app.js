// const { default: axios } = require("axios");
import {theArtistDetails} from './apiretrieve.js'


// Notes: The Dog API Authontication Key header { 'x-api-key' : apiKey }


 apiDatabase('https://api.artic.edu/api/v1/artworks', '');
 // moviesDatabase('https://api.thecatapi.com/v1/images/search?limit=10', apiKey);


//  All Functions
let allContentsArray = [];

export async function apiDatabase (apiURL, apiKey) {
    try {
        // Retrieving All Artists information.
        const apiResponseData = await axios.get(apiURL, {
            headers: {
                'x-api-key': apiKey
            },
        });

            console.log("apiResponce :",apiResponseData) // Test Checkpoint

            allContentsArray = apiResponseData; // saving the information in allContentsArray.

            console.log("allContentArray : ",allContentsArray)  // Test Checkpoint
            console.log ("The Artist Name :", allContentsArray.data.data[0].artist_titles[0]); // Test Checkpoint
            console.log ("The Array Length :", allContentsArray.data.data.length);  // Test Checkpoint

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
            console.log("The artSelect value is :::: ", artSelect.value);
            artSelect.addEventListener("change", theArtistDetails);
            
    // handeling any API connection error.
    } catch (error) {
        console.log("ERROR: Faild Retrieving: ", error);
    }

}






            // onDownloadProgress: console.log("DownLoading Downloading"),
            // onUploadProgress: console.log("UpLoadig UpLoading"),


           
        // if (apiResponseData.status === 200) {
        //     console.log("URL OK");
        // }
        

        // Intercepter.



        // if (responseAxios) {
        //     console.log ("Before JSON" , responseAxios);
        //     console.log("AXIOS Response Headers", responseAxios.headers);
        //     console.log("AXIOS Response config", responseAxios.config);
        //     console.log("AXIOS Response", responseAxios.status);
        //     console.log("AXIOS Response Status Text", responseAxios.statusText);
        //     //console.log("AXIOS Response", responseAxios.data.data[0]);
        //     console.log("AXIOS Response", responseAxios.data.data);
        //     console.log ("")
        //     // console.log ("After AXIOS")
        //     // console.log("After JSON Response",JSONresponse);
        //     // console.log("After JSON Response",JSONresponse[0].id);
        //     // console.log("After JSON Response",JSONresponse[0].url);

        //     // const theURL = JSONresponse.response;
        //     // console.log("After JSON Response",theURL);


        // } else {
        //     throw ("ERROR RESPONSE :", responseAxios.status);
        // }


