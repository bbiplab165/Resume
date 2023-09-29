import React from 'react'
import ProfileImg from "../assets/Final-image.jpeg"

import Style from "./About.module.css"

export default function About() {
    const data = [
        { key: 'Age', value: '23' },
        { key: 'Email', value: 'bbiplab165@gmail.com' },
        { key: 'Phone', value: '8116730633' },
        { key: 'Address', value: 'Burdwan, West Bengal, India' },
        { key: 'Github', value: 'https://github.com/bbiplab165' },
        { key: 'LinkedIn', value: 'https://www.linkedin.com/in/biplab-biswas-7246571ba/' },
    ];
    return (
        <div className={Style.main}>
            <div className={Style.Container}>
                <div className={Style.leftSec}>
                    <h1>Hello!  I'm Biplab Biswas</h1>
                    <p>Motivated and enthusiastic recent graduate from Kalinga Institute of Industrial Technology University (KIIT-DU), equipped with a strong technical foundation. Eager to apply my knowledge and skills in a beginner role to further enhance and explore the world of technology. Committed to continuous learning and driven to contribute to the success of an organization.</p>
                    <div className={Style.map}>
                        {data.map((item) => (
                            <div key={item.key} className={Style.desc}>
                                <p>{item.key} :</p>
                                {item.key === 'Github' || item.key === 'LinkedIn' ? (
                                    <h5>
                                        <a href={item.value} target="_blank" rel="noopener noreferrer">
                                            {item.value}
                                        </a>
                                    </h5>
                                ) : (
                                    <h5>{item.value}</h5>
                                )}
                                {/* <h5>{item.value}</h5> */}
                            </div>
                        ))}
                    </div>
                </div>
                <img src={ProfileImg} />
            </div>

        </div>
    )
}
