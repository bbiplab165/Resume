import React from 'react'
import Margine from "../assets/margine.png"
import Style from "./Education.module.css"

export default function Education() {
    return (
        <div className={Style.main}>
            <h1>Education</h1>
            <img src={Margine} />
            <div className={Style.container}>
                <div className={Style.eachRow}>
                    <div className={Style.leftItem}>
                        <h3>2018-2022</h3>
                        <h2>Bachelor's Degree</h2>
                    </div>
                    <div className={Style.rightItem}>
                        <h2>Bachelor of Computer Science</h2>
                        <h3>KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY (KIIT-DU)</h3>
                    </div>
                </div>
                <div className={Style.eachRow}>
                    <div className={Style.leftItem}>
                        <h3>2017-2018</h3>
                        <h2>High School</h2>
                    </div>
                    <div className={Style.rightItem}>
                        <h2>Science and Mathematics</h2>
                        <h3>KENDRIYA VIDYALAYA PANAGARH</h3>
                    </div>
                </div>
                <div className={Style.eachRowLast}>
                    <div className={Style.leftItem}>
                        <h3>2015-2016</h3>
                        <h2>School</h2>
                    </div>
                    <div className={Style.rightItem}>
                        <h2>School</h2>
                        <h3>KENDRIYA VIDYALAYA PANAGARH</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
