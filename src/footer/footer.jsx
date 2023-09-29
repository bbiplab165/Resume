import { Link } from 'react-router-dom';
import Style from "./footer.module.css"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function footer() {
    return (
        <div className={Style.main}>
            <div className={Style.container}>
                <div className={Style.icon}>
                    <GitHubIcon />
                    <a href="https://github.com/bbiplab165" target="_blank">Github</a>
                </div>
                <div className={Style.icon}>
                    <LinkedInIcon />
                    <a href="https://www.linkedin.com/in/biplab-biswas-7246571ba/" target="_blank">LinkedIn</a>
                </div>
                <div className={Style.icon}>
                    <PhoneAndroidIcon />
                    <a >8116730633</a>
                </div>
            </div>
        </div>
    )
}