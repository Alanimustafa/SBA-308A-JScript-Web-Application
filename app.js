// const { default: axios } = require("axios");

const apiKey = "https://api.thecatapi.com/v1/images/search?limit=10";

// Notes: The Dog API Authontication Key header { 'x-api-key' : apiKey }


 apiDatabase('https://api.artic.edu/api/v1/artworks', '');
 // moviesDatabase('https://api.thecatapi.com/v1/images/search?limit=10', apiKey);

let allContentsArray = [];

async function apiDatabase (apiURL, apiKey) {
    try {
        const apiResponseData = await axios(apiURL, {
            headers: {
                'x-api-key': apiKey
            },
            // onDownloadProgress: console.log("DownLoading Downloading"),
            // onUploadProgress: console.log("UpLoadig UpLoading"),
            
        });
            console.log(apiResponseData)

            allContentsArray = apiResponseData;

            console.log (allContentsArray.data.data);

            for (let i = 0; i < allBreedArray.length; i++) {
                let breedOption = document.createElement("option");
                breedOption.text = allBreedArray[i].name;
                breedOption.value = allBreedArray[i].id; // Set value attribute to the breed ID
                breedSelect.appendChild(breedOption);
              }

        if (apiResponseData.status === 200) {
            console.log("URL OK");
        }
        

        // AXIOS Intercepter.
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
            const url = apiURL;
        
            const { data, durationInMS } = await axios(url);
            console.log(`Request took ${durationInMS} milliseconds.`);
            console.log(data);
        })();



        if (responseAxios) {
            console.log ("Before JSON" , responseAxios);
            console.log("AXIOS Response Headers", responseAxios.headers);
            console.log("AXIOS Response config", responseAxios.config);
            console.log("AXIOS Response", responseAxios.status);
            console.log("AXIOS Response Status Text", responseAxios.statusText);
            //console.log("AXIOS Response", responseAxios.data.data[0]);
            console.log("AXIOS Response", responseAxios.data.data);
            console.log ("")
            // console.log ("After AXIOS")
            // console.log("After JSON Response",JSONresponse);
            // console.log("After JSON Response",JSONresponse[0].id);
            // console.log("After JSON Response",JSONresponse[0].url);

            // const theURL = JSONresponse.response;
            // console.log("After JSON Response",theURL);


        } else {
            throw ("ERROR RESPONSE :", responseAxios.status);
        }

    } catch (error) {
        console.log("ERROR: Faild Retrieving: ", error);
    }



    
}

