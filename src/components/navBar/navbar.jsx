import './navbar.css'

export const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="left-section">
            <div className="header-img-container">
                <img src= "src\Resources\MyImages\DSC_0869~3.JPG" alt="" />
            </div>
            <p className="header">
                Shobhit Raj
            </p>
            </div>
            <div className="right-section">
                <ul className="nav-links">
                    <li className="nav-link">Projects</li>
                    <li className="nav-link">Resume</li>
                </ul>
            </div>
        </div>
    )
}