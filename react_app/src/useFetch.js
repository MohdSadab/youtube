import React from 'react'

const useFetch = (url) => {
    const [loading,setLoading] =React.useState(false);
  const [data,setData] =React.useState([]);

  React.useEffect(()=>{
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

export default useFetch