import Style from './Project.module.css'
import Underline from '../assets/margine.png';

export default function Project() {
    function handleChatApp() {

    }
    return (
        <div className={Style.main}>
            <h1>Projects</h1>
            <img src={Underline} />
            <div className={Style.container}>
                <div className={Style.eachRow}>
                    <div className={Style.left}>
                        <h3>01/2021-09/2021</h3>
                    </div>
                    <div className={Style.right}>
                        <a href='https://github.com/bbiplab165/Police-Station-Management-System' target='_blank' rel='noopener noreferrer'>
                            <h2>POLICE STATION MANAGEMENT SYSTEM</h2>
                            <h4>Police Station Management System is based on the concept of
                                managing criminal records .It stores the detail of the criminals.</h4>
                            <h4>Technologies Used :- C++
                            </h4>
                        </a>
                    </div>
                </div>
                <div className={Style.eachRow}>
                    <div className={Style.left}>
                        <h3>01/2023-04/2023</h3>
                    </div>
                    <div className={Style.right}>
                        <a href='https://github.com/bbiplab165/Gym_Website-FrontEnd-/tree/project_1st' target='_blank' rel='noopener noreferrer'>
                            <h2>Gym Website</h2>
                            <h4>This gym frontend project built using React offers an intuitive and
                                responsive user interface for accessing gym-related features such as
                                Login Gegistration and subscription plans
                            </h4>
                            <h4>Technologies Used :- React,CSS</h4>
                        </a>
                    </div>
                </div>

                <div className={Style.eachRow} onClick={handleChatApp}>
                    <div className={Style.left}>
                        <h3>06/2023-08/2023</h3>
                    </div>
                    <div className={Style.right}>
                        <a href='https://github.com/bbiplab165/CHAT-APPLICATION' target='_blank' rel='noopener noreferrer'>
                            <h2>CHAT APPLICATION</h2>
                            <h4>Developed a feature-rich chat application that enables users to create and join groups for real-time communication with friends and colleagues. The application supports group chats and includes features like message notifications and user authentication.</h4>
                            <h4>Technologies Used :-Node.js, React.js, Sequelize(SQL-based), JavaScript.</h4>
                        </a>
                    </div>
                </div>
                <div className={Style.eachRow}>
                    <div className={Style.left}>
                        <h3>08/2023-09/2023</h3>
                    </div>
                    <div className={Style.right}>
                        <a href='https://github.comS/bbiplab165/hoping-App' target='_blank' rel='noopener noreferrer'>
                            <h2>Shoping App</h2>
                            <h4>Developed a fully functional e-commerce website using React.js and MongoDB as the backend database. The project provides an intuitive and seamless shopping experience for users, featuring a wide range of products, user authentication.</h4>
                            <h4>Technologies Used :-Node.js, React.js, MongoDB, JavaScript.</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}