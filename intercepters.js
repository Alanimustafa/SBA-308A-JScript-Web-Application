// import {theArtistDetails} from './apiretrieve.js'

export async function theIntercepter (imageData) {
    axios.interceptors.request.use((request) => {
        request.metadata = request.metadata || {};
        request.metadata.startTime = new Date().getTime();
        document.body.style.cursor = "progress";
        return request;
      });
    
      axios.interceptors.response.use(
        (response) => {
          response.config.metadata.endTime = new Date().getTime();
          response.config.metadata.durationInMS =
            response.config.metadata.endTime - response.config.metadata.startTime;
    
          console.log(
            `Request took ${response.config.metadata.durationInMS} milliseconds.`
          );
          document.body.style.cursor = "default";
          return response;
        },
        (error) => {
          error.config.metadata.endTime = new Date().getTime();
          error.config.metadata.durationInMS =
          error.config.metadata.endTime - error.config.metadata.startTime;
    
          console.log(
            `Request took ${error.config.metadata.durationInMS} milliseconds.`
          );
          throw error;
        }
      );
}
