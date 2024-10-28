import './aboutUs.css';

const AboutUs = () => {
    return (
        <div id="about_company" className="about">
            <div className='about-wrapper'>
                <div className='about-description'>
                    <div className='about-title-wrapper'>
                        <h1 className='about-title'>
                            О компании
                        </h1>
                    </div>
                    <div className='about-title-description-wrapper'>
                        <p className='about-title-description'>
                            Это Софт - это российская IT-компания. 
                            Мы осуществляем полный спектр работ
                            в области заказной разработки ПО
                            в таких отраслях, как ритеил, финансы,
                            промышленность и государственный сектор. 													
                        </p>
                    </div>
                </div>
            </div> 
        </div>
      );
}
 
export default AboutUs;