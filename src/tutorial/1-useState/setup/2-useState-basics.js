import React, { useState } from 'react';
// useState - is a function from React


const UseStateBasics = () => {
  console.log(useState("hello"));
  // const value = useState(1)[0]; --> to jest wartość
  // const handler = useState(1)[1]; --> to jest funkcja 
  // console.log("value: " + value, "handler: " + handler); - pierwszym elementem jest wartość a drugim elementem jest funkcja która kontroluje wartość
  const[text, setText] = useState('random title!'); // to jest the  hook

  const handleClick = () => {
    if (text === 'random title'){
      setText("hello world");
    }
    else{
      setText('random title')
    }
  };

  return (
  <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>
      change title
    </button>
  </React.Fragment>
  );
};

export default UseStateBasics;
