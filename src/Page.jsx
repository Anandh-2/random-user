import React from 'react';
import { FaMale } from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';
import { GrLinkNext } from 'react-icons/gr';
import { GrLinkPrevious } from 'react-icons/gr';
import { PiX } from 'react-icons/pi';

export default function Page({
  data,
  setData,
  getData,
  dataArr,
  index,
  setIndex
}) {
  const handlePrev = () => {
    if (index === 0) {
      alert('No more previous');
      return;
    }
    const newIndex = index - 1;
    setIndex(newIndex);
    setData(dataArr[newIndex]);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    if (index >= dataArr.length - 1) {
      getData();
    } else {
      setIndex(newIndex);
      setData(dataArr[newIndex]);
    }
  };
  return (
    <div id='main'>
      <button onClick={() => handlePrev()}>
        <GrLinkPrevious />
      </button>
      <div id='info'>
        <img
          src={data.results[0].picture.large}
          alt='image'
          width='300px'
        />
        <div id='passage'>
          <p>
            <strong>Name:</strong>
            <span>{data.results[0].name.first}</span>
          </p>
          <p>
            <strong>Gender:</strong>
            {data.results[0].gender === 'male' ? (
              <span>
                Male <FaMale />
              </span>
            ) : (
              <span>
                Female <FaFemale />
              </span>
            )}
          </p>
          <p>
            <strong>Email:</strong>
            <span>{data.results[0].email}</span>
          </p>
          <p>
            <strong>Phone:</strong>
            <span>{data.results[0].phone}</span>
          </p>
        </div>
      </div>
      <button onClick={() => handleNext()}>
        <GrLinkNext />
      </button>
    </div>
  );
}
