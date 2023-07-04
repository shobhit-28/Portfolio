/* eslint-disable react/jsx-no-target-blank */
import './footer.css'

import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="name-img">
            <div className="img-container">
                <img src="https://github.com/shobhit-28/Portfolio/blob/main/src/Resources/MyImages/DSC_0869~3.JPG?raw=true" alt="" />
            </div>
            <p className="name">Shobhit Raj</p>
        </div>
        <div className="socials">
            <a className="linkedin" href='https://www.linkedin.com/in/shobhit-raj-19a588215/' target='_blank'><AiFillLinkedin /></a>
            <a className="github" href='https://github.com/shobhit-28/' target='_blank'><AiFillGithub /></a>
            <a className="twitter" href='https://twitter.com/Shobhit28573001' target='_blank'><AiOutlineTwitter /></a>
        </div>
        <p className="note">© No Copyright, feel free to copy</p>
    </div>
  )
}
