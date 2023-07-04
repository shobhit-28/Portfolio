import { useEffect, useRef, useState } from 'react'
import './navbar.css'

import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuRef = useRef(null)
    const navbarRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!menuRef?.current?.contains(e?.target)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", handleOutsideClick, true)
        document.addEventListener("scroll", () => setIsMenuOpen(false))
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
            document.removeEventListener("scroll", () => setIsMenuOpen(false))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="nav-bar" ref={navbarRef}>
            <div className="left-section">
                <div className="header-img-container">
                    <img src="src\Resources\MyImages\DSC_0869~3.JPG" alt="" />
                </div>
                <p className="header">
                    Shobhit Raj
                </p>
            </div>
            <div className="right-section">
                <ul className="nav-links lg-links">
                    <li className="nav-link">Projects</li>
                    <li className="nav-link">
                        <a href="https://drive.google.com/file/d/14JcAMfKdZXS2mUFGXIHAV0lfElCkmPvp/view?usp=sharing" className="link" target='_blank' rel="noreferrer">
                            Resume
                        </a>
                    </li>
                </ul>
                <div className="menu-container">
                    {isMenuOpen
                        ?
                        <button className="icon" onClick={() => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)}>
                            <AiOutlineClose />
                        </button>
                        :
                        <button className="icon" onClick={() => setIsMenuOpen(true)}>
                            <RxHamburgerMenu />
                        </button>
                    }
                    {isMenuOpen &&
                        <div className="menu" ref={menuRef}>
                            <ul className="nav-links">
                                <li className="nav-link">Projects</li>
                                <li className="nav-link">
                                    <a href="https://drive.google.com/file/d/14JcAMfKdZXS2mUFGXIHAV0lfElCkmPvp/view?usp=sharing" className="link" target='_blank' rel="noreferrer">
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}