import React from 'react';

export default function Page({ data, getData }) {
  return (
    <div>
      <img src={data.results[0].picture.large} alt='image'></img>
      <p>Name: {data.results[0].name.first}</p>
      <p>Email: {data.results[0].email}</p>
      <button onClick={() => getData()}>Generate</button>
    </div>
  );
}
