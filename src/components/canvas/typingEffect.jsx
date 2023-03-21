import React, { useState, useEffect, useRef } from 'react';
// import './index2.css';

const TypingEffect = () => {
  const [textArray, setTextArray] = useState(['hard', 'fun', 'a journey', 'LIFE']);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [delay, setDelay] = useState(2000);

  const typedTextSpanRef = useRef(null);
  const cursorSpanRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpanRef.current.classList.contains('typing')) {
          cursorSpanRef.current.classList.add('typing');
        }
        typedTextSpanRef.current.textContent += textArray[textArrayIndex].charAt(charIndex);
        setCharIndex(charIndex + 1);
        setTimeout(handleTyping, typingDelay);
      } else {
        setTyping(false);
        setDelay(newTextDelay);
        cursorSpanRef.current.classList.remove('typing');
        setTimeout(handleErasing, delay);
      }
    };

    const handleErasing = () => {
      if (charIndex > 0) {
        if (!cursorSpanRef.current.classList.contains('typing')) {
          cursorSpanRef.current.classList.add('typing');
        }
        typedTextSpanRef.current.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        setCharIndex(charIndex - 1);
        setTimeout(handleErasing, erasingDelay);
      } else {
        setTyping(true);
        setTextArrayIndex(textArrayIndex >= textArray.length - 1 ? 0 : textArrayIndex + 1);
        setDelay(typingDelay + 1100);
        cursorSpanRef.current.classList.remove('typing');
        setTimeout(handleTyping, delay);
      }
    };

    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;

    if (textArray.length && typing) {
      setTimeout(handleTyping, delay + 250);
    }

    return () => clearTimeout();
  }, [charIndex, delay, textArray, textArrayIndex, typing]);

  return (
    <div className="container">
      <p>
        Coding is <span ref={typedTextSpanRef} className="typed-text"></span>
        <span ref={cursorSpanRef} className="cursor">&nbsp;</span>
      </p>
    </div>
  );
};

export default TypingEffect;
