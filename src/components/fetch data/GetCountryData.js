import axios from "axios";
import { useEffect, useState } from "react";



export default function FetchCountryData(url) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchCode = async () => {

        setLoading(true);

        await axios.get(url).then((response)=>{


            setData(response.data);

        }).catch((err)=>{

            setError(err);


        }).finally(()=>{

            setLoading(false);
        })

    };

    fetchCode();
        
      
    
      
    }, [url]);

    
    

  return {

    data , loading , error 
    
  }
}