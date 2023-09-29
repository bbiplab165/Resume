import Style from "./skill.module.css"
import LinearProgress from '@mui/joy/LinearProgress';
import Underline from '../assets/margine.png';

export default function skill() {
    return (
        <div className={Style.main}>
            <h1>Skills</h1>
            <img src={Underline}/>
            <div className={Style.container}>
                <div className={Style.LeftContainer}>
                    <div className={Style.skill}>
                        <h4>C++</h4>
                        <p>75%</p>
                    </div>
                    <LinearProgress value={75} className={Style.linearProgress} color="danger" determinate size="md" />
                    <div className={Style.skill}>
                        <h4>JavaScript</h4>
                        <p>70%</p>
                    </div>
                    <LinearProgress value={70} className={Style.linearProgress} color="danger" determinate size="md" />
                    <div className={Style.skill}>
                        <h4>Nodejs</h4>
                        <p>70%</p>
                    </div>
                    <LinearProgress value={70} className={Style.linearProgress} color="danger" determinate size="md" />
                    <div className={Style.skill}>
                        <h4>React</h4>
                        <p>70%</p>
                    </div>
                    <LinearProgress value={70} className={Style.linearProgress} color="danger" determinate size="md" />
                </div>


                <div className={Style.RightContainer}>
                    <div className={Style.skill}>
                        <h4>HTML</h4>
                        <p>70%</p>
                    </div>
                    <LinearProgress value={70} className={Style.linearProgress} color="danger" determinate size="md" />
                    <div className={Style.skill}>
                        <h4>Mongo-DB</h4>
                        <p>70%</p>
                    </div>
                    <LinearProgress value={65} className={Style.linearProgress} color="danger" determinate size="md" />
                    <div className={Style.skill}>
                        <h4>Sequelize (SQL-based)</h4>
                        <p>70%</p>
                    </div>
                    <LinearProgress value={60} className={Style.linearProgress} color="danger" determinate size="md" />
                    <div className={Style.skill}>
                        <h4>CSS</h4>
                        <p>60%</p>
                    </div>
                    <LinearProgress value={60} className={Style.linearProgress} color="danger" determinate size="md" />

                </div>
            </div>
        </div>
    )
}