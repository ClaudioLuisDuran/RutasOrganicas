import React, { useState, useEffect } from 'react';

const blockquoteStyles = {
    minHeight: '50px',
    height: 'auto',
    overflow: 'auto',
  };

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeoutId;

        const typeText = () => {
            if (currentIndex < text.length) {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }
        };

        if (currentIndex === 0) {
            timeoutId = setTimeout(typeText, delay);
        } else {
            timeoutId = setTimeout(typeText, 20);
        }

        return () => clearTimeout(timeoutId);
    }, [currentIndex, text, delay]);

    return (
        <blockquote className='blockType' style={blockquoteStyles}>
            <h4 className="textscript">
                {currentText}
            </h4>
        </blockquote>
    );
};

export default Typewriter;