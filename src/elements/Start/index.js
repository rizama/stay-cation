import React from 'react'
import propTypes from 'prop-types'

function Star({ className, value, height, width, spacing }) {

    const decimals = Number(value) % 1;

    const star = []
    let leftPos = 0
    for (let index = 0; index < 5 && index < value - decimals; index++) {
        leftPos = leftPos + width;
        star.push(
            <div
                className="star"
                key={`start-${index}`}
                style={{ left: index * width, width: width, marginRight: spacing }}
            ></div>
        )
    }

    if (decimals > 0 && value <= 5) {
        star.push(
            <div
                className="star"
                style={{ left: leftPos, width: width - spacing }}
            ></div>
        )
    }

    const starPlaceHolder = []
    for (let index = 0; index < 5; index++) {
        starPlaceHolder.push(
            <div
                className="star placeholder"
                key={`startPlaceholder-${index}`}
                style={{ left: index * width, width: width, marginRight: spacing }}
            ></div>
        )
    }

    return (
        <>
            <div
                className={['stars', className].join(" ")}
                style={{ height: height }}
            >
                {starPlaceHolder}
                {star}
            </div>
        </>
    )
}

Star.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    height: propTypes.number,
    width: propTypes.number,
    spacing: propTypes.number,
}

export default Star
