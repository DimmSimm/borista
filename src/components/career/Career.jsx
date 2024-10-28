import './career.css';

const Career = () => {
    return (
        <div id='career' className='career'>
            <div className='career-background'>
                <div className='career-wrapper'>
                    <div className='career-title-block'>
                        <h3 className='career-title'>
                            Карьера
                        </h3>
                    </div>
                    <div className='career-description-wrapper'>
                        <p className='career-description'>       
                            Основа нашей компании - это коллектив.
                            В связи появлением новых проектов,
                            мы постоянно ищем талантливых сотрудников.
                            Успешно сотрудничаем с ВУЗами уральского
                            региона. После прохождения стажировки,
                            студенты принимаются на работу.
                            Каждый в компании имеет возможность к
                            карьерному и профессиональному росту,
                            получению опыта в интересных и сложных проектах.
                        </p>
                    </div>
                 </div>
            </div>
        </div>
    );
}
 
export default Career;