/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import anime from 'animejs';

const Loading = () => {
  const text = [...'loading'].map((letter, i) => <span id="letter" key={i}>{letter}</span>);
  const elements = (
    <div>
      <p id="wrapper">{text}</p>
    </div>
  );
  anime.timeline({ loop: true })
    .add({
      targets: [text],
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: (el, i) => (500 + 30 * i),
    })
    .add({
      targets: [text],
      translateX: [0, -30],
      opacity: [1, 0],
      easing: 'easeInExpo',
      duration: 1100,
      delay: (el, i) => (100 + 30 * i),
    });
  return elements;
};

export default Loading;
