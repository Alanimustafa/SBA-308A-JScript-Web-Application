



// addArtist Function has been created to use AXIOS POST.
export async function addArtist () {
    try {

        let artistName = document.getElementById('artistName');
        let artistDoB = document.getElementById('artistDoB');


        let data = [artistName.innerHTML, artistDoB.innerHTML];
        let apiURL = "https://api.artic.edu/api/v1/artworks";
        
        const apiResponseData = await axios.post(apiURL, data )

        console.log (`${artistName.value} - Date of Birth is ${artistDoB.value} has been posted. Status ${apiResponseData.status}`);

        let postMessage = `${artistName.value} - Date of Birth is ${artistDoB.value} has been posted. Status ${apiResponseData.status}`;

        const infoText = document.getElementById ('infoText')
        infoText.innerText = "Artist name   :" + artistName.value;

        const infoHeader = document.getElementById('infoHeader');
        infoHeader.innerText = "New artist";
        const description = document.getElementById('description');
        description.innerText = postMessage;


        console.log("POST Response",apiResponseData);
        return apiResponseData
        }    catch (error) {
            console.log("POST ERROR: ", error);
            return error
        }
        
}