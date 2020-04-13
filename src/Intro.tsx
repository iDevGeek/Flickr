import React from 'react';
import './App.css';

interface Props {
	intro: string
}

const Intro = ({intro} : Props) => {
  return (
    <p>{intro}</p>
  );
}

export default Intro;
