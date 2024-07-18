import React, { useState, useEffect } from 'react';

const RandomCharPage: React.FC = () => {
  const [randomChars, setRandomChars] = useState<string>('');

  const generateRandomChar = (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?';
    return characters.charAt(Math.floor(Math.random() * characters.length));
  };

  const generateRandomString = (length: number): string => {
    return Array.from({ length }, () => generateRandomChar()).join('');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomChars(prevChars => prevChars + generateRandomString(5));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'monospace', 
      fontSize: '18px',
      wordWrap: 'break-word'
    }}>
      <h1>Random Character Stream</h1>
      <p>{randomChars}</p>
    </div>
  );
};

export default RandomCharPage;
