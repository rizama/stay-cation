import React from 'react';
import RevealFade from 'react-reveal/Fade';

export default function MainContent({ data, current }) {
    return (
        <RevealFade>
            {data[current] && data[current].content}
        </RevealFade>
    );
}
