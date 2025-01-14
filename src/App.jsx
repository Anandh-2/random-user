import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import Page from './Page';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      setData(response.data);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <>
      {data ? <Page data={data} getData={getData} /> : <p>loading</p>}
      {console.log(data)}
    </>
  );
}

export default App;
