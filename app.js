// const { default: axios } = require("axios");

const apiKey = "https://api.thecatapi.com/v1/images/search?limit=10";

// Notes: The Dog API Authontication Key header { 'x-api-key' : apiKey }


 apiDatabase('https://api.artic.edu/api/v1/artworks', '');
 // moviesDatabase('https://api.thecatapi.com/v1/images/search?limit=10', apiKey);


//  All Functions
let allContentsArray = [];

async function apiDatabase (apiURL, apiKey) {
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




let artistDetailArray = []; // The array for each breed property.
async function theArtistDetails (index) {

    try {
   //     theIntercepter(); // Intercepter
        
        // The Artist Title
        const selectedArtistTitle = artSelect.value;
//        console.log("Selected Artist value:", artSelect); // Test Checkpoint

        
        const artistData = await axios.get(`https://api.artic.edu/api/v1/artworks/${selectedArtistTitle}`);

        artistDetailArray = artistData.data;

        console.log(artistDetailArray); // Test Checkpoit

        infoHeader.textContent = artistDetailArray.data.artist_title; // Adding the artist title.
        infoText.textContent = artistDetailArray.data.artist_display; // Adding the artist display informatio (DoB or DoD).
        description.textContent = artistDetailArray.data.provenance_text; // Adding the artist about.
        
        
        
        


        for (let i = 0; i < 1; i++) {
            let art_image_id = artistDetailArray.data.image_id;
            const imageData = await axios.get(`https://api.artic.edu/api/v1/artworks/27992?fields=id,title,${art_image_id}`, {

                "data": {
                    "id": 27992,
                    "title": "A Sunday on La Grande Jatte — 1884",
                    "image_id": art_image_id
                },
                "config": {
                    "iiif_url": `https://www.artic.edu/iiif/2/${art_image_id}/full/843,/0/default.jpg`,
                }
                
            });
        
            //console.log("This is the image id : " ,art_image_id);
            console.log("This is the image data : " ,imageData.config.config.iiif_url);

            const url = imageData.config.config.iiif_url;

            console.log(url);
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.style.backgroundImage = `url(${url})`;
            imageContainer.style.backgroundPosition = "cover";

            console.log(imageContainer);
        }





            
            // const imageID = imageData.data[0].id;
      
            // if (imageID === previousImgID) break; // If two images are the same then end loop
            // previousImgID = imageID;
            // const imgAlt = "Image of " + imageData.data[0].breeds[0].name;
      
            // const imageItem = Carousel.createCarouselItem(url, imgAlt, imageID);
            // Carousel.appendCarousel(imageItem);
          
    





    // const dataBreed = await axios.get(`/breeds/${selectedBreed}`);

    // breedDetail = dataBreed.data;
    } catch (error) {
        console.log("ERROR: The Artist Detail information retrieving :", error);
    }

}

            // onDownloadProgress: console.log("DownLoading Downloading"),
            // onUploadProgress: console.log("UpLoadig UpLoading"),


           
        // if (apiResponseData.status === 200) {
        //     console.log("URL OK");
        // }
        

        // Intercepter.
        function theIntercepter () {
            axios.interceptors.request.use(request => {
                request.metadata = request.metadata || {};
                request.metadata.startTime = new Date().getTime();
                return request;
            });
            axios.interceptors.request.use(request => {
                request.metadata = request.metadata || {};
                request.metadata.startTime = new Date().getTime();
                return request;
            });
            
            axios.interceptors.response.use(
                (response) => {
                    response.config.metadata.endTime = new Date().getTime();
                    response.durationInMS = response.config.metadata.endTime - response.config.metadata.startTime;
                    return response;
                },
                (error) => {
                    error.config.metadata.endTime = new Date().getTime();
                    error.durationInMS = error.config.metadata.endTime - error.config.metadata.startTime;
                    throw error;
            });
            
            (async () => {
// CHECK                
                const url = apiDatabase;
            
                const { data, durationInMS } = await axios(url);
                console.log(`Request took ${durationInMS} milliseconds.`);
                console.log(data);
            })();
        }



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


