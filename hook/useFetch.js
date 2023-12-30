import { useState, useEffect } from "react";
import axios from "axios";

const rapidApiKey = '3823b95f6emsh90f8b2322f3c419p192335jsn77cbc374999c';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key": rapidApiKey,
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setLoading(true);
        fetchData();
    };

    return { data, loading, error, refetch };
};

export default useFetch;