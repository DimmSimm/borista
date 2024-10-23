import './aboutUs.css';

const AboutUs = () => {
    return (
        <div className="about">
            <div className='container'>
                <div className='about-description'>
                    <div className='about-title-container'>
                        <h3 className='about-title'>
                            О компании
                        </h3>
                    </div>
                    <div className='about-title-description-container'>
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