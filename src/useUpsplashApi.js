import { useState, useEffect, } from "react";


const GetImageInfo = (url, filters) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(
                url + 
                'client_id=' + 
                process.env.REACT_APP_UNSPLASH_API_KEY +
                filters
            )
            const data = await response.json()
            setData(data) 
        }

        fetchImages()
    }, [url, filters])

    return data
}

export default GetImageInfo