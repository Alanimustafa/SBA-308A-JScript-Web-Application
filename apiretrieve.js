import {theIntercepter} from './intercepters.js'


let artistDetailArray = []; // The array for each breed property.
export async function theArtistDetails (index) {

    try {
        theIntercepter(); // Intercepter
        
        // The Artist Title
        const selectedArtistTitle = artSelect.value;
        
        const artistData = await axios.get(`https://api.artic.edu/api/v1/artworks/${selectedArtistTitle}`);

        artistDetailArray = artistData.data;

        // console.log(artistDetailArray); // Test Checkpoit
        
        infoHeader.textContent = artistDetailArray.data.artist_title; // Adding the artist title.
        infoText.textContent = artistDetailArray.data.artist_display; // Adding the artist display informatio (DoB or DoD).
        description.textContent = artistDetailArray.data.provenance_text; // Adding the artist about.
        
        
        


        // for (let i = 0; i < 1; i++) {
            let art_image_id = artistDetailArray.data.image_id;
            const imageData = await axios.get(`https://api.artic.edu/api/v1/artworks?ids=27992,28560&fields=id,title,${art_image_id}`, {

                "data": {
                    "id": 27992,
                    "title": "A Sunday on La Grande Jatte — 1884",
                    "image_id": art_image_id
                },
                "config": {
                    "iiif_url": `https://www.artic.edu/iiif/2/${art_image_id}/full/843,/0/default.jpg`,
                }
                
            });


            const url = imageData.config.config.iiif_url;
            
            // console.log(url); // Test Checkpoint.
            // console.log(imageData); // Test Checkpoint.
            
            
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.style.backgroundImage = `url(${url})`;
            imageContainer.style.backgroundPosition = "cover";

    } catch (error) {
        console.log("ERROR: The Artist Detail information retrieving :", error);
    }

}