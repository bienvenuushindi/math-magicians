import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const palette = [
  '#1b1b1b',
  '#3d3d3d',
  '#2b2b2b',
  '#100c08',
];

const Quote = (props) => {
  const [quote, setQuote] = useState('');
  const [styles, setStyles] = useState({
    button: {
      backgroundColor: '#000',
    },
    quote: {
      color: '#000',
    },
  });
  const [next, setNext] = useState(false);
  const isFirstTime = useRef(true);
  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      const url = 'https://random-math-quote-api.herokuapp.com/';
      const fetchData = async () => {
        await fetch(url).then((res) => res.json()).then((data) => {
          setQuote(data);
          setNext(false);
        });
      };
      fetchData();
      const randomIndex = Math.floor(Math.random() * palette.length);
      setStyles({
        button: {
          backgroundColor: palette[randomIndex],
          color: '#fff',
        },
        quote: {
          color: palette[randomIndex],
        },
      });
    }
  }, [next]);

  useEffect(() => {
    const { updateHeaderBackground } = props;
    updateHeaderBackground({ ...styles.button });
  }, [styles]);
  const randomQuote = () => {
    isFirstTime.current = true;
    setNext(true);
  };

  return (
    <div className="container text-center">
      <div className="Quote display-4 my-5">
        <span style={styles.quote}>{quote.quote}</span>
      </div>
      <button type="button" className="btn rounded-pill px-2 py-1" style={styles.button} onClick={randomQuote}>
        Get
        Quote
      </button>
    </div>

  );
};
Quote.propTypes = {
  updateHeaderBackground: PropTypes.func.isRequired,
};
export default Quote;
