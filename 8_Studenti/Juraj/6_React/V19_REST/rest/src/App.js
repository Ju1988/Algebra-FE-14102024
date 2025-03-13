import { useState, useEffect, useCallback } from 'react';

function  App() {

  const [data, setData] = useState(null);

  // Opcija 3
  const getData = useCallback (async () => {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn');
    const responseData = await response.json();
    setData(responseData);
  }, []);

  useEffect(() => {
    
    // Opcija 1
    // fetch('https://api.nasa.gov/planetary/apod?api_key=F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn')
    //   .then(response => response.json().then(resObj => {
    //     setData(resObj);
    //   }));
    
    // Opcija 2
    // const getData = async () => {
    //   const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=F7NDSvVq6xtFLM8IDjYHPEd7bG0GzdVH501agwwn');
    //   const responseData = await response.json();
    //   setData(responseData);
    // };

    getData();
  }, [getData]);

  if(!data){
    return <p>Loading NASA data...</p>;
  }

  return (
    <>
      <h1>NASA picture of the day</h1>
      <h3>{data.title}</h3>
      <img src={data.url} alt={data.title} width={500} />
      <p>{data.explanation}</p>
    </>
  );
  

}

export default App;
