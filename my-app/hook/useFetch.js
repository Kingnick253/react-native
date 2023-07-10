import { useState, useEffect } from "react";
import axios from 'axios';

// will come back and figure this out 
// import {RAPID_API_KEY } from "react-native-dotenv";


// const rapidApiKey = RAPID_API_KEY;
// endpoint is the prop im going to use for useFetch hook
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);
    const [error, setError ] = useState(null);
    

    // from rapidApi JSearch
    const options = {
        method: 'GET',
        // url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': "",
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        
        params: {...query},
      };
    //   fetchData function will wait for promise to be met before execution
      const fetchData = async () => {
        setIsLoading(true);
        
        try {
            const response = await axios.request
            (options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("Something went Wrong");
        } finally {
            setIsLoading(false);
        }

      } 

      useEffect(() =>{
        fetchData();
      },[]);
    //  refetch  if the data doesnt load or is having trouble this will fix it.
      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }
      return { data, isLoading, error, refetch};
}

export default useFetch;