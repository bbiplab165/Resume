import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from "../assets/img1.png"
import Marker from "../assets/marker.png"
import Border from "../assets/border.png"
import Resume from '../assets/NewResume.pdf'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DriveFileIcon from '@mui/icons-material/InsertDriveFile';

import Style from "./Intro.module.css"

export default function About() {

    const handleDownload = () => {
        window.open(Resume, '_blank');
    };

    return (
        <div className={Style.main}>
            <div className={Style.container}>
                <img src={Img1} />
                <div className={Style.rightSection}>
                    <h3 className={Style.rightTop}>HELLO!</h3>
                    <div className={Style.name}>
                        <h2>I'm Biplab Biswas</h2>
                        <img src={Marker} />
                    </div>

                    <h3>Software Engineer & Web Developer</h3>
                    <div className={Style.links}>
                        <a href='https://github.com/bbiplab165' target='_blank' rel='noopener noreferrer'>
                            <GitHubIcon />
                        </a>
                        <a href='https://www.linkedin.com/in/biplab-biswas-7246571ba/' target='_blank' rel='noopener noreferrer'>
                            <LinkedInIcon />
                        </a>
                        <a href='https://www.instagram.com/biswasbiplabbiswas/' target='_blank' rel='noopener noreferrer'>
                            <InstagramIcon />
                        </a>
                        <a href='https://drive.google.com/file/d/1wqO0_2j-0VGMqZ3P7Vy-4TQKuMnG9AGV/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                            <DriveFileIcon />
                        </a>
                    </div>
                    {/* <button>Download Resume</button> */}
                    <button onClick={handleDownload}>Download Resume</button>
                </div >
            </div>
            <img src={Border} />
        </div>
    )
}
