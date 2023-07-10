import { useState, useEffect } from "react";
import axios from 'axios';
import {RAPID_API_KEY } from "@env";

const rapidApiKey = RAPID_API_KEY
// endpoint is the prop im going to use for useFetch hook
const useFecth = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);
    const [error, setError ] = useState(null);
    

    // from rapidApi JSearch
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        
        params: {...query},
      };
}