import './HomePage.css'

export const HomePage = () => {

    return (
        <div className='home-page page'>
            <div className="top-content">
                <div className="contents">
                    <p className="head">Hello, I am <br />Shobhit Raj.</p>
                </div>
                <div className="img-container">
                    <img src='src\Resources\MyImages\DSC_0989~2.JPG' alt="" title='Shobhit Raj' />
                </div>
            </div>
            <section id="skills" className="skills">
                <p>Skills</p>
            </section>
        </div>
    )
}
