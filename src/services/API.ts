import axios from "axios";

  export async function fetchAlbums() {

    try {
        const {data} = await axios.get(
          'https://jsonplaceholder.typicode.com/albums',
        );
  
        //console.log(data)
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  