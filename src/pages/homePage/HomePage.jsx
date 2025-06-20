import './HomePage.css'

import { AiFillHtml5 } from 'react-icons/ai'
import { SiCss3, SiJest, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { IoLogoJavascript, IoLogoPython, IoLogoAngular } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

export const HomePage = () => {

    return (
        <div className='home-page page'>
            <div className="top-content">
                <div className="contents">
                    <p className="head">Shobhit Raj <br /> <span className="info">SDE-I @ JIO Platforms Ltd.</span></p>
                </div>
                <div className="img-container">
                    <img src='https://raw.githubusercontent.com/shobhit-28/Portfolio/refs/heads/main/src/Resources/MyImages/Adalaj.jpg' alt="" title='Shobhit Raj' />
                </div>
            </div>
            <section id="skills" className="skills">
                <div className="gif-container" style={{ width: '18rem' }}>
                    <img src="https://github.com/shobhit-28/Portfolio/blob/main/src/Resources/gifs/1_partyanimsm2.gif?raw=true" alt="" />
                </div>
                <div className="skill-sec">
                    <p className='skill-heading'>My Skills</p>
                    <ul className="skills-list">
                        <li className="skill">
                            <span className="skill-head">Technical Skills<FaArrowRightLong className='arrow-right' /></span>
                            <span className="skill-icons">
                                <AiFillHtml5 title='HTML' />
                                <SiCss3 title='CSS' />
                                <IoLogoJavascript title='Javascript' />
                                <SiTypescript title='Typescript' />
                                <IoLogoPython title='Python' />
                            </span>
                        </li>
                        <li className="skill">
                            <span className="skill-head">Libraries/Frameworks<FaArrowRightLong className='arrow-right' /></span>
                            <span className="skill-icons">
                                <FaReact title='React' />
                                <SiJest title='Jest' />
                                <SiTailwindcss title='Tailwind' />
                                <SiRedux title='Redux' />
                                <IoLogoAngular title='Angular' />
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
