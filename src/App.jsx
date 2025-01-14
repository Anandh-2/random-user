import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import Page from './Page';

function App() {
  const [data, setData] = useState(null);
  const [dataArr, setDataArr] = useState([]);
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      setData(response.data);
      setDataArr(prev => [...prev, response.data]);
      setIndex(prev => prev + 1);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <div className='App'>
      <div id='header'>
        <h1>Generate Random Users</h1>
      </div>
      <div id='content'>
        {data ? (
          <Page
            data={data}
            setData={setData}
            getData={getData}
            dataArr={dataArr}
            index={index}
            setIndex={setIndex}
          />
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
