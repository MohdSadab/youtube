import React from 'react'

const useFetch = (url) => {

    const [data,setData] = React.useState([]);
    const [loading,setLoading] =  React.useState(false);
    React.useEffect(()=>{
      setLoading(true);
      fetch(url)
      .then(response => response.json())
      .then(json =>{
        setData(json)
        setLoading(false);
      })
    },[url]) 

  return{loading,data}
}

export default useFetch