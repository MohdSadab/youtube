import {useEffect,useState} from 'react'

const useData = (url) => {
    let [loading,setLoading] = useState(false);
    let [data,setData] =useState([])

    
    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then(response => response.json())
        .then(json => {
            setData(json);
            setLoading(false);
        })  
     
    },[url])
    

  return {loading,data}
}

export default useData